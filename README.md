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

-  ``` https://github.com/yourusername/hotel-management-backend.git```

2. Navigate to the project directory:

3. Install dependencies:
-  ```npm install```
4. Set up your environment variables by creating a `.env` file in the root directory
5. Run Prisma migrations:
-  ```npx prisma migrate dev```
6. Start the development server:
-  ```npm start ```
## API Endpoints

-  ```POST``` `/createHotel` - Create a new hotel
-  ```POST``` `/createRoom/:hotel_slug` - Create a new room under specific hotel slug
-  ```GET``` `/hotels/:hotel_slug` - Get specific hotel with their rooms

## Schema Overview


### Hotel Model

The `Hotel` model represents individual hotels in the system. It includes the following fields:

- `hotel_slug`: String (Primary Key)
- `images`: String[]
- `title`: String
- `description`: String
- `guestCount`: Int
- `bedroomCount`: Int
- `bathroomCount`: Int
- `amenitiesCount`: Int
- `address`: String
- `longitude`: Float
- `latitude`: Float
- `host`: Json
- `rooms`: Relation to Room model

### Room Model

The `Room` model represents individual rooms within hotels. It includes the following fields:

- `room_slug`: String (Primary Key)
- `hotel_slug`: String (Foreign Key to Hotel model)
- `roomImage`: String
- `roomTitle`: String
- `bedroomCount`: Int
- `hotel`: Relation to Hotel model

## Relationships

- Each `Hotel` can have multiple `Room`s (one-to-many relationship).
- Each `Room` belongs to one `Hotel`.

## Relationships

- Each `Hotel` can have multiple `Room`s (one-to-many relationship).
- Each `Room` belongs to one `Hotel`.

## Usage

To use this schema:

1. Ensure you have Prisma installed in your project.
2. Copy the schema into your `schema.prisma` file.
3. Run `prisma generate` to generate the Prisma Client based on this schema.
4. Use the generated Prisma Client in your application to interact with your database.

## Database Setup

This schema is database-agnostic. You can use it with any database supported by Prisma, including PostgreSQL, MySQL, SQLite, and SQL Server. Make sure to configure your database connection in the Prisma schema file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Thanks to the Node.js and Express.js communities for their excellent documentation and resources.
- Prisma team for providing a powerful ORM for Node.js and TypeScript.