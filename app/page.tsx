"use client"

import { Hero } from "@/components/hero"
import { PsychologySection } from "@/components/psychology-section"
import { InteractiveSkills } from "@/components/interactive-skills"
import { GroupDynamics } from "@/components/group-dynamics"
import { NeuroscienceInsights } from "@/components/neuroscience-insights"
import { ConflictResolution } from "@/components/conflict-resolution"
import { EngagementMetrics } from "@/components/engagement-metrics"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PsychologySection />
      <InteractiveSkills />
      <GroupDynamics />
      <NeuroscienceInsights />
      <ConflictResolution />
      <EngagementMetrics />
      <Footer />
    </main>
  )
}
