# 🏡 Next Estate

### Find Your Place. Discover Your Future.

A modern and responsive real estate platform designed to make property discovery and management easier. Explore property listings, discover your next home, connect with property owners, and experience a seamless real estate journey.

---

## ✨ Overview

**Next Estate** is a full-stack real estate web application built to provide users with a modern and intuitive way to explore properties and connect with property owners.

The platform combines a clean user interface with powerful backend functionality, secure authentication, database integration, and cloud-based image management to deliver a smooth and reliable experience.

## 🚀 Features

- **Property Discovery:** Browse and explore available property listings.
- **Advanced Property Filtering:** Filter properties by type, location, address, and price range.
- **Property Details:** View detailed information about each property.
- **User Authentication:** Secure authentication and session management.
- **Property Management:** Create and manage property listings.
- **Agent Contact:** Send property inquiries directly to property owners or agents through email.
- **Image Management:** Upload and manage property images using Cloudinary.
- **Recent Listings:** Discover recently added properties.
- **Responsive Design:** Optimized experience across desktop, tablet, and mobile devices.
- **Modern UI:** Clean layouts and reusable components for a consistent user experience.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and application routing |
| React 19 | User interface development |
| TypeScript | Type safety and maintainable code |
| Tailwind CSS 4 | Styling and responsive design |
| Prisma ORM | Database access and management |
| PostgreSQL | Relational database |
| Neon | Serverless PostgreSQL hosting |
| Better Auth | Authentication |
| Cloudinary | Image storage and management |
| Resend | Transactional email delivery |
| Axios | HTTP requests |
| React Hot Toast | User notifications |
| Lucide / React Icons | Interface icons |

## 📸 Screenshots

<!-- Add your project screenshots here -->

| Home Page | Marketplace |
|---|---|
| <!-- Add homepage screenshot --> | <!-- Add marketplace screenshot --> |

| Property Details | Contact Form |
|---|---|
| <!-- Add property details screenshot --> | <!-- Add inquiry form screenshot --> |

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- pnpm
- PostgreSQL database (or a Neon database)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/next-estate.git
```

### 2. Navigate to the Project

```bash
cd next-estate
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure the required environment variables.

```env
# Database
DATABASE_URL=
DIRECT_URL=

# Authentication
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Application
NEXT_PUBLIC_BASE_URL=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Resend
RESEND_API_KEY=
EMAIL_FROM=
```

**Important:** Use your own credentials and make sure the variable names match your application configuration. Never commit your `.env` file or expose private API keys.

### 5. Generate Prisma Client

```bash
pnpm exec prisma generate
```

### 6. Run Database Migrations

```bash
pnpm exec prisma migrate dev
```

### 7. Start the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
next-estate/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── marketplace/
│   │   ├── property/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── emails/
│   │   ├── layouts/
│   │   ├── marketplace/
│   │   ├── properties/
│   │   └── ...
│   │
│   ├── lib/
│   ├── server-actions/
│   ├── constants/
│   ├── database/
│   ├── generated/
│   └── types/
│
├── .env
├── next.config.ts
├── package.json
└── README.md
```

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server |
| `pnpm run lint` | Run ESLint checks |

## 🔐 Security

- Environment variables are used to protect sensitive credentials.
- Authentication is handled through Better Auth.
- Database operations are managed through Prisma.
- Private API credentials should never be exposed in client-side code.

## 🎯 Project Goals

This project was built to strengthen practical full-stack development skills, explore modern Next.js architecture, and create a scalable real estate application with a focus on usability, maintainability, and performance.

## 👨‍💻 Author

**Mahmoud Nassar**

Front-End Developer | React & Next.js

- GitHub: [Mahmoud-nassar777](https://github.com/Mahmoud-nassar777)
- LinkedIn: [Mahmoud Nassar](https://www.linkedin.com/in/mahmoud-nassar-a83163323/)
- Portfolio: [Visit My Portfolio](https://dev-mwn.vercel.app/)

---

<p align="center">
  Built with ❤️ by Mahmoud Nassar
</p>
