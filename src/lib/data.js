export const site = {
  name: "Priyanshi Verma",
  role: "Full Stack MERN Developer",
  location: "Jabalpur, Madhya Pradesh",
  email: "priyanshivermajnv@gmail.com",
  phone: "+91-7879107926",
  github: "https://github.com/PriyanshiVerma98",
  linkedin: "https://www.linkedin.com/in/priyanshi-verma98/",
  resumeUrl: "/resume.pdf",
  url: "https://your-portfolio-link.vercel.app",
  tagline:
    "Full-Stack MERN Developer passionate about building reliable, scalable, and impactful digital products.",
 summary:
  "Final-year B.Tech Information Technology student and Full-Stack MERN Developer passionate about building scalable, user-centric web applications. Skilled in React.js, Node.js, Express.js, MongoDB, and Java, with strong foundations in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks. Continuously learning and building impactful software through real-world projects.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Achievements", href: "#achievements" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const techStack = [
  "JavaScript",
  "Java",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "REST APIs",
  "Axios",
  "Git & GitHub",
  "Vercel",
  "Render",
  "DSA",
  "OOP",
];
export const skillCategories = [
  {
    label: "Languages",
    icon: "code",
    items: ["Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    icon: "web",
    items: ["React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    icon: "backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Database",
    icon: "db",
    items: ["MongoDB"],
  },
  {
    label: "Core CS",
    icon: "cpu",
    items: ["DSA", "OOP", "DBMS", "OS", "CN"],
  },
  {
    label: "Tools",
    icon: "tools",
    items: ["Git", "GitHub", "VS Code", "Axios", "ImageKit", "Vercel", "Render"],
  },
];

export const aboutStats = [
  { label: "Current status", value: "Seeking internships" },
  { label: "Degree", value: "B.Tech, Information Technology" },
  { label: "Year", value: "Final year (2023–2027)" },
  { label: "CGPA", value: "7.1 / 10" },
  { label: "Location", value: "Jabalpur, India" },
];

export const projects = [
  {
    slug: "ai-code-reviewer",
    hash: "a1f9c2e",
    name: "AI Code Reviewer",
    year: "2025",
    role: "Full-stack developer (solo)",
    stack: ["React.js", "Node.js", "Express.js", "Gemini AI", "Axios", "Vercel", "Render"],
    oneLiner:
      "An AI-powered code review platform that gives developers instant, structured feedback on their code.",
    problem:
      "Getting fast, honest feedback on code quality usually means waiting on a senior teammate or a slow PR review cycle. The goal was a tool where anyone could paste in code and get a structured review in seconds.",
    approach:
      "Built a React front end for submitting and viewing reviews, an Express REST API to handle requests, and integrated Groq AI to generate the actual review content. Axios handles all client–server communication, with clear request/response contracts between the two layers.",
    decisions: [
      "Kept the API stateless and prompt-driven, so the review logic lives in one place and is easy to iterate on without touching the frontend.",
      "Split the UI into a submission view and a review view so the AI's response could be rendered as structured feedback (not just a wall of text).",
      "Deployed frontend and backend separately (Vercel + Render) to keep each layer independently deployable.",
    ],
    outcome:
      "Shipped and deployed end to end — a working example of integrating a third-party AI API into a full product, not just calling it from a script.",
    liveUrl: "https://code-reviewer-woad.vercel.app/",
    repoUrl: "https://github.com/PriyanshiVerma98/Code-Reviewer.git",
    featured: true,
  },
 {
  slug: "mini-post-maker",
  hash: "7bd4e10",
  name: "Mini Post Maker",
  year: "2026",
  role: "Full Stack Developer (Solo)",
  stack: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Axios",
    "ImageKit"
  ],
  oneLiner:
    "A modern full-stack social media application inspired by Instagram, featuring cloud-based image uploads, dynamic feeds, and a responsive user experience.",

  problem:
    "I wanted to understand how modern social media platforms handle post creation, cloud image storage, and dynamic content rendering by building the complete posting workflow from scratch.",

  approach:
    "Built a complete MERN application where users can upload images with captions, preview posts before publishing, store media securely using ImageKit, save optimized image URLs in MongoDB, and instantly view posts in a responsive feed powered by REST APIs.",

  decisions: [
    "Integrated ImageKit instead of local storage so images are delivered through a global CDN while keeping the database lightweight by storing only image URLs.",
    "Designed reusable React components with Tailwind CSS to create a modern glassmorphism-inspired interface that remains responsive across desktop and mobile devices.",
    "Implemented live image preview before upload to provide a smoother and more interactive user experience.",
    "Separated frontend and backend into independent applications, communicating through REST APIs using Axios for a scalable architecture."
  ],

  outcome:
    "Successfully developed a production-style full-stack application that demonstrates cloud media handling, RESTful API development, MongoDB integration, responsive UI design, and the complete post creation-to-feed workflow found in modern social media platforms.",

  liveUrl: "https://github.com/PriyanshiVerma98/Mini-Post-Maker",

  repoUrl: "https://github.com/PriyanshiVerma98/Mini-Post-Maker",

  featured: true,
},
  {
    slug: "tradeverse",
    hash: "3c88f01",
    name: "TradeVerse",
    year: "2024",
    role: "Frontend developer (solo)",
    stack: ["React.js", "Tailwind CSS"],
    oneLiner:
      "A responsive virtual trading platform, built while exploring AI-assisted development workflows.",
    problem:
      "Wanted to simulate the core experience of a trading platform — watchlists, trade actions, and a data-dense UI — while also learning how to use AI tools like ChatGPT and Claude as real development collaborators rather than search engines.",
    approach:
      "Built the interface in React with Tailwind for a fast, responsive layout, using AI tools to pressure-test component structure and speed up iteration on UI states.",
    decisions: [
      "Treated AI tools as a pair programmer for scaffolding and debugging, while owning the component architecture and final implementation decisions.",
    ],
    outcome:
      "A working, responsive front end that reflects both UI craft and a practical, honest approach to AI-assisted development.",
    liveUrl: "https://your-project-link.vercel.app",
    repoUrl: "https://github.com/your-username/tradeverse",
    featured: true,
  },
];

export const achievements = [
  {
    stat: "100+",
    label: "DSA problems solved",
    detail: "Across GeeksforGeeks and LeetCode",
  },
  {
    stat: "2",
    label: "MERN apps shipped",
    detail: "Built and deployed end to end",
  },
  {
    stat: "2",
    label: "Hackathons Participation",
    detail: "HackOrbit & Smart India Hackathon (Internal Round)",
  },
];

export const timeline = [
  {
    hash: "b02d9e4",
    date: "2023 — 2027",
    title: "B.Tech, Information Technology",
    place: "Jabalpur Engineering College",
    detail: "CGPA 7.1/10 · No active backlogs",
  },
  {
    hash: "f4a71c0",
    date: "1 month",
    title: "Industrial Training",
    place: "Jabalpur Airport",
    detail: "Airport operational workflows, communication systems, professional practice.",
  },
  {
    hash: "e91b6a3",
    date: "Ongoing",
    title: "160 Days DSA Challenge",
    place: "GeeksforGeeks",
    detail: "Certification for sustained, structured problem solving.",
  },
];

export const certifications = [
  "GeeksforGeeks 160 Days DSA Challenge",
  "Industrial Training — Jabalpur Airport",
  "HackOrbit Hackathon — Participation",
];
