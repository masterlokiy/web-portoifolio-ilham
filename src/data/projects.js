import lumaImage from "@assets/images/project_images/luma.webp";
import plddueImage from "@assets/images/project_images/PLDDUE.webp";
import pawonbutomoImage from "@assets/images/project_images/pawonbutomo.webp";

const projects = [
  {
    id: "01",
    year: "2024 – 2025",
    title: "Serabutin",
    category: "Bangkit Academy Capstone",
    period: "Sep 2024 – Jan 2025",
    tags: ["data", "ai"],
    description:
      "Led the Machine Learning team in developing ML-based features for a freelance job marketplace application.",
    details: [
      "Led the Machine Learning team in developing ML-based features for a freelance job marketplace application.",
      "Developed a face recognition system to enhance user authentication and login security.",
      "Collaborated with the team to develop an NLP-based system for detecting offensive and inappropriate words to help filter potentially fraudulent job postings.",
      "Collaborated with Machine Learning, Cloud Computing, and Mobile Development teams to integrate ML features into the application.",
    ],
    image: "",
    tools: ["TensorFlow", "NLP", "Face Recognition", "Cloud Integration", "Team Lead"],
    link: "https://github.com/masterlokiy",
  },
  {
    id: "02",
    year: "2025 – 2026",
    title: "Potato Leaf Disease Detection Using Data-Centric AI and YOLOv12",
    category: "Thesis",
    period: "Sep 2025 – July 2026",
    tags: ["data", "ai"],
    description:
      "Developed a data-centric AI pipeline and trained YOLOv12 for potato leaf disease detection.",
    details: [
      "Developed a data-centric AI pipeline to improve the PLDDUE dataset through near-duplicate removal using EfficientNetB0 and cosine similarity, label correction, and single-object-centric cropping.",
      "Trained and evaluated YOLOv12 for potato leaf disease detection using Precision, Recall, mAP@50, and mAP@50–95.",
      "Applied dataset preprocessing to improve data quality and model generalization.",
    ],
    image: plddueImage,
    tools: ["YOLOv12", "Data-Centric AI", "EfficientNetB0", "Computer Vision", "Python"],
    link: "https://github.com/masterlokiy",
  },
  {
    id: "03",
    year: "2024",
    title: "Football News Website",
    category: "Final Project",
    period: "June 2024",
    tags: ["web"],
    description:
      "Developed a football news website as a final project for the Web Programming course.",
    details: [
      "Developed a football news website as a final project for the Web Programming course.",
      "Implemented the website interface using HTML, Tailwind CSS, and JavaScript.",
    ],
    image: "",
    tools: ["HTML", "Tailwind CSS", "JavaScript", "Web Development"],
    link: "https://github.com/masterlokiy",
  },
  {
    id: "04",
    year: "2025",
    title: "Pawon Butomo Landing Page",
    category: "Final Project",
    period: "July 2025",
    tags: ["design", "web"],
    description:
      "Designed and developed a landing page for a local UMKM to promote traditional food products.",
    details: [
      "Designed and developed a landing page for a local UMKM to promote traditional food products.",
    ],
    image: pawonbutomoImage,
    tools: ["Landing Page", "Tailwind CSS", "UI/UX Design", "UMKM"],
    link: "https://pawon-butomo.vercel.app/",
  },
  {
    id: "05",
    year: "2024",
    title: "Top Up Game",
    category: "Desktop Application",
    period: "Dec 2024",
    tags: ["desktop"],
    description:
      "Developed a Windows Forms application for game account top-up transactions with database integration.",
    details: [
      "Developed a Windows Forms application for game account top-up transactions.",
      "Implemented database integration using C# and SQL Server.",
    ],
    image: "",
    tools: ["C#", ".NET", "Windows Forms", "SQL Server"],
    link: "https://github.com/masterlokiy",
  },
  {
    id: "06",
    year: "2024",
    title: "Luma",
    category: "2D Adventure Game",
    period: "Aug 2024 - Sep 2024",
    tags: ["game"],
    description:
      "Developed a 2D pixel-art adventure game featuring a cat character with unique abilities using Godot Engine.",
    details: [
      "Developed a 2D pixel-art adventure game featuring a cat character with unique abilities.",
      "Implemented core gameplay mechanics and player interactions using Godot Engine.",
    ],
    image: lumaImage,
    tools: ["Godot Engine", "GDScript", "2D Game Dev", "Pixel Art"],
    link: "https://krissedu.itch.io/luma",
  },
];

export default projects;
