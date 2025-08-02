# Overview

This repository contains a full-stack digital signage company website called "Sonny Harbor Media". It's built as a modern web application with a React frontend and Express.js backend, featuring a contact form system for potential customers to submit inquiries about digital signage services. The application showcases the company's three main service offerings: Event Solutions, Public Ad Space, and Screen Hosting Programs.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for a luxury aesthetic
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build System**: Vite with TypeScript support and custom path aliases

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Data Storage**: Dual storage implementation with in-memory storage for development and PostgreSQL for production
- **API Design**: RESTful endpoints for contact inquiry management
- **Validation**: Zod schemas shared between frontend and backend
- **Development Setup**: Hot module replacement via Vite integration

## Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contact Inquiries Table**: Captures customer inquiries with fields for personal information, service interest, and messages
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

## Data Storage Strategy
- **Development**: In-memory storage implementation for rapid development
- **Production**: PostgreSQL database via Neon serverless
- **Interface Pattern**: Storage abstraction layer allows switching between implementations
- **Migration System**: Drizzle Kit for database schema migrations

## Design System
- **Typography**: Inter and Playfair Display fonts for modern luxury branding
- **Color Palette**: Custom neutral-based theme with gold accent colors
- **Component Library**: Comprehensive UI component system with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

## UI Framework Dependencies
- **Radix UI**: Headless UI primitives for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Frontend build tool with HMR and TypeScript support
- **ESBuild**: Backend bundling for production builds
- **Replit Integration**: Development environment optimizations for Replit platform

## Form and Validation
- **React Hook Form**: Performant form library with validation
- **Zod**: Schema validation library shared across frontend and backend
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Server Infrastructure
- **Express.js**: Web application framework for API endpoints
- **Connect PG Simple**: PostgreSQL session store for Express
- **CORS and Security**: Standard middleware for API security