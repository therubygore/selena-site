# Selena Sketches Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero banner and portfolio grid
- **About Page**: Two-column layout with image and bio
- **Contact Page**: Tally form embed
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Reusable Components**: Header and Footer components
- **Mobile Menu**: Full-screen navigation with social links

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
selena-site/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   └── PortfolioGrid.tsx  # Home page portfolio grid
└── public/                 # Static assets
```

## Deployment

This project is ready to be deployed on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

## Build for Production

```bash
npm run build
npm start
```

