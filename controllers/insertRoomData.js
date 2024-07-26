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
  while (await prisma.room.findUnique({ where: { room_slug: uniqueSlug } })) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

const insertRoomData = async (req, res) => {
  const { hotel_slug } = req.params; // Extract the hotel slug from the route parameter
  const { roomImage, roomTitle, bedroomCount } = req.body; // Extract room data from the request body
  const uniqueSlug = await generateUniqueSlug(roomTitle);

  try {
    // Insert a new room record with the provided data and associate it with the specified hotel ID
    const newRoom = await prisma.room.create({
      data: {
        hotel_slug: hotel_slug, // Ensure the ID is an integer
        room_slug: uniqueSlug,
        roomImage,
        roomTitle,
        bedroomCount,
      },
    });

    return res.status(201).json(newRoom); // Respond with the created room and HTTP 201 Created
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create room' }); // Respond with an error message and HTTP 500 Internal Server Error
  }
  finally {
    await prisma.$disconnect();
  }
};
module.exports = insertRoomData;
