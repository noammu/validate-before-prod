# Feature Vetta

An educational web application designed to highlight the critical importance of thoroughly validating new features before their deployment to a production environment.

## Overview

Feature Vetta informs users about best practices and benefits associated with pre-production feature validation through a clean, professional, and accessible interface.

## Features

- **Content Display**: Informational articles and explanations on feature validation importance and methods
- **Navigation**: Browse between different topics and informational pages
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: WCAG AA compliant with high contrast ratios and semantic HTML

## Pages

- **Home** (`/`) - Introduction and overview of feature validation topics
- **Why Validate?** (`/why-validate`) - Explains risks and importance of validation
- **Validation Methods** (`/methods`) - Overview of validation strategies and techniques
- **Benefits** (`/benefits`) - Organizational and user experience advantages

## Technology Stack

- React 19
- TypeScript
- React Router v7
- CSS Modules
- Lucide React Icons

## Design System

- **Typography**: Outfit (headings) & Karla (body)
- **Color Palette**: Teal accent with slate neutrals
- **Layout**: Clean, generous white space with structured grid
- **Components**: Subtle, functional with soft corners

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── header.tsx      # Site navigation
│   ├── footer.tsx      # Site footer
│   └── page-layout.tsx # Common layout wrapper
├── routes/             # Page components
│   ├── home.tsx
│   ├── why-validate.tsx
│   ├── methods.tsx
│   └── benefits.tsx
├── styles/             # Global styles and theme
│   ├── theme.css       # Design system tokens
│   ├── global.css      # Global styles
│   └── tokens/         # Design tokens
└── routes.ts           # Route configuration
```

## License

All rights reserved.
