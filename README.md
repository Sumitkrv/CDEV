# CDEV - Electric Scooter Website

A modern, responsive website for CDEV electric scooters built with React, Vite, and Tailwind CSS.

## Features

- 🚀 Fast and responsive user interface
- 🎨 Modern design with Tailwind CSS
- 📱 Mobile-first responsive design
- 🔄 React Router for smooth navigation
- 🛵 Complete product showcase
- 📝 Contact forms and test ride booking
- ❓ Comprehensive FAQ section
- 📊 Model comparison tools

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable React components
│   ├── common/     # Common components (Navbar, Footer, etc.)
│   ├── home/       # Home page components
│   ├── about/      # About page components
│   ├── services/   # Services page components
│   ├── contact/    # Contact page components
│   ├── models/     # Models page components
│   └── faq/        # FAQ components
├── pages/          # Page components
├── data/           # Static data files
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── App.jsx         # Main App component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## License

Copyright © 2026 CDEV. All rights reserved.
