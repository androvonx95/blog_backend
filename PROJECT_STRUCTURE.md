### PROJECT STRUCTURE

blog_backend/
├── .env               # Environment variables
├── .git/              # Git repository
├── .gitignore         # Git ignore rules
├── blog-backend.rest  # API test file (675 bytes)
├── package.json       # Project configuration (662 bytes)
├── package-lock.json  # Dependency versions (42.9 KB)
├── node_modules/      # Node modules (not shown)
├── generated/         # Prisma generated files
├── prisma/                 # Database configuration
│   ├── migrations/         # Database migrations (5 migrations)
│   ├── schema.prisma       # Prisma schema (767 bytes)
│   └── seed.js             # Database seeding (585 bytes)
└── src/                    # Source code
    ├── middleware/
    │   └── auth.js             # JWT authentication (101 bytes)
    ├── routes/
    │   ├── authRoutes.js       # Authentication routes
    │   ├── ownerRoutes.js      # Admin routes
    │   └── userRoutes.js       # Public routes
    ├── prismaClient.js     # Prisma client setup (101 bytes)
    └── server.js           # Express server configuration (1.4 KB)