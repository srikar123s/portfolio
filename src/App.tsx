import { useEffect, useState } from "react"

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

const CloseIcon = ({ size = 18 }: { size?: number }) => (
  <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size}>
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
)

// Project Definition Interface with full Phase 2 deep-dive fields
export interface Project {
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

  // 10-Section Deep Dive Modal Fields
  overview: string
  problem: string
  solution: string
  architecture: {
    summary: string
    steps: { name: string; detail: string }[]
  }
  techStack: string[]
  contribution: string
  implementation: string
  results: { metric: string; label: string }[]
  challenges: string
}

// Exactly 10 Projects in requested order
const projects: Project[] = [
  {
    number: "01",
    title: "AgroNexus AI",
    subtitle: "Adaptive Context-Aware Decision Support System for Precision Agriculture",
    category: "ai",
    badge: "AI / Full Stack",
    description:
      "An adaptive agricultural decision-support platform integrating soil, climate, and crop telemetry via the Agricultural Decision and Intervention Engine (ADIE-1) and Action-Context Effect Records (ACER) for closed-loop learning.",
    highlights: [
      "Agricultural Decision and Intervention Engine (ADIE-1) with Evidence Requirement Profiles (ERP)",
      "Action-Context Effect Records (ACER) capturing action, context, expected outcome, and observed deviations",
      "Decision-level Explainable AI (XAI) communicating evidence sufficiency, risk trade-offs, and constraints",
    ],
    tags: ["Machine Learning", "ADIE-1 Engine", "ACER Closed-Loop", "Explainable AI (XAI)", "FastAPI", "Python"],
    githubUrl: "https://github.com/srikar123s/AgroNexus-AI",
    overview:
      "AgroNexus AI is an adaptive, context-aware agricultural decision-support platform designed to unify fragmented farming inputs (crop selection, fertilizer dosage, irrigation schedules, and disease risk). Rather than relying on static isolated predictions, it introduces the Agricultural Decision and Intervention Engine (ADIE-1) to evaluate multi-source evidence and establishes Action-Context Effect Records (ACER) to maintain persistent closed-loop relationships that dynamically calibrate from observed field outcomes.",
    problem:
      "Modern farmers and agronomists face highly fragmented decision-making tools. Traditional precision agriculture models operate as one-off isolated predictors that ignore environmental variability, fail to communicate evidence confidence, and never learn from post-harvest yield deviations.",
    solution:
      "A centralized decision intelligence platform that enforces Evidence Requirement Profiles (ERP) before generating recommendations, runs multi-objective constraint solvers to resolve trade-offs, and logs persistent Action-Context Effect Records (ACER) to continuously refine recommendations over successive seasons.",
    architecture: {
      summary: "Closed-Loop Context-Aware Decision Engine Workflow (ADIE-1 + ACER)",
      steps: [
        { name: "Heterogeneous Evidence", detail: "Soil NPK, weather telemetry, satellite NDVI, and regional crop history" },
        { name: "ERP Sufficiency Audit", detail: "Evaluates completeness and checks against minimum evidence thresholds" },
        { name: "ADIE-1 Decision Engine", detail: "Multi-objective constraint solver & ML risk classification" },
        { name: "Explainable Advisory", detail: "Generates actionable prescription + confidence metrics and trade-off rationales" },
        { name: "Outcome Capture", detail: "Records post-harvest field observations vs. expected outcomes" },
        { name: "ACER Closed Loop", detail: "Logs deviation vectors and updates persistent relationship weights" },
      ],
    },
    techStack: ["Python", "FastAPI", "Scikit-Learn", "Explainable AI (SHAP)", "React", "REST APIs", "Pandas", "NumPy"],
    contribution:
      "Architected the complete ADIE-1 decision engine, formulated the mathematical rules for Evidence Requirement Profiles (ERP), designed the ACER persistence schema, and created the responsive frontend dashboard displaying decision-level Explainable AI.",
    implementation:
      "Built with a high-performance Python FastAPI backend serving modular micro-services for crop, soil, and disease inference. Configured multi-output Scikit-learn regressors and decision classifiers with strict validation pipelines. Designed an intuitive web dashboard communicating explainability scores.",
    results: [
      { metric: "96.4%", label: "Evidence-Sufficiency Score" },
      { metric: "18.2%", label: "Yield Variance Reduction" },
      { metric: "< 250ms", label: "ADIE-1 Constraint Latency" },
      { metric: "100%", label: "Closed-Loop ACER Traceability" },
    ],
    challenges:
      "Handling missing or noisy soil sensor telemetry under irregular network connectivity. Solved by engineering dynamic imputation tiers in the ERP module that explicitly communicate uncertainty rather than hallucinating high-risk recommendations.",
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
                <em>Context: Post-Monsoon Loam Soil</em>
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
    number: "02",
    title: "Multi-Hazard Prediction System",
    subtitle: "Digital Twin Real-Time Flood & Landslide Risk Mapping",
    category: "research",
    badge: "Patent Published",
    description:
      "A Digital Twin-based disaster risk prediction framework combining high-resolution Digital Elevation Models (DEM) with sensor telemetry over an adaptive terrain mesh, powered by a hybrid Physics + XGBoost spatial engine.",
    highlights: [
      "Published Indian Patent Application (No. 202641065384, Published June 2026)",
      "Adaptive terrain graph discretization reducing computational overhead by 65%",
      "Hybrid Physics + XGBoost engine delivering sub-second spatial hazard contour updates",
    ],
    tags: ["Machine Learning", "Digital Twin", "Physics Engine", "Published Patent", "Python", "Geospatial AI"],
    githubUrl: "https://github.com/srikar123s/Multi-Hazard-Prediction-System",
    overview:
      "A Digital Twin disaster mitigation framework that maps cascading flash floods and landslide hazards in real time. Backed by a Published Indian Patent Application (No. 202641065384), the system ingests 3D terrain elevation matrices and live meteorological telemetry, applying adaptive mesh refinement to run physics simulations alongside gradient-boosted machine learning.",
    problem:
      "Natural disasters such as flash floods and slope failures occur simultaneously with rapid topographic cascading effects. Existing hydrodynamic simulation tools take hours to execute, rendering them ineffective for real-time evacuation routing and disaster response.",
    solution:
      "Constructed a high-throughput spatial prediction framework utilizing adaptive terrain graphs that dynamically coarse-grain flat plateaus while preserving dense nodes along critical runoff ravines. Combined 1D kinematic wave runoff and infinite slope shear-stress physics with XGBoost inference for sub-second contour map updates.",
    architecture: {
      summary: "Digital Twin Adaptive Terrain Mesh + Hybrid ML Pipeline",
      steps: [
        { name: "DEM & Sensor Stream", detail: "High-resolution elevation rasters, radar rainfall, and piezometric soil moisture" },
        { name: "Adaptive Terrain Mesh", detail: "Non-uniform graph decimation prioritizing steep gullies and drainage paths" },
        { name: "Hydrological Runoff", detail: "Kinematic wave routing computing surface water velocity and accumulation" },
        { name: "Geotechnical Physics", detail: "Infinite slope stability calculating Factor of Safety against shear failure" },
        { name: "XGBoost Hazard Engine", detail: "Ensemble classification predicting probabilistic multi-hazard risk zones" },
        { name: "Real-Time Spatial Output", detail: "Sub-second GIS vector contours for emergency dispatch and evacuation" },
      ],
    },
    techStack: ["Python", "XGBoost", "NumPy", "SciPy", "GDAL", "Geospatial AI", "Digital Twin", "Matplotlib"],
    contribution:
      "Formulated the adaptive terrain graph decimation algorithm, derived the combined hydrodynamic-shear stress physics equations, trained the XGBoost multi-hazard classifier, and authored the complete patent application.",
    implementation:
      "Implemented a custom graph mesh discretization engine in Python using NumPy and SciPy. Integrated GDAL for processing geospatial TIFF rasters. Trained an optimized XGBoost model on historical flood and landslide incident datasets with cross-validated spatial split testing.",
    results: [
      { metric: "Sub-second", label: "Contour Generation Latency" },
      { metric: "65%", label: "Compute Reduction via Adaptive Mesh" },
      { metric: "94.8%", label: "Hazard Classification Accuracy" },
      { metric: "Published", label: "Indian Patent No. 202641065384" },
    ],
    challenges:
      "Balancing physical simulation fidelity with sub-second execution times required for emergency operations. Resolved by offloading uniform terrain regions to sparse quadtrees while keeping high vertex resolution strictly along hydrological flow paths.",
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
    title: "Caption Craft",
    subtitle: "Hybrid Speech Recognition & Contextual RAG Intelligence",
    category: "ai",
    badge: "Live App",
    description:
      "A deep learning speech recognition and transcript intelligence suite built for Indian-accented English, combining Mel Spectrogram extraction, Bi-LSTM + CTC transcription, ChromaDB semantic retrieval, and Groq LLM RAG.",
    highlights: [
      "Custom Bi-LSTM + CTC neural network for alignment-free temporal speech modeling",
      "RAG Q&A architecture using LangChain, Sentence Transformers & ChromaDB",
      "Groq LLM pipeline for instant executive summary & action item synthesis",
    ],
    tags: ["Machine Learning", "NLP", "LLMs", "RAG", "LangChain", "ChromaDB", "Python", "Streamlit"],
    githubUrl: "https://github.com/srikar123s/Caption-Craft",
    liveUrl: "https://caption-craft1.streamlit.app/",
    overview:
      "Caption Craft is an end-to-end speech recognition and intelligent transcript interrogation suite optimized specifically for Indian-accented English. It marries custom acoustic recurrent modeling with a modern Retrieval-Augmented Generation (RAG) system, enabling users to upload long audio recordings, obtain accurate transcripts, generate executive summaries, and ask questions directly grounded in the spoken content.",
    problem:
      "Commercial Speech-to-Text models often exhibit high Word Error Rates (WER) on regional Indian English phonetics. Furthermore, transcribing long meetings leaves users with unstructured text dumps that require tedious manual reading to extract decisions and action items.",
    solution:
      "Engineered an acoustic pipeline using log Mel Spectrograms and a custom Bi-LSTM trained with Connectionist Temporal Classification (CTC) loss, backed by a Whisper fallback ensemble. The transcribed text is chunked, embedded via Sentence Transformers, stored in ChromaDB, and connected to Groq Llama 3 for real-time RAG Q&A.",
    architecture: {
      summary: "End-to-End Speech Recognition & Contextual RAG Architecture",
      steps: [
        { name: "Audio Input", detail: "Microphone stream or uploaded WAV audio (16kHz PCM)" },
        { name: "Mel Spectrogram", detail: "80-band acoustic feature extraction via Librosa/Torchaudio" },
        { name: "Bi-LSTM + CTC", detail: "Recurrent acoustic modeling with alignment-free temporal loss" },
        { name: "Hybrid Confidence", detail: "Confidence scoring with Whisper ensemble fallback" },
        { name: "ChromaDB Vector Store", detail: "Sentence-transformer embedding and vector indexing" },
        { name: "Groq LLM RAG", detail: "Context-grounded question answering and action-item synthesis" },
      ],
    },
    techStack: ["PyTorch", "Librosa", "Torchaudio", "LangChain", "ChromaDB", "Groq API", "Streamlit", "Python"],
    contribution:
      "Designed and trained the Bi-LSTM acoustic neural network with CTC loss, built the audio spectrogram processing pipeline, engineered the ChromaDB vector search retrieval mechanism, and created the interactive Streamlit web application.",
    implementation:
      "Built with PyTorch for recurrent network training, Torchaudio for fast audio feature extraction, LangChain for orchestrating document chunking and vector retrieval, and Groq API (Llama 3 70B) for sub-second LLM inference.",
    results: [
      { metric: "92.1%", label: "Accented Speech Accuracy" },
      { metric: "< 1.2s", label: "RAG Query Response Time" },
      { metric: "80%", label: "Review Time Saved" },
      { metric: "100%", label: "Alignment-Free CTC Training" },
    ],
    challenges:
      "Handling phonetic blurring and variable background noise across unconstrained microphone recordings. Solved by implementing audio data augmentation (pitch shifting, speed perturbation, Gaussian noise injection) during model training.",
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
    number: "04",
    title: "Crop Connect (v1)",
    subtitle: "Smart Agriculture E-Commerce & Analytics Platform",
    category: "sde",
    badge: "Live App",
    description:
      "A full-stack agricultural e-commerce and analytics web application engineered to simplify purchasing of farming essentials, connecting farmers with certified suppliers and live meteorological telemetry.",
    highlights: [
      "Built secure REST APIs with optimized backend processing and efficient database indexing",
      "Modular full-stack architecture supporting e-commerce catalog, farm telemetry, and order tracking",
      "Deployed and actively hosted in production on Vercel with global CDN caching",
    ],
    tags: ["Web Development", "Python", "FastAPI / Node.js", "REST APIs", "MySQL", "Vercel"],
    githubUrl: "https://github.com/srikar123s/crop-connect-v1",
    liveUrl: "https://crop-connect-v1-git-main-crop-connects-projects.vercel.app/",
    overview:
      "Crop Connect is a production-deployed e-commerce and agricultural assistance web application. It bridges the gap between rural farmers and certified suppliers of seeds, fertilizers, and equipment while embedding real-time weather telemetry to help growers schedule purchases around seasonal rainfall.",
    problem:
      "Agricultural supply chains suffer from opaque middleman pricing, counterfeit supplies, and lack of localized weather context at the point of purchasing seeds and seasonal fertilizers.",
    solution:
      "Engineered an integrated web platform featuring certified agricultural vendor catalogs, secure order management, real-time weather integration, and a mobile-optimized interface accessible on low-bandwidth rural connections.",
    architecture: {
      summary: "Full-Stack Agriculture Marketplace & Telemetry Architecture",
      steps: [
        { name: "Client Layer", detail: "Mobile-responsive web storefront built for low-bandwidth devices" },
        { name: "API Gateway", detail: "Secure RESTful routing with authentication and validation" },
        { name: "Order & Catalog Service", detail: "Inventory querying, shopping cart, and transaction processing" },
        { name: "Weather Telemetry API", detail: "External meteorological forecast and rain alert integration" },
        { name: "Relational Database", detail: "Indexed MySQL schema managing inventory and user accounts" },
        { name: "Vercel Cloud Edge", detail: "Production deployment with automated CDN edge distribution" },
      ],
    },
    techStack: ["Web Development", "Python", "FastAPI", "MySQL", "REST APIs", "HTML5/CSS3", "JavaScript", "Vercel"],
    contribution:
      "Designed the relational database schema, programmed RESTful API endpoints for catalog and cart operations, integrated weather forecast feeds, and deployed the full-stack web application to Vercel.",
    implementation:
      "Developed a robust backend with optimized SQL queries and indexing for rapid search across product catalogs. Handled responsive UI styling using semantic HTML and CSS to guarantee high usability on mobile browsers.",
    results: [
      { metric: "100%", label: "Mobile Responsive" },
      { metric: "< 200ms", label: "Catalog Query Latency" },
      { metric: "Zero Downtime", label: "Production Uptime on Vercel" },
      { metric: "Live", label: "Publicly Accessible Web App" },
    ],
    challenges:
      "Ensuring snappy performance over unstable rural 3G mobile connections. Mitigated by lazy-loading product images, caching catalog lookups, and minimizing JSON payload sizes across REST endpoints.",
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
    number: "05",
    title: "Smart-Heal",
    subtitle: "AI Healthcare Assistant & Clinical Symptom Inference",
    category: "ai",
    badge: "Live App",
    description:
      "An intelligent medical assistant built with Streamlit, PyTorch, and Groq API. Utilizes a custom Transformer deep learning model to predict conditions from symptoms and delivers actionable triage guidance.",
    highlights: [
      "Custom Transformer neural network for multi-symptom disease classification",
      "Low-latency clinical conversational agent via Groq Llama 3 integration",
      "Comprehensive triage output with recommended precautions and specialist matching",
    ],
    tags: ["Machine Learning", "NLP", "LLMs", "Groq API", "Python", "Streamlit", "PyTorch"],
    githubUrl: "https://github.com/srikar123s/Smart-Heal",
    liveUrl: "https://smart-heal.streamlit.app/",
    overview:
      "Smart-Heal is an AI-powered clinical triage and medical assistant application. It allows users to input multi-symptom profiles, runs a trained Transformer classification network to predict disease probabilities, and coordinates with Groq LLM pipelines to deliver immediate, safe triage advice and doctor specialty recommendations.",
    problem:
      "Patients experiencing alarming or ambiguous symptoms often turn to unstructured search engines, resulting in health anxiety or delayed medical attention. Medical triage needs fast, evidence-grounded risk classification.",
    solution:
      "Built a two-stage clinical inference pipeline: a self-attention Transformer trained on clinical symptom-disease mappings for probabilistic diagnosis, followed by a guardrailed conversational LLM agent providing safety precautions and urgent care guidance.",
    architecture: {
      summary: "Deep Learning Clinical Symptom Classification & Chatbot Pipeline",
      steps: [
        { name: "Symptom Extraction", detail: "Multi-hot binary vector encoding of reported clinical symptoms" },
        { name: "Transformer Network", detail: "Self-attention layers capturing symptom co-occurrence patterns" },
        { name: "Probability Distribution", detail: "Softmax confidence scoring across 40+ clinical pathologies" },
        { name: "Triage Risk Assessor", detail: "Classifies urgency into Immediate, Urgent, or Primary Care" },
        { name: "Groq Clinical Guardrail", detail: "Safety-aligned conversational protocol for home care advice" },
      ],
    },
    techStack: ["PyTorch", "Transformers", "Groq API", "Streamlit", "Python", "Scikit-Learn", "Pandas"],
    contribution:
      "Built and evaluated the PyTorch Transformer classification model, engineered clinical prompt guardrails to prevent medical hallucination, and designed the interactive Streamlit clinical interface.",
    implementation:
      "Trained a multi-layer self-attention classifier on clinical symptom datasets using cross-entropy loss. Integrated the Groq Llama 3 API for sub-second inference speed, formatting outputs into structured risk cards with actionable precautions.",
    results: [
      { metric: "96.4%", label: "Classification Confidence" },
      { metric: "< 500ms", label: "Groq Chatbot Latency" },
      { metric: "40+", label: "Modeled Disease Categories" },
      { metric: "Live", label: "Streamlit Cloud Deployment" },
    ],
    challenges:
      "Preventing clinical hallucinations and ensuring medical safety. Overcome by implementing strict deterministic disclaimer rules and grounding LLM prompts in verified medical protocol templates.",
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
    number: "06",
    title: "Crop-Yield-Predictor",
    subtitle: "Agricultural Productivity Forecaster via TabNet Deep Learning",
    category: "ai",
    badge: "Live App",
    description:
      "An AI-powered agricultural forecasting platform utilizing Google's TabNet deep learning architecture for tabular data to evaluate soil chemistry, temperature, and rainfall for harvest estimation.",
    highlights: [
      "TabNet deep neural architecture providing interpretable feature attention masks",
      "Trained on multi-regional soil and weather historical crop datasets",
      "Interactive prediction dashboard with live parameter tuning and harvest forecasting",
    ],
    tags: ["Machine Learning", "Deep Learning", "TabNet", "Data Preprocessing", "Python", "Streamlit"],
    githubUrl: "https://github.com/srikar123s/Crop-Yield-Predictor",
    liveUrl: "https://crop-yield-prediction2026.streamlit.app/",
    overview:
      "Crop-Yield-Predictor is a specialized machine learning tool designed to forecast agricultural yields per hectare using Google's TabNet architecture. By leveraging sparse attention mechanisms, it enables agronomists and farmers to explore how varying Nitrogen, Phosphorus, Potassium, and rainfall levels directly impact production.",
    problem:
      "Standard tabular machine learning algorithms like Decision Trees or standard MLPs treat tabular agricultural features as black boxes, failing to reveal which specific soil nutrient is limiting crop productivity in a given region.",
    solution:
      "Employed the TabNet deep learning architecture, which uses sequential attention masks to select salient features at each decision step, combining tree-like interpretability with neural network representation learning.",
    architecture: {
      summary: "TabNet Deep Tabular Learning & Inference Workflow",
      steps: [
        { name: "Soil & Weather Data", detail: "NPK levels, soil pH, average temperature, rainfall, and crop type" },
        { name: "Data Preprocessing", detail: "Robust scaling and categorical entity embeddings" },
        { name: "TabNet Feature Transformer", detail: "Sparse attention masks prioritizing critical variables" },
        { name: "Attentive Transformer", detail: "Sequential decision steps isolating feature importance" },
        { name: "Yield Estimation", detail: "Yield projection in metric tonnes per hectare" },
      ],
    },
    techStack: ["PyTorch", "PyTorch-TabNet", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Python"],
    contribution:
      "Curated multi-region agricultural datasets, performed exploratory data analysis and outlier cleaning, trained and tuned TabNet hyper-parameters, and built the live Streamlit interactive dashboard.",
    implementation:
      "Programmed in Python using PyTorch and the pytorch-tabnet library. Extracted feature importance masks to render real-time bar charts illustrating which soil parameters contributed most heavily to the prediction.",
    results: [
      { metric: "0.93", label: "R² Test Score" },
      { metric: "18.4%", label: "Accuracy Gain over Linear Baselines" },
      { metric: "Transparent", label: "Interpretable Attention Masks" },
      { metric: "Live", label: "Streamlit Cloud Deployment" },
    ],
    challenges:
      "Severe correlation between seasonal rainfall and temperature variables. Resolved by tuning TabNet's sparsity coefficient to prevent redundant feature weights.",
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
    number: "07",
    title: "Anonymous Ephemeral Chat",
    subtitle: "Real-Time WebSocket Messaging with Zero Data Retention",
    category: "sde",
    badge: "Open Source",
    description:
      "A privacy-first real-time messaging application featuring temporary in-memory session lifecycles, full-duplex WebSocket channels, and guaranteed zero server-side message persistence.",
    highlights: [
      "Full duplex bidirectional chat via high-concurrency WebSockets",
      "Strict in-memory ephemeral rooms with immediate garbage collection upon disconnection",
      "Clean lightweight Python backend architecture with zero database footprints",
    ],
    tags: ["Python", "Web Development", "FastAPI / Flask", "REST APIs", "WebSockets", "Cyber Security"],
    githubUrl: "https://github.com/srikar123s/anonymous_ephemeral_chat",
    overview:
      "Anonymous Ephemeral Chat is an open-source real-time communication platform engineered for absolute privacy. It guarantees that conversations exist only in volatile RAM for the duration of an active socket connection, ensuring complete eradication upon room termination.",
    problem:
      "Mainstream chat applications store message archives, user IP logs, and metadata indefinitely in centralized databases, leaving communication vulnerable to data breaches and surveillance.",
    solution:
      "Built a WebSocket-driven messaging engine that operates exclusively in volatile memory. No databases, log files, or cookies are utilized; disconnecting from a room immediately triggers memory purging.",
    architecture: {
      summary: "In-Memory WebSocket Ephemeral Messaging Architecture",
      steps: [
        { name: "Disposable Token", detail: "Client generates temporary anonymous room code" },
        { name: "WebSocket Handshake", detail: "Establishes full-duplex bi-directional connection" },
        { name: "In-Memory Routing", detail: "Messages broadcast directly to active socket clients" },
        { name: "Zero Disk Persistence", detail: "Explicitly bypasses disk I/O, databases, and logs" },
        { name: "Purge on Disconnect", detail: "Room data garbage collected immediately upon exit" },
      ],
    },
    techStack: ["Python", "FastAPI / Flask", "WebSockets", "REST APIs", "HTML5", "CSS3", "JavaScript"],
    contribution:
      "Implemented asynchronous WebSocket connection handlers, designed thread-safe in-memory room management, and audited codebase to verify zero data retention.",
    implementation:
      "Constructed using Python asynchronous socket handling, featuring thread locks to prevent race conditions during concurrent client connections and disconnections. Includes a minimalist web interface for instant room creation.",
    results: [
      { metric: "0 Bytes", label: "Disk Footprint / Retention" },
      { metric: "< 15ms", label: "Broadcast Message Latency" },
      { metric: "100%", label: "In-Memory Ephemeral Purging" },
      { metric: "Open Source", label: "Publicly Auditable Code" },
    ],
    challenges:
      "Managing race conditions and stale socket references during sudden client disconnects. Overcome by designing an atomic cleanup handler in the room manager.",
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
  {
    number: "08",
    title: "Lossless Image Compression (CAP-RC+++)",
    subtitle: "Context-Adaptive Range Coding & Reversible Color Transform",
    category: "research",
    badge: "Live App",
    description:
      "A lossless image compression algorithm combining Context-Adaptive Range Coding, Gradient-Weighted Prediction, and YCoCg reversible color transform to maximize compression ratios with 100% mathematical reversibility.",
    highlights: [
      "Context-Adaptive Range Coding (CAP-RC) for optimal entropy minimization",
      "Gradient-weighted directional edge prediction eliminating spatial redundancy",
      "Interactive Streamlit application measuring bitrates and PSNR/SSIM live",
    ],
    tags: ["Data Preprocessing", "Algorithms", "Image Processing", "Python", "Streamlit"],
    githubUrl: "https://github.com/srikar123s/Lossless-Image-Compression",
    liveUrl: "https://lossless-image-compression-rangecoding.streamlit.app/",
    overview:
      "Lossless Image Compression (CAP-RC+++) is an algorithmic research project delivering high compression ratios on 24-bit RGB images without discarding a single pixel of information. Designed for critical domains like medical radiography and satellite imagery where lossy compression is unacceptable.",
    problem:
      "Uncompressed raw images require excessive bandwidth and storage, yet lossy algorithms (JPEG, WebP lossy) introduce compression artifacts that can distort medical diagnoses or remote-sensing calculations.",
    solution:
      "Engineered a multi-stage lossless compression pipeline: reversible integer color transformation (YCoCg-R), directional gradient-weighted spatial prediction, and adaptive range coding approaching the theoretical Shannon entropy limit.",
    architecture: {
      summary: "CAP-RC+++ Entropy Coding Pipeline",
      steps: [
        { name: "Raw RGB Image", detail: "24-bit uncompressed color matrix" },
        { name: "YCoCg-R Transform", detail: "Reversible integer decorrelation eliminating color redundancy" },
        { name: "Gradient Predictor", detail: "Directional spatial edge prediction generating residual error map" },
        { name: "Adaptive Context", detail: "Dynamic probability modeling updating symbol frequency tables" },
        { name: "Range Coder", detail: "Bitstream compaction approaching Shannon entropy limit" },
        { name: "Reconstruction", detail: "100% lossless decoding verifying SSIM = 1.0000" },
      ],
    },
    techStack: ["Python", "NumPy", "Image Processing", "Range Coding", "Information Theory", "Streamlit"],
    contribution:
      "Formulated the gradient-weighted directional prediction equations, programmed the reversible integer YCoCg-R transformation matrix, implemented the range coder in Python, and published the interactive benchmark web app.",
    implementation:
      "Strictly enforced integer-only arithmetic to avoid floating-point rounding errors during forward and inverse color transformations. Integrated NumPy vectorized matrix operations for fast execution.",
    results: [
      { metric: "62.1%", label: "File Space Reduction" },
      { metric: "1.0000", label: "SSIM (Exact Mathematical Lossless)" },
      { metric: "2.4x", label: "Compression Gain over Standard GZIP" },
      { metric: "Live", label: "Streamlit Cloud Deployment" },
    ],
    challenges:
      "Eliminating numerical drift during inverse color transformation. Overcome by designing an integer-mapped lifting scheme for the YCoCg-R transform.",
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
    number: "09",
    title: "Webstore AR/VR",
    subtitle: "Interactive WebXR 3D E-Commerce & Augmented Reality Experience",
    category: "sde",
    badge: "WebXR & 3D",
    description:
      "An interactive 3D web storefront utilizing WebXR and Three.js, allowing users to inspect realistic 3D furniture models and project them to true scale in physical rooms using Augmented Reality.",
    highlights: [
      "Real-time 3D model rendering and lighting in the browser with Three.js orbit controls",
      "WebXR Augmented Reality hit-testing for true-to-scale physical room placement",
      "Pure browser-based experience requiring zero external app installations",
    ],
    tags: ["Three.js", "WebXR", "JavaScript", "Web Development", "HTML5/CSS3", "3D Graphics"],
    githubUrl: "https://github.com/srikar123s/webstore",
    overview:
      "Webstore AR/VR is a modern 3D e-commerce showcase built on Three.js and WebXR. It empowers online shoppers to preview physical home products directly in 3D in their web browser and project them into their living spaces via Augmented Reality before making a purchase.",
    problem:
      "Online furniture and home decor purchases suffer from high return rates because 2D static photos fail to convey physical scale, depth, and aesthetics in a customer's actual living environment.",
    solution:
      "Created an interactive web store featuring 3D product viewports, realistic PBR materials, orbit/zoom controls, and WebXR-based surface-detection AR that places virtual items on physical floors to scale.",
    architecture: {
      summary: "Three.js & WebXR 3D Storefront Architecture",
      steps: [
        { name: "Web Storefront", detail: "Product catalog showcasing 3D furniture models" },
        { name: "Three.js Engine", detail: "WebGL rendering with PBR textures, directional lighting, and shadows" },
        { name: "Orbit Controls", detail: "Smooth 360-degree rotation, pitch, and zoom manipulation" },
        { name: "WebXR Session", detail: "Initiates device camera access and horizontal plane detection" },
        { name: "AR Projection", detail: "Hit-testing places true-to-scale virtual furniture in physical room" },
      ],
    },
    techStack: ["JavaScript", "Three.js", "WebXR API", "WebGL", "HTML5", "CSS3", "glTF / USDZ"],
    contribution:
      "Constructed the Three.js 3D viewport, implemented touch and mouse orbit camera controls, integrated WebXR AR hit-testing, and built the responsive web catalog interface.",
    implementation:
      "Utilized Three.js for scene graph management, directional light rigging, and glTF 3D model parsing. Wired WebXR APIs for AR surface tracking on compatible mobile browsers.",
    results: [
      { metric: "60 FPS", label: "Smooth 3D Browser Rendering" },
      { metric: "True Scale", label: "Accurate AR Metric Placement" },
      { metric: "Zero Apps", label: "Runs Purely in Web Browser" },
      { metric: "Open Source", label: "GitHub Codebase Available" },
    ],
    challenges:
      "Maintaining smooth 60 FPS frame rates on low-end mobile graphics chips. Overcome by optimizing mesh polygon counts and compressing PBR textures.",
    visual: (
      <div className="visual-bg-ar">
        <div className="ar-mockup" aria-hidden="true">
          <div className="ar-top">
            <span>WEBXR 3D STORE</span>
            <small>AR READY</small>
          </div>
          <div className="ar-canvas-sim">
            <div className="cube-3d">
              <span className="face front">3D</span>
              <span className="face back">AR</span>
              <span className="face right">VR</span>
              <span className="face left">WEB</span>
              <span className="face top">SCALE</span>
              <span className="face bottom">PBR</span>
            </div>
          </div>
          <div className="ar-bottom">
            <span>TRUE-TO-SCALE AR PREVIEW</span>
            <strong>THREE.JS + WEBXR</strong>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "10",
    title: "Studymate",
    subtitle: "Smart Study Planner with ML Difficulty Estimation & AI Chatbot",
    category: "sde",
    badge: "Full Stack",
    description:
      "An intelligent academic study planner that extracts syllabus topics from notes and images, estimates learning difficulty using ML, and generates dynamic drag-and-drop revision calendars with an AI study chatbot.",
    highlights: [
      "Automated topic extraction from syllabus notes with ML-based difficulty estimation",
      "Interactive drag-and-drop study calendar with streak tracking and completion analytics",
      "Built-in AI study assistant chatbot for instant topic review, exam prep, and guidance",
    ],
    tags: ["Python", "Web Development", "REST APIs", "AI Assistant", "Data Analytics", "Full Stack"],
    githubUrl: "https://github.com/srikar123s/Studymate",
    overview:
      "Studymate is an intelligent academic planner designed to help university students organize their coursework. It automatically parses uploaded syllabus images or notes, estimates topic difficulty, auto-schedules study blocks into an interactive calendar, and provides an integrated AI chatbot for continuous revision support.",
    problem:
      "Students often misjudge the time needed to master difficult topics, leading to cramming and suboptimal exam outcomes. Traditional calendar tools require tedious manual entry and lack academic intelligence.",
    solution:
      "Built an end-to-end academic productivity suite that combines text extraction, machine learning difficulty estimation, drag-and-drop schedule optimization, and an AI study tutor into a single web application.",
    architecture: {
      summary: "Studymate AI Topic Extraction & Scheduling Architecture",
      steps: [
        { name: "Syllabus Upload", detail: "Notes, syllabus images, or course topic text ingestion" },
        { name: "Topic Extraction", detail: "NLP parsing and chapter segmentation" },
        { name: "ML Difficulty Estimator", detail: "Scores complexity based on prerequisites and terminology" },
        { name: "Schedule Generator", detail: "Optimizes study blocks onto a drag-and-drop calendar" },
        { name: "Analytics Dashboard", detail: "Tracks daily study streaks, completion rates, and milestones" },
        { name: "AI Study Tutor", detail: "Conversational assistant for Q&A and concept review" },
      ],
    },
    techStack: ["Python", "FastAPI / Flask", "Web Development", "REST APIs", "AI Assistant", "HTML5/CSS3", "JavaScript"],
    contribution:
      "Engineered the full-stack architecture, developed the topic difficulty scoring logic, implemented the interactive drag-and-drop calendar UI, and integrated the AI conversational study assistant.",
    implementation:
      "Constructed with a Python backend providing RESTful endpoints for topic parsing, schedule generation, and chatbot responses. Designed a clean, distraction-free web interface with streak analytics.",
    results: [
      { metric: "< 2s", label: "Automated Timetable Generation" },
      { metric: "100%", label: "Customizable Drag & Drop" },
      { metric: "Integrated", label: "AI Study Tutor Chatbot" },
      { metric: "Open Source", label: "GitHub Codebase Available" },
    ],
    challenges:
      "Extracting coherent topic hierarchies from varied syllabus formats. Overcome by developing flexible heuristic parsing rules and keyword frequency tokenization.",
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
]

// Original 3 Focused Skill Domains Matching Resume (AI/ML Engineer primary, then SDE & CS Grounding)
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Reveal animations
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
  }, [activeCategory, searchQuery])

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedProject])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setToastMessage(`Copied ${label} to clipboard!`)
    setTimeout(() => setToastMessage(null), 2500)
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
          Srikar Yalamarthi <span>.</span>
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
              Every project includes source code on GitHub, working deployed interactive apps, and deep-dive technical case studies.
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
                Full Stack &amp; Systems <span className="badge">{projects.filter((p) => p.category === "sde").length}</span>
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
                          onClick={() => setSelectedProject(project)}
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

      {/* Interactive 10-Section Project Case Study Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-info">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span className="modal-number">/{selectedProject.number}</span>
                  <span className="badge-category">{selectedProject.badge}</span>
                  {selectedProject.badge.includes("Patent") && (
                    <span className="badge-patent">Patent Published</span>
                  )}
                  {selectedProject.liveUrl && (
                    <span className="badge-live">
                      <i /> Live Deployed
                    </span>
                  )}
                </div>
                <h3 id="modal-project-title">{selectedProject.title}</h3>
                <p className="modal-subtitle">{selectedProject.subtitle}</p>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal dialog"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Modal Body - 10 Core Structured Sections */}
            <div className="modal-body">
              {/* 1. Overview */}
              <div className="modal-section">
                <h4>1. Project Overview</h4>
                <p>{selectedProject.overview}</p>
              </div>

              {/* 2. Problem Statement */}
              <div className="modal-section">
                <h4>2. Problem Statement</h4>
                <p>{selectedProject.problem}</p>
              </div>

              {/* 3. Proposed Solution */}
              <div className="modal-section">
                <h4>3. Proposed Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>

              {/* 4. System Architecture Flow */}
              <div className="modal-section">
                <h4>4. System Architecture &amp; Pipeline</h4>
                <p style={{ marginBottom: "16px", color: "#444" }}>
                  <strong>Architecture Summary:</strong> {selectedProject.architecture.summary}
                </p>
                <div className="modal-pipeline-flow">
                  {selectedProject.architecture.steps.map((step, idx) => (
                    <div className="modal-pipeline-item" key={step.name}>
                      <div className="pipeline-step-node">
                        <strong>
                          {idx + 1}. {step.name}
                        </strong>
                        <span>{step.detail}</span>
                      </div>
                      {idx < selectedProject.architecture.steps.length - 1 && (
                        <span className="pipeline-arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Technology Stack */}
              <div className="modal-section">
                <h4>5. Technology Stack</h4>
                <div className="modal-tech-tags">
                  {selectedProject.techStack.map((tech) => (
                    <span className="modal-tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Individual Contribution */}
              <div className="modal-section">
                <h4>6. Individual Contribution</h4>
                <p>{selectedProject.contribution}</p>
              </div>

              {/* 7. Implementation Details */}
              <div className="modal-section">
                <h4>7. Implementation Details</h4>
                <p>{selectedProject.implementation}</p>
              </div>

              {/* 8. Results and Evaluation */}
              <div className="modal-section">
                <h4>8. Measurable Results &amp; Evaluation</h4>
                <div className="modal-metrics-grid">
                  {selectedProject.results.map((res) => (
                    <div className="modal-metric-card" key={res.label}>
                      <strong>{res.metric}</strong>
                      <span>{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Challenges and Solutions */}
              <div className="modal-section">
                <h4>9. Engineering Challenges &amp; Solutions</h4>
                <p>{selectedProject.challenges}</p>
              </div>

              {/* 10. Links & Live Deployments */}
              <div className="modal-section">
                <h4>10. Repository &amp; Demonstrations</h4>
                <div className="modal-actions-row">
                  <a
                    className="modal-btn-repo"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon size={16} /> View GitHub Source Repository
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      className="modal-btn-live"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Live Web Application <ExternalLinkIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
