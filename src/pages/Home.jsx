import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './Home.css';

// Données des technologies
const techs = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg" },
  { name: "GCP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "Red Hat", logo: "https://cdn.worldvectorlogo.com/logos/red-hat-1.svg" },
  { name: "Linux Foundation", logo: "https://cdn.worldvectorlogo.com/logos/linux-foundation.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

// Hook pour navigation avec petite animation
const useTechNavigation = () => {
  const navigate = useNavigate();
  return (path) => {
    setTimeout(() => navigate(path), 300); // delay pour animation
  };
};

// Variants d'animations créatives (nuages flottants)
const cloudVariants = {
  hidden: { opacity: 0, y: 50, x: () => Math.random() * 20 - 10 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.1, rotate: () => Math.random() * 4 - 2, transition: { yoyo: Infinity, duration: 0.3 } },
};

// Hero section
const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="hero-section text-center mb-12"
  >
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Master Cloud & DevOps Certifications
    </h1>
    <p className="text-lg md:text-2xl text-white/90">
      Practice with exam-like mocks, sharpen your skills, and achieve your goals.
    </p>
  </motion.div>
);

// Carte d'une technologie
const TechItem = React.memo(({ tech, onNavigate }) => (
  <motion.div
    variants={cloudVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    onClick={() => onNavigate(`/exams/${tech.name.toLowerCase()}`)}
    className="tech-item cloud-drift cursor-pointer flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-2xl shadow-lg hover:bg-opacity-20 transition"
    role="button"
    aria-label={`Navigate to ${tech.name} exams`}
    tabIndex={0}
  >
    <img
      src={tech.logo}
      alt={tech.name}
      loading="lazy"
      className="tech-logo h-16 mb-2"
    />
    <p className="text-white font-semibold">{tech.name}</p>
  </motion.div>
));

// Grille de technologies
const TechGrid = ({ techs, onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12"
    >
      {techs.map((t, i) => (
        <TechItem key={i} tech={t} onNavigate={onNavigate} />
      ))}
    </motion.div>
  );
};

// Bouton CTA
const CTASection = ({ onNavigate }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)" }}
    whileTap={{ scale: 0.95, rotate: 5 }}
    onClick={() => onNavigate("/exams")}
    className="cta-button warp-portal px-6 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-lg"
  >
    Choose your technology →
  </motion.button>
);

// Page Home
export default function Home() {
  const navigateTo = useTechNavigation();
  const memoizedTechs = useMemo(() => techs, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center px-6">
      <HeroSection />
      <TechGrid techs={memoizedTechs} onNavigate={navigateTo} />
      <CTASection onNavigate={navigateTo} />
    </div>
  );
}
