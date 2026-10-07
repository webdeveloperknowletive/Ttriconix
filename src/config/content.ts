/**
 * TTRICONIX SITE CONTENT CONFIGURATION
 * All structured copy, section data, interactive states, and capabilities.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Approach', href: '#approach' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'AI Workflow', href: '#workflow' },
  { label: 'Work', href: '#products' },
];

export const HERO_NODES = [
  {
    id: 'product',
    label: 'Product',
    subtitle: 'Strategy & PRD',
    role: 'Defines the domain model, unit economics, user friction, and minimum viable excellence.',
    angle: 0,
    distance: 190,
  },
  {
    id: 'ai',
    label: 'AI Core',
    subtitle: 'Agents & RAG',
    role: 'Autonomous tool calling, contextual memory retrieval, and domain-tuned intelligence.',
    angle: 40,
    distance: 220,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    subtitle: 'Next.js & React',
    role: 'Ultra-fast interfaces, ergonomic interactions, accessibility, and high frame-rate UX.',
    angle: 80,
    distance: 185,
  },
  {
    id: 'backend',
    label: 'Backend',
    subtitle: 'APIs & Microservices',
    role: 'Deterministic distributed services, low-latency RPCs, and resilient domain logic.',
    angle: 120,
    distance: 215,
  },
  {
    id: 'data',
    label: 'Data Layer',
    subtitle: 'Postgres & Vector',
    role: 'ACID transactions, hybrid vector indexation, schema migrations, and event streaming.',
    angle: 160,
    distance: 190,
  },
  {
    id: 'security',
    label: 'Security',
    subtitle: 'Auth & RBAC',
    role: 'Zero-trust authentication, tenant isolation, SOC2-ready data encryption, and audit logs.',
    angle: 200,
    distance: 220,
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    subtitle: 'K8s & Terraform',
    role: 'Multi-region failover, container orchestration, IaC pipelines, and edge CDN routing.',
    angle: 240,
    distance: 185,
  },
  {
    id: 'qa',
    label: 'QA & Testing',
    subtitle: 'E2E & Load Tests',
    role: 'Automated regression suits, mutation testing, chaos resilience, and stress benchmarking.',
    angle: 280,
    distance: 215,
  },
  {
    id: 'integrations',
    label: 'Integrations',
    subtitle: 'Stripe & Webhooks',
    role: 'External banking gateways, transactional webhooks, ERP synchronizers, and CRM APIs.',
    angle: 320,
    distance: 190,
  },
];

export const BIG_IDEA_DATA = {
  headline: "AI changed how software gets made. It didn't remove the need to engineer it.",
  subheadline: "AI provides leverage. Engineering provides direction, rigor, and accountability.",
  summary: "Tools generate code in seconds. But production systems demand architecture, security, state consistency, deterministic edge cases, and continuous maintenance. Ttriconix harnesses AI to accelerate engineering by 5x to 10x, while upholding relentless software engineering standards.",
  aiLeverage: [
    { title: 'Rapid Prototyping', desc: 'Instant scaffold of domain models, mock APIs, and design tokens in hours instead of weeks.' },
    { title: 'Syntax & Boilerplate Synthesis', desc: 'Eliminates repetitive full-stack typing, allowing engineers to focus on architectural trade-offs.' },
    { title: 'Synthetic Test Generation', desc: 'Auto-generates property tests, fuzzing suites, and obscure boundary tests based on specifications.' },
    { title: 'Deep Codebase Analysis', desc: 'Semantic search across documentation, AST parsing, and pattern extraction in milliseconds.' },
    { title: 'Intelligent Operational Copilots', desc: 'Automated anomaly detection, log clustering, and real-time observability telemetry.' },
  ],
  engineeringAccountability: [
    { title: 'System Architecture', desc: 'Designing decoupled boundaries, transactional guarantees, and high-concurrency data models.' },
    { title: 'Security & Tenant Isolation', desc: 'Ensuring zero data leakage, strict RBAC, end-to-end encryption, and cryptographic auditability.' },
    { title: 'Deterministic Reliability', desc: 'Guaranteed idempotent APIs, distributed locks, retry policies, and graceful failure modes.' },
    { title: 'Product & Economic Judgment', desc: 'Choosing what NOT to build, optimizing cloud unit economics, and aligning code with user value.' },
    { title: 'Long-Term Maintainability', desc: 'Zero technical debt sprawl, typed contracts, modular codebases, and seamless handoff.' },
  ],
  intersectionSummary: "At Ttriconix, AI never operates without an engineer at the wheel. We engineer products that survive real production traffic, strict compliance, and scale.",
};

export const PIPELINE_STAGES = [
  {
    number: '01',
    name: 'IDEA',
    tagline: 'Deconstruct & Clarify',
    description: 'You bring the raw concept, business problem, or technical bottleneck. We unpack the fundamental problem statement, analyze market dynamics, and establish technical feasibility.',
    deliverables: ['Problem Space Definition', 'Feasibility Matrix', 'Core Assumptions Log'],
    techFocus: 'Product Discovery, Value-Hypothesis Mapping',
  },
  {
    number: '02',
    name: 'DEFINE',
    tagline: 'Scope & Architecture Spec',
    description: 'We translate the vision into an uncompromising Technical PRD: user journeys, data entity relationships, third-party dependencies, and initial milestones.',
    deliverables: ['Technical PRD & User Stories', 'Data Entity Map', 'Milestone Roadmapping'],
    techFocus: 'Domain-Driven Design, API Contract Specs',
  },
  {
    number: '03',
    name: 'ARCHITECT',
    tagline: 'System Blueprint & Schemas',
    description: 'We architect the system for horizontal scalability, data consistency, and low latency before typing application logic. No accidental monoliths or vendor lock-in.',
    deliverables: ['System Architecture Diagram', 'Database Schema DDL', 'Threat Model & Security Spec'],
    techFocus: 'Microservices / Modular Monolith, PostgreSQL, Event Bus',
  },
  {
    number: '04',
    name: 'DESIGN',
    tagline: 'Product UX & Systems',
    description: 'We engineer UX in lockstep with the system architecture. High-fidelity design systems, intuitive mental models, keyboard-first workflows, and micro-interactions.',
    deliverables: ['Interactive Figma / Code Prototype', 'Complete Design System Tokens', 'Edge-Case UI States'],
    techFocus: 'Responsive Ergonomics, State Transition Design',
  },
  {
    number: '05',
    name: 'BUILD',
    tagline: 'AI-Accelerated Full-Stack',
    description: 'Our senior engineers build the production codebase. AI tools accelerate boilerplate, client generation, and routine coding, while engineers craft mission-critical business logic.',
    deliverables: ['Production TypeScript Codebase', 'Typed API Endpoints', 'Component Design Library'],
    techFocus: 'React / Next.js, Node.js / Go / Python, Prisma / Drizzle',
  },
  {
    number: '06',
    name: 'INTELLIGENCE',
    tagline: 'AI Agents & RAG',
    description: 'When the product calls for intelligence, we embed production-grade LLM orchestration: deterministic guardrails, low-latency vector search, contextual memory, and agentic tools.',
    deliverables: ['Vector Index & Retrieval Pipeline', 'Agent Tool Calling Harness', 'Evaluation Benchmarks'],
    techFocus: 'LangGraph, LlamaIndex, pgvector, Claude/GPT-4o, Prompt Eval',
  },
  {
    number: '07',
    name: 'TEST',
    tagline: 'Rigor & Chaos Hardening',
    description: 'Zero shipping on hope. We run comprehensive test pyramids: unit, integration, end-to-end browser flows, load simulations under peak traffic, and security audits.',
    deliverables: ['Automated Test Suite (100% Core Coverage)', 'Load Benchmark Reports', 'Security Penetration Report'],
    techFocus: 'Vitest, Playwright, k6 Load Tests, Static Analysis',
  },
  {
    number: '08',
    name: 'DEPLOY',
    tagline: 'Production Cutover & CI/CD',
    description: 'Automated CI/CD pipelines deploying to isolated cloud infrastructure. Blue/green zero-downtime cutover, database migration safeguards, and SSL/CDN provisioning.',
    deliverables: ['Terraform IaC Scripts', 'GitHub Actions CI/CD Pipeline', 'Production Cloud Cluster'],
    techFocus: 'AWS / GCP / Cloudflare, Docker, Kubernetes, Zero-Downtime Rollouts',
  },
  {
    number: '09',
    name: 'SCALE',
    tagline: 'Telemetry & Evolution',
    description: 'Real-time observability, distributed tracing, automated alerts, and continuous code enhancements as real users stress-test the product.',
    deliverables: ['OpenTelemetry Dashboards', 'SLA & Uptime Monitoring', 'Continuous Engineering Iteration'],
    techFocus: 'Prometheus, Grafana, Datadog, Sentry, Auto-Scaling Groups',
  },
];

export const CAPABILITIES = [
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    badge: 'Zero to Production',
    tagline: 'Web apps, SaaS, high-throughput dashboards, portals, and digital platforms.',
    summary: 'We build complete software products from first principles. Whether crafting a multi-tenant B2B SaaS platform or high-velocity customer portal, we deliver clean architecture, high frame-rate interfaces, and bulletproof backends.',
    keyPoints: [
      'Multi-tenant B2B SaaS architectures with team billing & RBAC',
      'High-throughput real-time dashboards & analytics consoles',
      'Marketplaces & complex multi-sided platforms',
      'Offline-capable PWAs and cross-platform native applications',
      'Clean TypeScript codebases engineered for handover & longevity',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'Tailwind', 'PostgreSQL', 'GraphQL'],
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    badge: 'Applied Intelligence',
    tagline: 'Agentic workflows, autonomous copilots, production RAG, and intelligent automation.',
    summary: 'We do not build toy chatbots. We engineer production-grade applied AI systems with strict output schemas, deterministic guardrails, domain-tuned retrieval, and autonomous multi-agent tool execution.',
    keyPoints: [
      'Production RAG systems with hybrid dense/sparse vector retrieval',
      'Autonomous agent swarms executing multi-step business tasks',
      'Domain-tuned copilot experiences embedded directly into workflow UIs',
      'Continuous eval pipelines measuring latency, accuracy, and hallucination rates',
      'Cost-optimized model routing between frontier LLMs and self-hosted models',
    ],
    technologies: ['LangGraph', 'LlamaIndex', 'pgvector', 'OpenAI API', 'Anthropic Claude', 'vLLM', 'Ollama', 'Pinecone'],
  },
  {
    id: 'system-engineering',
    title: 'System Engineering',
    badge: 'Resilience & Scale',
    tagline: 'Resilient APIs, distributed data pipelines, cloud infrastructure, and zero-trust security.',
    summary: 'The hidden backbone that keeps your software fast, secure, and always available. We design distributed databases, secure API gateways, event queues, and cloud infrastructure that scale seamlessly under heavy load.',
    keyPoints: [
      'Distributed systems handling millions of concurrent requests',
      'High-performance data modeling, indexing, and migration pipelines',
      'Zero-trust security, OAuth2/OIDC, and SOC2-compliant compliance standards',
      'Infrastructure as Code (IaC) with automated rollback & blue/green deployments',
      'End-to-end distributed tracing, metrics, and real-time observability',
    ],
    technologies: ['PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'OpenTelemetry'],
  },
  {
    id: 'product-design',
    title: 'Product Design',
    badge: 'Ergonomic Systems',
    tagline: 'Deep UX workflows, design systems, ergonomic interfaces, and rapid prototypes.',
    summary: 'Design at Ttriconix is not decoration—it is functional software architecture. We design information hierarchies, keyboard-first interactions, and responsive design systems that solve complex user problems.',
    keyPoints: [
      'Design systems with tokenized Figma-to-code pipelines',
      'Frictionless user flows reducing cognitive load and time-to-value',
      'Information architecture optimized for dense technical workflows',
      'Interactive functional prototypes validating UX before writing production code',
      'WCAG AA accessible, responsive, and micro-animated interfaces',
    ],
    technologies: ['Figma', 'Design Tokens', 'Storybook', 'Framer Motion', 'Radix UI', 'CSS Grid', 'Ergonomic UX'],
  },
];

export const PHILOSOPHY_STEPS = [
  {
    step: '01',
    question: 'WHAT PROBLEM ARE WE SOLVING?',
    focus: 'Economic & Operational Reality',
    detail: 'Before touching a keyboard, we analyze the core friction. What manual process wastes hours? What bottleneck limits revenue? Software that doesn’t solve a sharp problem is waste.',
    output: 'Clear Problem Statement & Success Metrics',
  },
  {
    step: '02',
    question: 'WHO IS USING IT?',
    focus: 'User Psychology & Context',
    detail: 'We examine who is clicking the buttons. Are they busy enterprise ops managers or mobile consumers on the go? The user’s context determines ergonomics, speed requirements, and error tolerance.',
    output: 'User Mental Model & Flow Constraints',
  },
  {
    step: '03',
    question: 'WHAT SHOULD EXIST?',
    focus: 'Minimum Viable Excellence',
    detail: 'We cut the vanity bloat. Instead of building 50 mediocre features, we identify the high-leverage 5 features that create 90% of the product’s commercial value.',
    output: 'Ruthlessly Prioritized Scope Matrix',
  },
  {
    step: '04',
    question: 'HOW SHOULD IT WORK?',
    focus: 'Interaction & State Architecture',
    detail: 'We map the state transitions, feedback cycles, latency expectations, and edge-case exceptions. The interface must communicate state clearly at every micro-second.',
    output: 'Interactive State Blueprint & UX Wireframes',
  },
  {
    step: '05',
    question: 'HOW DO WE ENGINEER IT?',
    focus: 'Architecture, Schemas & AI Leverage',
    detail: 'Now we choose the tech stack, write database DDL, build typed API schemas, and orchestrate AI leverage to build fast without compromising architectural purity.',
    output: 'Production Software Codebase & Infrastructure',
  },
  {
    step: '06',
    question: 'HOW DO WE MAKE IT LAST?',
    focus: 'Resilience, Testing & Maintainability',
    detail: 'We write thorough integration tests, configure automated CI/CD, document the architecture, and ensure any engineer can easily understand, maintain, and extend the system.',
    output: 'Maintainable, Handover-Ready Production Asset',
  },
];

export const ARCHITECTURE_LAYERS = [
  {
    level: '01',
    name: 'PRODUCT UI',
    tag: 'Interface Layer',
    tech: 'React · Next.js · TypeScript · WebSockets · Tailwind',
    description: 'High-performance interactive interfaces with optimistic updates, sub-100ms response feel, accessible tokens, and real-time streaming state.',
    telemetry: 'Render Budget: < 16ms · First Contentful Paint: < 0.6s · 100% TypeScript Strict',
  },
  {
    level: '02',
    name: 'APPLICATION DOMAIN',
    tag: 'Business Logic',
    tech: 'Node.js · Go · State Machines · Event-Driven Handlers',
    description: 'Decoupled domain services executing business rules, state transitions, idempotency checks, and permission validations independent of the transport layer.',
    telemetry: 'Domain Isolation: 100% · Decoupled from Frameworks · Fully Unit-Tested',
  },
  {
    level: '03',
    name: 'API & GATEWAY',
    tag: 'Transport & Edge',
    tech: 'GraphQL · REST · gRPC · Edge Functions · Rate-Limiting',
    description: 'Typed contract interfaces with request validation, DDoS defense, cryptographic token verification, and automated OpenAPI documentation.',
    telemetry: 'p99 Latency: < 25ms · Automated Schema Validation · Token Bucket Rate-Limiting',
  },
  {
    level: '04',
    name: 'DATA & STATE',
    tag: 'Persistence & Cache',
    tech: 'PostgreSQL · Redis · ClickHouse · Vector Indexing',
    description: 'ACID-compliant relational persistence, low-latency in-memory cache, analytical event storage, and automated zero-downtime database migrations.',
    telemetry: 'Connection Pooling: PgBouncer · Query Time: < 5ms p90 · Point-in-Time Recovery',
  },
  {
    level: '05',
    name: 'AI ORCHESTRATION',
    tag: 'Applied Intelligence',
    tech: 'LangGraph · LlamaIndex · Semantic Router · Guardrails',
    description: 'Deterministic AI pipeline with semantic caching, contextual chunking, dynamic prompt assembly, token budgeting, and fallback model routing.',
    telemetry: 'Cache Hit Rate: > 40% · Guardrail Validation: 100% · Fallback Latency: < 1.2s',
  },
  {
    level: '06',
    name: 'SECURITY & AUTH',
    tag: 'Zero-Trust Controls',
    tech: 'OAuth2 / OIDC · JWT/EdDSA · RBAC / ABAC · KMS Encryption',
    description: 'Enterprise-grade identity verification, tenant boundary isolation, cryptographic signing of state, and SOC2-ready audit logging.',
    telemetry: 'Encryption: AES-256-GCM / TLS 1.3 · Row-Level Security: Active · Audit Trail: Immutable',
  },
  {
    level: '07',
    name: 'INFRASTRUCTURE',
    tag: 'Cloud & Compute',
    tech: 'Docker · Kubernetes · AWS / GCP / Cloudflare · Terraform',
    description: 'Declarative Infrastructure as Code (IaC), multi-zone container clusters, automated blue/green canary deployments, and elastic horizontal auto-scaling.',
    telemetry: 'Uptime SLA: 99.95% · Deployment Type: Zero-Downtime Blue/Green · Auto-scale in < 30s',
  },
  {
    level: '08',
    name: 'OBSERVABILITY',
    tag: 'Telemetry & Health',
    tech: 'OpenTelemetry · Prometheus · Grafana · Distributed Traces',
    description: 'Unified distributed tracing across microservices, real-time structured logs, error budget tracking, and predictive anomaly alerts.',
    telemetry: 'Trace Sample Rate: 100% Critical · Real-Time Alert Pager · Zero Blind Spots',
  },
  {
    level: '09',
    name: 'PRODUCTION',
    tag: 'Live Engine',
    tech: 'Automated CI/CD · Disaster Recovery · Continuous Delivery',
    description: 'The running product generating revenue, serving end users, processing transactions, and autonomously scaling with business growth.',
    telemetry: 'Status: Healthy · Active Production Environment · 100% Client Code Ownership',
  },
];

export const AI_WORKFLOW_STEPS = [
  {
    phase: '01',
    name: 'DISCOVER',
    aiRole: 'Research & Intelligence Acceleration',
    humanRole: 'Architectural Synthesis & Domain Judgment',
    detail: 'AI synthesizes vast competitor APIs, domain documentation, and user interview transcripts. Engineers use this synthesis to establish airtight domain models and feasibility boundaries.',
    leverageMetric: '4x faster discovery phase',
  },
  {
    phase: '02',
    name: 'BUILD',
    aiRole: 'Syntax & Client Code Generation',
    humanRole: 'Architecture, State Logic & Code Review',
    detail: 'AI generates typed API stubs, ORM boilerplate, and UI component variations from design tokens. Engineers spend their mental cycles on complex business logic, concurrency, and security.',
    leverageMetric: '3x engineering throughput',
  },
  {
    phase: '03',
    name: 'VERIFY',
    aiRole: 'Synthetic Edge-Case & Chaos Tests',
    humanRole: 'Quality Criteria & Deterministic Guarantees',
    detail: 'AI models analyze functions to generate hundreds of unexpected edge-case inputs, malformed JSON tests, and boundary conditions. Engineers review coverage to ensure 100% resilience.',
    leverageMetric: '5x higher edge-case test density',
  },
  {
    phase: '04',
    name: 'INTELLIGENCE',
    aiRole: 'Embedded Product Features',
    humanRole: 'Guardrails, Prompt Engineering & Fallbacks',
    detail: 'We build AI directly into your product: semantic search, document understanding, copilot agents, and automated summarization, backed by deterministic guardrails and cost controls.',
    leverageMetric: 'Production-ready AI capabilities',
  },
  {
    phase: '05',
    name: 'OPERATE',
    aiRole: 'Log Clustering & Anomaly Triage',
    humanRole: 'Incident Response & Root-Cause Resolution',
    detail: 'AI watches telemetry logs in real time, clustering anomalies before users complain. Engineers receive contextual diagnosis packages with suggested fixes ready for review.',
    leverageMetric: '80% faster incident triage',
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'saas',
    category: 'SaaS Platforms',
    title: 'Multi-Tenant B2B Cloud Software',
    description: 'Subscription billing, granular role permissions, workspace switching, automated tenant provisioning, and high-concurrency API backends.',
    specs: ['Multi-tenant Isolation', 'Stripe Billing & Metered Usage', 'Next.js 15 App Router', 'PostgreSQL Row-Level Security'],
    archetypeUI: 'SaaS Analytics & Workspace Management Console',
  },
  {
    id: 'ai-copilots',
    category: 'AI Copilots & Agents',
    title: 'Autonomous Domain-Specific Assistants',
    description: 'Context-aware intelligence embedded into complex workflows. Tool-calling agents that query databases, trigger external APIs, and draft deliverables.',
    specs: ['LangGraph State Machine', 'Streaming Responses', 'Hybrid Vector Retrieval', 'Deterministic Action Verification'],
    archetypeUI: 'Agentic Workflow Executor & Data Chat Console',
  },
  {
    id: 'automation',
    category: 'Intelligent Automation',
    title: 'Automated Operations & Pipeline Engines',
    description: 'Replacing manual operational labor with automated event-driven software pipelines, OCR document parsing, and continuous data reconciliation.',
    specs: ['Kafka / BullMQ Event Queues', 'Document Classification Engine', 'Webhook Orchestrators', 'Auditable Execution Log'],
    archetypeUI: 'Automated Pipeline & Job Execution Monitor',
  },
  {
    id: 'dashboards',
    category: 'High-Scale Dashboards',
    title: 'Real-Time Financial & Operational Telemetry',
    description: 'Sub-second data visualization for mission-critical operations: financial trading, logistics tracking, IoT monitoring, and executive telemetry.',
    specs: ['ClickHouse Analytical Engine', 'WebSocket Streaming', 'WebGL / Canvas Charting', 'Dynamic Filter Engine'],
    archetypeUI: 'Streaming Real-Time Financial Metric Terminal',
  },
  {
    id: 'portals',
    category: 'Customer Portals',
    title: 'High-Security Self-Service Portals',
    description: 'Intuitive external client portals for onboarding, document exchange, support tickets, and account management that reduce operational support costs.',
    specs: ['Magic Link & Passkey Auth', 'Encrypted File Storage', 'Activity Audit Stream', 'Zero-Latency Search'],
    archetypeUI: 'Client Workspace & Document Exchange Hub',
  },
  {
    id: 'replatforming',
    category: 'System Re-Engineering',
    title: 'Legacy Modernization & Performance Rebuilds',
    description: 'Taking fragile, slow legacy codebases and systematically re-architecting them into modern, clean, AI-accelerated cloud systems without downtime.',
    specs: ['Strangler Fig Migration Pattern', 'Database Schema Modernization', 'TypeScript Strict Mode', 'Dockerized Cloud Deployments'],
    archetypeUI: 'Modernized Microservices Mesh & Service Monitor',
  },
];

export const AUDIENCE_DATA = [
  {
    role: 'Startups & Founders',
    pitch: 'From idea to market-ready product without burning months hiring.',
    detail: 'You have a breakthrough concept and need a production-grade software product shipped to users fast. We architect, design, and engineer your V1 with the rigor of a battle-tested technical team.',
    deliverable: 'Complete production launch in weeks, not quarters.',
  },
  {
    role: 'Entrepreneurs',
    pitch: 'Build the software engine behind your business vision.',
    detail: 'You know your market and customer demand intimately, but need an elite engineering partner who can translate your operational model into high-value software that scales.',
    deliverable: 'A custom software asset you own 100% with zero technical debt.',
  },
  {
    role: 'Growing Businesses',
    pitch: 'Modernize systems and ship new digital revenue streams.',
    detail: 'Eliminate clunky spreadsheets and outdated legacy tools. We engineer modern platforms, custom customer portals, and internal automation engines that unlock operational efficiency.',
    deliverable: 'Enterprise reliability with consumer-grade product polish.',
  },
  {
    role: 'Product & Tech Teams',
    pitch: 'Supercharge sprint velocity with senior engineering firepower.',
    detail: 'Your internal team is stretched thin building core features. We embed as a dedicated product engineering unit to tackle ambitious new AI features, complex integrations, or sub-systems.',
    deliverable: 'Direct senior-level engineering output with zero management overhead.',
  },
  {
    role: 'Existing Products',
    pitch: 'Rebuild, automate, or AI-enable your existing software.',
    detail: 'Have a product that is slow, hard to maintain, or falling behind competitor AI features? We refactor architecture, eliminate technical debt, and engineer modern AI workflows.',
    deliverable: '10x performance improvements and future-ready capabilities.',
  },
];

export const TRUST_FOUNDATIONS = [
  {
    title: '100% Intellectual Property Transfer',
    subtitle: 'You own every line of code',
    description: 'We transfer full, unencumbered ownership of all repositories, design tokens, architecture blueprints, and cloud configurations upon delivery. No vendor lock-in, ever.',
  },
  {
    title: 'Direct Senior Engineering Access',
    subtitle: 'Zero account-manager telephone game',
    description: 'You collaborate directly with senior product designers and software architects who are actively writing and reviewing your product’s code.',
  },
  {
    title: 'Production-Grade Engineering Standards',
    subtitle: 'No fragile prototypes passed as products',
    description: 'Every codebase is built with strict TypeScript typing, comprehensive automated test suites, secure authentication boundaries, and automated CI/CD deployment pipelines.',
  },
  {
    title: 'Transparent Technical Milestones',
    subtitle: 'Continuous delivery you can inspect daily',
    description: 'We deploy to staging environments continuously. You can see real features working, test edge cases, and inspect progress every single sprint.',
  },
];

export const SAMPLE_BLUEPRINT = {
  title: 'Engineering Blueprint: Autonomous Logistics & Invoice Reconciliation Engine',
  clientContext: 'Mid-Market Supply Chain Firm with 40,000 monthly multi-currency invoices',
  problem: 'Manual invoice data extraction and ERP matching required 6 full-time staff, resulting in 4% error rates and 12-day payment reconciliation delays.',
  solutionArchitecture: 'Engineered an event-driven system combining OCR vision models, deterministic schema validation, automated ERP integration via REST/webhooks, and an ergonomic human-in-the-loop review UI.',
  techStack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'BullMQ / Redis', 'Claude 3.5 Sonnet', 'Docker on AWS'],
  result: '98.6% automated reconciliation rate, invoice processing time reduced from 12 days to 45 seconds, zero ERP schema corruption, and $180,000 annual operational savings.',
};

export const INTAKE_PROJECT_TYPES = [
  'New SaaS / Web Application',
  'AI Product / Copilot / Agents',
  'Internal Operating System / Portal',
  'Business Workflow Automation',
  'System Modernization / Re-engineering',
  'Dedicated Engineering Squad',
];

export const INTAKE_STAGES = [
  'Just an idea / concept in mind',
  'Have notes, PRD, or wireframes',
  'Existing product needing rebuild / AI',
  'Production app needing scale & engineering',
];

export const INTAKE_TIMELINES = [
  'Immediate (Within 2–4 weeks)',
  '1 to 2 months',
  '3 to 6 months',
  'Flexible / Planning stage',
];
