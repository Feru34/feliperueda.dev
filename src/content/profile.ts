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

export type ExperienceKey = "finidian" | "managementSolutions" | "uniandesTA";

export const experience: { key: ExperienceKey; company: string; tech: string[] }[] = [
  {
    key: "finidian",
    company: "Finidian",
    tech: ["AWS", "PostgreSQL", "MongoDB", "Microservices", "CI/CD"],
  },
  {
    key: "managementSolutions",
    company: "Management Solutions",
    tech: ["AWS", "Java Spring Boot", "Angular", "Python", "Flask", "OpenAI API", "ETL"],
  },
  {
    key: "uniandesTA",
    company: "Universidad de los Andes",
    tech: ["Python", "Flask", "MySQL", "REST APIs", "Pandas", "Matplotlib"],
  },
];

export type ProjectKey = "andestrack" | "ragAnalyzer" | "riskPlatform";

export const projects: { key: ProjectKey; tech: string[]; link?: string; repo?: string }[] = [
  {
    key: "andestrack",
    tech: ["Django", "MySQL", "Garmin API", "Gunicorn", "Linux"],
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
