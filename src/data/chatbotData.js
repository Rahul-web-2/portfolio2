export const CHATBOT_META = {
  welcomeMessage:
    "Hi! I'm Rahul's assistant. Ask me anything about his skills, projects, or background — or pick a topic below.",
  fallbackMessage:
    "I'm not sure about that. Try asking about my skills, projects, education, or how to get in touch.",
};

export const FAQ = [
  {
    id: "portfolio-project",
    keywords: ["this site", "this website", "this portfolio", "portfolio project"],
    response:
      "This portfolio is built with React 19, Vite, Framer Motion, and vanilla CSS — no UI framework.",
  },
  {
    id: "bookstore",
    keywords: ["book store", "bookstore", "online book"],
    response:
      "The Online Book Store is a full-stack app using Spring Boot, Thymeleaf, and H2. It supports user login, role-based access, admin book management, and browsing.",
  },
  {
    id: "news",
    keywords: ["daily-news", "daily news", "news app", "headline"],
    response:
      "Daily-News is a React frontend that fetches live headlines from the News API across categories like Sports, Business, and World.",
  },
  {
    id: "todo",
    keywords: ["to-do", "todo", "task app", "task management"],
    response:
      "The To-Do App is a Spring Boot + Thymeleaf + H2 project that lets users add, edit, delete, and complete tasks.",
  },
  {
    id: "textconverter",
    keywords: ["text-converter", "text converter", "text convert"],
    response:
      "Text-Converter is a React app for text manipulation — case conversion, formatting, cleanup, and analysis.",
  },
  {
    id: "name",
    keywords: ["who are you", "who is rahul", "introduce yourself", "your name"],
    response:
      "I'm Rahul Lakhchaura, a Full-Stack Developer specialising in Java, Spring Boot, and React.js.",
  },
  {
    id: "education",
    keywords: ["education", "degree", "mtech", "m.tech", "university", "study", "qualification", "college"],
    response: "Rahul holds an M.Tech/B.Tech in Computer Science Engineering.",
  },
  {
    id: "frontend",
    keywords: ["frontend", "front-end", "react", "html", "css", "javascript", "ui"],
    response: "Frontend skills: React.js, HTML, CSS, and JavaScript.",
  },
  {
    id: "backend",
    keywords: ["backend", "back-end", "java", "spring boot", "spring", "rest api", "api"],
    response: "Backend skills: Java, Spring Boot, and REST API development.",
  },
  {
    id: "skills",
    keywords: ["skill", "tech stack", "technology", "expertise", "know", "experience"],
    response:
      "Rahul's stack covers Frontend (React.js, HTML, CSS, JavaScript) and Backend (Java, Spring Boot, REST APIs), with a focus on clean architecture and scalable web applications.",
  },
  {
    id: "projects",
    keywords: ["project", "built", "app", "application", "work"],
    response:
      "Rahul has built 5 projects:\n1. My Portfolio (React, Framer Motion)\n2. Online Book Store (Spring Boot, Thymeleaf, H2)\n3. Daily-News (React, News API)\n4. To-Do App (Spring Boot, Thymeleaf, H2)\n5. Text-Converter (React, CSS)",
  },
  {
    id: "github",
    keywords: ["github", "git", "source code", "repo", "repository"],
    response: "GitHub: https://github.com/Rahul-web-2",
  },
  {
    id: "linkedin",
    keywords: ["linkedin", "linked in", "professional profile"],
    response: "LinkedIn: https://www.linkedin.com/in/rahullakhchaura/",
  },
  {
    id: "contact",
    keywords: ["contact", "hire", "email", "reach", "connect", "message", "get in touch"],
    response:
      "You can reach Rahul via the Contact section on this page, or connect on LinkedIn: https://www.linkedin.com/in/rahullakhchaura/",
  },
  {
    id: "title",
    keywords: ["title", "role", "position", "job", "what do you do", "developer"],
    response:
      "Rahul is a Full-Stack Developer who builds scalable web applications, REST APIs, and responsive user interfaces.",
  },
];

export const QUICK_REPLIES = [
  { id: "qr-skills",    label: "Skills",    query: "skills" },
  { id: "qr-projects",  label: "Projects",  query: "projects" },
  { id: "qr-education", label: "Education", query: "education" },
  { id: "qr-contact",   label: "Contact",   query: "contact" },
];
