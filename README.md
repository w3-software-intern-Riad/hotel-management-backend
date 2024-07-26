# Hotel Management Backend

A Node.js and Express.js backend for managing hotel and room data, using PostgreSQL as the database and Prisma ORM for database operations.

## Features

- Create hotel data
- Create room data
- Retrieve hotel and room data
- PostgreSQL database integration
- Prisma ORM for database operations
- RESTful API endpoints

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Additional packages: nodemon, cors, dotenv, pg, slugify

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- PostgreSQL (v12.0 or later)

### Installation

1. Clone the repository:

- ``` https://github.com/yourusername/hotel-management-backend.git```

2. Navigate to the project directory:

3. Install dependencies:
- ```npm install```
4. Set up your environment variables by creating a `.env` file in the root directory
5. Run Prisma migrations:
- ```npx prisma migrate dev```
6. Start the development server:
- ```npm start ```
## API Endpoints

- ```POST``` `/createHotel` - Create a new hotel
- ```POST``` `/createRoom/:hotel_slug` - Create a new room
- ```GET``` `/hotels/:hotel_slug` - Get specific hotel with their rooms
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Thanks to the Node.js and Express.js communities for their excellent documentation and resources.
- Prisma team for providing a powerful ORM for Node.js and TypeScript.