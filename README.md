# ALX Project 0x00 - Next.js Airbnb Clone

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) using TypeScript and Tailwind CSS.

## Project Overview

This project implements an Airbnb Application Clone system with the following features:

- **Pages Router**: Uses Next.js Pages Router for routing
- **TypeScript**: Full TypeScript support with proper type definitions
- **Tailwind CSS**: Styled with Tailwind CSS for modern UI
- **Component Architecture**: Reusable React components
- **Responsive Design**: Mobile-first responsive design

## Project Structure

```
alx-project-0x00/
├── components/          # Reusable React components
│   ├── Button.tsx      # Button component with size and shape variants
│   ├── Card.tsx        # Property card component
│   └── Pill.tsx        # Tag/pill component
├── interfaces/         # TypeScript type definitions
│   └── index.ts        # Component prop interfaces
├── pages/              # Next.js pages (routing)
│   ├── index.tsx       # Home page
│   ├── landing.tsx     # Landing page with components
│   └── about.tsx       # About page
├── public/             # Static assets
│   └── assets/         # Images and icons
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

First, run the development server:

```bash
npm run dev -- -p 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Routes

- **Home**: [http://localhost:3000](http://localhost:3000) - Main landing page
- **Landing**: [http://localhost:3000/landing](http://localhost:3000/landing) - Component showcase
- **About**: [http://localhost:3000/about](http://localhost:3000/about) - About page

You can start editing the pages by modifying files in the `pages/` directory. The page auto-updates as you edit the files.

## Components

### Button Component
A reusable button component with customizable size and shape variants:
- **Sizes**: `small`, `medium`, `large`
- **Shapes**: `rounded-sm`, `rounded-md`, `rounded-full`
- **Props**: `title`, `size`, `shape`, `className`

### Card Component
A property card component displaying:
- Property image
- Property details (name, location, rating)
- Amenity pills (Top Villa, Self CheckIn, Free Reschedule)
- Guest capacity and pricing information

### Pill Component
A tag/pill component for displaying amenities:
- **Props**: `title` (string)
- Styled with rounded corners and background

## Features Implemented

✅ **Task 0**: Project scaffolding with Next.js, TypeScript, ESLint, and Tailwind CSS
✅ **Task 1**: Project directory structure setup
✅ **Task 2**: Basic routing with Pages Router
✅ **Task 3**: Component rendering and asset management
✅ **Task 4**: Component usage and integration
✅ **Task 5**: TypeScript component typing
✅ **Task 6**: Advanced Button component with multiple variants

## Technologies Used

- **Next.js 14**: React framework with Pages Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library
- **ESLint**: Code linting and formatting

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
