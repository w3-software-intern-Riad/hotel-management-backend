-- CreateTable
CREATE TABLE "hotels" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "bedroomCount" INTEGER NOT NULL,
    "bathroomCount" INTEGER NOT NULL,
    "amenitiesCount" INTEGER NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "host" JSONB NOT NULL,

    CONSTRAINT "hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "hotelId" INTEGER NOT NULL,
    "roomImage" TEXT NOT NULL,
    "roomTitle" TEXT NOT NULL,
    "bedroomCount" INTEGER NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
