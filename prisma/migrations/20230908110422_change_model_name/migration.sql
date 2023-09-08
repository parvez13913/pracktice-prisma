/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prodile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "post";

-- DropTable
DROP TABLE "prodile";

-- CreateTable
CREATE TABLE "Prodile" (
    "id" SERIAL NOT NULL,
    "bio" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Prodile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
