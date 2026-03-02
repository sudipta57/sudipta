export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Heva AI",
    role: "Hacker in Residence",
    dateRange: "Sep 2025 — Present",
    description:
      "Owned the end-to-end development of an AI product, handling problem research, system design, model selection, backend/frontend development, and production deployment. Conducted independent technical research to evaluate AI approaches, tools, and architectures. Built, iterated, and scaled core product features with focus on performance, reliability, security, and cost optimization.",
    tech: ["Python", "FastAPI", "React", "Next.js", "NLP", "LLM"],
  },
  {
    company: "JobGenix",
    role: "Full Stack Developer",
    dateRange: "Jul 2025 — Nov 2025",
    description:
      "Maintained and updated the entire JobGenix website, including job listings, user dashboards, and admin panels. Implemented new features to improve user experience and platform performance. Debugged and fixed full-stack issues in production environments. Optimized performance, security, and scalability of the website.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Redux"],
  },
  {
    company: "Secwebxperts Pvt. Ltd.",
    role: "Web Developer Intern",
    dateRange: "Sep 2024 — Mar 2025",
    description:
      "Developed responsive web applications using React and UI libraries, collaborating with cross-functional teams to integrate RESTful services and refine UI/UX designs. Implemented interactive components and integrated APIs, leveraging best coding practices to improve performance and ensure robust application functionality.",
    tech: ["React", "JavaScript", "REST API", "Express.js", "MongoDB"],
  },
];
