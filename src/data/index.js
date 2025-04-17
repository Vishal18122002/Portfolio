import {
  algorithms,
  devnotes,
  oscs,
  one,
  fiserv,mst,cyber
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
    title: "Software Development Engineer",
    company_name: "MSTSoft",
    date: "Feb 2025 – Present",
    details: [
      "Designed and developed AI-powered RPA systems integrating Deep Learning for image and voice data extraction with Selenium-based automation.",
      "Developed MediTranscribe for medical audio-to-form automation and automated invoice processing and financial document analysis with custom RPA models.",
      "Currently developing an AR application using Unity, .NET MAUI, and Azure APIs.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Crion Versity",
    date: "July 2024 – Aug 2024",
    details: [
      "Created real-time dashboards using Python and Power BI, enhancing decision-making speed by 20%.",
      "Automated reporting workflows, saving over 50 hours per month.",
      "Improved data integration efficiency by 15%.",
    ],
  },
  {
    title: "Project-Based Work",
    company_name: "CloudDestination",
    date: "Mar 2024 – July 2024",
    details: [
      "Led AI model development for cyber attack and Covid-19 prediction.",
      "Applied deep learning techniques to real-world security and healthcare scenarios.",
    ],
  },
  {
    title: "Bachelor of Technology in AI & Data Science",
    company_name: "Rathinam Technical Campus",
    date: "2020 – Expected Graduation: 2025",
    details: [
      "Specialized in AI, cybersecurity, and system optimization.",
      "CGPA of 8.54, with top departmental ranking in 2022.",
      "1st place winner of Techtone23 Hackathon ($15,000 prize).",
    ],
  },
];

const portfolio = [
  {
    name: "One Access",
    description:
      "Developed a secure decentralized identity platform with biometric authentication. Integrated Blockchain and Docker for data privacy and scalability.",
    image: one,
    technologies:
      "Blockchain: Tcore; Backend: Python, Docker, MongoDB; Frontend: HTML, CSS",
    link: "https://github.com/Vishal18122002/One-Access",
  },
  {
    name: "MediTranscribe – Medical Form Automation",
    description:
      "Python-based automation tool that transcribes doctor audio to structured hospital forms using NLP, SpeechRecognition, and Selenium.",
    image: mst,
    technologies:
      "SpeechRecognition, Python, Selenium, spaCy, NLTK, Flask, Pandas, JSON",
    link: "https://github.com/Vishal18122002/MediTranscribe", // (Add actual link if different)
  },
  {
  name: "Fiserv Change Rate Automation (RPA)",
  description:
    "Automates the SOFR bond rate update in the Fiserv system using OCR and RPA. Captures bond data, extracts the rate using intelligent parsing, and updates the rate interface automatically.",
  image: fiserv, // Replace with a relevant image if available
  technologies:
    "Tools: Automation Anywhere, Selenium; OCR: Tesseract; Language: Python; Browser Automation",
  link: "https://drive.google.com/file/d/1EIFWuNBUPLpu4jKs-fntAjTCln9mKyiG/view?usp=sharing", // Demo video link
},
  {
    name: "Edugen – LMS Prototype",
    description:
      "A full-stack Learning Management System built using MERN stack with responsive design and course management functionality.",
    image: oscs,
    technologies:
      "Frontend: React, Tailwind, JavaScript; Backend: Node.js, Express.js, MongoDB; TypeScript",
    link: "https://github.com/Vishal18122002/Edugen",
  },
  {
    name: "Advanced Covid-19 Prediction",
    description:
      "Built a CNN-based deep learning model with 98% accuracy to detect Covid-19 from X-ray images.",
    image: algorithms,
    technologies: "Python, Flask, CNN, Deep Learning, Machine Learning",
    link: "https://github.com/Vishal18122002/Advance-covid-19-prediction",
  },
  {
    name: "Cyber Attack Prediction",
    description:
      "Designed a forecasting model to predict cyber attack patterns with a 10-year forecast visualization.",
    image: cyber,
    technologies:
      "Python, Flask, Deep Learning, Random Forest, HTML, CSS",
    link: "https://github.com/Vishal18122002/Cyber-attack-prediction-using-ANN",
  },
];

export { experiences, portfolio };
