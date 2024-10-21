/*
  Warnings:

  - You are about to drop the column `brand_id` on the `vehicles` table. All the data in the column will be lost.
  - You are about to drop the column `vin` on the `vehicles` table. All the data in the column will be lost.
  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoices` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[plate_number]` on the table `vehicles` will be added. If there are existing duplicate values, this will fail.
  - Made the column `vehicle_id` on table `drivers` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `plate_number` to the `vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReceiptStatus" AS ENUM ('OPEN', 'CANCELLED', 'PAID');

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_trip_id_fkey";

-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "vehicles" DROP CONSTRAINT "vehicles_driver_id_fkey";

-- DropIndex
DROP INDEX "drivers_vehicle_id_key";

-- DropIndex
DROP INDEX "vehicles_vin_key";

-- AlterTable
ALTER TABLE "drivers" ALTER COLUMN "vehicle_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "brand_id",
DROP COLUMN "vin",
ADD COLUMN     "model" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "plate_number" TEXT NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- DropTable
DROP TABLE "brands";

-- DropTable
DROP TABLE "invoices";

-- DropEnum
DROP TYPE "InvoiceStatus";

-- CreateTable
CREATE TABLE "receipt" (
    "id" SERIAL NOT NULL,
    "trip_id" INTEGER NOT NULL,
    "taxes" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "receipt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "receipt_trip_id_key" ON "receipt"("trip_id");

-- CreateIndex
CREATE UNIQUE INDEX "vehicles_plate_number_key" ON "vehicles"("plate_number");

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receipt" ADD CONSTRAINT "receipt_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
