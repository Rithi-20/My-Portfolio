export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-agents' | 'medical-rag' | 'ml-vision' | 'fullstack' | 'data-analytics';
  categoryLabel: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  architecture?: {
    nodes: string[];
    description: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon?: string; badge?: string }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution?: string;
  period: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  highlight: string;
}

export interface WhatIBuildItem {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export const PERSONAL_INFO = {
  name: 'Rithiha',
  fullName: 'Rithiha U.',
  headline: 'AI Engineer & Software Developer',
  tagline: 'Building intelligent, production-ready applications with Agentic AI, RAG, Large Language Models, and robust software architectures.',
  bio: 'AI Engineer and Software Developer passionate about solving real-world challenges through intelligent systems. With extensive hands-on experience across Python, LangGraph, Retrieval-Augmented Generation, and full-stack software development, I build end-to-end AI applications—from multi-agent state machines and grounded medical RAG pipelines to real-time machine learning anomaly detectors.',
  email: 'rithihaumani2004@gmail.com',
  github: 'https://github.com/Rithi-20',
  githubUsername: 'Rithi-20',
  linkedin: 'https://www.linkedin.com/in/rithiha-u-3278a4286',
  avatarUrl: 'https://avatars.githubusercontent.com/u/141041102?v=4',
  publicReposCount: 28,
  status: 'Open to AI Engineer, ML Engineer & Software Developer Opportunities'
};

export const WHAT_I_BUILD: WhatIBuildItem[] = [
  {
    title: 'Agentic AI & State Machines',
    description: 'Autonomous goal-driven systems using LangGraph state graphs, dynamic tool routing, conversational self-correction, and human-in-the-loop validation.',
    tags: ['LangGraph', 'State Machine', 'Tool Calling', 'Guardrails'],
    icon: 'Bot'
  },
  {
    title: 'Context-Grounded RAG Systems',
    description: 'Hybrid sparse/dense retrieval pipelines combining FAISS vector search and BM25 lexical ranking with strict refusal guardrails against hallucinations.',
    tags: ['Hybrid Search', 'FAISS', 'BM25', 'Anti-Hallucination'],
    icon: 'Database'
  },
  {
    title: 'Domain Copilots & Enterprise AI',
    description: 'Industry-tailored AI copilots for regulated domains such as pharmaceutical QA (GMP/CAPA compliance), legal risk analysis, and corporate intelligence.',
    tags: ['FastAPI', 'QMS / Legal', 'Schema-Aware', 'SQL Ledgers'],
    icon: 'ShieldCheck'
  },
  {
    title: 'Computer Vision & Anomaly Detection',
    description: 'Real-time statistical flow modeling and ensemble classifiers (Random Forest, SVM) alongside OpenCV facial tracking and visitor logging systems.',
    tags: ['Random Forest', 'SVM', 'OpenCV', 'Intrusion Detection'],
    icon: 'Activity'
  },
  {
    title: 'Full-Stack AI Software Engineering',
    description: 'End-to-end web applications pairing modern React, Next.js, and TypeScript frontends with high-throughput FastAPI and Node.js backends.',
    tags: ['React', 'Next.js 14', 'TypeScript', 'FastAPI', 'Tailwind'],
    icon: 'Layers'
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Data models, SQL querying pipelines, and interactive Power BI analytical dashboards that extract actionable insights from raw operational logs.',
    tags: ['Power BI', 'SQL', 'Data Modeling', 'Excel Analytics'],
    icon: 'BarChart3'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'aivoa-qms',
    title: 'AIVOA QMS – Pharmaceutical Complaint Copilot',
    subtitle: 'AI-Powered Quality Management System with LangGraph State Machines',
    category: 'ai-agents',
    categoryLabel: 'Agentic AI & QMS',
    problem: 'Quality Assurance teams in pharmaceutical manufacturing face tedious, manual triage of unstructured PDF/email complaint reports, risking compliance lapses and slow CAPA remediation.',
    solution: 'Engineered an automated QMS platform using a LangGraph state graph. The system extracts structured fields from PDFs or free text, allows conversational natural-language corrections, classifies defects (Critical, Major, Minor) against GMP standards, recommends CAPA actions, and commits audit-ready records to a SQL ledger.',
    keyFeatures: [
      'LangGraph multi-node state graph (Router -> Extraction -> Edit -> Risk Assessment -> Response Generator)',
      'Natural-language conversational form corrections without losing previously populated fields',
      'Regulatory risk classification into Critical, Major, or Minor severity based on GMP & batch metrics',
      'Automated CAPA recommendations (batch quarantine, environmental log review, reserve sample checks)',
      'Audit-ready SQL ledger database tracking committed records with unique QMS-XXXXX identifiers'
    ],
    technologies: ['Python 3.13', 'FastAPI', 'LangGraph', 'LangChain', 'Groq (Gemma 2)', 'SQLAlchemy', 'React', 'Redux Toolkit', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Rithi-20/Ai_complaint_bot',
    featured: true,
    architecture: {
      nodes: [
        'Unstructured PDF / Email Ingestion',
        'Router Node (Intent Dispatcher)',
        'LLM Extraction Node',
        'Conversational Edit Node',
        'Risk & GMP Severity Classifier',
        'Auditable SQL Ledger'
      ],
      description: 'State graph orchestrator routes between initial document parsing and conversational adjustments before passing state to GMP regulatory classifiers.'
    }
  },
  {
    id: 'med-bot',
    title: 'Med_bot – Medical RAG Assistant',
    subtitle: 'Context-Grounded Retrieval with Hybrid FAISS & BM25 Search',
    category: 'medical-rag',
    categoryLabel: 'Medical AI & RAG',
    problem: 'Generic LLMs suffer from dangerous clinical hallucinations and external parametric memory leakage when answering questions based on medical reference literature.',
    solution: 'Developed an end-to-end domain-specific Retrieval-Augmented Generation (RAG) assistant using LangChain, Sentence-Transformers, and Llama 3.1 8B. Ingests medical textbooks, builds a hybrid dense (FAISS) and sparse (BM25) search index, and enforces strict refusal guardrails whenever queries fall outside reference texts.',
    keyFeatures: [
      'Hybrid sparse-dense retrieval combining FAISS vector store with BM25 lexical token matching',
      'Llama 3.1 8B Instruct model integration via Hugging Face Inference API',
      'Sentence-Transformers (all-MiniLM-L6-v2) for specialized semantic embeddings',
      'Section-preserving PDF document ingestion and chunking pipeline via PyPDF',
      'Interactive conversational research interface built with Chainlit with strict anti-hallucination guardrails'
    ],
    technologies: ['Python', 'LangChain', 'Llama 3.1 8B', 'FAISS', 'BM25 (rank-bm25)', 'Sentence-Transformers', 'Chainlit', 'Hugging Face API'],
    githubUrl: 'https://github.com/Rithi-20/Med_bot',
    featured: true,
    architecture: {
      nodes: [
        'Medical PDF Literature Ingestion',
        'Chunking & Section Boundary Parser',
        'Dense Embedding (FAISS) + Lexical (BM25)',
        'Hybrid Retrieval & Context Fusion',
        'Llama 3.1 8B with Strict Guardrails',
        'Verified Grounded Medical Answer'
      ],
      description: 'Literature chunks are indexed across both semantic vector space and lexical keyword indices to maximize precision on clinical terminology.'
    }
  },
  {
    id: 'smart-crm',
    title: 'SmartCRM AI Copilot',
    subtitle: 'Schema-Aware Intent Planning & Deterministic SQL Query Engine',
    category: 'ai-agents',
    categoryLabel: 'Enterprise AI Copilot',
    problem: 'Sales and operations teams waste significant time executing multi-table SQL queries, resolving customer record duplicates, and manually logging CRM interactions.',
    solution: 'Engineered a full-stack AI-Powered CRM Assistant that parses natural language questions into deterministic SQLite query plans via Qwen2.5-72B. Features two-phase entity resolution with interactive candidate disambiguation buttons, CRM-grounded responses, and an immutable audit ledger.',
    keyFeatures: [
      'Schema-aware intent planner converting natural language into validated SQLite query plans',
      'Two-phase entity resolution with interactive Option 1 / Option 2 candidate selection buttons for duplicate names',
      'Natural language answer synthesis grounded strictly in retrieved relational facts',
      'Immutable audit log recording CRM mutations (UPDATE_DEAL_STATUS, ASSIGN_LEAD, ADD_NOTE)',
      'Single-paragraph interaction history summarizer synthesizing long client touchpoints into concise briefings'
    ],
    technologies: ['Python', 'FastAPI', 'React (Vite)', 'Tailwind CSS', 'SQLite (WAL Mode)', 'Hugging Face API (Qwen2.5-72B-Instruct)', 'REST APIs'],
    githubUrl: 'https://github.com/Rithi-20/AI-Smart-CRM',
    featured: true,
    architecture: {
      nodes: [
        'Natural Language Sales Query',
        'Schema-Aware Intent Planner (Qwen 72B)',
        'Two-Phase Entity Disambiguation',
        'SQLite Execution (WAL Mode)',
        'Immutable Audit Logger',
        'Grounded Synthesis UI'
      ],
      description: 'Natural language input translates into safe, validated SQLite queries with interactive user disambiguation for ambiguous customer entities.'
    }
  },
  {
    id: 'ai-company-researcher',
    title: 'AI Company Research Assistant',
    subtitle: 'Autonomous Corporate Intelligence & Automated Report Dispatcher',
    category: 'ai-agents',
    categoryLabel: 'Corporate Intelligence',
    problem: 'Conducting in-depth due diligence, competitor benchmarking, and company pain-point analysis for prospects requires hours of manual research across fragmented sources.',
    solution: 'Built an autonomous corporate intelligence application for the Relu Consultancy AI & Automation Hackathon. Given a company name or URL, it crawls website subpages (/about, /products, /pricing) using Cheerio, enriches data via Serper.dev, executes multi-model AI reasoning via OpenRouter, outputs branded jsPDF reports, and posts alerts to Discord via REST API.',
    keyFeatures: [
      'Intelligent Cheerio crawler analyzing home, about, products, services, solutions, and pricing subpages',
      'Serper.dev integration for official domain resolution and public web knowledge graph extraction',
      'OpenRouter multi-model reasoning support (GPT-4o, Claude 3.5 Sonnet, DeepSeek R1, Llama 3.3)',
      'Automated competitor analysis with differentiation rationale and severity-ranked pain point breakdown',
      'Single-click downloadable branded PDF reports (jsPDF-AutoTable) and automated Discord Bot webhook dispatch'
    ],
    technologies: ['Next.js 14 App Router', 'TypeScript', 'React 18', 'Tailwind CSS', 'Cheerio', 'Serper.dev API', 'OpenRouter API', 'jsPDF', 'Discord REST API'],
    githubUrl: 'https://github.com/Rithi-20/AI_Company_Research_Assisstant',
    liveDemoUrl: 'https://relu-ai-dev-hiring.vercel.app/',
    featured: true,
    architecture: {
      nodes: [
        'Company Name or URL Input',
        'Serper.dev Domain Resolver',
        'Cheerio Subpage Web Crawler',
        'OpenRouter Multi-Model Reasoning Engine',
        'jsPDF Report Formatter',
        'Discord REST Bot Dispatcher'
      ],
      description: 'Crawler collects hierarchical corporate web content, OpenRouter synthesizes strategic analysis, and outputs are simultaneously generated as PDFs and dispatched to Discord.'
    }
  },
  {
    id: 'anomaly-detection',
    title: 'Network Anomaly & DDoS Detection System',
    subtitle: 'Machine Learning Intrusion Detection with Dual-Model Ensemble',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning & Security',
    problem: 'Modern network infrastructures require automated, real-time threat detection on high-volume traffic captures with minimal false negatives to prevent Distributed Denial of Service (DDoS) downtime.',
    solution: 'Developed an ML-based network intrusion detection system with an interactive Flask web dashboard during my AI internship. The system extracts statistical flow characteristics and utilizes a dual-model ensemble (Random Forest and Support Vector Machine) to identify malicious DDoS traffic with high detection recall.',
    keyFeatures: [
      'Dual-model ensemble combining Random Forest and Support Vector Machine (SVM) classifiers',
      'Real-time network flow traffic log ingestion and statistical feature extraction',
      'Benign network activity verification vs high-volume flood attack detection',
      'Interactive Flask web dashboard for live threat metrics and anomaly visualization',
      'Optimized detection recall minimizing false negatives on enterprise traffic dumps'
    ],
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Random Forest', 'SVM', 'Pandas', 'NumPy', 'HTML / CSS'],
    githubUrl: 'https://github.com/Rithi-20/Anamoly-detection',
    featured: true,
    architecture: {
      nodes: [
        'Network Flow Capture Logs',
        'Statistical Feature Engineering',
        'Dual-Model Ensemble (Random Forest + SVM)',
        'Classification & Confidence Scorer',
        'Real-Time Flask Threat Dashboard'
      ],
      description: 'Network telemetry is preprocessed into statistical flow vectors, passed through complementary ML classifiers, and visualized on a live monitoring dashboard.'
    }
  },
  {
    id: 'greenmark',
    title: 'GreenMark – Smart Urban Greening Platform',
    subtitle: 'AI Growth Monitoring, GPS Verification & Carbon Estimation',
    category: 'fullstack',
    categoryLabel: 'AI & Sustainable Tech',
    problem: 'Urban reforestation and greening initiatives suffer from a lack of transparent, verifiable tracking regarding sapling survival, location verification, and verifiable carbon credit estimation.',
    solution: 'Designed an integrated urban sustainability platform that monitors plant health and growth using computer vision, verifies physical tree locations via GPS telemetry, attaches unique QR codes to each specimen, and computes verifiable carbon credit estimations.',
    keyFeatures: [
      'Computer vision algorithms assessing plant growth stages and foliage health from uploaded photos',
      'GPS coordinate verification guaranteeing physical planting authenticity across urban zones',
      'Unique QR code tracking linking physical saplings to digital lifecycle registries',
      'Algorithmic carbon sequestration estimation providing quantifiable carbon offset credits',
      'Full-stack client-server architecture with React frontend and Express backend'
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'Computer Vision', 'GPS Telemetry', 'QR Tracking', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/Rithi-20/Greenmark',
    featured: true,
    architecture: {
      nodes: [
        'Sapling QR Code Scan & GPS Geotag',
        'Visual Photo Upload',
        'AI Plant Health & Growth Classifier',
        'Carbon Sequestration Estimator',
        'Central Urban Registry DB'
      ],
      description: 'Physical geotagged assets are matched with computer vision health analysis to calculate verifiable ecological carbon metrics.'
    }
  }
];

export const ALL_PROJECTS: Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: 'curalink',
    title: 'Curalink – AI Medical Research Hub',
    subtitle: 'Multi-Source Medical Literature RAG across PubMed, OpenAlex & ClinicalTrials',
    category: 'medical-rag',
    categoryLabel: 'Medical AI & RAG',
    problem: 'Medical practitioners and researchers must cross-reference disparate databases to investigate complex clinical conditions.',
    solution: 'Built for the AI Medical Research Assistant Hackathon, Curalink orchestrates intelligent query expansion and concurrently queries PubMed, OpenAlex, and ClinicalTrials.gov, synthesizing source-backed answers via an open-source LLM pipeline.',
    keyFeatures: [
      'Intelligent query expansion expanding patient symptoms and disease entities into specialized medical queries',
      'Concurrent multi-source retrieval across PubMed, OpenAlex, and ClinicalTrials.gov APIs',
      'Custom RAG pipeline utilizing Llama 3 / Mistral models via Hugging Face',
      'MERN stack architecture with full citation transparency'
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'PubMed API', 'OpenAlex API', 'ClinicalTrials.gov', 'Hugging Face'],
    githubUrl: 'https://github.com/Rithi-20/Curalink',
    featured: false
  },
  {
    id: 'multiagent-console',
    title: 'Multiagent Operations & Orchestration Console',
    subtitle: 'Collaborative Multi-Agent Network for Administrative Automation',
    category: 'ai-agents',
    categoryLabel: 'Multi-Agent Systems',
    problem: 'Administrative scheduling and operational tasks require repetitive human coordination across team calendars and tools.',
    solution: 'Created an Operations & Orchestration Dashboard featuring collaborative multi-agent automated orchestration, calendar sync, and interactive chat console for automated workflow dispatching.',
    keyFeatures: [
      'Collaborative agent network delegating distinct operational subtasks',
      'Calendar synchronization and event scheduling automation',
      'Interactive chat console with agent deliberation traces',
      'Clean modern developer interface'
    ],
    technologies: ['Python', 'Multi-Agent Frameworks', 'LangChain', 'REST APIs', 'Interactive Web UI'],
    githubUrl: 'https://github.com/Rithi-20/Multiagent',
    featured: false
  },
  {
    id: 'social-media-bot',
    title: 'Social Media Bot Simulator (LangGraph)',
    subtitle: 'Persona-Driven Agent Simulation with Prompt Injection Defense',
    category: 'ai-agents',
    categoryLabel: 'Agentic AI & Security',
    problem: 'Testing agent personality consistency and evaluating vulnerability against adversarial prompt injection requires controlled simulation environments.',
    solution: 'Built a LangGraph simulator that models automated bots with distinct personas. Matches user posts via vector search (Chroma & Hugging Face), grounds responses via web search, and defends its persona against adversarial prompt injection during interactive debates.',
    keyFeatures: [
      'Router phase utilizing Chroma vector search to match personas with topics',
      'LangGraph multi-step execution graph coordinating drafting and defense',
      'Active defense mechanisms mitigating prompt injection attacks',
      'Groq LLM API integration for rapid inference'
    ],
    technologies: ['Python', 'LangGraph', 'ChromaDB', 'Hugging Face Embeddings', 'Groq API'],
    githubUrl: 'https://github.com/Rithi-20/Social-Media-Bot',
    featured: false
  },
  {
    id: 'face-recognizer',
    title: 'Intelligent Face Tracker & Visitor Counter',
    subtitle: 'Real-Time Facial Recognition with Auto-Registration',
    category: 'ml-vision',
    categoryLabel: 'Computer Vision & Deep Learning',
    problem: 'Facilities require automated, frictionless visitor tracking and entry/exit timestamp logging without manual badge scans.',
    solution: 'Engineered a real-time AI-driven visitor counting system that detects, recognizes, and tracks faces from live video streams, automatically registers novel faces, and maintains accurate entry/exit timestamps.',
    keyFeatures: [
      'Real-time face detection and feature embedding extraction from video feeds',
      'Automated registration of new visitor identities into an embedded database',
      'Entry and exit timestamp logging with unique visitor counting statistics',
      'Loom video demonstration walkthrough included'
    ],
    technologies: ['Python', 'OpenCV', 'Deep Learning / Face Embeddings', 'SQLite', 'NumPy'],
    githubUrl: 'https://github.com/Rithi-20/Face_recognizer',
    featured: false
  },
  {
    id: 'legal-risk-bot',
    title: 'GenAI Legal Assistant – Risk Management Bot',
    subtitle: 'Legal Co-Pilot for SMEs & Contract Clause Analysis',
    category: 'ai-agents',
    categoryLabel: 'Legal Tech & NLP',
    problem: 'Small and medium enterprises (SMEs) lack in-house counsel to analyze complex vendor contracts for predatory terms and compliance risks.',
    solution: 'Built a Legal Co-Pilot tuned for Indian law and MSME payment regulations. Parses contracts, extracts red-flag clauses (Indemnity, Unilateral Termination, Jurisdiction), calculates visual fairness scores, and provides side-by-side plain English translations.',
    keyFeatures: [
      'Instant contract risk scoring with visual safety gauge',
      'Automated red-flag clause extraction (Indemnity, Unilateral Termination, Jurisdiction)',
      'Side-by-side clause explorer translating legalese into plain English',
      'Downloadable PDF audit report with MSME payment term checks'
    ],
    technologies: ['Python 3.10+', 'spaCy NLP', 'Large Language Models', 'PDF Parsing', 'Streamlit'],
    githubUrl: 'https://github.com/Rithi-20/Risk-management-bot',
    featured: false
  },
  {
    id: 'binance-bot',
    title: 'Binance Futures Testnet Trading Bot',
    subtitle: 'High-Resilience Execution Engine with HMAC-SHA256 Security',
    category: 'fullstack',
    categoryLabel: 'Algorithmic Systems & APIs',
    problem: 'Automated order execution on financial exchanges requires strict signature encryption, network fault tolerance, and comprehensive request-response auditing.',
    solution: 'Engineered a resilient Python command-line trading engine interfacing with the Binance Futures Testnet (USDT-M), supporting Market, Limit, and Stop-Limit orders with live and dry-run simulation modes.',
    keyFeatures: [
      'Full support for Market, Limit, and Stop-Limit order execution',
      'Cryptographic HMAC-SHA256 request signing and query parameter hashing',
      'Dual execution modes: Live signed network mode and Dry-Run local simulation',
      'Graceful exception handling and comprehensive audit logging'
    ],
    technologies: ['Python', 'Binance Futures API', 'HMAC-SHA256 Cryptography', 'REST APIs'],
    githubUrl: 'https://github.com/Rithi-20/Binance',
    featured: false
  },
  {
    id: 'resume-assistant',
    title: 'Resume AI Assistant',
    subtitle: 'Document Parsing & Context-Aware Q&A RAG Pipeline',
    category: 'ai-agents',
    categoryLabel: 'LLMs & Document AI',
    problem: 'Recruiters and hiring teams need immediate, evidence-grounded answers about candidate credentials without reading lengthy portfolios.',
    solution: 'Designed an interactive resume interrogation assistant that parses PDF documents, constructs text embeddings, and answers queries strictly grounded in the candidate profile.',
    keyFeatures: [
      'Multi-format document parsing (PDF, DOCX, TXT)',
      'Embedding service and semantic search ranking',
      'Strict guardrails preventing fabricated qualifications',
      'Modern Next.js and TypeScript frontend'
    ],
    technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Vector Embeddings', 'LLM API'],
    githubUrl: 'https://github.com/Rithi-20/Rithi-Ai-Assistant',
    featured: false
  },
  {
    id: 'ecommerce-analytics',
    title: 'E-Commerce Analytics & Business Dashboard',
    subtitle: 'Data Modeling, KPI Tracking & Interactive Metrics',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics & BI',
    problem: 'Retail managers require unified visibility over multi-channel sales volume, customer retention, and inventory turnover.',
    solution: 'Built an interactive e-commerce management dashboard analyzing transactions, conversion funnels, and revenue metrics.',
    keyFeatures: [
      'Interactive metrics visualization for sales, conversions, and order statuses',
      'Filterable data tables and real-time category performance charts',
      'Clean component design with responsive UI layouts'
    ],
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Data Visualization'],
    githubUrl: 'https://github.com/Rithi-20/Ecommerce-dashboard',
    featured: false
  },
  {
    id: 'codsoft-internship',
    title: 'CodSoft Python Software Suite',
    subtitle: 'Core Python Development & Interactive Utility Applications',
    category: 'fullstack',
    categoryLabel: 'Software Development',
    problem: 'Developing solid engineering fundamentals across GUI programming, input validation, and algorithmic data structures.',
    solution: 'Completed intensive software development assignments during the CodSoft developer internship, implementing interactive GUI utilities, calculators, and task management systems.',
    keyFeatures: [
      'Desktop GUI architectures using Tkinter with stateful task queues',
      'Robust input validation and defensive error handling routines',
      'Structured object-oriented programming designs'
    ],
    technologies: ['Python', 'Tkinter GUI', 'Object-Oriented Design'],
    githubUrl: 'https://github.com/Rithi-20/Codsoft',
    featured: false
  },
  {
    id: 'ml-algorithms',
    title: 'ML Algorithms & Benchmarks Repository',
    subtitle: 'Hands-on Implementations of Fundamental Machine Learning Models',
    category: 'ml-vision',
    categoryLabel: 'Machine Learning',
    problem: 'Understanding algorithmic mechanics requires building and benchmarking core machine learning models from ground truth.',
    solution: 'Developed practical implementations and comparative benchmarks across regression, classification, clustering, and evaluation metrics.',
    keyFeatures: [
      'Supervised and unsupervised learning implementations',
      'Feature normalization, cross-validation, and hyperparameter tuning',
      'Scikit-learn model evaluation pipelines'
    ],
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/Rithi-20/ML_Algorithm',
    featured: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Core ML algorithms, deep neural nets, and statistical modeling',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Computer Vision (OpenCV)' },
      { name: 'NLP (Natural Language Processing)' },
      { name: 'Scikit-learn' },
      { name: 'Random Forest' },
      { name: 'SVM (Support Vector Machines)' },
      { name: 'PyTorch & TensorFlow' }
    ]
  },
  {
    title: 'LLM & Agentic AI',
    description: 'Autonomous workflows, state machines, and grounded retrieval',
    skills: [
      { name: 'LangGraph (State Graphs)' },
      { name: 'LangChain' },
      { name: 'Retrieval-Augmented Generation (RAG)' },
      { name: 'Multi-Agent Orchestration' },
      { name: 'FAISS Dense Vector Store' },
      { name: 'BM25 Lexical Search' },
      { name: 'Prompt Engineering & Guardrails' },
      { name: 'Groq & Hugging Face Inference' },
      { name: 'Llama 3.1 & Qwen 2.5' }
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Strong foundation in object-oriented and functional systems',
    skills: [
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'SQL' }
    ]
  },
  {
    title: 'Backend & Web Engineering',
    description: 'High-throughput APIs, crawlers, and server architectures',
    skills: [
      { name: 'FastAPI' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'RESTful API Design' },
      { name: 'Cheerio Web Crawling' },
      { name: 'SQLAlchemy' },
      { name: 'Webhook & Discord APIs' }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Modern, responsive, accessible user interfaces',
    skills: [
      { name: 'React (Vite)' },
      { name: 'Next.js 14 (App Router)' },
      { name: 'Tailwind CSS' },
      { name: 'Redux Toolkit' },
      { name: 'Lucide Icons' },
      { name: 'HTML5 & CSS3' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational, document, and vector database management',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQLite (WAL Mode)' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'ChromaDB' }
    ]
  },
  {
    title: 'Data Analytics & BI',
    description: 'Business intelligence dashboards and quantitative analytics',
    skills: [
      { name: 'Power BI' },
      { name: 'SQL Query Optimization' },
      { name: 'Microsoft Excel Data Models' },
      { name: 'Statistical Data Analysis' },
      { name: 'Pandas & NumPy' }
    ]
  },
  {
    title: 'Developer Tools & Platforms',
    description: 'Version control, containerization, and modern toolchains',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'Linux / Bash' },
      { name: 'VS Code' },
      { name: 'Vercel Deployment' }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Junior Software Developer',
    organization: 'Fuzionest Private Limited',
    period: '6 Months',
    type: 'Software Development',
    description: 'Engineered robust software applications, developed backend services, and contributed to full-stack feature delivery.',
    bullets: [
      'Developed and maintained scalable application modules and RESTful backend APIs.',
      'Collaborated on database schema design, application debugging, and performance optimization.',
      'Contributed to code reviews, system documentation, and full-stack software integration.'
    ],
    technologies: ['Python', 'JavaScript', 'React', 'REST APIs', 'SQL', 'Git']
  },
  {
    role: 'AI Intern',
    organization: 'Edufyi Solutions',
    period: '2 Months',
    type: 'AI & Machine Learning',
    description: 'Developed machine learning models, executed data preprocessing pipelines, and evaluated artificial intelligence workflows.',
    bullets: [
      'Implemented, trained, and benchmarked machine learning classification models.',
      'Engineered automated feature extraction and data preprocessing routines on real datasets.',
      'Explored model performance metrics and optimization strategies for practical AI deployment.'
    ],
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'AI Pipelines']
  },
  {
    role: 'Web Development Intern',
    organization: 'Techvolt Software',
    period: '15 Days',
    type: 'Web Development',
    description: 'Designed responsive user interfaces, structured clean web pages, and implemented interactive frontend components.',
    bullets: [
      'Constructed responsive, mobile-first web layouts with clean semantic HTML5 and modern CSS3.',
      'Implemented dynamic client-side interactions and DOM event handling using JavaScript.',
      'Applied cross-browser compatibility testing and frontend performance styling.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'BE Computer Science and Engineering',
    field: 'Computer Science and Engineering',
    period: 'Bachelor of Engineering (B.E.)',
    details: [
      'Core coursework in Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems, and Software Engineering.',
      'Specialized focus on Applied AI, LLM Architectures, Agentic Workflows, and Production Web Systems.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Relu Consultancy AI & Automation Developer Hackathon',
    issuer: 'Relu Consultancy',
    date: 'Hackathon Contributor',
    summary: 'Built the AI-Powered Company Research Assistant featuring automated Cheerio web crawling, Serper.dev data extraction, OpenRouter multi-LLM reasoning, jsPDF report generation, and Discord Bot integration.',
    highlight: 'Selected Project Submission'
  },
  {
    title: 'AI Medical Research Assistant Hackathon',
    issuer: 'Medical AI Hackathon',
    date: 'Hackathon Contributor',
    summary: 'Engineered Curalink: an AI medical research hub executing concurrent multi-source retrieval across PubMed, OpenAlex, and ClinicalTrials.gov with custom open-source RAG reasoning.',
    highlight: 'Advanced RAG System'
  },
  {
    title: 'Python Development Certification',
    issuer: 'CodSoft',
    date: 'Internship Credential',
    summary: 'Completed end-to-end Python programming assignments covering desktop GUI applications, data structures, and algorithmic problem-solving.',
    highlight: 'Internship Completion'
  },
  {
    title: 'Documented AI & Software Learning Journey',
    issuer: 'Continuous Technical Mastery',
    date: 'Ongoing Practice',
    summary: 'Publicly maintained knowledge base and practice repository documenting hands-on implementations of LangGraph, RAG architectures, Deep Learning, SQL, and Power BI.',
    highlight: '28+ Repositories Maintained'
  }
];
