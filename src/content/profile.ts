/**
 * Structured, language-independent profile data.
 * All human-readable copy lives in src/i18n/dictionaries/<locale>.json —
 * this file only holds facts: names, dates, links and tech tags.
 */

export const profile = {
  name: "Felipe Rueda Rivera",
  firstName: "Felipe",
  email: "feliperuedarivera10@gmail.com",
  location: "Bogotá, Colombia",
  photo: "/assets/images/profile/foto-perfil.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/feliperuedarivera",
    github: "https://github.com/Feru34",
    cv: "/assets/docs/felipe-rueda-cv.pdf",
  },
} as const;

export type SkillGroupKey = "cloud" | "ai" | "databases" | "programming" | "web";

export const skillGroups: { key: SkillGroupKey; items: string[] }[] = [
  {
    key: "cloud",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "AWS ECS",
      "AWS RDS",
      "IAM",
      "CloudWatch",
      "Route 53",
      "AWS DMS",
      "Docker",
      "Linux",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    key: "ai",
    items: ["OpenAI API", "RAG", "TensorFlow", "PyTorch", "Prompt Engineering"],
  },
  {
    key: "databases",
    items: ["PostgreSQL", "MySQL", "Oracle SQL", "MongoDB", "Firebase"],
  },
  {
    key: "programming",
    items: ["Python", "Java (Spring Boot)", "JavaScript", "TypeScript"],
  },
  {
    key: "web",
    items: ["Microservices", "REST APIs", "ETL Pipelines", "Angular", "React", "Node.js"],
  },
];

export type ExperienceKey =
  | "uniandesRag"
  | "finidian"
  | "managementSolutions"
  | "uniandesTA";

export type ExperienceEntry = {
  key: ExperienceKey;
  company: string;
  tech: string[];
  /** Official site of the employer; the company name links here. */
  url?: string;
  /** Extra related link shown under the highlights (e.g. the product built). */
  extraLink?: { label: string; href: string };
};

export const experience: ExperienceEntry[] = [
  {
    key: "uniandesRag",
    company: "Universidad de los Andes",
    tech: ["Python", "RAG", "LLMs"],
    url: "https://uniandes.edu.co",
    extraLink: { label: "platypus.uniandes.edu.co", href: "https://platypus.uniandes.edu.co/" },
  },
  {
    key: "finidian",
    company: "Finidian",
    tech: ["AWS", "PostgreSQL", "MongoDB", "Microservices", "CI/CD"],
    url: "https://app.finidian.com",
  },
  {
    key: "managementSolutions",
    company: "Management Solutions",
    tech: ["AWS", "Java Spring Boot", "Angular", "Python", "Flask", "OpenAI API", "ETL"],
    url: "https://www.managementsolutions.com",
  },
  {
    key: "uniandesTA",
    company: "Universidad de los Andes",
    tech: ["Python", "Flask", "MySQL", "REST APIs", "Pandas", "Matplotlib"],
    url: "https://uniandes.edu.co",
  },
];

export type ProjectKey = "andestrack" | "ragAnalyzer" | "riskPlatform";

export const projects: { key: ProjectKey; tech: string[]; link?: string; repo?: string }[] = [
  {
    key: "andestrack",
    tech: ["Django", "MySQL", "Garmin API", "Gunicorn", "Linux"],
    // Permanent handle of the thesis in Uniandes' Séneca repository
    link: "https://hdl.handle.net/1992/76147",
  },
  {
    key: "ragAnalyzer",
    tech: ["Python", "Flask", "OpenAI API", "RAG"],
  },
  {
    key: "riskPlatform",
    tech: ["AWS", "Java Spring Boot", "Angular", "Python", "ETL"],
  },
];

export const spokenLanguages: { code: string; levelKey: "native" | "b2" | "b1" }[] = [
  { code: "es", levelKey: "native" },
  { code: "en", levelKey: "b2" },
  { code: "fr", levelKey: "b2" },
  { code: "de", levelKey: "b1" },
];
