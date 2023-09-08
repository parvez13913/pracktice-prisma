import { PrismaClient } from "@prisma/client";

const pisma = new PrismaClient();

async function main() {
  const getAllUsers = await pisma.user.findMany();
  console.log(getAllUsers);
  //   const postUser = await pisma.user.create({
  //     data: {
  //       name: "Abir Hassan",
  //       email: "abir14016@gmail.com",
  //       age: 27,
  //     },
  //   });
  //   console.log(postUser);
}

main();
