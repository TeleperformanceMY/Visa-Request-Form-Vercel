import { VisaToolHeader } from "@/components/visa-tool-header"
import { VisaToolMain } from "@/components/visa-tool-main"

export const metadata = {
  title: "Visa Request Application | Global Visa Checker",
  description:
    "Check visa requirements for your nationality and submit your visa request application with all required documents.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <VisaToolHeader />
      {/* Visa Requirements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <VisaToolMain />
        </div>
      </div>
    </main>
  )
}
