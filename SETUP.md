# Local Development Setup

## Prerequisites

- Node.js 18 or higher
- npm 9+ or yarn
- Git

## Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd visa-requirements-tool
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Create .env.local file** (optional, for Redis)
   \`\`\`bash
   # .env.local (optional - app works fine without it)
   # KV_REST_API_URL=your_upstash_redis_url
   # KV_REST_API_TOKEN=your_upstash_redis_token
   \`\`\`

## Development

1. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app auto-reloads on file changes

3. **Start building!**
   - Edit components in \`components/\`
   - Update styles in \`app/globals.css\`
   - Modify API routes in \`app/api/\`

## Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
\`\`\`

## Project Structure

\`\`\`
.
├── app/
│   ├── api/
│   │   └── visa-requirements/    # API route for visa data
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── visa-tool-header.tsx       # Header component
│   ├── visa-tool-main.tsx         # Main container
│   ├── nationality-selector.tsx   # Dropdown selector
│   ├── country-search.tsx         # Search input
│   ├── visa-results-grid.tsx      # Results display
│   └── spinner.tsx                # Loading spinner
├── lib/
│   └── visa-cache.ts              # Cache utilities
├── public/                         # Static files
└── README.md
\`\`\`

## Debugging

### Using Console Logs

The app includes debug logging with `[v0]` prefix:

\`\`\`bash
# Watch for these in browser console or server logs:
[v0] Fetching visa data for Malaysia
[v0] Memory cache hit for India
[v0] Cached data for United States
\`\`\`

### Testing the API Directly

\`\`\`bash
# In another terminal, while dev server is running:
curl "http://localhost:3000/api/visa-requirements?nationality=Malaysia"
\`\`\`

## Common Issues

### Issue: "Cannot find module"

**Solution:**
\`\`\`bash
rm -rf node_modules
npm install
\`\`\`

### Issue: Port 3000 already in use

**Solution:**
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Issue: Styles not loading

**Solution:**
- Clear browser cache (Cmd+Shift+Delete)
- Restart dev server

## Environment Variables

### Required
- None! The app works fully without any environment variables.

### Optional (for production Redis caching)
- `KV_REST_API_URL` - Upstash Redis REST API URL
- `KV_REST_API_TOKEN` - Upstash Redis token

Get these by adding the Upstash Redis integration in Vercel.

## Performance Tips

1. **Use Chrome DevTools**
   - Open DevTools (F12)
   - Network tab: see API call times
   - Console tab: see debug logs

2. **Check API response times**
   - First call (not cached): ~2-3 seconds
   - Cached call: ~100ms

3. **Monitor network requests**
   - Network tab shows all requests
   - Red requests = failed/slow

## Next Steps

1. ✅ Install and run locally
2. ✅ Test with different nationalities
3. ✅ Add to GitHub
4. ✅ Deploy to Vercel (see DEPLOYMENT.md)
5. ✅ Add Redis caching (optional but recommended)
6. ✅ Monitor with Vercel Analytics

## Questions?

Check these resources:
- Next.js Documentation: [nextjs.org](https://nextjs.org)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
