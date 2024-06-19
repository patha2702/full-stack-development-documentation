import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany({});
  const oneUser = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });
  console.log(users);
  console.log(oneUser)
}

getUsers()
  .then(async () => {
    console.log("Successful retrieval");
    prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    prisma.$disconnect();
  });
