import React, { useEffect, useState } from "react"
import { projectsData } from "./data/projectsData"
import type { Project } from "./types/project"
import ProjectDeepDivePage from "./components/ProjectDeepDivePage"

// Icons
const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
)

const GitHubIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const ExternalLinkIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
)

const DownloadIcon = ({ size = 16 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
)

const CopyIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <rect height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" width="13" x="9" y="9" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

const CheckIcon = ({ size = 14 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)

const SearchIcon = ({ size = 15 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
  </svg>
)

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg aria-hidden="true" fill="none" height="24" viewBox="0 0 24 24" width="24">
    {open ? (
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    )}
  </svg>
)

// Original 3 Focused Skill Domains Matching Resume
const skillDomains = [
  {
    title: "AI, ML & GenAI",
    icon: "🧠",
    badge: "Core AI / ML",
    description: "Machine learning pipelines, language models, retrieval-augmented generation (RAG), and agent protocols.",
    skills: [
      { name: "Machine Learning", highlight: true },
      { name: "NLP", highlight: true },
      { name: "LLMs", highlight: true },
      { name: "RAG", highlight: true },
      { name: "LangChain", highlight: true },
      { name: "MCP (Model Context Protocol)", highlight: true },
      { name: "ChromaDB", highlight: true },
      { name: "Data Cleaning & Preprocessing", highlight: true },
    ],
  },
  {
    title: "Languages & Development",
    icon: "⚡",
    badge: "Backend & Systems",
    description: "Object-oriented software development, web engineering, RESTful backends, and containerized tools.",
    skills: [
      { name: "Python", highlight: true },
      { name: "Java (OOPS)", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Web Development", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Git / GitHub", highlight: true },
      { name: "Postman", highlight: true },
    ],
  },
  {
    title: "Databases & Core CS Concepts",
    icon: "📐",
    badge: "Computer Science",
    description: "Database architectures and foundational computer science principles from Integrated M.Tech at VIT Vellore.",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", highlight: true },
      { name: "Operating Systems", highlight: true },
      { name: "DBMS", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Computer Networks", highlight: true },
      { name: "Cyber Security", highlight: true },
    ],
  },
]

// Academic Information
const educationList = [
  {
    period: "2022 — 2027",
    role: "Integrated M.Tech · Computer Science and Engineering",
    institution: "Vellore Institute of Technology (VIT), Vellore",
    detail: "CGPA: 8.49 / 10",
  },
  {
    period: "June 2026",
    role: "Published Indian Patent Application",
    institution: "Application No. 202641065384",
    detail: "Adaptive Terrain Graph-based Digital Twin Framework for Multi-Hazard Disaster Prediction",
  },
  {
    period: "2021 — 2022",
    role: "Class XII",
    institution: "Dr. K.K.R’s Happy Valley School",
    detail: "Aggregate: 90.4%",
  },
  {
    period: "2019 — 2020",
    role: "Class X",
    institution: "Akshara School",
    detail: "Aggregate: 80.0%",
  },
]

// Verified Certifications with direct Google Drive links
const certifications = [
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft Credential",
    url: "https://drive.google.com/file/d/123Hk4t4EM3_jqssMz7d_XKjEYlDolwcj/view",
  },
  {
    name: "AI Upskilling Certificate: Technical Foundations",
    issuer: "Qualcomm Technologies, Inc.",
    url: "https://drive.google.com/file/d/1jkhCSN4zClRDabnA5tak9U1uoPwH1u-A/view",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    url: "https://drive.google.com/file/d/160-P7Kn9347M7JmShqDif3IxrRuex9rI/view",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    url: "https://drive.google.com/file/d/1cJRT4p0YIsGdoYMwkLvjCiuZWhKdT5QD/view",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "sde" | "research">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Dedicated Deep Dive Page State (with URL hash deep linking)
  const [activeDeepDiveId, setActiveDeepDiveId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash.startsWith("#project/")) {
        return hash.replace("#project/", "")
      }
    }
    return null
  })

  // Listen to hash changes for browser forward/backward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith("#project/")) {
        setActiveDeepDiveId(hash.replace("#project/", ""))
      } else {
        setActiveDeepDiveId(null)
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const openDeepDive = (id: string) => {
    setActiveDeepDiveId(id)
    window.location.hash = `#project/${id}`
  }

  const closeDeepDive = () => {
    setActiveDeepDiveId(null)
    window.location.hash = "#work"
  }

  // Reveal animations for scroll elements
  useEffect(() => {
    if (activeDeepDiveId) return // Skip observer when on deep dive page

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        }),
      { threshold: 0.08 },
    )
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [activeCategory, searchQuery, activeDeepDiveId])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setToastMessage(`Copied ${label} to clipboard!`)
    setTimeout(() => setToastMessage(null), 2500)
  }

  // Filter projects by category and text search query
  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory
    const query = searchQuery.trim().toLowerCase()
    if (!query) return matchesCategory

    const matchesSearch =
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query)) ||
      p.highlights.some((h) => h.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })

  const closeMenu = () => setMenuOpen(false)

  // -------------------------------------------------------------
  // RENDER DEDICATED PROJECT DEEP DIVE PAGE IF ACTIVE
  // -------------------------------------------------------------
  if (activeDeepDiveId) {
    const currentProject = projectsData.find((p) => p.id === activeDeepDiveId) || projectsData[0]
    return (
      <ProjectDeepDivePage
        project={currentProject}
        allProjects={projectsData}
        onBack={closeDeepDive}
        onSelectProject={(id) => openDeepDive(id)}
      />
    )
  }

  // -------------------------------------------------------------
  // RENDER MAIN PORTFOLIO SHELL
  // -------------------------------------------------------------
  return (
    <div className="site-shell">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="alert">
          <CheckIcon size={16} /> {toastMessage}
        </div>
      )}

      {/* Navigation */}
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Srikar Yalamarthi Home">
          Srikar Yalamarthi <span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>
            Projects ({projectsData.length})
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#patent" onClick={closeMenu}>
            Patent
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a
            className="nav-social-btn"
            href="https://www.linkedin.com/in/srikar-yalamarthi-1560ab275/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <LinkedInIcon size={15} /> LinkedIn
          </a>
          <a
            className="nav-social-btn"
            href="https://github.com/srikar123s"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <GitHubIcon size={15} /> GitHub
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="top">
          <div className="hero-kicker-wrap">
            <div className="status-pill">
              <span className="status-dot" /> Targeting AI / ML Engineer &amp; SDE Roles
            </div>
            <div className="hero-stats-badge">
              <span>VIT Vellore (CGPA <strong>8.49</strong>)</span>
              <span>•</span>
              <span><strong>1</strong> Published Patent</span>
              <span>•</span>
              <span><strong>10</strong> Complete Projects</span>
            </div>
          </div>

          <div className="hero-main-grid">
            <div className="hero-content-col">
              <h1>
                Engineering applied AI
                <br />
                models &amp; scalable
                <br />
                <em>software systems.</em>
              </h1>

              <div className="hero-summary">
                <p>
                  I’m <strong>Srikar Yalamarthi</strong>, an Integrated M.Tech Computer Science student at VIT Vellore.
                  I build intelligent applications and robust software systems that tackle genuine engineering problems—ranging from published patent research in digital twin hazard prediction and adaptive agricultural AI decision frameworks to hybrid speech recognition and interactive full-stack platforms.
                </p>
                <div className="hero-actions">
                  <a className="btn-primary" href="#work">
                    View Projects &amp; Demos <ArrowUpRight size={16} />
                  </a>
                  <a
                    className="btn-secondary"
                    href="/Srikar-Yalamarthi-Resume.pdf"
                    download="Srikar-Yalamarthi-Resume.pdf"
                  >
                    <DownloadIcon size={16} /> Resume (PDF)
                  </a>
                  <a
                    className="btn-secondary"
                    href="https://www.linkedin.com/in/srikar-yalamarthi-1560ab275/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon size={16} /> LinkedIn
                  </a>
                  <a
                    className="btn-secondary"
                    href="https://github.com/srikar123s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-portrait-col">
              <div className="hero-portrait-card">
                <video
                  src="/hero-right.mp4"
                  poster="/srikar-photo.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="hero-portrait-img"
                  aria-label="Srikar Yalamarthi - Cinematic Video"
                />
                <div className="hero-portrait-overlay" />
                <div className="hero-portrait-badge">
                  <div className="hero-portrait-badge-info">
                    <strong>Srikar Yalamarthi</strong>
                    <small>VIT VELLORE · CSE (CGPA 8.49)</small>
                  </div>
                  <a
                    className="hero-mini-scroll-btn"
                    href="#work"
                    aria-label="Scroll to projects"
                    title="Explore projects"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar for Recruiters */}
          <div className="stats-banner">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Production Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">01</span>
                <span className="stat-label">Published Patent App</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">06</span>
                <span className="stat-label">Live Deployed Apps</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8.49</span>
                <span className="stat-label">CGPA · VIT Vellore</span>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects Section */}
        <section className="work-section" id="work">
          <div className="section-heading-wrap reveal">
            <div className="section-heading">
              <p className="section-kicker">FEATURED ENGINEERING &amp; APPLIED AI</p>
              <h2>
                Selected projects &amp;
                <br />
                <em>production codebases.</em>
              </h2>
            </div>
            <p className="heading-note">
              Every project includes source code on GitHub, working deployed interactive apps, and deep-dive technical engineering dossiers.
            </p>
          </div>

          {/* Controls: Category Filter Tabs + Live Search */}
          <div className="controls-bar reveal">
            <div className="filter-tabs" role="tablist" aria-label="Filter projects">
              <button
                className={activeCategory === "all" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("all")}
                role="tab"
                aria-selected={activeCategory === "all"}
              >
                All Projects <span className="badge">{projectsData.length}</span>
              </button>
              <button
                className={activeCategory === "ai" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("ai")}
                role="tab"
                aria-selected={activeCategory === "ai"}
              >
                AI &amp; Machine Learning <span className="badge">{projectsData.filter((p) => p.category === "ai").length}</span>
              </button>
              <button
                className={activeCategory === "research" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("research")}
                role="tab"
                aria-selected={activeCategory === "research"}
              >
                Research &amp; Patents <span className="badge">{projectsData.filter((p) => p.category === "research").length}</span>
              </button>
              <button
                className={activeCategory === "sde" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("sde")}
                role="tab"
                aria-selected={activeCategory === "sde"}
              >
                Full Stack &amp; Systems <span className="badge">{projectsData.filter((p) => p.category === "sde").length}</span>
              </button>
            </div>

            {/* Recruiter Quick Search Bar */}
            <div className="search-input-wrap">
              <SearchIcon size={14} />
              <input
                type="text"
                placeholder="Search AI, RAG, FastAPI, Full Stack, Web..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Filter projects by keyword"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "11px" }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Project List */}
          <div className="project-list">
            {filteredProjects.length === 0 ? (
              <div style={{ padding: "60px 0", textAlign: "center", color: "#9c9a92" }}>
                <p>No projects match "{searchQuery}" under this category filter.</p>
                <button
                  className="filter-tab"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                  style={{ margin: "16px auto 0" }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <div className="project-visual">{project.visual}</div>
                  <div className="project-details">
                    <div>
                      <div className="project-meta-top">
                        <span className="project-index">/{project.number}</span>
                        <div className="project-badges">
                          {project.liveUrl && (
                            <span className="badge-live">
                              <i /> Live Demo
                            </span>
                          )}
                          {project.badge.includes("Patent") && (
                            <span className="badge-patent">Patent Published</span>
                          )}
                          <span className="badge-category">{project.badge}</span>
                        </div>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.description}</p>
                      <div className="project-highlights">
                        {project.highlights.map((point) => (
                          <div className="project-highlight-point" key={point}>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <ul className="project-tags">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>

                      <div className="project-actions">
                        <button
                          className="btn-case-study"
                          onClick={() => openDeepDive(project.id)}
                        >
                          Deep Dive Case Study →
                        </button>
                        {project.liveUrl && (
                          <a
                            className="btn-live-app"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo <ExternalLinkIcon size={14} />
                          </a>
                        )}
                        <a
                          className="btn-repo"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon size={15} /> Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Original Patent Spotlight Banner Layout */}
          <div className="patent-spotlight reveal" id="patent">
            <div className="patent-spotlight-inner">
              <div>
                <span className="patent-badge-top">GOVERNMENT OF INDIA PATENT OFFICE</span>
                <h3>Published Indian Patent Application</h3>
                <p>
                  <strong>Title:</strong> Multi-Hazard Prediction System Using Adaptive Terrain Graph
                  <br />
                  <strong>Application No:</strong> 202641065384 · <strong>Published:</strong> June 2026
                  <br />
                  Proposed an innovative Digital Twin and adaptive terrain mesh framework that dynamically simulates hydrological runoff and soil shear stress for real-time flood and landslide risk forecasting.
                </p>
              </div>
              <div className="patent-meta-box">
                <div className="patent-meta-row">
                  <span>Application Status</span>
                  <strong>Published Official Journal</strong>
                </div>
                <div className="patent-meta-row">
                  <span>Technology Field</span>
                  <strong>Geospatial AI &amp; Digital Twin</strong>
                </div>
                <button
                  className="btn-live-app"
                  onClick={() => openDeepDive("multi-hazard-prediction-system")}
                  style={{ justifyContent: "center", cursor: "pointer", border: "none" }}
                >
                  View Patent Dossier →
                </button>
                <a
                  className="btn-repo"
                  href="https://github.com/srikar123s/Multi-Hazard-Prediction-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ justifyContent: "center", marginTop: "8px" }}
                >
                  <GitHubIcon size={15} /> Patent Codebase
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section - Original 3-Domain Layout */}
        <section className="skills-section" id="skills">
          <div className="skills-header-wrap reveal">
            <p className="section-kicker">TECHNICAL ARSENAL</p>
            <div className="section-heading" style={{ marginTop: "10px" }}>
              <h2>
                Skills tailored for
                <br />
                <em>AI / ML &amp; Backend Engineering.</em>
              </h2>
            </div>
            <p style={{ color: "#62615a", fontSize: "15px", maxWidth: "650px", marginTop: "14px" }}>
              Balanced technical competencies directly matching production requirements and academic grounding.
            </p>
          </div>

          <div className="skills-grid">
            {skillDomains.map((domain) => (
              <div
                className={`skill-domain-card reveal ${domain.badge === "Core AI / ML" ? "featured-domain" : ""}`}
                key={domain.title}
              >
                <div className="domain-card-head">
                  <div className="domain-title-wrap">
                    <span className="domain-icon" aria-hidden="true">
                      {domain.icon}
                    </span>
                    <div>
                      <h3>{domain.title}</h3>
                      <p>{domain.description}</p>
                    </div>
                  </div>
                  <span className="domain-badge">{domain.badge}</span>
                </div>

                <div className="domain-pill-cloud">
                  {domain.skills.map((skill) => (
                    <span
                      className={`arsenal-pill ${skill.highlight ? "highlight-pill" : ""}`}
                      key={skill.name}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unified Education & Certifications Section */}
        <section className="experience-section" id="education">
          <div className="experience-inner">
            <p className="section-kicker">ACADEMIC &amp; CREDENTIALS</p>
            <div className="section-heading" style={{ marginTop: "10px", marginBottom: "40px" }}>
              <h2>
                Formal background &amp;
                <br />
                <em>verified achievements.</em>
              </h2>
            </div>

            <div className="timeline-list reveal">
              {educationList.map((item) => (
                <div className="experience-row" key={item.role}>
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-content">
                    <h3>{item.role}</h3>
                    <p>{item.institution}</p>
                    {item.detail && <small>{item.detail}</small>}
                  </div>
                </div>
              ))}
            </div>

            <div className="certifications-wrap reveal">
              <p>Professional Certifications</p>
              <div className="cert-cards-grid">
                {certifications.map((cert) => (
                  <a
                    className="cert-card"
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={cert.name}
                    title="Open verified credential in Google Drive"
                  >
                    <div className="cert-card-info">
                      <span>{cert.name}</span>
                      <small>{cert.issuer}</small>
                    </div>
                    <span className="cert-link-badge">
                      View <ExternalLinkIcon size={12} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recruiter Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="contact-kicker">CONNECT &amp; HIRE</p>
            <div className="contact-title reveal">
              <h2>
                Ready to contribute
                <br />
                <em>to your team.</em>
              </h2>
              <div className="contact-actions-large">
                <a
                  className="contact-round-button"
                  href="mailto:srikaryalamarthi210704@gmail.com"
                  aria-label="Email Srikar Yalamarthi"
                >
                  <ArrowUpRight size={44} />
                </a>
              </div>
            </div>

            <div className="recruiter-connect-cards reveal">
              <div className="connect-card">
                <small>DIRECT EMAIL</small>
                <strong>srikaryalamarthi210704@gmail.com</strong>
                <strong>srikaryalamarthi2004@gmail.com</strong>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard("srikaryalamarthi210704@gmail.com", "email")}
                >
                  <CopyIcon size={13} /> Copy Email 1
                </button>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard("srikaryalamarthi2004@gmail.com", "email")}
                >
                  <CopyIcon size={13} /> Copy Email 2
                </button>
              </div>

              <div className="connect-card">
                <small>PHONE / WHATSAPP</small>
                <strong>+91 93924 49356</strong>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard("+919392449356", "phone")}
                >
                  <CopyIcon size={13} /> Copy Phone
                </button>
              </div>

              <div className="connect-card">
                <small>PROFILES &amp; RESUME</small>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "8px 0 14px" }}>
                  <a
                    href="https://www.linkedin.com/in/srikar-yalamarthi-1560ab275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--ink)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    <LinkedInIcon size={16} /> linkedin.com/in/srikar-yalamarthi
                  </a>
                  <a
                    href="https://github.com/srikar123s"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--ink)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    <GitHubIcon size={16} /> github.com/srikar123s
                  </a>
                  <a
                    href="/Srikar-Yalamarthi-Resume.pdf"
                    download="Srikar-Yalamarthi-Resume.pdf"
                    style={{
                      color: "var(--ink)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    <DownloadIcon size={16} /> Download Resume PDF
                  </a>
                </div>
                <a
                  className="copy-button"
                  href="mailto:srikaryalamarthi210704@gmail.com?subject=AI%2FML%20or%20SDE%20Opportunity"
                >
                  Send Direct Email →
                </a>
              </div>
            </div>

            <div className="contact-footer-bar reveal">
              <div>
                <strong>Srikar Yalamarthi</strong> — Integrated M.Tech in CSE @ VIT Vellore
              </div>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                <a
                  href="https://www.linkedin.com/in/srikar-yalamarthi-1560ab275/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile ↗
                </a>
                <a href="https://github.com/srikar123s" target="_blank" rel="noopener noreferrer">
                  GitHub Profile ↗
                </a>
                <a href="/Srikar-Yalamarthi-Resume.pdf" download="Srikar-Yalamarthi-Resume.pdf">
                  Download Resume ↗
                </a>
                <a href="#top">Back to top ↑</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Srikar Yalamarthi · All rights reserved</span>
        <span>VIT Vellore · Computer Science &amp; Engineering</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}
