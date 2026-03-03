export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Context AI",
    description:
      "An AI-powered contextual search and intelligence platform that leverages LLM applications for smart content understanding and retrieval.",
    tech: ["Next.js", "React", "Python", "FastAPI", "NLP"],
    github: "https://github.com/sudipta57/Context-AI",
    live: "https://context-ai-nine.vercel.app/",
    featured: true,
  },
  {
    name: "Cash Swap",
    description:
      "A modern currency exchange and financial transaction platform with real-time rates, secure transfers, and intuitive dashboard.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com/sudipta57/cashswap",
    live: "https://cashswap.vercel.app/",
    featured: true,
  },
  
  {
    name: "JobGenix Platform",
    description:
      "Job listing and recruitment platform with user dashboards, admin panels, and full-stack job management features.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Redux"],
    github: "https://github.com/sudipta57",
    live: "https://www.jobgenix.co.in/",
    featured: false,
  },

];
