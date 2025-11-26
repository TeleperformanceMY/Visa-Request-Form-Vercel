"use client"

interface VisaResultsGridProps {
  visaData: {
    visaFree?: string[]
    visaOnArrival?: string[]
    visaRequired?: string[]
    electronicVisa?: string[]
    notApplicable?: string[]
  }
  searchQuery: string
  onCountrySelect?: (country: string, visaType: string) => void
  language?: "en" | "ja" | "zh"
}

function filterCountries(countries: string[] | undefined, query: string): string[] {
  if (!countries || !Array.isArray(countries)) return []
  if (!query) return countries
  const lowercaseQuery = query.toLowerCase()
  return countries.filter((country) => country.toLowerCase().includes(lowercaseQuery))
}

const translations = {
  en: {
    visaFree: "Visa-Free",
    visaOnArrival: "Visa on Arrival",
    visaRequired: "Visa Required",
    eVisa: "E-Visa",
    notApplicable: "N/A",
    noResults: "No results",
  },
  ja: {
    visaFree: "ビザ不要",
    visaOnArrival: "ビザオンアライバル",
    visaRequired: "ビザ必須",
    eVisa: "電子ビザ",
    notApplicable: "N/A",
    noResults: "結果なし",
  },
  zh: {
    visaFree: "免签",
    visaOnArrival: "落地签",
    visaRequired: "需签证",
    eVisa: "电子签证",
    notApplicable: "不适用",
    noResults: "无结果",
  },
} as const

export function VisaResultsGrid({ visaData, searchQuery, onCountrySelect, language = "en" }: VisaResultsGridProps) {
  const t = translations[language] ?? translations.en

  const visaFree = filterCountries(visaData?.visaFree, searchQuery)
  const visaOnArrival = filterCountries(visaData?.visaOnArrival, searchQuery)
  const visaRequired = filterCountries(visaData?.visaRequired, searchQuery)
  const electronicVisa = filterCountries(visaData?.electronicVisa, searchQuery)
  const notApplicable = filterCountries(visaData?.notApplicable, searchQuery)

  const CountryItem = ({ country, visaType }: { country: string; visaType: string }) => (
    <div
      onClick={() => {
        onCountrySelect?.(country, visaType)
        setTimeout(() => {
          const formElement = document.getElementById("visa-request-form")
          if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }}
      className="px-2 py-1 rounded text-foreground text-xs cursor-pointer transition-colors"
    >
      {country}
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Visa Free */}
      <div className="bg-card border-2 border-visa-free rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-visa-free"></div>
          <h2 className="text-lg font-bold text-foreground">{t.visaFree}</h2>
          <span className="ml-auto bg-visa-free text-white px-2 py-1 rounded-full text-xs font-semibold">
            {visaFree.length}
          </span>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {visaFree.length > 0 ? (
            visaFree.map((country) => (
              <div key={country} className="px-2 py-1 bg-visa-free/10 hover:bg-visa-free/20 transition-colors">
                <CountryItem country={country} visaType="Visa-Free" />
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-xs italic">{t.noResults}</p>
          )}
        </div>
      </div>

      {/* Visa on Arrival */}
      <div className="bg-card border-2 border-visa-on-arrival rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-visa-on-arrival"></div>
          <h2 className="text-lg font-bold text-foreground">{t.visaOnArrival}</h2>
          <span className="ml-auto bg-visa-on-arrival text-foreground px-2 py-1 rounded-full text-xs font-semibold">
            {visaOnArrival.length}
          </span>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {visaOnArrival.length > 0 ? (
            visaOnArrival.map((country) => (
              <div
                key={country}
                className="px-2 py-1 bg-visa-on-arrival/10 hover:bg-visa-on-arrival/20 transition-colors"
              >
                <CountryItem country={country} visaType="Visa on Arrival" />
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-xs italic">{t.noResults}</p>
          )}
        </div>
      </div>

      {/* Visa Required */}
      <div className="bg-card border-2 border-visa-required rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-visa-required"></div>
          <h2 className="text-lg font-bold text-foreground">{t.visaRequired}</h2>
          <span className="ml-auto bg-visa-required text-white px-2 py-1 rounded-full text-xs font-semibold">
            {visaRequired.length}
          </span>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {visaRequired.length > 0 ? (
            visaRequired.map((country) => (
              <div key={country} className="px-2 py-1 bg-visa-required/10 hover:bg-visa-required/20 transition-colors">
                <CountryItem country={country} visaType="Visa Required" />
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-xs italic">{t.noResults}</p>
          )}
        </div>
      </div>

      {/* Electronic Visa */}
      <div className="bg-card border-2 border-blue-500 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <h2 className="text-lg font-bold text-foreground">{t.eVisa}</h2>
          <span className="ml-auto bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {electronicVisa.length}
          </span>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {electronicVisa.length > 0 ? (
            electronicVisa.map((country) => (
              <div key={country} className="px-2 py-1 bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                <CountryItem country={country} visaType="E-Visa" />
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-xs italic">{t.noResults}</p>
          )}
        </div>
      </div>

      {/* Not Applicable */}
      <div className="bg-card border-2 border-gray-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <h2 className="text-lg font-bold text-foreground">{t.notApplicable}</h2>
          <span className="ml-auto bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {notApplicable.length}
          </span>
        </div>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {notApplicable.length > 0 ? (
            notApplicable.map((country) => (
              <div key={country} className="px-2 py-1 bg-gray-400/10 hover:bg-gray-400/20 transition-colors">
                <CountryItem country={country} visaType="Not Applicable" />
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-xs italic">{t.noResults}</p>
          )}
        </div>
      </div>
    </div>
  )
}
