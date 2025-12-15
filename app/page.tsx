import { VisaToolContent } from "@/components/visa-tool-content"

export const metadata = {
  title: "Visa Request Application | Global Visa Checker",
  description:
    "Check visa requirements for your nationality and submit your visa request application with all required documents.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <VisaToolContent />
    </main>
  )
}
