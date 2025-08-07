# Portfolio Website

## Overview

This is a single-page portfolio website for Abdullah Sayed, a Data Engineer and Backend Developer. The application is built using React with Vite as the build tool and features a responsive design with smooth scrolling navigation between sections. The site showcases personal information, technical skills, professional experience, and provides a contact form for potential clients or employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and better development experience
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI components
- **State Management**: React Query (@tanstack/react-query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Routing**: Single-page application with smooth scroll navigation to different sections

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack
- **Architecture Pattern**: RESTful API design with separation of concerns
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Development Server**: Integrated Vite development server with Express for seamless full-stack development

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Management**: Centralized schema definitions in shared directory
- **Development Storage**: In-memory storage implementation for development/testing
- **Session Management**: PostgreSQL session store support via connect-pg-simple

### Authentication and Authorization
- **Session-based Authentication**: Express sessions with PostgreSQL session store
- **User Management**: Basic user schema with username/password authentication
- **Storage Abstraction**: Interface-based user CRUD operations for flexibility

### External Dependencies
- **Database**: Neon Database (serverless PostgreSQL) for production data storage
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Icons**: Font Awesome for social media and interface icons
- **Fonts**: Google Fonts (Inter) for typography
- **Deployment**: Replit-specific plugins for development and deployment optimization

The architecture follows a monorepo structure with shared types and utilities, enabling type safety across the full stack while maintaining clear separation between client and server code. The design prioritizes developer experience with hot reloading, TypeScript everywhere, and a component-based architecture that promotes reusability and maintainability.