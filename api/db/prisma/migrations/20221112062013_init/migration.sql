/*
  Warnings:

  - Changed the type of `size` on the `ItemDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `color` on the `ItemDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ItemDetail" DROP COLUMN "size",
ADD COLUMN     "size" INTEGER NOT NULL,
DROP COLUMN "color",
ADD COLUMN     "color" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Color";

-- DropEnum
DROP TYPE "Size";

-- CreateTable
CREATE TABLE "Size" (
    "id" SERIAL NOT NULL,
    "size" VARCHAR(255) NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Color" (
    "id" SERIAL NOT NULL,
    "color" VARCHAR(255) NOT NULL,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);
