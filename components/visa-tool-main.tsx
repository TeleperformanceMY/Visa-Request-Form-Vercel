"use client"

import { useState, useEffect } from "react"
import { NationalitySelector } from "./nationality-selector"
import { CountrySearch } from "./country-search"
import { VisaResultsGrid } from "./visa-results-grid"
import { VisaRequestForm } from "./visa-request-form"
import { Spinner } from "./spinner"

interface VisaCategory {
  visaFree: string[]
  visaOnArrival: string[]
  visaRequired: string[]
  electronicVisa: string[]
  notApplicable: string[]
}

export function VisaToolMain() {
  const [selectedNationality, setSelectedNationality] = useState<string>("")
  const [selectedDestinationCountry, setSelectedDestinationCountry] = useState<string | null>(null)
  const [selectedVisaType, setSelectedVisaType] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [visaData, setVisaData] = useState<VisaCategory | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [language, setLanguage] = useState<"en" | "ja" | "zh">("en")
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)

  useEffect(() => {
    if (!selectedNationality) {
      setVisaData(null)
      return
    }

    const fetchVisaData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`/api/visa-requirements?nationality=${encodeURIComponent(selectedNationality)}`)

        if (!response.ok) {
          throw new Error("Failed to fetch visa requirements")
        }

        const data = await response.json()
        setVisaData(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred"
        setError(errorMessage)
        setVisaData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchVisaData()
  }, [selectedNationality])

  const handleCountrySelect = (country: string, visaType: string) => {
    setSelectedDestinationCountry(country)
    setSelectedVisaType(visaType)
  }

  const handleLanguageChange = (lang: "en" | "ja" | "zh") => {
    setLanguage(lang)
    setShowLanguageDropdown(false)
  }

  const translations = {
    en: {
      title: "Visa Requirement & Application",
      subtitle: "Visa Request Application Form",
      selectNationality: "Select your nationality to get started.",
      searchToExplore: "Select a nationality and search to explore visa requirements.",
      english: "English",
      japanese: "日本語",
      chinese: "中文",
    },
    ja: {
      title: "ビザ要件とアプリケーション",
      subtitle: "ビザリクエストアプリケーションフォーム",
      selectNationality: "開始するにはあなたの国籍を選択してください。",
      searchToExplore: "国籍を選択して検索し、ビザ要件を確認してください。",
      english: "English",
      japanese: "日本語",
      chinese: "中文",
    },
    zh: {
      title: "签证要求和申请",
      subtitle: "签证申请表",
      selectNationality: "选择您的国籍开始。",
      searchToExplore: "选择国籍并搜索以探索签证要求。",
      english: "English",
      japanese: "日本語",
      chinese: "中文",
    },
  }

  const t = translations[language]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-end mb-8">
        {/* Language dropdown in top-right corner */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
          >
            <span className="text-2xl">🌐</span>
            <span className="hidden sm:inline text-sm font-medium">
              {language === "en" ? "EN" : language === "ja" ? "JA" : "ZH"}
            </span>
          </button>

          {/* Dropdown menu */}
          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-50">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {t.english}
              </button>
              <button
                onClick={() => handleLanguageChange("ja")}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  language === "ja"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {t.japanese}
              </button>
              <button
                onClick={() => handleLanguageChange("zh")}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  language === "zh"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {t.chinese}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Combined Visa Requirement Check & Application Form */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-8">{t.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-1">
            <NationalitySelector
              selectedNationality={selectedNationality}
              onSelect={setSelectedNationality}
              language={language}
            />
          </div>
          <div className="lg:col-span-2">
            <CountrySearch searchQuery={searchQuery} onSearch={setSearchQuery} language={language} />
          </div>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg mb-6">
            <p className="font-medium">Error: {error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Spinner />
          </div>
        ) : visaData ? (
          <VisaResultsGrid
            visaData={visaData}
            searchQuery={searchQuery}
            onCountrySelect={handleCountrySelect}
            language={language}
          />
        ) : selectedNationality && !loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">{t.searchToExplore}</p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">{t.selectNationality}</p>
          </div>
        )}
      </div>

      {/* Single Visa Request Application Form */}
      {selectedNationality && (
        <div id="visa-request-form" className="border-t border-border pt-12 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t.subtitle}</h2>
          <VisaRequestForm
            selectedNationality={selectedNationality}
            selectedDestinationCountry={selectedDestinationCountry}
            selectedVisaType={selectedVisaType}
            language={language}
          />
        </div>
      )}
    </div>
  )
}
