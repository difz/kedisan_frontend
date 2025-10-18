# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kedisan Frontend is a React + TypeScript + Vite application for a tourism/accommodation business. It's a single-page application with multi-page routing using React Router, deployed on Vercel with SPA routing configured.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6 with SWC for fast refresh
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **Animation**: Framer Motion, GSAP, Anime.js
- **CMS**: Sanity CMS for content management
- **Maps**: Leaflet with react-leaflet
- **UI Components**: Radix UI, custom components with class-variance-authority
- **Deployment**: Vercel

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Type-check with tsc and build for production
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Architecture

### Routing Structure

The app has three main routes defined in `src/App.tsx`:
- `/` - HomePage (landing with hero, about, map, reservation, sponsors)
- `/reservation` - ReservationPage (detailed reservation form)
- `/gallery` - GalleryPage (photo gallery with masonry layout)

Routing is configured for SPA deployment with `vercel.json` rewriting all routes to index.

### Directory Structure

```
src/
├── api/              # Sanity CMS data fetching functions
├── assets/           # Static assets (fonts, etc.)
├── components/       # React components
│   └── ui/          # Reusable UI components (button, card, etc.)
├── data/            # Static data files (GalleryData)
├── effect/          # Animation/effect components (clickspark, ShinyText, etc.)
├── images/          # Image assets
├── lib/             # Utility libraries
│   ├── sanityClient.ts  # Sanity CMS client configuration
│   ├── imageUrl.ts      # Sanity image URL builder
│   └── utils.ts         # General utility functions (cn, etc.)
└── pages/           # Page components (HomePage, ReservationPage, GalleryPage)
```

### Key Architecture Patterns

**Sanity CMS Integration**:
- Client configured in `src/lib/sanityClient.ts` using environment variables (VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_API_VERSION)
- Data fetching functions in `src/api/` directory
- Image URLs generated with `urlFor()` helper from `src/lib/imageUrl.ts`
- Uses Portable Text for rich text content with `@portabletext/react`

**Component Organization**:
- Page-level components in `src/pages/` compose smaller components
- Reusable UI components in `src/components/ui/` follow shadcn/ui patterns
- Animation effects isolated in `src/effect/` directory
- Components use TypeScript with React.FC or explicit typing

**Styling Approach**:
- Tailwind CSS v4 with Vite plugin (not PostCSS)
- Utility-first with custom components
- Path alias `@/` resolves to `src/`
- Uses `cn()` utility from `src/lib/utils.ts` for className merging

**State Management**:
- Location state for scroll-to-section behavior (see `ScrollToSectionOnLoad` in HomePage.tsx:15)
- Component-level state with React hooks
- No global state management library

### Environment Variables

Required in `.env`:
```
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=
VITE_SANITY_API_VERSION=
```

## Important Notes

- TypeScript strict mode is enabled; ensure proper typing
- ESLint configured for React hooks and component exports
- Leaflet CSS must be imported in main.tsx for map components to render correctly
- Vercel rewrites all routes to `/` for SPA routing - no server-side routing
- When adding new Sanity queries, follow the pattern in `src/api/fetchAboutContent.ts`
- Animation components (clickspark, ShinyText, etc.) wrap other components and should be used sparingly for performance
