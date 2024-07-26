const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const slugify = require('slugify');


async function generateUniqueSlug(title) {
    let slug = slugify(title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
    });

    let uniqueSlug = slug;
    let counter = 1;

    // Check if the slug already exists in the database
    while (await prisma.hotel.findUnique({ where: { hotel_slug: uniqueSlug } })) {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
    }

    return uniqueSlug;
}


const insertData = async (req, res) => {
    const hotelData = req.body;
    const uniqueSlug = await generateUniqueSlug(hotelData.title);
    try {
        // Insert a hotel
        const hotel = await prisma.hotel.create({
            data: {
                hotel_slug: uniqueSlug,
                images: hotelData.images,
                title: hotelData.title,
                description: hotelData.description,
                guestCount: hotelData.guestCount,
                bedroomCount: hotelData.bedroomCount,
                bathroomCount: hotelData.bathroomCount,
                amenitiesCount: hotelData.amenitiesCount,
                longitude: hotelData.longitude,
                latitude: hotelData.latitude,
                host: hotelData.host,
                address: hotelData.address
            },

        });

        return res.status(200).json({ message: "Hotel data is created successfully", data: hotel });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: "Data creation is failed" });
    }
    finally {
        await prisma.$disconnect();
    }
}

module.exports = insertData;