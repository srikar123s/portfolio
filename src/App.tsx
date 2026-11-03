import { useEffect, useState } from "react"

// Icons
const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
  </svg>
)

const GitHubIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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

// Project Definition Interface
interface Project {
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
  architecture?: {
    summary: string
    steps: { name: string; detail: string }[]
  }
}

const projects: Project[] = [
  {
    number: "01",
    title: "Caption Craft",
    subtitle: "Hybrid Speech Recognition & Contextual RAG Intelligence",
    category: "ai",
    badge: "Live App",
    description:
      "A deep learning speech recognition and transcript intelligence suite built specifically for Indian-accented English. Integrates Mel Spectrogram feature extraction, BiLSTM + CTC sequence transcription, Groq LLM pipelines for executive summaries, and ChromaDB/LangChain RAG for instant context-grounded Q&A.",
    highlights: [
      "Custom Bi-LSTM + CTC network for alignment-free temporal speech modeling",
      "RAG Q&A architecture using LangChain, Sentence Transformers & ChromaDB",
      "Groq LLM pipeline for executive summary & action item synthesis",
    ],
    tags: ["Machine Learning", "NLP", "LLMs", "RAG", "LangChain", "ChromaDB", "Python", "FastAPI"],
    githubUrl: "https://github.com/srikar123s/Caption-Craft",
    liveUrl: "https://caption-craft1.streamlit.app/",
    architecture: {
      summary: "End-to-End Speech Recognition & Contextual RAG Architecture",
      steps: [
        { name: "Audio Input", detail: "Microphone / WAV (16kHz PCM)" },
        { name: "Mel Spectrogram", detail: "Acoustic Feature Extraction" },
        { name: "Bi-LSTM + CTC", detail: "Sequence Transcription Model" },
        { name: "Whisper Fallback", detail: "Hybrid Confidence Ensemble" },
        { name: "Sentence Transformer", detail: "Vector Embedding Generation" },
        { name: "ChromaDB", detail: "Vector Similarity Indexing" },
        { name: "Groq LLM (RAG)", detail: "Context-Grounded Q&A" },
      ],
    },
    visual: (
      <div className="visual-bg-speech">
        <div className="phone-mockup" aria-hidden="true">
          <div className="phone-inner">
            <div>
              <div className="phone-top-bar">
                <span>9:41 AM</span>
                <span style={{ color: "var(--acid)" }}>● LIVE DSP</span>
              </div>
              <small className="phone-sub">CAPTION CRAFT / AUDIO ENGINE</small>
              <h4 className="phone-heading">
                Turn speech into <em>searchable knowledge.</em>
              </h4>
              <div className="interactive-waveform-row" title="Audio feature extraction">
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
                <i className="audio-bar-anim" />
              </div>
            </div>
            <div className="phone-card">
              <span>RAG PIPELINE ACTIVE</span>
              <strong>Transcription &amp; Summary Ready</strong>
              <div className="phone-progress">
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Multi-Hazard Prediction System",
    subtitle: "Digital Twin Real-Time Flood & Landslide Risk Mapping",
    category: "research",
    badge: "Patent Published",
    description:
      "A Digital Twin-based disaster risk prediction framework using terrain elevation models and environmental sensor telemetry. Implements adaptive terrain graphs to model hydrological runoff dynamics and a hybrid Physics + XGBoost inference engine to compute real-time multi-hazard probability maps.",
    highlights: [
      "Published Indian Patent Application (No. 202641065384, June 2026)",
      "Adaptive spatial refinement optimizing computational efficiency over 3D terrain",
      "Hybrid Physics + XGBoost engine yielding sub-second hazard zone updates",
    ],
    tags: ["Machine Learning", "Digital Twin", "Physics Engine", "Published Patent", "Python", "Data Preprocessing"],
    githubUrl: "https://github.com/srikar123s/Multi-Hazard-Prediction-System",
    architecture: {
      summary: "Digital Twin Physics + ML Multi-Hazard Predictive Pipeline",
      steps: [
        { name: "DEM & Sensor Stream", detail: "Rainfall, Elevation, Soil Moisture" },
        { name: "Adaptive Terrain Mesh", detail: "Non-uniform Graph Discretization" },
        { name: "Hydrological Runoff", detail: "Kinematic Wave Flow Simulation" },
        { name: "Shear Stress Physics", detail: "Infinite Slope Factor of Safety" },
        { name: "XGBoost Engine", detail: "Gradient Boosted Risk Predictor" },
        { name: "Spatial Hazard Map", detail: "Sub-second Contour GIS Output" },
      ],
    },
    visual: (
      <div className="visual-bg-hazard">
        <div className="hazard-radar-scan" />
        <div className="hazard-card-mockup" aria-hidden="true">
          <div>
            <span className="hazard-tag">PATENT NO. 202641065384</span>
            <div className="hazard-title">
              Adaptive Terrain
              <br />
              <strong>Risk Twin</strong>
            </div>
          </div>
          <div className="hazard-radar">
            <div className="hazard-stat">
              <span>FLOOD RISK</span>
              <strong>LOW (12%)</strong>
            </div>
            <div className="hazard-stat">
              <span>LANDSLIDE</span>
              <strong>HIGH (84%)</strong>
            </div>
          </div>
          <div className="hazard-landscape">
            <i /><i /><i />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "AgroNexus AI",
    subtitle: "Adaptive Context-Aware Decision Support System for Precision Agriculture",
    category: "ai",
    badge: "AI / Full Stack",
    description:
      "An adaptive, context-aware agricultural decision-support platform. Integrates heterogeneous agricultural evidence (crop selection, fertilizer, irrigation, yield, and disease risk) through the Agricultural Decision and Intervention Engine (ADIE-1). Introduces Action–Context Effect Records (ACER) to maintain persistent closed-loop relationships that learn from observed intervention outcomes under shifting environmental conditions.",
    highlights: [
      "Agricultural Decision and Intervention Engine (ADIE-1) with Evidence Requirement Profiles (ERP)",
      "Action-Context Effect Records (ACER) capturing action, context, expected outcome, and deviation",
      "Decision-level Explainable AI (XAI) communicating evidence confidence, constraints, and risk trade-offs",
    ],
    tags: ["Machine Learning", "Decision Engine (ADIE-1)", "ACER Closed-Loop", "Contextual AI", "Explainable AI (XAI)", "Python"],
    githubUrl: "https://github.com/srikar123s/AgroNexus-AI",
    architecture: {
      summary: "AgroNexus AI Closed-Loop Context-Aware Decision Processing Workflow",
      steps: [
        { name: "Evidence Layer", detail: "Crop, Soil, Climate & Risk Inputs" },
        { name: "Evidence Sufficiency", detail: "ERP Profile & Deficit Checking" },
        { name: "ADIE-1 Decision Engine", detail: "Candidate Interventions & Constraints" },
        { name: "Contextual Recommendation", detail: "Explainable Advisory & Expected Outcome" },
        { name: "Outcome Capture", detail: "Observed Result vs Expected Outcome" },
        { name: "ACER Generation", detail: "Action-Context Effect Record Created" },
        { name: "Adaptive Update", detail: "Persistent Relationship & ERP Weights Updated" },
      ],
    },
    visual: (
      <div className="visual-bg-agri">
        <div className="atlas-window" aria-hidden="true">
          <div className="mini-rail" style={{ background: "#0d2b1f" }}>
            <b style={{ color: "var(--acid)" }}>AN</b>
            <i /><i /><i />
          </div>
          <div className="atlas-content">
            <div className="window-top">
              <span>AgroNexus AI · ADIE-1</span>
              <small style={{ background: "#e0f8ea", color: "#0d7241" }}>ACER ACTIVE</small>
            </div>
            <div className="metric-row">
              <div>
                <small>Evidence-Sufficiency Score</small>
                <strong>96.4% Sufficient</strong>
                <em>Context: Post-Monsoon Soil</em>
              </div>
            </div>
            <div className="atlas-list">
              <span>Persistent Action-Context Closed Loop: Enabled</span>
              <i /><i />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Studymate — Smart Study Planner",
    subtitle: "AI Topic Difficulty Estimation & Intelligent Schedule Planner",
    category: "sde",
    badge: "Full Stack",
    description:
      "A smart study planner and academic management web application that extracts syllabus topics directly from notes and syllabus images, estimates learning difficulty with machine learning, and dynamically generates custom drag-and-drop study schedules, progress analytics dashboards, and an interactive AI study assistant chatbot.",
    highlights: [
      "Automated topic extraction from syllabus images/notes with ML-based difficulty estimation",
      "Interactive drag-and-drop study calendar with task completion analytics and streak tracking",
      "Built-in AI study assistant chatbot for instant topic review, planning advice, and exam prep",
    ],
    tags: ["Python", "Web Development", "REST APIs", "AI Assistant", "Data Analytics", "Full Stack"],
    githubUrl: "https://github.com/srikar123s/Studymate",
    architecture: {
      summary: "Studymate AI Topic Extraction & Scheduling Architecture",
      steps: [
        { name: "Syllabus Upload", detail: "Notes / Syllabus Image Ingestion" },
        { name: "Topic Extraction", detail: "Text & Keyword Extraction" },
        { name: "ML Difficulty Estimator", detail: "Complexity & Prerequisite Weighting" },
        { name: "Schedule Generator", detail: "Drag-and-Drop Calendar Planner" },
        { name: "Analytics Dashboard", detail: "Task Completion & Streak Metrics" },
        { name: "AI Study Chatbot", detail: "Real-time Study Q&A Assistant" },
      ],
    },
    visual: (
      <div className="visual-bg-study">
        <div className="study-mockup" aria-hidden="true">
          <div className="study-top">
            <span><span>📅</span> Studymate Planner</span>
            <small>AI ESTIMATOR</small>
          </div>
          <div className="study-agenda">
            <div className="study-task">
              <span>Python: Data Structures</span>
              <strong>DIFFICULTY: MEDIUM</strong>
            </div>
            <div className="study-task">
              <span>Functions &amp; Exceptions</span>
              <strong>DIFFICULTY: EASY</strong>
            </div>
          </div>
          <div className="study-bottom">
            <span>STREAK: 7 DAYS · 33% PROGRESS</span>
            <strong>DRAG &amp; DROP ACTIVE</strong>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "05",
    title: "Crop Connect (v1)",
    subtitle: "Smart Agriculture E-Commerce & Analytics Platform",
    category: "sde",
    badge: "Live App",
    description:
      "A modern full-stack agriculture e-commerce and analytics web application engineered to simplify the purchase of farming essentials. Connects farmers with certified seeds, fertilizers, and tools alongside weather telemetry and modular RESTful backends.",
    highlights: [
      "Built secure REST APIs with optimized backend processing and efficient database management",
      "Modular full-stack architecture supporting e-commerce, crop analytics, and weather telemetry",
      "Deployed and actively hosted on Vercel",
    ],
    tags: ["Web Development", "Python", "FastAPI / Node.js", "REST APIs", "MySQL", "E-Commerce"],
    githubUrl: "https://github.com/srikar123s/crop-connect-v1",
    liveUrl: "https://crop-connect-v1-git-main-crop-connects-projects.vercel.app/",
    architecture: {
      summary: "Full-Stack Agriculture Marketplace & API Architecture",
      steps: [
        { name: "Client Layer", detail: "Responsive Web Interface" },
        { name: "API Gateway", detail: "Secure RESTful Routing" },
        { name: "Weather Service", detail: "Meteorological Forecast API" },
        { name: "Relational DB", detail: "MySQL Inventory & Orders" },
        { name: "Vercel Edge", detail: "Global Production Deployment" },
      ],
    },
    visual: (
      <div className="visual-bg-agri">
        <div className="atlas-window" aria-hidden="true">
          <div className="mini-rail">
            <b>CC</b>
            <i /><i /><i />
          </div>
          <div className="atlas-content">
            <div className="window-top">
              <span>Crop Connect Platform</span>
              <small>LIVE VERCEL</small>
            </div>
            <div className="metric-row">
              <div>
                <small>Agricultural Essentials</small>
                <strong>Certified Store</strong>
                <em>Seeds, Fertilizers &amp; Farm Tools</em>
              </div>
            </div>
            <div className="atlas-list">
              <span>Live Weather Telemetry &amp; REST APIs</span>
              <i /><i /><i />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "06",
    title: "Smart-Heal",
    subtitle: "AI Healthcare Assistant & Clinical Symptom Inference",
    category: "ai",
    badge: "Live App",
    description:
      "An intelligent medical assistant built with Streamlit, PyTorch, and the Groq API. Utilizes a custom Transformer deep learning model to predict potential conditions from user symptoms and delivers actionable health guidance and triage precautions through an interactive AI chatbot.",
    highlights: [
      "Custom Transformer neural network for multi-symptom disease classification",
      "Low-latency clinical conversational agent via Groq API integration",
      "Comprehensive triage output with recommended precautions and specialist matching",
    ],
    tags: ["Machine Learning", "NLP", "LLMs", "Groq API", "Python", "Streamlit"],
    githubUrl: "https://github.com/srikar123s/Smart-Heal",
    liveUrl: "https://smart-heal.streamlit.app/",
    architecture: {
      summary: "Deep Learning Clinical Symptom Classification & Chatbot Pipeline",
      steps: [
        { name: "Symptom Extraction", detail: "Multi-hot Vector Encoder" },
        { name: "Transformer Model", detail: "Self-Attention Disease Classifier" },
        { name: "Confidence Scorer", detail: "Softmax Probability Matrix" },
        { name: "Groq Clinical LLM", detail: "Triage & Safety Protocol Agent" },
        { name: "Interactive UI", detail: "Real-time Streamlit Guidance" },
      ],
    },
    visual: (
      <div className="visual-bg-health">
        <div className="health-mockup" aria-hidden="true">
          <div className="health-head">
            <span><span>🩺</span> Smart-Heal Triage</span>
            <small>TRANSFORMER</small>
          </div>
          <div className="health-symptoms">
            <div className="health-chip">
              <span>Reported: Acute Migraine + Photophobia</span>
              <strong>96.4% Conf</strong>
            </div>
            <div className="health-chip">
              <span>Risk Tier: Moderate · Consult Neurologist</span>
              <strong>Triage Level 2</strong>
            </div>
          </div>
          <div className="health-result">
            <span>CLINICAL AI ASSESSMENT</span>
            <strong>Cluster Headache / Migraine with Aura</strong>
            <p>Immediate rest in dark room advised; follow prescribed protocol.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "07",
    title: "Lossless Image Compression (CAP-RC+++)",
    subtitle: "Context-Adaptive Range Coding & Reversible Color Transform",
    category: "research",
    badge: "Live App",
    description:
      "A lossless image compression research project combining Context-Adaptive Range Coding, Gradient-Weighted Prediction, and YCoCg reversible color space transformation to maximize compression ratio while guaranteeing 100% pixel-perfect mathematical reconstruction.",
    highlights: [
      "Context-Adaptive Range Coding (CAP-RC) for optimal entropy minimization",
      "Gradient-weighted directional edge prediction to reduce spatial redundancy",
      "Interactive Streamlit application measuring bitrates and PSNR/SSIM live",
    ],
    tags: ["Data Preprocessing", "Algorithms", "Image Processing", "Python", "Streamlit"],
    githubUrl: "https://github.com/srikar123s/Lossless-Image-Compression",
    liveUrl: "https://lossless-image-compression-rangecoding.streamlit.app/",
    architecture: {
      summary: "CAP-RC+++ Entropy Compression Architecture",
      steps: [
        { name: "Raw RGB Image", detail: "Uncompressed Bitstream" },
        { name: "YCoCg Transform", detail: "Reversible Decorrelation" },
        { name: "Gradient Predictor", detail: "Directional Edge Residuals" },
        { name: "Context Modeling", detail: "Adaptive Frequency Tables" },
        { name: "Range Coder", detail: "Optimal Entropy Encoding" },
        { name: "Compressed File", detail: "62% Space Reduction" },
      ],
    },
    visual: (
      <div className="visual-bg-compression">
        <div className="compression-mockup" aria-hidden="true">
          <div className="comp-top">
            <span>CAP-RC+++ PIPELINE</span>
            <span style={{ color: "var(--acid)" }}>100% REVERSIBLE</span>
          </div>
          <div className="comp-grid">
            <div className="comp-box">
              <small>ORIGINAL SIZE</small>
              <strong>2.40 MB</strong>
            </div>
            <div className="comp-box">
              <small>COMPRESSED</small>
              <strong style={{ color: "var(--acid)" }}>0.91 MB</strong>
            </div>
          </div>
          <div className="comp-bottom">
            <span>SAVINGS: 62.1%</span>
            <span>SSIM: 1.0000 (LOSSLESS)</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "08",
    title: "Crop-Yield-Predictor",
    subtitle: "Agricultural Productivity Forecaster via TabNet Deep Learning",
    category: "ai",
    badge: "Live App",
    description:
      "An AI-powered agricultural forecasting tool utilizing Google's TabNet deep learning architecture for tabular environmental data. Evaluates soil nutrients, temperature, rainfall, and historical yield patterns to empower farmers and agronomists with data-backed harvest estimates.",
    highlights: [
      "TabNet architecture providing interpretable feature attention masks",
      "Trained on multi-regional soil and weather historical datasets",
      "Interactive input sliders for NPK levels, rainfall, and crop season",
    ],
    tags: ["Machine Learning", "Data Cleaning & Preprocessing", "Python", "Streamlit"],
    githubUrl: "https://github.com/srikar123s/Crop-Yield-Predictor",
    liveUrl: "https://crop-yield-prediction2026.streamlit.app/",
    visual: (
      <div className="visual-bg-agri">
        <div className="atlas-window" aria-hidden="true">
          <div className="mini-rail">
            <b>Y.</b>
            <i /><i /><i />
          </div>
          <div className="atlas-content">
            <div className="window-top">
              <span>TabNet Yield Model</span>
              <small>ACTIVE</small>
            </div>
            <div className="metric-row">
              <div>
                <small>Predicted Output</small>
                <strong>4.82 t/ha</strong>
                <em>+18.4% vs regional avg</em>
              </div>
              <div className="chart-bars">
                <i /><i /><i /><i /><i /><i /><i /><i />
              </div>
            </div>
            <div className="atlas-list">
              <span>Feature Weight: NPK &amp; Rainfall</span>
              <i /><i />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "09",
    title: "Anonymous Ephemeral Chat",
    subtitle: "Real-Time WebSocket Messaging with Zero Data Retention",
    category: "sde",
    badge: "Open Source",
    description:
      "A privacy-first real-time messaging application featuring temporary in-memory session lifecycles, WebSocket communication channels, and guaranteed zero server-side message persistence.",
    highlights: [
      "Full duplex bidirectional chat via WebSockets",
      "Strict in-memory ephemeral rooms with immediate cleanup upon disconnection",
      "Lightweight clean Python backend architecture",
    ],
    tags: ["Python", "Web Development", "FastAPI / Flask", "REST APIs", "Cyber Security"],
    githubUrl: "https://github.com/srikar123s/anonymous_ephemeral_chat",
    visual: (
      <div className="visual-bg-agri">
        <div className="atlas-window" aria-hidden="true">
          <div className="mini-rail" style={{ background: "#1b2024" }}>
            <b>💬</b>
          </div>
          <div className="atlas-content">
            <div className="window-top">
              <span>Ephemeral Room</span>
              <small style={{ background: "#ffebee", color: "#c62828" }}>ZERO-LOG</small>
            </div>
            <div className="metric-row">
              <div>
                <small>Session Lifecycle</small>
                <strong>In-Memory</strong>
                <em>Auto-cleared on disconnect</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

// Strictly Focused Skill Domains Matching Resume (AI/ML Engineer primary, then SDE/Web)
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
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  useEffect(() => {
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
  }, [activeCategory, searchQuery, expandedArchitecture])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setToastMessage(`Copied ${label} to clipboard!`)
    setTimeout(() => setToastMessage(null), 2500)
  }

  const toggleArchitecture = (title: string) => {
    setExpandedArchitecture((prev) => (prev === title ? null : title))
  }

  // Filter projects by category and text search query
  const filteredProjects = projects.filter((p) => {
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
          SY<span>.</span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>
            Projects ({projects.length})
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
          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
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
              <span><strong>15+</strong> GitHub Repos</span>
            </div>
          </div>

          <h1>
            Engineering applied AI
            <br />
            models &amp; scalable
            <br />
            <em>software systems.</em>
          </h1>

          <div className="hero-bottom">
            <div className="hero-summary">
              <p>
                I’m <strong>Srikar Yalamarthi</strong>, an Integrated M.Tech Computer Science student at VIT Vellore.
                I build intelligent applications and scalable software systems that solve practical real-world problems—spanning published patent research in digital twin hazard prediction, adaptive agricultural AI decision frameworks, speech recognition intelligence, and full-stack web platforms.
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

            <div className="hero-right-action">
              <a className="round-scroll-link" href="#work" aria-label="Scroll to projects">
                <span>PROJECTS</span>
                <ArrowUpRight size={22} />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar for Recruiters */}
          <div className="stats-banner">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">GitHub Repositories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">01</span>
                <span className="stat-label">Published Patent App</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">06+</span>
                <span className="stat-label">Deployed Live Apps</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8.49</span>
                <span className="stat-label">CGPA · VIT Vellore</span>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
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
              Every project includes source code on GitHub and working deployed interactive apps.
            </p>
          </div>

          {/* Controls: Filter Tabs + Live Search */}
          <div className="controls-bar reveal">
            <div className="filter-tabs" role="tablist" aria-label="Filter projects">
              <button
                className={activeCategory === "all" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("all")}
                role="tab"
                aria-selected={activeCategory === "all"}
              >
                All Projects <span className="badge">{projects.length}</span>
              </button>
              <button
                className={activeCategory === "ai" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("ai")}
                role="tab"
                aria-selected={activeCategory === "ai"}
              >
                AI &amp; Machine Learning <span className="badge">{projects.filter((p) => p.category === "ai").length}</span>
              </button>
              <button
                className={activeCategory === "research" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("research")}
                role="tab"
                aria-selected={activeCategory === "research"}
              >
                Research &amp; Patents <span className="badge">{projects.filter((p) => p.category === "research").length}</span>
              </button>
              <button
                className={activeCategory === "sde" ? "filter-tab active" : "filter-tab"}
                onClick={() => setActiveCategory("sde")}
                role="tab"
                aria-selected={activeCategory === "sde"}
              >
                SDE &amp; Web Systems <span className="badge">{projects.filter((p) => p.category === "sde").length}</span>
              </button>
            </div>

            {/* Recruiter Quick Search Bar */}
            <div className="search-input-wrap">
              <SearchIcon size={14} />
              <input
                type="text"
                placeholder="Search ML, RAG, FastAPI, Full Stack..."
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

          {/* Stable Project List (No Shaking / Tilting) */}
          <div className="project-list">
            {filteredProjects.length === 0 ? (
              <div style={{ padding: "60px 0", textAlign: "center", color: "#9c9a92" }}>
                <p>No projects match "{searchQuery}" under this category.</p>
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
                  <div className="project-visual">
                    {project.visual}
                  </div>
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
                          <span className="badge-category">{project.category.toUpperCase()}</span>
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
                        {project.liveUrl && (
                          <a
                            className="btn-live-app"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Launch Live App <ExternalLinkIcon size={14} />
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

                        {project.architecture && (
                          <button
                            className="btn-arch-toggle"
                            onClick={() => toggleArchitecture(project.title)}
                            aria-expanded={expandedArchitecture === project.title}
                          >
                            {expandedArchitecture === project.title ? "Hide Pipeline ▲" : "Architecture Flow ▼"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Architecture Pipeline Flow Drawer */}
                  {project.architecture && expandedArchitecture === project.title && (
                    <div className="arch-flow-drawer">
                      <div className="arch-flow-head">
                        <small>SYSTEM ARCHITECTURE DEEP DIVE</small>
                        <span>{project.architecture.summary}</span>
                      </div>
                      <div className="pipeline-steps-flow">
                        {project.architecture.steps.map((step, idx) => (
                          <div key={step.name} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div className="pipeline-step-node">
                              <strong>{step.name}</strong>
                              <span>{step.detail}</span>
                            </div>
                            {idx < project.architecture!.steps.length - 1 && (
                              <span className="pipeline-arrow" aria-hidden="true">→</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))
            )}
          </div>

          {/* Patent Spotlight Banner */}
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
                <a
                  className="btn-live-app"
                  href="https://github.com/srikar123s/Multi-Hazard-Prediction-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ justifyContent: "center" }}
                >
                  <GitHubIcon size={15} /> Patent Codebase
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section - Strictly Focused on AI/ML, Languages & Core CS */}
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
                <div>
                  <div className="skill-domain-head">
                    <div className="skill-domain-icon">{domain.icon}</div>
                    <span className="skill-domain-count">{domain.badge}</span>
                  </div>
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                </div>
                <div className="skill-tags-cloud">
                  {domain.skills.map((skill) => (
                    <span
                      className={`skill-pill ${skill.highlight ? "highlight" : ""}`}
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

        {/* Education, Research & Certifications with Direct Credential Links */}
        <section className="experience-section" id="education">
          <div className="experience-inner">
            <div className="section-heading reveal" style={{ marginBottom: "50px" }}>
              <p className="section-kicker">EDUCATION &amp; CERTIFICATIONS</p>
              <h2>
                Academic grounding.
                <br />
                <em>Industry verified.</em>
              </h2>
            </div>

            <div className="experience-list reveal">
              {educationList.map((edu) => (
                <div className="experience-row" key={edu.role}>
                  <span>{edu.period}</span>
                  <div>
                    <strong>{edu.role}</strong>
                    <p style={{ marginTop: "4px" }}>{edu.detail}</p>
                  </div>
                  <p style={{ textAlign: "right", color: "#252336", fontWeight: 600 }}>{edu.institution}</p>
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
                <em>from day one.</em>
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
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard("srikaryalamarthi210704@gmail.com", "email")}
                >
                  <CopyIcon size={13} /> Copy Email
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
                <small>PROFESSIONAL PROFILES</small>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", margin: "8px 0 14px" }}>
                  <a
                    href="https://www.linkedin.com/in/srikar-yalamarthi-1560ab275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--ink)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", textDecoration: "none" }}
                  >
                    <LinkedInIcon size={16} /> linkedin.com/in/srikar-yalamarthi
                  </a>
                  <a
                    href="https://github.com/srikar123s"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--ink)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", textDecoration: "none" }}
                  >
                    <GitHubIcon size={16} /> github.com/srikar123s
                  </a>
                  <a
                    href="/Srikar-Yalamarthi-Resume.pdf"
                    download="Srikar-Yalamarthi-Resume.pdf"
                    style={{ color: "var(--ink)", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", textDecoration: "none" }}
                  >
                    <DownloadIcon size={16} /> Download Resume PDF
                  </a>
                </div>
                <a
                  className="copy-button"
                  href="mailto:srikaryalamarthi210704@gmail.com?subject=Opportunity%20Discussion"
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
                <a href="https://www.linkedin.com/in/srikar-yalamarthi-1560ab275/" target="_blank" rel="noopener noreferrer">
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
