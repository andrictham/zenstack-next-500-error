import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // clean up
  await prisma.space.deleteMany();

  const joey = await prisma.user.upsert({
    where: {
      id: "user_MOCK_Joey",
    },
    create: {
      id: "user_MOCK_Joey",
    },
    update: {},
  });
  console.log("User created:", joey);

  const rachel = await prisma.user.upsert({
    where: {
      id: "user_MOCK_Rachel",
    },
    create: {
      id: "user_MOCK_Rachel",
    },
    update: {},
  });
  console.log("User created:", rachel);

  const centralPerk = await prisma.space.create({
    data: {
      name: "Central Perk",
      slug: "central-perk",
      fromOwner: { connect: { id: rachel.id } },
      withMembers: {
        create: [
          {
            user: { connect: { id: joey.id } },
            role: "USER",
          },
          {
            user: { connect: { id: rachel.id } },
            role: "ADMIN",
          },
        ],
      },
    },
  });
  console.log("Space created:", centralPerk);

  const rachelPersonal = await prisma.space.create({
    data: {
      name: "Rachel's Personal Space",
      slug: "rachel",
      fromOwner: { connect: { id: rachel.id } },
      withMembers: {
        create: [
          {
            user: { connect: { id: rachel.id } },
            role: "ADMIN",
          },
        ],
      },
    },
  });
  console.log("Space created:", rachelPersonal);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
