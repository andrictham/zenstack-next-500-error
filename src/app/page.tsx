"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { useCreateSpace, useFindManySpace } from "@/lib/hooks";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button, Loader, Stack } from "@mantine/core";
import { nanoid } from "nanoid";

const Home: NextPage = () => {
  const { user, isSignedIn, isLoaded: isClerkLoaded } = useUser();

  const { mutate: createSpace } = useCreateSpace();
  const { data: spaces, isLoading: isSpacesLoading } = useFindManySpace({
    include: {
      fromOwner: true,
      withMembers: true,
    },
    orderBy: { createdAt: "desc" },
  });

  function onSpaceCreate() {
    const name = prompt("Enter a name for your space");
    if (!name) return;

    const userID = user?.id;

    if (name) {
      createSpace({
        data: {
          name,
          slug: nanoid(6),
          // Add the creating user as an admin member
          withMembers: {
            create: {
              user: { connect: { id: userID } },
              role: "ADMIN",
            },
          },
        },
      });
    }
  }

  if (!isClerkLoaded || isSpacesLoading) {
    return (
      <Stack align="center" mt="xl">
        <Loader size="lg" />
        <span>Loading...</span>
      </Stack>
    );
  }

  if (!isSignedIn) {
    return (
      <Stack align="center">
        <h1>You must be logged in to view this page.</h1>
        <SignInButton />
      </Stack>
    );
  }

  return (
    <>
      <Stack p="xl">
        <h1>
          Welcome {user.fullName} {user.id}
        </h1>
        <Stack gap="xs">
          <h2>
            Choose a space to start, or{" "}
            <Button ml="sm" onClick={onSpaceCreate}>
              create a new one
            </Button>
          </h2>
          <ul>
            {spaces?.map((space) => (
              <li key={space.id}>
                <Link
                  href={`/spaces/${space.slug}`}
                  key={space.id}
                  prefetch={true}
                >
                  <h4>{space.name}</h4> by {space.fromOwner.id} with members:{" "}
                  {space.withMembers.map((m) => m.userId).join(", ")}
                </Link>
              </li>
            ))}
          </ul>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
