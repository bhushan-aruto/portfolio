

"use client"
import { HeroSection } from "@/components/hero-section"
import { SummarySection } from "@/components/summary-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechnicalSkillsSection } from "@/components/technical-skills-section"
import { ExtracurricularSection } from "@/components/extracurricular-section"
import { Footer } from "@/components/footer"
import { InspirationSection } from "@/components/inspiration-section"
// import GoogleGeminiEffectDemo from "@/components/google-gemini-effect-demo"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SummarySection />
      <main className="container mx-auto px-4 py-16 space-y-16">
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnicalSkillsSection />
        <ExtracurricularSection />
        <InspirationSection />
      </main>

      <Footer />
      {/* <GoogleGeminiEffectDemo /> */}
    </div>
  )
}
