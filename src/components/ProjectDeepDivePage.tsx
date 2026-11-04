import React, { useEffect } from "react"
import type { Project } from "../types/project"

interface ProjectDeepDivePageProps {
  project: Project
  allProjects: Project[]
  onBack: () => void
  onSelectProject: (projectId: string) => void
}

const ArrowLeftIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)

const ArrowUpRight = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
    <path
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      fillRule="evenodd"
    />
  </svg>
)

const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
  </svg>
)

export default function ProjectDeepDivePage({
  project,
  allProjects,
  onBack,
  onSelectProject,
}: ProjectDeepDivePageProps) {
  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [project.id])

  const currentIndex = allProjects.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <div className="deep-dive-page-shell">
      {/* Top Floating Control Bar */}
      <nav className="deep-dive-nav-bar" aria-label="Project deep-dive navigation">
        <button className="deep-dive-back-btn" onClick={onBack} aria-label="Return to portfolio projects">
          <ArrowLeftIcon size={16} /> <span>Back to Portfolio</span>
        </button>

        <div className="deep-dive-nav-center">
          <span className="deep-dive-crumb-prefix">CASE STUDY /</span>
          <span className="deep-dive-crumb-title">{project.title}</span>
        </div>

        <div className="deep-dive-nav-actions">
          {prevProject && (
            <button
              className="deep-dive-page-nav-btn"
              onClick={() => onSelectProject(prevProject.id)}
              title={`Previous: ${prevProject.title}`}
            >
              ← #{prevProject.number}
            </button>
          )}
          {nextProject && (
            <button
              className="deep-dive-page-nav-btn"
              onClick={() => onSelectProject(nextProject.id)}
              title={`Next: ${nextProject.title}`}
            >
              #{nextProject.number} →
            </button>
          )}
          <a
            className="deep-dive-github-btn"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon size={14} /> <span>GitHub Repo</span>
          </a>
        </div>
      </nav>

      {/* Main Container */}
      <main className="deep-dive-main-content">
        {/* Project Selector Rail */}
        <div className="deep-dive-project-selector" role="tablist" aria-label="Select Project Dossier">
          {allProjects.map((p) => (
            <button
              key={p.id}
              className={`selector-pill ${p.id === project.id ? "active" : ""}`}
              onClick={() => onSelectProject(p.id)}
              role="tab"
              aria-selected={p.id === project.id}
            >
              <span className="selector-num">{p.number}</span>
              <span className="selector-name">{p.title}</span>
              {p.badge.includes("Patent") && <span className="selector-dot patent" title="Published Patent" />}
            </button>
          ))}
        </div>

        {/* Hero Header */}
        <header className="deep-dive-hero">
          <div className="deep-dive-meta-badges">
            <span className="dossier-pill">ENGINEERING DOSSIER /{project.number}</span>
            <span className="badge-category">{project.badge}</span>
            {project.academicMeta?.patentNo && (
              <span className="badge-patent">Published Indian Patent Application</span>
            )}
            {project.liveUrl && (
              <span className="badge-live">
                <i /> Live Deployment Available
              </span>
            )}
          </div>

          <h1 className="deep-dive-title">{project.title}</h1>
          <p className="deep-dive-subtitle">{project.subtitle}</p>

          {/* Academic & Patent Attribution Banner */}
          {project.academicMeta && (
            <div className="academic-meta-card">
              <div className="academic-meta-grid">
                <div>
                  <small>ACADEMIC SUPERVISION &amp; INSTITUTION</small>
                  <strong>{project.academicMeta.supervision}</strong>
                  <span>{project.academicMeta.institution}</span>
                  <em>{project.academicMeta.department}</em>
                </div>
                {project.academicMeta.patentNo ? (
                  <div>
                    <small>PATENT STATUS &amp; APPLICATION</small>
                    <strong style={{ color: "var(--acid)" }}>{project.academicMeta.patentNo}</strong>
                    <span>Status: {project.academicMeta.patentStatus}</span>
                    <em>Published: {project.academicMeta.publicationDate}</em>
                  </div>
                ) : (
                  <div>
                    <small>PROJECT CONTEXT</small>
                    <strong>{project.academicMeta.courseCode || "Integrated M.Tech Final Year"}</strong>
                    <span>Developer: {project.academicMeta.teamMembers?.join(", ")}</span>
                    <em>Vellore Institute of Technology, Vellore</em>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quick Action Links Bar */}
          <div className="deep-dive-action-row">
            <a
              className="btn-primary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={16} /> Explore GitHub Source Code <ArrowUpRight size={14} />
            </a>
            {project.liveUrl && (
              <a
                className="btn-secondary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Live Application <ArrowUpRight size={14} />
              </a>
            )}
            <button
              className="btn-secondary"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href)
                  alert("Project URL copied to clipboard!")
                }
              }}
            >
              Share Technical Case Study
            </button>
          </div>
        </header>

        {/* SECTION 1: Overview */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>01</span>
            <h3>Project Overview &amp; Executive Summary</h3>
          </div>
          <p className="deep-dive-prose">{project.overview}</p>
        </section>

        {/* SECTION 2: Problem Statement & Literature Gaps */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>02</span>
            <h3>Problem Statement &amp; Research Gaps</h3>
          </div>
          <p className="deep-dive-prose">{project.problem}</p>

          {project.literatureGaps && project.literatureGaps.length > 0 && (
            <div className="gaps-container">
              <h4>Identified Gaps in Existing Literature</h4>
              <div className="gaps-grid">
                {project.literatureGaps.map((gap, i) => (
                  <div className="gap-card" key={i}>
                    <span className="gap-badge">GAP {i + 1}</span>
                    <p>{gap}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* SECTION 3: Proposed Solution & System Architecture */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>03</span>
            <h3>Proposed Solution &amp; System Architecture</h3>
          </div>
          <p className="deep-dive-prose">{project.solution}</p>

          <div className="architecture-box">
            <div className="architecture-header">
              <small>END-TO-END PIPELINE ARCHITECTURE</small>
              <strong>{project.architecture.summary}</strong>
            </div>

            <div className="architecture-steps-vertical">
              {project.architecture.steps.map((step, idx) => (
                <div className="arch-step-row" key={step.name}>
                  <div className="step-num-badge">{idx + 1}</div>
                  <div className="step-text-wrap">
                    <strong>{step.name}</strong>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Mathematical Formulations & Algorithms */}
        {project.formulas && project.formulas.length > 0 && (
          <section className="deep-dive-block">
            <div className="block-label">
              <span>04</span>
              <h3>Mathematical Formulations &amp; Governing Equations</h3>
            </div>
            <p className="deep-dive-prose">
              The engineering rigor of this system is derived from mathematical models integrating physical conservation laws, probabilistic hazard indices, and recursive state transitions.
            </p>

            <div className="formulas-grid">
              {project.formulas.map((form, idx) => (
                <div className="formula-card" key={idx}>
                  <div className="formula-title-row">
                    <span className="formula-badge">FORMULA {idx + 1}</span>
                    <h4>{form.title}</h4>
                  </div>
                  <div className="formula-math-display">
                    <code>{form.latex}</code>
                  </div>
                  <p className="formula-explanation">{form.explanation}</p>
                  {form.variables && form.variables.length > 0 && (
                    <div className="formula-vars-table">
                      <small>VARIABLE NOTATIONS</small>
                      <div className="vars-list">
                        {form.variables.map((v) => (
                          <div className="var-item" key={v.symbol}>
                            <code>{v.symbol}</code> : <span>{v.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 5: System Modules & Engineering Workflow */}
        {project.modules && project.modules.length > 0 && (
          <section className="deep-dive-block">
            <div className="block-label">
              <span>05</span>
              <h3>Functional Modules &amp; Subsystem Breakdown</h3>
            </div>
            <div className="modules-grid">
              {project.modules.map((mod, idx) => (
                <div className="module-card" key={idx}>
                  <h4>{mod.title}</h4>
                  <p>{mod.description}</p>
                  <div className="io-section">
                    {mod.inputs && (
                      <div className="io-group">
                        <small>INPUTS</small>
                        <ul>
                          {mod.inputs.map((inp) => (
                            <li key={inp}>→ {inp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {mod.outputs && (
                      <div className="io-group">
                        <small>OUTPUTS</small>
                        <ul>
                          {mod.outputs.map((out) => (
                            <li key={out}>✓ {out}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 6: Multi-Regional Experimental Validation (If applicable) */}
        {project.simulationRegions && project.simulationRegions.length > 0 && (
          <section className="deep-dive-block">
            <div className="block-label">
              <span>06</span>
              <h3>Multi-Regional Geological Validation &amp; Simulations</h3>
            </div>
            <p className="deep-dive-prose">
              The framework was empirically benchmarked across three diverse geographical and hydrological terrains in India:
            </p>
            <div className="regions-grid">
              {project.simulationRegions.map((reg) => (
                <div className="region-card" key={reg.region}>
                  <div className="region-header">
                    <h4>{reg.region}</h4>
                    <span className="scenario-tag">{reg.scenarios}</span>
                  </div>
                  <p>{reg.findings}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 7: Technology Stack & Architectural Rationale */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>07</span>
            <h3>Technology Stack &amp; Implementation Arsenal</h3>
          </div>
          <div className="tech-tags-large">
            {project.techStack.map((tech) => (
              <span className="tech-pill-large" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 8: Individual Contribution & Code Implementation */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>08</span>
            <h3>Individual Engineering Contribution</h3>
          </div>
          <div className="contribution-card">
            <p>{project.contribution}</p>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <small style={{ color: "var(--acid)", fontWeight: 700, letterSpacing: "0.08em" }}>
                IMPLEMENTATION DETAILS
              </small>
              <p style={{ marginTop: "6px", color: "#bbb", fontSize: "14px", lineHeight: "1.6" }}>
                {project.implementation}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: Measurable Results & Evaluation */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>09</span>
            <h3>Measurable Results &amp; Quantitative Metrics</h3>
          </div>
          <div className="metrics-showcase-grid">
            {project.results.map((res) => (
              <div className="metric-box" key={res.label}>
                <strong>{res.metric}</strong>
                <span>{res.label}</span>
                {res.context && <small>{res.context}</small>}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: Engineering Challenges & Solutions */}
        <section className="deep-dive-block">
          <div className="block-label">
            <span>10</span>
            <h3>Technical Obstacles &amp; Resolution Strategy</h3>
          </div>
          <div className="challenges-card">
            <p>{project.challenges}</p>
          </div>
        </section>

        {/* Bottom Navigation */}
        <footer className="deep-dive-footer-nav">
          <button className="btn-secondary" onClick={onBack}>
            <ArrowLeftIcon size={16} /> Return to Portfolio Main
          </button>
          <div className="deep-dive-footer-right">
            {prevProject && (
              <button
                className="btn-secondary"
                onClick={() => onSelectProject(prevProject.id)}
              >
                ← Previous Project (#{prevProject.number})
              </button>
            )}
            {nextProject && (
              <button
                className="btn-primary"
                onClick={() => onSelectProject(nextProject.id)}
              >
                Next Project (#{nextProject.number}) →
              </button>
            )}
          </div>
        </footer>
      </main>
    </div>
  )
}

