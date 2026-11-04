import type React from "react"

export interface DeepDiveArchitectureStep {
  name: string
  detail: string
  formula?: string
}

export interface DeepDiveMetric {
  metric: string
  label: string
  context?: string
}

export interface DeepDiveModule {
  title: string
  description: string
  inputs?: string[]
  outputs?: string[]
}

export interface DeepDiveFormula {
  title: string
  latex: string
  explanation: string
  variables?: { symbol: string; meaning: string }[]
}

export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  category: "ai" | "sde" | "research"
  badge: string
  description: string
  highlights: string[]
  tags: string[]
  githubUrl: string
  liveUrl?: string
  visual: React.ReactNode

  // Academic / Research Metadata
  academicMeta?: {
    type: "Capstone Project" | "Mini Project" | "Independent Research"
    courseCode?: string
    institution: string
    department: string
    patentNo?: string
    patentStatus?: string
    publicationDate?: string
  }

  // 10 Core Structured Deep Dive Sections
  overview: string
  problem: string
  literatureGaps?: string[]
  solution: string
  architecture: {
    summary: string
    steps: DeepDiveArchitectureStep[]
  }
  formulas?: DeepDiveFormula[]
  modules?: DeepDiveModule[]
  techStack: string[]
  contribution: string
  implementation: string
  simulationRegions?: {
    region: string
    scenarios: string
    findings: string
  }[]
  results: DeepDiveMetric[]
  challenges: string
}

