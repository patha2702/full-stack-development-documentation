import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createPost() {
  await prisma.post.create({
    data: {
      title: "Why go to gym",
      content: "Don't go your wish",
      author: {
        connect:{
            id: 1
        }
      },
    },
  });
}

createPost().then(async ()=> {
    console.log("Post created")
   await prisma.$disconnect()
}).catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
}) 