![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-5.3.29-orange)
![Prisma](https://img.shields.io/badge/Prisma-5.19.0-green)

![Banner](docs/swbCloudworksBanner.png)
![Diagram](docs/ClickStreamDiagramV11.png)
# ClickSteam - Next.js E-Commerce Frontend

A modern, full-stack e-commerce application built with Next.js, featuring user authentication, product browsing, shopping cart, order management, and integrated clickstream analytics for computer products.

## 🏆 Overview

This Next.js application serves as the frontend for an e-commerce platform selling computer products. It integrates seamlessly with AWS services for hosting, authentication, payments, and data management, while collecting user interaction data for analytics.

The app is designed to provide a smooth shopping experience with features like product search, categorization, wishlists, and secure checkout powered by Stripe.

For a comprehensive overview of the entire Clickstream Analytics Platform, including backend architecture, data pipelines, and analytics dashboards, please refer to [profile/README.md](profile/README.md).

## ✨ Features

- **User Authentication**: Secure login and registration using Amazon Cognito
- **Product Catalog**: Browse and search computer products with categories and brands
- **Shopping Cart**: Add, remove, and manage cart items with quantity controls
- **Wishlist**: Save favorite products for later
- **Order Management**: View order history and details
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Clickstream Analytics**: Integrated event tracking for user behavior analysis
- **SEO Optimized**: Server-side rendering and static generation for better performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

### Backend & Database
- **Prisma** - ORM for database operations
- **PostgreSQL** - Operational database (OLTP)
- **Sanity** - Headless CMS for content management

### AWS Services
- **AWS Amplify** - Hosting and deployment
- **Amazon Cognito** - User authentication
- **Amazon S3** - Static assets and clickstream data storage
- **Amazon CloudFront** - CDN for global distribution

### Payments & Analytics
- **Stripe** - Payment processing
- **Custom Clickstream Client** - Event tracking and analytics

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- PostgreSQL database (for local development)
- AWS account (for deployment and services)
- Stripe account (for payments)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ClickSteam.NextJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

   # AWS Amplify
   NEXT_PUBLIC_AMPLIFY_REGION=your-aws-region
   NEXT_PUBLIC_AMPLIFY_USER_POOL_ID=your-user-pool-id
   NEXT_PUBLIC_AMPLIFY_USER_POOL_CLIENT_ID=your-client-id

   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_AUTH_TOKEN=your-sanity-auth-token

   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

   # Clickstream
   NEXT_PUBLIC_CLICKSTREAM_API_URL=your-api-gateway-url
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev

   # Seed the database (optional)
   npm run db:seed
   ```

5. **Configure Sanity (if using CMS features)**

   ```bash
   # Extract and generate types
   npm run typegen
   ```

## 🏃 Running Locally

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

## 🚀 Deployment

This application is designed to be deployed on AWS Amplify:

1. **Connect to AWS Amplify**
   - Push your code to a Git repository (GitHub, GitLab, etc.)
   - Connect the repository to AWS Amplify Console

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Build output directory: `.next`

3. **Environment Variables**
   - Set all required environment variables in Amplify Console

4. **Domain Configuration**
   - Configure custom domain if needed
   - Set up SSL certificates

For detailed deployment instructions and architecture considerations, see [profile/README.md](profile/README.md).

## 📁 Project Structure

```
├── actions/                 # Server actions for API operations
├── app/                     # Next.js App Router pages and layouts
│   ├── (client)/           # Client-side routes
│   ├── api/                # API routes
│   └── globals.css         # Global styles
├── components/             # Reusable React components
│   ├── ui/                 # UI components (Radix UI based)
│   └── ...                 # Feature-specific components
├── constants/              # Application constants
├── contexts/               # React contexts for state management
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries and configurations
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── sanity/                 # Sanity CMS configuration
└── profile/                # Project documentation and architecture
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request