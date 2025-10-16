import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GetStartedPageContent } from "@/components/get-started-page"

export const metadata: Metadata = {
  title: "Get started · OCR.AI",
  description: "Create your OCR.AI Starter account, generate an API key, and process your first document.",
}

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GetStartedPageContent />
      <Footer />
    </div>
  )
}
