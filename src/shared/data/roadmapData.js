export const roadmapData = [
  {
    id: 1,
    title: "Frontend Foundation",
    status: "IN_PROGRESS",
    progress: 80,

    description: "Core frontend architecture and reusable UI systems.",

    steps: [
      {
        title: "Routing System",
        status: "COMPLETED",
      },
      {
        title: "Application Shell",
        status: "COMPLETED",
      },
      {
        title: "Dashboard UI",
        status: "IN_PROGRESS",
      },
      {
        title: "Authentication",
        status: "PENDING",
      },
    ],
  },

  {
    id: 2,
    title: "Backend APIs",
    status: "PENDING",
    progress: 20,

    description: "Scalable backend services and authentication APIs.",

    steps: [
      {
        title: "Spring Boot Setup",
        status: "COMPLETED",
      },
      {
        title: "JWT Authentication",
        status: "PENDING",
      },
      {
        title: "Ride APIs",
        status: "PENDING",
      },
    ],
  },

  {
    id: 3,
    title: "Realtime Infrastructure",
    status: "PENDING",
    progress: 10,

    description: "Socket systems and live ride coordination.",

    steps: [
      {
        title: "WebSocket Gateway",
        status: "PENDING",
      },
      {
        title: "Driver Tracking",
        status: "PENDING",
      },
    ],
  },
];
