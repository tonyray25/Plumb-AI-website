# Plumb AI Website

A modern, industrial-aesthetic website for Plumb AI - an AI-powered construction bid risk analysis service for DFW electrical, plumbing, and HVAC subcontractors.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## Features

- Dark industrial theme with orange accent colors
- Responsive design (mobile-first)
- Animated counters in hero section
- Smooth scroll animations
- Sticky navigation with scroll effects
- Contact form with validation
- SEO optimized with meta tags
- Accessible (ARIA labels, keyboard navigation)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd plumb-ai-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with fonts and metadata
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── index.ts         # Component exports
│   ├── Navigation.tsx   # Sticky header with mobile menu
│   ├── Hero.tsx         # Hero section with counters
│   ├── ProblemStatement.tsx
│   ├── Solution.tsx     # Feature grid
│   ├── Benefits.tsx     # 01, 02, 03 layout
│   ├── Trust.tsx        # Trust badges and associations
│   ├── SocialProof.tsx  # Testimonials
│   ├── HowItWorks.tsx   # 3-step process
│   ├── Pricing.tsx      # Pricing cards
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx
```

## Customization

### Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --accent-orange: #ff6b35;
  --accent-orange-hover: #ff8555;
  --accent-blue: #4a90e2;
  /* ... more colors */
}
```

### Content

All content is contained within individual component files in `src/components/`. Edit these files to update:
- Headlines and copy
- Feature descriptions
- Pricing tiers
- Testimonials (when available)
- Contact information

### Form Integration

The contact form in `Contact.tsx` currently logs to console. To integrate with a form service:

1. **Tally.so**: Replace the form with a Tally embed
2. **Formspree**: Update the form action to your Formspree endpoint
3. **Custom API**: Modify `handleSubmit` to POST to your API

## Deployment

### Vercel (Recommended)

The easiest deployment option:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure the build
4. Deploy!

### Netlify

```bash
# Build the project
npm run build

# Deploy the .next folder
```

Or connect your repository to Netlify and configure:
- Build command: `npm run build`
- Publish directory: `.next`

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

### Self-Hosted

```bash
# Build
npm run build

# Start with PM2
pm2 start npm --name "plumb-ai" -- start
```

## Environment Variables

No environment variables are required for basic operation. For form integration, you may need:

```env
# Example for form services
NEXT_PUBLIC_FORM_ENDPOINT=https://...
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Plumb AI © 2025

## Contact

- Email: risk@plumb-bids.com
- Location: Dallas-Fort Worth, Texas
