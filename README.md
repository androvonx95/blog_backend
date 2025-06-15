# Blog Backend

A secure and scalable backend API for a blog application built with Node.js and Express.

## Features

- User authentication and authorization
- Rate limiting
- CORS support
- Security headers
- Prisma ORM for database operations
- JWT-based authentication
- Input validation

## ## Tech Stack

- Node.js
- Express.js v5.1.0
- Prisma ORM
- PostgreSQL (via Prisma)
- Bcrypt for password hashing
- JWT for authentication
- Express Validator for input validation
- Helmet for security headers
- CORS support
- Rate limiting

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your configuration:
```bash
touch .env
# Add your configuration variables
```

3. Start the development server:
```bash
npm run dev
```

## API Documentation

API documentation is available in [blog-backend.rest](./blog-backend.rest) (Note: This is a REST API documentation file).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
