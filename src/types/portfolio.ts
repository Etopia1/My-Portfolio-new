export type ProjectCategory =
  | "All"
  | "Full-Stack"
  | "Real-Time"
  | "AI & Vector"
  | "Commerce"
  | "Mobile & Maps";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, "All">[];
  year: string;
  role: string;
  problemSolved: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  engineeringChallenges: {
    challenge: string;
    solution: string;
  }[];
  dataFlow: string[];
  visualTheme: "pulse" | "assessment" | "itinerary" | "commerce" | "mobility" | "housing";
  /** Verified live deployment URL (or null if backend-only / pending) */
  liveUrl: string | null;
  /** Primary frontend or full-stack GitHub repository URL */
  repoUrl: string | null;
  /** Optional companion backend GitHub repository URL */
  backendRepoUrl?: string | null;
}

export interface GitHubRepoSpotlight {
  name: string;
  pairName?: string;
  domain: string;
  language: string;
  summary: string;
  highlights: string[];
  repoUrl: string;
  backendUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  items: {
    name: string;
    context: string;
    focus: "Core" | "Production" | "Specialized";
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Engineering" | "Quality Assurance" | "AI & Data";
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  program: string;
  status: string;
  focus: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  mode: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  iconName:
    | "Layers"
    | "Layout"
    | "Server"
    | "Webhook"
    | "Database"
    | "Sparkles"
    | "Workflow"
    | "ShieldCheck";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectOrEngagement: string;
  isPlaceholder?: boolean;
}
