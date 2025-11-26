"use client"

export interface CountrySearchProps {
  searchQuery: string
  onSearch: (query: string) => void
  language?: "en" | "ja" | "zh"
}

export function CountrySearch({ searchQuery, onSearch, language = "en" }: CountrySearchProps) {
  const translations = {
    en: {
      searchDestinations: "Search Destinations",
      searchPlaceholder: "Search by country name...",
    },
    ja: {
      searchDestinations: "目的地を検索",
      searchPlaceholder: "国名で検索...",
    },
    zh: {
      searchDestinations: "搜索目的地",
      searchPlaceholder: "按国家名称搜索...",
    },
  } as const

  const t = translations[language] ?? translations.en

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-foreground">
        {t.searchDestinations} <span className="text-destructive">*</span>
      </label>

      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>
    </div>
  )
}
