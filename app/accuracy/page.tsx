import type { Metadata } from "next"
import { AccuracyPage } from "@/components/accuracy-page"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Accuracy methodology · OCR.AI",
  description:
    "Understand how OCR.AI measures field-level accuracy across IDs, invoices, and forms with transparent benchmark datasets.",
}

export default function Accuracy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AccuracyPage />
      <Footer />
    </div>
  )
}
