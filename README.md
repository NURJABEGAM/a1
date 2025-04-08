# Aseotool Landing Page

A landing page for Aseotool, providing a comprehensive suite of online tools.

## Deployment on Vercel

### Automatic Deployment

1. Create a new project on Vercel
   - Go to [Vercel](https://vercel.com/) and sign in
   - Click "New Project"
   - Import your Git repository
   - Configure the project settings:
     - Framework Preset: `Next.js`
     - Build Command: `npm run build` (default)
     - Output Directory: `.next` (default)

2. Configure environment variables (if needed)
   - Go to Project Settings > Environment Variables
   - Add any required environment variables

### Manual Deployment

Alternatively, you can deploy manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel --prod
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
