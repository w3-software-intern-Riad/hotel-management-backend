const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const connection=async()=>{
    try {
        // Explicitly connect to the database
        await prisma.$connect();
        console.log('Database connection successful!');
      } catch (error) {
        console.error('Error connecting to the database:', error);
      } finally {
        // Disconnect from the database
        await prisma.$disconnect();
      }
}

module.exports=connection;