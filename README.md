# Node.js Practice Project

This project is a simple practice application for learning and experimenting with Node.js. It includes a few APIs that demonstrate basic functionalities.

## Overview

The purpose of this project is to get hands-on experience with Node.js by creating and working with APIs. This project covers:

- Setting up a Node.js server
- Creating and handling API routes
- Basic CRUD operations

## APIs

The project includes the following APIs:

1. **GET /api/resource**: Retrieves a list of resources.
2. **POST /api/resource**: Creates a new resource.
3. **PUT /api/resource/:id**: Updates an existing resource by ID.
4. **DELETE /api/resource/:id**: Deletes a resource by ID.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd learn-nodejs
npm install
```

### Using Environment Variables

Rename `config.env.example` to `config.env` and update `USER`, `PASSWORD`, and `DATABASE_URL` to your MongoDB Atlas database credentials.

Ensure your application correctly loads environment variables. You have already used `dotenv` in `server.js` to load environment variables:

```javascript
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, 'localhost', () => {
  console.log(`App running on port ${port}...`);
});

## Running the Project

To run the project, use the following command:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## Contributing

Feel free to fork this repository and contribute by submitting pull requests. Any improvements or suggestions are welcome.

## License

This project is licensed under the MIT License.
