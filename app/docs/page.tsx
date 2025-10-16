import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsPage } from "@/components/docs-page"

export const metadata: Metadata = {
  title: "Documentation · OCR.AI",
  description: "Developer documentation for integrating OCR.AI, covering authentication, endpoints, webhooks, and SDKs.",
}

export default function Docs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DocsPage />
      <Footer />
    </div>
  )
}
