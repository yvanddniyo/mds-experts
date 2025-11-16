import { TrainingProgram } from "@/type";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "/program/", label: "Programs" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#contact", label: "Contact Us" },
] as const;

export const KEYWORDS = [
  "MDS Experts Ltd",
  "Rwanda",
  "Consultancy",
  "Training",
  "Professional Development",
  "Business Support",
  "PMP",
  "PBA",
  "ACP",
  "Project Management",
  "Business Analysis",
  "Business Services",
  "Professional Courses & Training Services",
  "Professional Training",
  "Corporate Training",
  "Certification Courses",
  "PMI Certification",
  "PMI-PBA",
  "PMI-ACP",
  "CAPM",
  "PRINCE2",
  "Agile",
  "Scrum",
  "Kanban",
  "Lean Six Sigma",
  "Change Management",
  "Stakeholder Management",
  "Program Management",
  "Portfolio Management",
  "Risk Management",
  "Business Process Improvement",
  "Monitoring and Evaluation (M&E)",
  "Capacity Building",
  "Workshops",
  "Short Courses",
  "Online Training",
  "In-house Training",
  "Custom Training",
  "Leadership Training",
  "Soft Skills Training",
  "IT Training",
  "Data Analysis",
  "Power BI",
  "Advanced Excel",
  "Primavera P6",
  "Microsoft Project",
  "Project Management Training",
  "Business Analysis Training",
  "Training in Rwanda",
  "Corporate Training Rwanda",
  "Professional Certification Rwanda",
  "Kigali",
  "Kigali Rwanda",
  "East Africa",
  "Consulting Services",
];

export const programs: TrainingProgram[] = [
  {
    id: "pmp",
    title: "Project Management Professional (PMP) – Certification Prep",
    description:
      "Master leadership, planning, execution, and control aligned to PMI global standards.",
  },
  {
    id: "pba",
    title: "PMI Professional in Business Analysis (PMI‑PBA) – Prep",
    description:
      "Build advanced capabilities in needs assessment, requirements analysis, and stakeholder engagement.",
  },
  {
    id: "acp",
    title: "Agile Certified Practitioner (PMI‑ACP) – Prep",
    description:
      "Learn adaptive delivery using Agile principles and Scrum techniques for real‑world projects.",
  },
  {
    id: "strategic",
    title: "Strategic Planning & Project Management Workshop",
    description:
      "Design and implement effective strategic and operational plans for sustainable project implementation.",
  },
  {
    id: "me",
    title: "Planning, Monitoring & Evaluation (M&E) for Development",
    description:
      "Hands‑on M&E frameworks, indicators, quality data collection, and results‑based reporting.",
  },
  {
    id: "coaching",
    title: "Executive Business Coaching Program",
    description:
      "Elevate leadership, communication, and coaching for organizational performance and growth.",
  },
];
