import {
  algorithms,
  devnotes,
  oscs,one,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Bachelor of Technology in AI & Data Science",
    company_name: "Rathinam Technical Campus",
    date: "2020 - Expected Graduation: 2025",
    details: [
      "Studied core concepts of AI, machine learning, and cybersecurity.",
      "Achieved a CGPA of 8.54, awarded for the highest CGPA in the department of AI & Data Science in 2022.",
      "Actively participated in projects and hackathons, winning 1st place in Techtone23 Hackathon with a $15,000 prize.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Spring Confectioneries",
    date: "August 2023",
    details: [
      "Completed a career experience program focused on data analytics, shadowing a data analyst.",
      "Participated in project execution, gaining insights into cross-functional teamwork.",
      "Analyzed data to provide actionable insights, supporting decision-making processes.",
    ],
  },
];

const portfolio = [
  {
    name: "One Access",
    description:
      "Developed a Decentralized Identity System with Biometric Authentication, emphasizing user privacy and digital anonymity.",
    image: "https://github.com/Vishal18122002/Portfolio/blob/cb891c67d0e9329ab105b60f1adb60988fd8983c/src/assets/one.png", // Replace with the correct image path
    technologies: "Backend: Python, Docker, MongoDB; Frontend: HTML, CSS; Blockchain: Tcore, Blockchain",
    link: "https://github.com/Vishal18122002/One-Access", // Add your project link
  },
  {
    name: "Cyber Attack Prediction",
    description:
      "Created a deep learning model that predicts cyber attack cases and provides a graphical forecast for the next ten years.",
    image: algorithms , // Replace with the correct image path
    technologies: "Machine Learning: Random Forest, Python, Flask, Deep Learning; Frontend: HTML, CSS;",
    link: "https://github.com/Vishal18122002/Cyber-attack-prediction-using-ANN", // Add your project link
  },
  {
    name: "Advanced Covid-19 Prediction",
    description:
      "Utilized CNN algorithms to detect Covid-19 in lung X-rays with 92% accuracy.",
    image: algorithms , // Replace with the correct image path
    technologies: "Machine Learning: Flask, Python, Deep Learning, CNN; Frontend: HTML, CSS;",
    link: "https://github.com/Vishal18122002/Advance-covid-19-prediction", // Add your project link
  },
  {
    name: "Edugen",
    description: 
      "Edugen is a Learning Management System (LMS) prototype, similar to platforms like Coursera, developed using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to add new courses, ensuring data persistence and management.",
    image: oscs, // Add the correct path to your project image
    technologies: 
      "Frontend: React, JavaScript; Backend: Node.js, Express.js, MongoDB; Deployment: Responsive design for seamless experience across devices",
    link: "https://github.com/Vishal18122002/Edugen", // Add your project link
  },
];

export { experiences, portfolio };
