# 222Communication Company Website

## Overview

This is a modern, professional company website for 222Communication, a software development services company. The application is built using a full-stack TypeScript architecture with React frontend and Express.js backend, featuring a comprehensive landing page with multiple sections showcasing services, projects, pricing, testimonials, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Single-page application with scroll-based navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for hot reloading
- **API Structure**: RESTful API design with /api prefix routing
- **Error Handling**: Centralized error middleware with structured responses

### Database & ORM
- **Database**: PostgreSQL (configured for but not actively used)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: @neondatabase/serverless for serverless PostgreSQL
- **Schema**: Located in shared/schema.ts for type-safe database operations
- **Current Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Landing Page Sections**: Hero, About, Services, Projects, Pricing, Blog, Testimonials, Contact
- **UI Library**: Comprehensive shadcn/ui components including forms, dialogs, cards, navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Interactive Elements**: Smooth scrolling navigation, form handling, and visual feedback

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory and database implementations
- **Route Registration**: Modular route system ready for API endpoints
- **Development Tools**: Request logging, error handling, and Vite integration

### Shared Resources
- **Schema Definitions**: Centralized type definitions using Drizzle ORM
- **Type Safety**: Shared types between frontend and backend
- **Validation**: Zod schemas for runtime type validation

## Data Flow

### Current Implementation
1. **Static Content**: All content is currently hardcoded in React components
2. **Form Handling**: Contact forms collect data but don't persist to database
3. **Navigation**: Hash-based routing for smooth scrolling between sections
4. **State Management**: Local React state for UI interactions

### Database-Ready Architecture
1. **User Management**: Schema defined for user authentication
2. **CRUD Operations**: Storage interface ready for database integration
3. **API Routes**: Backend structure prepared for data endpoints
4. **Type Safety**: End-to-end TypeScript types from database to frontend

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Query
- **Build Tools**: Vite, esbuild for production builds
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **UI Components**: Radix UI primitives, Lucide React icons

### Development Tools
- **TypeScript**: Strict type checking across the stack
- **ESLint/Prettier**: Code quality and formatting (configured)
- **Drizzle Kit**: Database migrations and schema management
- **Replit Integration**: Runtime error overlay and development tools

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL provider
- **Font Awesome**: Icon library for legacy icons
- **Google Fonts**: Inter font family
- **Unsplash**: Stock photography for project examples

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reloading**: Vite provides instant feedback for frontend changes
- **Type Checking**: `npm run check` validates TypeScript across the project
- **Database Migrations**: `npm run db:push` applies schema changes

### Production
- **Build Process**: `npm run build` creates optimized frontend and backend bundles
- **Frontend**: Static assets built to `dist/public`
- **Backend**: Node.js server bundle created with esbuild
- **Deployment**: `npm start` runs the production server
- **Environment**: Requires DATABASE_URL for PostgreSQL connection

### Architecture Decisions

**Monorepo Structure**: Single repository contains frontend, backend, and shared code for easier development and deployment.

**TypeScript-First**: Comprehensive TypeScript usage ensures type safety across the entire stack.

**Component Library**: shadcn/ui provides consistent, accessible UI components while maintaining customization flexibility.

**Database-Ready Design**: While currently using in-memory storage, the architecture is prepared for immediate PostgreSQL integration.

**Responsive Design**: Mobile-first approach ensures optimal experience across all devices.

**Performance Focus**: Vite build system and optimized React patterns ensure fast loading and smooth interactions.