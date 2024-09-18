import { headers } from "next/headers";
import { prisma } from "@/server/db";
import { type EmailAddressJSON } from "@clerk/backend";
import {
  type DeletedObjectJSON,
  type SessionWebhookEvent,
  type UserJSON,
  type UserWebhookEvent,
  type WebhookEvent,
} from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { Webhook } from "svix";

export const PRISMA_ERR_CODE_P2002 = "P2002"; // Prisma error code for unique constraint violation

export async function retryableUpsert<T>(
  upsertFunction: () => Promise<T>,
  retries: number = 3, // Default to 3 retries
): Promise<T> {
  let attempts = 0;
  while (attempts <= retries) {
    try {
      console.log(`[Attempt ${attempts + 1}]...`);
      const result = await upsertFunction();
      return result; // Return upsert return value after a successful operation
    } catch (e) {
      if (
        attempts < retries &&
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === PRISMA_ERR_CODE_P2002
      ) {
        console.log(
          `[Attempt ${attempts + 1}] failed. [Remaining retries: ${retries - attempts}][Code: ${e.code}] There is a unique constraint violation, retrying upsert...`,
        );
        attempts++;
      } else {
        console.log(
          "Error is not a P2002, is unknown error, or retries are exhausted.",
        );
        throw e; // Rethrow the error if it's not a P2002, not a known request error, or retries are exhausted
      }
    }
  }
  // This throw will never be reached, but it satisfies TypeScript's need for all code paths to return or throw.
  throw new Error("All retries exhausted");
}

// Extract primary email address from list of email addresses, fallback to empty string if value is falsy
export const getPrimaryEmailAddress = (
  id: UserJSON["primary_email_address_id"],
  emailAddresses: EmailAddressJSON[],
) => {
  const primaryEmailAddress = emailAddresses?.find(
    (emailAddress) => emailAddress.id === id,
  )?.email_address;

  return primaryEmailAddress || "";
};

// Type Guard to check if the data is UserJSON
function isUserJSON(data: UserJSON | DeletedObjectJSON): data is UserJSON {
  return !("deleted" in data);
}

export const handleWebhookEvent = async (
  event: WebhookEvent,
  body: string,
  eventID: string,
) => {
  // User events
  if (
    event.type === "user.created" ||
    event.type === "user.updated" ||
    event.type === "user.deleted"
  ) {
    const eventJSON = JSON.parse(body) as UserWebhookEvent;

    // Delete user in our database
    if (event.type === "user.deleted") {
      const deletedObject = eventJSON.data;

      if (!isUserJSON(deletedObject)) {
        if (deletedObject.deleted && deletedObject.id !== undefined) {
          const deletedUserID = deletedObject.id;

          // Delete user in our database
          console.log(`🟡 DB: Updating User[${deletedUserID}]...`);
          await prisma.user.update({
            where: {
              id: deletedUserID,
            },
            data: {
              isDeleted: true,
              deletedAt: new Date(),
            },
          });
          console.log(`🟢 DB: User[${deletedUserID}] updated as deleted!`);
        }
      }
    }

    // Create/update user and log event in our database
    if (event.type === "user.created" || event.type === "user.updated") {
      const userJSON = eventJSON.data;

      if (isUserJSON(userJSON)) {
        const primaryEmailAddress = getPrimaryEmailAddress(
          userJSON.primary_email_address_id,
          userJSON.email_addresses,
        );

        // Create user in our database if none exists
        console.log(`🟡 DB: Upserting User[${userJSON.id}]...`);
        await retryableUpsert(async () => {
          await prisma.user.upsert({
            where: { id: userJSON.id },
            // NOTE! update cannot be empty, otherwise a Prisma upsert bug causes Prisma (non-native) upsert to be used instead of native database upsert, resulting in no protection against race conditions. See https://github.com/prisma/prisma/issues/3242#issuecomment-1658199740
            update: { id: userJSON.id },
            create: { id: userJSON.id },
          });
        });
        console.log(`🟢 DB: Updated User[${userJSON.id}]!`);

        // Log deduplicated event with useful user data to our database
        console.log(`🟡 DB: Upserting [${event.type}] into ClerkUserEvents...`);
        await retryableUpsert(async () => {
          await prisma.clerkUserEvents.upsert({
            where: { eventID: eventID },
            update: {
              eventID: eventID,
              userUpdatedAt: userJSON.updated_at,
              userCreatedAt: userJSON.created_at,
              primaryEmail: primaryEmailAddress,
              firstName: userJSON.first_name ?? undefined,
              lastName: userJSON.last_name ?? undefined,
              imageURL: userJSON.image_url,
              banned: userJSON.banned ?? false, // Clerk’s test webhook doesn’t include this field, indicating that this field might sometimes be undefined, so we should default to false
            },
            create: {
              eventID: eventID,
              fromUser: {
                connect: {
                  id: userJSON.id,
                },
              },
              userUpdatedAt: userJSON.updated_at,
              userCreatedAt: userJSON.created_at,
              primaryEmail: primaryEmailAddress,
              firstName: userJSON.first_name ?? "",
              lastName: userJSON.last_name ?? "",
              imageURL: userJSON.image_url,
              banned: userJSON.banned ?? false, // Clerk’s test webhook doesn’t include this field, indicating that this field might sometimes be undefined, so we should default to false
            },
          });
        });
        console.log(`🟢 DB: [${event.type}] logged in ClerkUserEvents`);
      }
    }
  }

  // Session events
  if (
    event.type === "session.created" ||
    event.type === "session.ended" ||
    event.type === "session.removed" ||
    event.type === "session.revoked"
  ) {
    const eventJSON = JSON.parse(body) as SessionWebhookEvent;
    const sessionJSON = eventJSON.data;

    // Create user in our database if none exists
    console.log(`🟡 DB: Upserting User[${sessionJSON.user_id}]...`);
    await retryableUpsert(async () => {
      await prisma.user.upsert({
        where: { id: sessionJSON.user_id },
        // NOTE! update cannot be empty, otherwise a Prisma upsert bug causes Prisma (non-native) upsert to be used instead of native database upsert, resulting in no protection against race conditions. See https://github.com/prisma/prisma/issues/3242#issuecomment-1658199740
        update: { id: sessionJSON.user_id },
        create: { id: sessionJSON.user_id },
      });
    });

    // Log deduplicated event with useful session data to our database
    console.log(`🟡 DB: Upserting [${event.type}] into ClerkSessionEvents...`);
    await retryableUpsert(async () => {
      await prisma.clerkSessionEvents.upsert({
        where: { eventID: eventID },
        update: { eventID: eventID },
        create: {
          eventID: eventID,
          fromUser: {
            connect: {
              id: sessionJSON.user_id,
            },
          },
          sessionID: sessionJSON.id,
          clientID: sessionJSON.client_id,
          sessionStatus: sessionJSON.status,
          sessionCreatedAt: sessionJSON.created_at,
          sessionLastActiveAt: sessionJSON.last_active_at,
          sessionUpdatedAt: sessionJSON.updated_at,
          sessionAbandonAt: sessionJSON.abandon_at,
          sessionExpireAt: sessionJSON.expire_at,
        },
      });
    });
    console.log(`🟢 DB: [${event.type}] logged in ClerkSessionEvents!`);
  }
};

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env");
  }

  // Get the headers
  const headerPayload = headers();

  // svix_id: Event/msg ID (may not be unique if replayed)
  const svix_id = headerPayload.get("svix-id");

  // svix_timestamp: Time in seconds since Epoch (Unix time)
  const svix_timestamp = headerPayload.get("svix-timestamp");

  // svix_signature: Base64 encoded list of signatures (space delimited). Each signature is composed by concatenating the id, timestamp and raw body payload, separated by full-stop character (.) like this: "${svix_id}.${svix_timestamp}.${body}"
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload: unknown = await req.json();
  const body = JSON.stringify(payload);

  console.log(
    "Clerk user webhook called, event body: ",
    JSON.stringify(body, null, 2),
  );

  // Create a new Svix instance with our secret
  const webhook = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  // Verify the payload with the headers
  try {
    event = webhook.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature, // id + timestamp + body
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  console.log(`Webhook verified. ID: ${event.data.id}. Type: ${event.type}`);
  console.log("Webhook body:", body);

  // Respond to events
  await handleWebhookEvent(event, body, svix_id);

  return new Response("Webhook received and processed", { status: 200 });
}
