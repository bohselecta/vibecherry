# VibeCherry Landing Page

A modern, responsive landing page for VibeCherry - an AI-powered web app generator. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful glassmorphism design with animated background blobs
- 📱 Fully responsive layout
- ⚡ Optimized for performance with Next.js
- 🎭 Smooth scroll animations and interactive elements
- 🌙 Dark theme with gradient accents
- 🖼️ Custom logo integration

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Space Grotesk (Google Fonts)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vibecherry-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

The project includes a `vercel.json` configuration file for optimal deployment settings.

### Manual Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and custom CSS classes
│   ├── layout.tsx       # Root layout with font configuration
│   └── page.tsx         # Main landing page component
public/
├── vibecherry-logo.png  # Main logo
└── cherry-basket-icon.png # Footer icon
```

## Customization

### Colors
The project uses a custom color palette defined in `globals.css`:
- Primary gradient: `#ff6b9d` → `#c239b8` → `#ff6b35`
- Background: `#0a0a0a`
- Glass cards: `rgba(40, 35, 30, 0.4)`

### Fonts
Space Grotesk is loaded from Google Fonts with weights: 300, 400, 500, 600, 700

### Animations
- Floating logo animation
- Scroll-triggered fade-in effects
- Pulsing background blobs
- Smooth hover transitions

## License

Open source - feel free to use and modify as needed.