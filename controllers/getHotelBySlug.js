

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getHotelByName = async (req, res) => {
  const { hotel_slug } = req.params; // Get the hotel name from the route parameter
  try {
    const ishotel = await prisma.hotel.findUnique({
      where: {
        hotel_slug: hotel_slug
      }
    }
    );

    if (!ishotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    else {
     
      try {
        const roomData = await prisma.room.findMany({
          where: {
            hotel_slug: hotel_slug
          }
        })
        return res.status(200).json({roomData:roomData,hotelData:ishotel});

      } catch (error) {
        console.log(error);
        return res.status(403).json("No room found")
      }
      finally {
        await prisma.$disconnect();
      }
    }

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotel information' });
  }
};

module.exports = getHotelByName;