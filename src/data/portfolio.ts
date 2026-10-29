
export const profile = {
  name: "Juan Poblano",
  headline: "Computer Systems Engineering Student",
  specialization: "IoT & Industry 4.0",
  background: "Avionics",
  location: "Spain",
  availability: "Seeking university internships in Spain",
  email: "juanjpoblano@outlook.com",

  social: {
    github: "https://github.com/JuanPoblano",
    linkedin: "https://www.linkedin.com/in/juanpoblano/",
    platzi: "https://platzi.com/p/juanpoblano/",
    duolingo: "https://www.duolingo.com/profile/Poblatino",
    youtube: "https://www.youtube.com/@PoblanoJuan",
  },
};

export const engineeringProjects = [
  {
    id: "aircraft-telemetry",
    number: "01",
    category: "AEROSPACE · SOFTWARE",
    title: "Aircraft Telemetry & Anomaly Detection",
    description:
      "An engineering project exploring synthetic aircraft telemetry, data processing, anomaly detection and interactive monitoring.",
    technologies: ["Python", "Pandas", "FastAPI", "Plotly", "Pytest"],
    status: "In development",
    date: "Target: Dec 2026",
  },
  {
    id: "smart-factory",
    number: "02",
    category: "INDUSTRY 4.0 · IoT",
    title: "Smart Factory Monitoring System",
    description:
      "A planned industrial monitoring platform connecting simulated equipment data, messaging protocols, databases and operational dashboards.",
    technologies: ["Python", "MQTT", "SQL", "Docker", "Grafana"],
    status: "Planned",
    date: "Target: Jan 2027",
  },
  {
    id: "aerospace-systems",
    number: "03",
    category: "AEROSPACE · SYSTEMS",
    title: "Aerospace Systems Integration Lab",
    description:
      "A planned simulation and systems engineering laboratory focused on integration, validation and technical documentation.",
    technologies: ["Systems Engineering", "Simulation", "Testing"],
    status: "Planned",
    date: "Timeline: TBD",
  },
];

export const academicProjects = [
  {
    id: "arduino-robot",
    title: "Arduino Obstacle Avoidance Robot",
    institution: "CECyTEJ",
    category: "ROBOTICS · EMBEDDED SYSTEMS",
    description:
      "Academic robotics project using Arduino and ultrasonic obstacle detection. Awarded second place.",
    technologies: ["Arduino", "Ultrasonic Sensors", "Robotics"],
  },
  {
    id: "cessna-maintenance",
    title: "Cessna 172 Maintenance Project",
    institution: "UNAQ",
    category: "AVIATION · MAINTENANCE",
    description:
      "Academic aircraft maintenance project completed during avionics training, February–March 2020.",
    technologies: ["Aircraft Maintenance", "Technical Procedures"],
  },
  {
    id: "a320-ata27",
    title: "Airbus A320 — ATA 27 Flight Controls",
    institution: "UNAQ",
    category: "AVIONICS · AIRCRAFT SYSTEMS",
    description:
      "Independent academic study of Airbus A320 flight control systems using virtual training resources.",
    technologies: ["ATA 27", "Flight Controls", "Technical Documentation"],
  },
  {
    id: "wer-mexico",
    title: "WER México Robotics Competition",
    institution: "CECyTEJ",
    category: "ROBOTICS · TEAMWORK",
    description:
      "Member of a finalist team in the 2017 WER México robotics competition.",
    technologies: ["Robotics", "Teamwork", "Problem Solving"],
  },
];

export const webProjects = [
  { name: "Bank ATM", folder: "bank_atm", category: "WEB APPLICATION" },
  { name: "Flexbox Flag", folder: "flexboxflag", category: "CSS LAYOUT" },
  { name: "Google Clone", folder: "googleclone", category: "FRONTEND" },
  { name: "My CV Web", folder: "my-cv-web", category: "PERSONAL WEBSITE" },
  { name: "Pinterest Clone", folder: "pinterestclone", category: "FRONTEND" },
  { name: "Spotify Clone", folder: "spotifyclone", category: "UI RECREATION" },
  { name: "Zorbing", folder: "zorbing", category: "WEB PROJECT" },
];

export const experience = [
  {
    period: "2024 — 2025",
    role: "Operations Team Member",
    company: "Fairmont Le Manoir Richelieu",
    location: "Québec, Canada",
    description:
      "Worked in an international hospitality environment, strengthening teamwork, adaptability and professional communication. Recognized as Employee of the Month in March 2025.",
  },
  {
    period: "2023 — 2024",
    role: "AI Data Contributor",
    company: "TELUS International AI Data Solutions",
    location: "Remote",
    description:
      "Contributed to data annotation and evaluation tasks requiring accuracy, consistency and attention to detail.",
  },
  {
    period: "2022 — 2023",
    role: "Bilingual Technical Support",
    company: "Teleperformance · Xfinity",
    location: "Mexico",
    description:
      "Provided technical troubleshooting and customer support in English and Spanish, developing diagnostic and communication skills.",
  },
  {
    period: "2021 — 2022",
    role: "Machining Apprentice",
    company: "COMHI",
    location: "Mexico",
    description:
      "Gained practical exposure to manufacturing processes, machining and technical working environments.",
  },
];

export const education = [
  {
    period: "2023 — Present",
    degree: "Computer Systems Engineering",
    school: "Universidad Virtual del Estado de Guanajuato (UVEG)",
    description:
      "Undergraduate engineering studies focused on software, IoT and Industry 4.0.",
  },
  {
    period: "2018 — 2020",
    degree: "Higher University Technician in Avionics",
    school: "Universidad Aeronáutica en Querétaro (UNAQ)",
    description:
      "Technical higher education in avionics, aircraft systems and maintenance.",
  },
  {
    period: "2021",
    degree: "Frontend Development Bootcamp",
    school: "DEV.F",
    description:
      "Intensive frontend web development training.",
  },
  {
    period: "2015 — 2018",
    degree: "Technical High School Diploma in Programming",
    school:
      "CECyTEJ — Colegio de Estudios Científicos y Tecnológicos del Estado de Jalisco",
    description:
      "Upper-secondary technical education (high school) specializing in programming.",
  },
];

export const skillGroups = [
  {
    title: "Software & Development",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Engineering & Technical Interests",
    skills: [
      "Avionics",
      "Aircraft Systems",
      "IoT",
      "Industry 4.0",
      "Telemetry",
      "Robotics",
      "Embedded Systems",
      "Systems Integration",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Astro",
      "VS Code",
      "Arduino",
      "Docker",
      "MQTT",
      "Data Analysis",
      "Technical Documentation",
    ],
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "French", level: "DELF B2" },
  { name: "English", level: "Working proficiency" },
  { name: "Catalan", level: "Basic" },
];

export const interests = [
  {
    icon: "♟",
    title: "Chess",
    description:
      "Around 1300 rating. Strategy, analytical thinking and continuous improvement.",
  },
  {
    icon: "♫",
    title: "Music",
    description:
      "Saxophone and ukulele, currently learning piano.",
  },
  {
    icon: "◎",
    title: "Languages & Cultures",
    description:
      "Language learning, intercultural communication and lifelong learning.",
  },
  {
    icon: "△",
    title: "Nature & Hiking",
    description:
      "Hiking, exploring nature and discovering new places.",
  },
];

export const learningResources = [
  {
    title: "Platzi",
    category: "CONTINUOUS LEARNING",
    description: "Online learning profile and technical training.",
    url: "https://platzi.com/p/juanpoblano/",
  },
  {
    title: "Aprende.org — Verified Record 01",
    category: "VERIFIABLE TRAINING",
    description: "Training record with a public verification link.",
    url:
      "https://aprende.org/verifica/fa7088a5-1732-4311-b5aa-5a321b373bfe/508ad2bd-8db7-44ac-a27d-5589e3849220",
  },
  {
    title: "Aprende.org — Verified Record 02",
    category: "VERIFIABLE TRAINING",
    description: "Additional training record with public verification.",
    url:
      "https://aprende.org/verifica/fa7088a5-1732-4311-b5aa-5a321b373bfe/2f78e848-9c48-44b9-9f4e-b3200f407938",
  },
  {
    title: "Aprende.org — Diploma Program",
    category: "TRAINING PROGRAM",
    description: "Diploma program reference.",
    url: "https://aprende.org/diplomado/23",
  },
  {
    title: "Duolingo",
    category: "LANGUAGE LEARNING",
    description: "Language learning profile and ongoing practice.",
    url: "https://www.duolingo.com/profile/Poblatino",
  },
];
