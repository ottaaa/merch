/*
  Warnings:

  - The values [SELL,GIVE,STOCK_UP] on the enum `StockType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `password_digest` on the `Authentication` table. All the data in the column will be lost.
  - You are about to drop the column `merch_id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `shop_id` on the `Merch` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `Merch` table. All the data in the column will be lost.
  - You are about to drop the column `shop_id` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `sold_at` on the `Sale` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `SaleDetail` table. All the data in the column will be lost.
  - You are about to drop the column `shop_id` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Stock` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,shopId]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `passwordDigest` to the `Authentication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Authentication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Merch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesTaxRateId` to the `Merch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopId` to the `Merch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Merch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopId` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `SaleDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `SaleDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salesTaxRateId` to the `SaleDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soldPrice` to the `SaleDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SaleDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopId` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SalesTaxCategory" AS ENUM ('REGULAR', 'REDUCED', 'FREE');

-- AlterEnum
BEGIN;
CREATE TYPE "StockType_new" AS ENUM ('SOLD', 'GAVE', 'STOCKED_UP', 'LOST');
ALTER TABLE "Stock" ALTER COLUMN "type" TYPE "StockType_new" USING ("type"::text::"StockType_new");
ALTER TYPE "StockType" RENAME TO "StockType_old";
ALTER TYPE "StockType_new" RENAME TO "StockType";
DROP TYPE "StockType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_merch_id_fkey";

-- DropForeignKey
ALTER TABLE "Merch" DROP CONSTRAINT "Merch_shop_id_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_shop_id_fkey";

-- DropForeignKey
ALTER TABLE "SaleDetail" DROP CONSTRAINT "SaleDetail_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Seller" DROP CONSTRAINT "Seller_shop_id_fkey";

-- DropForeignKey
ALTER TABLE "Seller" DROP CONSTRAINT "Seller_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_category_id_fkey";

-- DropIndex
DROP INDEX "Seller_user_id_shop_id_key";

-- DropIndex
DROP INDEX "User_code_key";

-- AlterTable
ALTER TABLE "Authentication" DROP COLUMN "password_digest",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "passwordDigest" CHAR(64) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "merch_id",
DROP COLUMN "price",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "merchId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Merch" DROP COLUMN "shop_id",
DROP COLUMN "uuid",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isPinning" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "salesTaxRateId" INTEGER NOT NULL,
ADD COLUMN     "shopId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "deletedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "shop_id",
DROP COLUMN "sold_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "shopId" INTEGER NOT NULL,
ADD COLUMN     "soldAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SaleDetail" DROP COLUMN "category_id",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "salesTaxRateId" INTEGER NOT NULL,
ADD COLUMN     "soldPrice" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "shop_id",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "shopId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shop" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "category_id",
DROP COLUMN "created_at",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "code",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "SalesTaxRate" (
    "id" SERIAL NOT NULL,
    "salesTaxCategory" "SalesTaxCategory" NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesTaxRate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seller_userId_shopId_key" ON "Seller"("userId", "shopId");

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Merch" ADD CONSTRAINT "Merch_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Merch" ADD CONSTRAINT "Merch_salesTaxRateId_fkey" FOREIGN KEY ("salesTaxRateId") REFERENCES "SalesTaxRate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_merchId_fkey" FOREIGN KEY ("merchId") REFERENCES "Merch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleDetail" ADD CONSTRAINT "SaleDetail_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleDetail" ADD CONSTRAINT "SaleDetail_salesTaxRateId_fkey" FOREIGN KEY ("salesTaxRateId") REFERENCES "SalesTaxRate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
