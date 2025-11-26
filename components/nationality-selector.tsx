"use client"

import { useState, useEffect } from "react"

interface NationalitySelectorProps {
  selectedNationality: string
  onSelect: (nationality: string) => void
  language: "en" | "ja" | "zh"
}

const NATIONALITIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
]

export function NationalitySelector({ selectedNationality, onSelect, language }: NationalitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filtered, setFiltered] = useState(NATIONALITIES)
  const [searchInput, setSearchInput] = useState("")

  const translations = {
    en: {
      selectNationality: "Select Your Nationality",
      chooseNationality: "Choose a nationality...",
      searchNationalities: "Search nationalities...",
      noResults: "No results found",
    },
    ja: {
      selectNationality: "あなたの国籍を選択",
      chooseNationality: "国籍を選択...",
      searchNationalities: "国籍を検索...",
      noResults: "結果が見つかりません",
    },
    zh: {
      selectNationality: "选择您的国籍",
      chooseNationality: "选择国籍...",
      searchNationalities: "搜索国籍...",
      noResults: "未找到结果",
    },
  } as const

  const t = translations[language] ?? translations.en

  useEffect(() => {
    const query = searchInput.toLowerCase()
    setFiltered(NATIONALITIES.filter((n) => n.toLowerCase().includes(query)))
  }, [searchInput])

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-foreground">
        {t.selectNationality} <span className="text-destructive">*</span>
      </label>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground text-left hover:border-primary transition-colors flex items-center justify-between"
        >
          <span>{selectedNationality || t.chooseNationality}</span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10 max-h-96 flex flex-col">
            <input
              type="text"
              placeholder={t.searchNationalities}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="px-4 py-2 border-b border-border focus:outline-none bg-card text-foreground placeholder-muted-foreground"
            />

            <div className="overflow-y-auto flex-1">
              {filtered.length > 0 ? (
                filtered.map((nationality) => (
                  <button
                    key={nationality}
                    onClick={() => {
                      onSelect(nationality)
                      setIsOpen(false)
                      setSearchInput("")
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors ${
                      selectedNationality === nationality
                        ? "bg-primary/20 font-semibold text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {nationality}
                  </button>
                ))
              ) : (
                <div className="px-4 py-4 text-center text-muted-foreground">{t.noResults}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
