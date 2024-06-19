import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updatePost() {
  await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      title: "Don't go to GYM",
    },
  });
}

updatePost().then(async ()=> {
    console.log("Successfully updated the post")
    prisma.$disconnect()
}).catch(err => {
    console.error(err)
    prisma.$disconnect()
})
