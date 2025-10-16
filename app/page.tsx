import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { IndustrySolutions } from "@/components/industry-solutions"
import { ROICalculator } from "@/components/roi-calculator"
import { DeploymentOptions } from "@/components/deployment-options"
import { TechnicalSpecs } from "@/components/technical-specs"
import { CaseStudies } from "@/components/case-studies"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ROICalculator />
        <IndustrySolutions />
        <DeploymentOptions />
        <TechnicalSpecs />
        <CaseStudies />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
