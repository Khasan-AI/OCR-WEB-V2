import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatusPageContent } from "@/components/status-page"

export const metadata: Metadata = {
  title: "Status · OCR.AI",
  description: "Availability and incident updates for OCR.AI services.",
}

export default function Status() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <StatusPageContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
