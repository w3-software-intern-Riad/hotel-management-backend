/*
  Warnings:

  - The primary key for the `hotels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `hotels` table. All the data in the column will be lost.
  - The primary key for the `rooms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hotelId` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `rooms` table. All the data in the column will be lost.
  - Added the required column `hotel_slug` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotel_slug` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room_slug` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_hotelId_fkey";

-- AlterTable
ALTER TABLE "hotels" DROP CONSTRAINT "hotels_pkey",
DROP COLUMN "id",
ADD COLUMN     "hotel_slug" TEXT NOT NULL,
ADD CONSTRAINT "hotels_pkey" PRIMARY KEY ("hotel_slug");

-- AlterTable
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_pkey",
DROP COLUMN "hotelId",
DROP COLUMN "id",
ADD COLUMN     "hotel_slug" TEXT NOT NULL,
ADD COLUMN     "room_slug" TEXT NOT NULL,
ADD CONSTRAINT "rooms_pkey" PRIMARY KEY ("room_slug");

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotel_slug_fkey" FOREIGN KEY ("hotel_slug") REFERENCES "hotels"("hotel_slug") ON DELETE RESTRICT ON UPDATE CASCADE;
