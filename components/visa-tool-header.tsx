'use client'

import Image from "next/image"
import { GlobeIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type VisaToolHeaderProps = {
  language: "en" | "ja" | "zh"
  onLanguageChange: (language: "en" | "ja" | "zh") => void
}

export function VisaToolHeader({ language, onLanguageChange }: VisaToolHeaderProps) {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative flex justify-center">
          <div className="absolute left-0 top-0 flex items-center">
            <Image
              src="/TPLogo11.png"
              alt="TP Logo"
              width={70}
              height={80}
              className="rounded-md bg-muted"
              priority
            />
          </div>

          <div className="absolute right-0 top-0">
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-[150px]">
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-muted-foreground" />
                  <SelectValue placeholder="Select language" />
                </div>
              </SelectTrigger>
              <SelectContent align="end" className="w-[180px]">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Visa Request Form</h1>
            <p className="text-muted-foreground text-lg">
              Submit work-travel visa requests so employees can visit other countries for business
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
