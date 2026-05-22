export const architectureData = [
  {
    id: "frontend",

    title: "Frontend Architecture",

    description:
      "React + Vite frontend architecture with scalable feature modules.",

    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Zustand",
      "Framer Motion",
      "shadcn/ui",
    ],

    sections: [
      "Application Shell",
      "Workspace Engine",
      "Routing System",
      "Theme Infrastructure",
      "Dashboard UI",
    ],
  },

  {
    id: "backend",

    title: "Backend Architecture",

    description:
      "Spring Boot backend with scalable REST APIs and authentication.",

    technologies: ["Spring Boot", "JWT", "PostgreSQL", "Redis", "Docker"],

    sections: [
      "Authentication",
      "Ride APIs",
      "Realtime Gateway",
      "Caching Layer",
      "Microservices",
    ],
  },

  {
    id: "infrastructure",

    title: "Infrastructure Design",

    description: "Production deployment and CI/CD architecture.",

    technologies: ["GitHub Actions", "Docker", "Nginx", "AWS", "Linux"],

    sections: [
      "CI/CD",
      "Reverse Proxy",
      "Monitoring",
      "Containerization",
      "Deployment Pipeline",
    ],
  },
];
