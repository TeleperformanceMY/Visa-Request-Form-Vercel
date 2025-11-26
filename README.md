# Global Visa Requirements Tool

A dynamic web application that displays visa requirements based on nationality and destination country using live, externally-sourced data.

## Features

- **Real-time Visa Data**: Fetches visa requirements from the Passport Visa API
- **Multi-tier Caching**: Uses Redis (Upstash) for distributed caching and in-memory fallback
- **Smart Fallbacks**: Includes curated data for popular nationalities when API is unavailable
- **Color-Coded Categories**: 
  - 🟢 Visa-Free
  - 🟡 Visa on Arrival
  - 🔴 Visa Required
- **Search Functionality**: Filter results by destination country
- **Responsive Design**: Works seamlessly on mobile and desktop

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Caching**: Upstash Redis (optional), In-memory fallback
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ (for local development)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables (optional - Redis caching):
   - `KV_REST_API_URL` - Your Upstash Redis REST API URL
   - `KV_REST_API_TOKEN` - Your Upstash Redis API token

### Running Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### GET `/api/visa-requirements`

Fetches visa requirements for a given nationality.

**Query Parameters:**
- `nationality` (required): The nationality/country (e.g., "India", "Malaysia")

**Response:**
\`\`\`json
{
  "visaFree": ["Nepal", "Sri Lanka", ...],
  "visaOnArrival": ["Thailand", "Indonesia", ...],
  "visaRequired": ["United States", "China", ...]
}
\`\`\`

**Example:**
\`\`\`
GET /api/visa-requirements?nationality=Malaysia
\`\`\`

## External APIs Used

- **Passport Visa API**: https://github.com/nickypangers/passport-visa-api
  - Free, open-source
  - Provides visa requirements for all nationalities
  - No authentication required

## Caching Strategy

1. **Redis Cache** (if Upstash is connected): 24-hour TTL
2. **Memory Cache** (fallback): 24-hour TTL
3. **Browser Cache**: 24-hour max-age with stale-while-revalidate
4. **Fallback Data**: Curated data for 4 popular nationalities

## Error Handling

- If external API fails, the app uses fallback data
- Graceful degradation with informative error messages
- Request timeout: 10 seconds

## Deployment

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Optionally add Redis integration:
   - Go to Settings → Integrations
   - Add Upstash Redis
   - Environment variables are automatically set
3. Deploy!

### Environment Variables

Optional (for Redis caching):
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

## Performance

- Response time: ~100-500ms (cached), ~2-3s (first request)
- Caching reduces API calls by 95%+
- Redis caching enables multi-instance deployments

## Known Limitations

- Visa requirements change frequently; data may be 1-24 hours out of date
- Some island nations have limited data
- Border closures or policy changes may not be immediately reflected

## License

MIT

## Contributing

Contributions welcome! Please feel free to submit issues or pull requests.

## Support

For issues or questions, please open a GitHub issue.
