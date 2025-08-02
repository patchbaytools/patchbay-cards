# Patchbay Cards

This project was created using `npx create-next-app@latest` with TypeScript, Tailwind CSS, and App Router.

## About

Patchbay Cards is a digital business card platform designed for music industry professionals including artists, producers, songwriters, mixers, and other industry personnel. The platform provides customizable digital business cards with social media integration, project showcases, and professional contact information.

## Environment

- Reference `.env.example` and make copies as appropriate.
- Next.js will read `.env.local`, `.env.staging`, `.env.production` depending on the build environment.
- Environment variables include:
  - `NEXT_PUBLIC_PATCHBAY_API_PROD_URL` - Production API endpoint
  - `NEXT_PUBLIC_PATCHBAY_API_STAGING_URL` - Staging API endpoint

## Building and running locally

- `npm install`
- `npm run dev` - The Next.js development server will start on port 3001
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Development tools

- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Automatically fix ESLint issues
- `npm run prettier` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run prebuild` - Run prettier and type checking before build

### Testing locally

- `npm run type-check` - Runs TypeScript type checking to ensure type safety
- The application uses type guards for runtime validation of API responses and environment variables

### Generating API client types

When changes are made to the Patchbay API, it is necessary to re-generate types based on those changes.

- `npm run build-api-client` - Generate API client types from the OpenAPI spec
  - This assumes the server is running locally on port 8000
- Commit the results of this script to version control

## Architecture

The application follows a **Component-Based Architecture** with **Layered Architecture** principles:

- **Frontend Layer**: React components with TypeScript for type safety
- **API Layer**: Server-side data fetching with environment-aware caching
- **Data Layer**: Type-safe API responses with comprehensive type guards
- **Presentation Layer**: Responsive UI using Tailwind CSS and Ant Design

### Key Design Patterns

- **Type Guards**: Extensive use of TypeScript type guards for runtime validation
- **Repository Pattern**: Centralized data access through `getCardData.ts`
- **Caching Strategy**: Environment-aware caching to optimize API calls
- **Error Boundaries**: Graceful fallbacks and redirects for invalid requests

### [Deployed on Vercel](https://vercel.com/patchbay/patchbay-cards)
