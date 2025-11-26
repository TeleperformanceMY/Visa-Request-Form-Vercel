import { type NextRequest, NextResponse } from "next/server"
import { getCountryCode } from "@/lib/country-code-map"

// This uses the free, open-source Passport Visa API

interface VisaCountry {
  name: string
  code: string
  duration: number | null
}

interface VisaStatsResponse {
  name: string
  code: string
  VF: VisaCountry[] // Visa Free
  VOA: VisaCountry[] // Visa on Arrival
  VR: VisaCountry[] // Visa Required
  EV: VisaCountry[] // Electronic Visa
  NA: VisaCountry[] // Not Applicable
  last_updated: string
}

interface VisaResponse {
  visaFree: string[]
  visaOnArrival: string[]
  visaRequired: string[]
  electronicVisa: string[]
  notApplicable: string[]
}

async function getVisaDataFromAPI(nationality: string): Promise<VisaResponse> {
  const countryCode = getCountryCode(nationality)

  if (!countryCode) {
    console.error(`[v0] Country code not found for ${nationality}`)
    return {
      visaFree: [],
      visaOnArrival: [],
      visaRequired: [],
      electronicVisa: [],
      notApplicable: [],
    }
  }

  try {
    console.log(`[v0] Fetching visa data for ${nationality} (${countryCode}) from external API`)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch(`https://rough-sun-2523.fly.dev/country/${countryCode}`, {
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      console.warn(`[v0] API responded with status ${response.status} for ${countryCode}`)
      throw new Error(`API responded with status ${response.status}`)
    }

    const stats: VisaStatsResponse = await response.json()
    console.log(`[v0] API response for ${countryCode}:`, {
      VF: stats.VF?.length,
      VOA: stats.VOA?.length,
      VR: stats.VR?.length,
      EV: stats.EV?.length,
      NA: stats.NA?.length,
    })

    const visaFree = stats.VF?.map((c) => c.name) || []
    const visaOnArrival = stats.VOA?.map((c) => c.name) || []
    const visaRequired = stats.VR?.map((c) => c.name) || []
    const electronicVisa = stats.EV?.map((c) => c.name) || []
    const notApplicable = stats.NA?.map((c) => c.name) || []

    const result: VisaResponse = {
      visaFree: visaFree.sort(),
      visaOnArrival: visaOnArrival.sort(),
      visaRequired: visaRequired.sort(),
      electronicVisa: electronicVisa.sort(),
      notApplicable: notApplicable.sort(),
    }

    console.log(
      `[v0] Processed visa data for ${countryCode}: ${visaFree.length + visaOnArrival.length + visaRequired.length + electronicVisa.length + notApplicable.length} total countries`,
    )

    return result
  } catch (error) {
    console.error(
      `[v0] Error fetching visa data for ${nationality}:`,
      error instanceof Error ? error.message : String(error),
    )

    // If API fails, use fallback data
    return getFallbackVisaData(nationality)
  }
}

function getFallbackVisaData(nationality: string): VisaResponse {
  const fallbackData: Record<string, VisaResponse> = {
    Malaysia: {
      visaFree: [
        "Brunei",
        "Cambodia",
        "Hong Kong",
        "Indonesia",
        "Japan",
        "Laos",
        "Macau",
        "Philippines",
        "Singapore",
        "South Korea",
        "Taiwan",
        "Thailand",
        "Vietnam",
      ],
      visaOnArrival: ["Egypt", "Georgia", "Jordan", "Morocco", "Turkey"],
      visaRequired: [
        "Australia",
        "Canada",
        "China",
        "France",
        "Germany",
        "India",
        "New Zealand",
        "Russia",
        "United Kingdom",
        "United States",
      ],
      electronicVisa: ["India", "Sri Lanka", "Turkey"],
      notApplicable: [],
    },
    India: {
      visaFree: ["Afghanistan", "Bangladesh", "Bhutan", "Mauritius", "Nepal", "Seychelles", "Sri Lanka"],
      visaOnArrival: [
        "Cambodia",
        "Egypt",
        "Hong Kong",
        "Indonesia",
        "Japan",
        "Laos",
        "Malaysia",
        "Myanmar",
        "Philippines",
        "Singapore",
        "South Korea",
        "Taiwan",
        "Thailand",
        "Vietnam",
      ],
      visaRequired: [
        "Australia",
        "Canada",
        "China",
        "France",
        "Germany",
        "New Zealand",
        "Russia",
        "Turkey",
        "United Kingdom",
        "United States",
      ],
      electronicVisa: ["Estonia", "Ukraine"],
      notApplicable: [],
    },
    "United States": {
      visaFree: [
        "Australia",
        "Austria",
        "Belgium",
        "Canada",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Japan",
        "South Korea",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Mexico",
        "Netherlands",
        "New Zealand",
        "Norway",
        "Poland",
        "Portugal",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "United Kingdom",
      ],
      visaOnArrival: ["Egypt", "Georgia", "Indonesia", "Jordan", "Morocco", "Philippines", "Thailand", "Turkey"],
      visaRequired: ["China", "Iran", "Libya", "North Korea", "Russia", "Syria", "Venezuela", "Yemen"],
      electronicVisa: ["India", "Sri Lanka", "Turkey"],
      notApplicable: [],
    },
    "United Kingdom": {
      visaFree: [
        "Antigua and Barbuda",
        "Australia",
        "Austria",
        "Bahamas",
        "Barbados",
        "Belgium",
        "Belize",
        "Canada",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Dominica",
        "Estonia",
        "Fiji",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Grenada",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Jamaica",
        "Japan",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Mexico",
        "Monaco",
        "Netherlands",
        "New Zealand",
        "Norway",
        "Poland",
        "Portugal",
        "San Marino",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Korea",
        "Spain",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "Trinidad and Tobago",
        "United States",
      ],
      visaOnArrival: ["Egypt", "Georgia", "Indonesia", "Jordan", "Morocco", "Philippines", "Thailand", "Turkey"],
      visaRequired: ["China", "Iran", "Libya", "North Korea", "Russia", "Syria", "Venezuela", "Yemen"],
      electronicVisa: ["India", "Sri Lanka", "Turkey"],
      notApplicable: [],
    },
  }

  return (
    fallbackData[nationality] || {
      visaFree: [],
      visaOnArrival: [],
      visaRequired: [],
      electronicVisa: [],
      notApplicable: [],
    }
  )
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const nationality = searchParams.get("nationality")

    if (!nationality) {
      return NextResponse.json({ error: "Nationality parameter is required" }, { status: 400 })
    }

    // Fetch visa data (no caching - direct API call)
    const data = await getVisaDataFromAPI(nationality)

    const response = NextResponse.json(data)
    return response
  } catch (error) {
    console.error("[v0] Visa requirements route error:", error)
    return NextResponse.json({ error: "Failed to fetch visa requirements" }, { status: 500 })
  }
}
