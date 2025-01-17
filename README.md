# SafeTech Solutions - Safety Equipment & Monitoring Systems

![SafeTech Banner](src/assets/SafeTech-Logo.svg)

Live Demo: [SafeTech Website](https://safetech-zeta.vercel.app/)

## Overview

SafeTech Solutions is a comprehensive web platform showcasing industrial safety equipment and monitoring systems. The project demonstrates modern web development practices using Next.js 14, offering a responsive, multilingual interface with seamless navigation and dynamic content management.

## Key Features

- **Multilingual Support**: Full Arabic and English language support
- **Dynamic Product Catalog**: Showcase of safety equipment including PWAS, LMI systems
- **Interactive UI Components**: Using shadcn/ui for consistent design
- **Responsive Design**: Mobile-first approach ensuring compatibility across devices
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **Content Management**: Powered by Strapi headless CMS [Backend Repository](https://github.com/anonys6/strapi-safetech)

## Tech Stack

### Frontend
- Next.js 14 (React Framework)
- TypeScript
- Tailwind CSS
- Radix UI Components
- Framer Motion for animations
- next-intl for internationalization

### Backend
- Strapi Headless CMS
- PostgreSQL Database
- Cloudinary for media management

## Running Locally

1. Clone the repository:
```bash
git clone https://github.com/anonys6/safetech.git
cd safetech
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
safetech/
├── src/
│   ├── app/          # Next.js app router components
│   ├── components/   # Reusable UI components
│   ├── styles/       # CSS modules and global styles
│   ├── lib/         # Utility functions and helpers
│   └── i18n/        # Internationalization setup
├── public/          # Static assets
└── messages/        # Translation files
```

## Deployment

The project is deployed on Vercel with automatic deployments from the main branch. The backend Strapi CMS is hosted separately with its own deployment pipeline.

## Backend Repository

The Strapi backend code is maintained in a separate repository:
[SafeTech Strapi Backend](https://github.com/anonys6/strapi-safetech)

---

## ⚠️ Disclaimer

This project is for **demonstration purposes only**.  
**All rights are reserved**. Redistribution, modification, or reuse of the code without explicit permission is strictly prohibited.  

If you wish to discuss the project or request permission, please contact me at [info@safetechco.com](mailto:info@safetechco.com).

---
