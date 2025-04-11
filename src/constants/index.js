import {
  edunet,
  infosys,
  ibm,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  threejs,
  nextjs,
  python,
  coalmine,
  aiwebbuilder,
  exoplanets,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Cerfitication",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-stack Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning & AI",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Artificial Intelligence and Machine Learning Internship",
    company_name: "Edunet Foundation",
    icon: edunet,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Worked on real-world AI and ML projects, applying supervised and unsupervised learning techniques.",
      "Gained hands-on experience with Python, TensorFlow, and data preprocessing for model training.",
      "Collaborated with mentors and peers to solve complex AI-driven challenges.",
    ],
  },
  {
    title: "Artificial Intelligence Primer Certification",
    company_name: "Infosys Springboard",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Gained foundational knowledge of artificial intelligence concepts, including machine learning and neural networks.",
      "Explored real-world applications of AI across various industries such as healthcare, finance, and automation.",
      "Completed hands-on projects to understand AI problem-solving approaches and ethical considerations."
    ],
  },
  {
    title: "Full Stack Web Development Internship",
    company_name: "InternFort",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "July 2024 - Sep 2024",
    points: [
      "Developed full-stack applications using React for the frontend and Django for the backend.",
      "Built and deployed two major projects: an e-commerce website and a job portal with user authentication, database integration, and responsive design.",
      "Gained hands-on experience with database management and state management in React.",
    ],
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    company_name: "Coursera – Pursuing",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Learning modern front-end development technologies, including React.js, JavaScript, and responsive web design.",
      "Developing interactive and accessible web applications while following industry best practices.",
      "Gaining experience in version control (Git/GitHub) and optimizing web performance.",
    ],
  },
  
];


const projects = [
  {
    name: "AI-Powered Website Builder",
    description:
      "Developed a website generator using Gemini AI, which creates fully functional Vite applications based on user prompts. The system dynamically generates project files and code, streamlining web development and reducing manual effort.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "pink-text-gradient",
      },
    ],
    image: aiwebbuilder,
    source_code_link: "https://github.com/",
  },
  {
    name: "Coal Mines Monitoring Web Application",
    description:
      " A web application specifically designed for Indian coal mines to quantify their carbon footprint and explore pathways to carbon neutrality. This project is developed specifically for SIH 2024 Hackathon",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: coalmine,
    source_code_link: "https://github.com/Ratna-Babu/Coal-Mines-Carbon-Neutrality-Web-Application",
  },
  {
    name: "Exoplanets 3D Model",
    description:
      "Exoplanets 3D Model – A dynamic 3D visualization of exoplanets using Three.js and NASA's exoplanet archive data. The project renders realistic planetary models, allowing users to explore different exoplanets interactively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "flask-api",
        color: "pink-text-gradient",
      },
    ],
    image: exoplanets,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
