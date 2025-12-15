"use client"

import { useState } from "react"
import { VisaToolHeader } from "./visa-tool-header"
import { VisaToolMain } from "./visa-tool-main"

export function VisaToolContent() {
  const [language, setLanguage] = useState<"en" | "ja" | "zh">("en")

  return (
    <>
      <VisaToolHeader language={language} onLanguageChange={setLanguage} />
      <VisaToolMain language={language} />
    </>
  )
}

