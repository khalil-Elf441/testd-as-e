import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import './Home.css';
// Données des technologies (inchangées, mais typées pour créativité future)
const techs = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg" },
  { name: "GCP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "Red Hat", logo: "https://cdn.worldvectorlogo.com/logos/red-hat-1.svg" },
  { name: "Linux Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Linux_Foundation_logo_2013.svg/375px-Linux_Foundation_logo_2013.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

// Hook personnalisé pour navigation créative (extensible à des effets comme confettis ou sons)
const useTechNavigation = () => {
  const navigate = useNavigate();
  return (path) => {
    // Ajout créatif : petite delay pour animation avant navigation
    setTimeout(() => navigate(path), 300);
  };
};

// Variants d'animations créatives : flotaison comme des nuages
const cloudVariants: Variants = {
  hidden: { opacity: 0, y: 50, x: () => Math.random() * 20 - 10 }, // Position initiale random pour effet organique
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.1, rotate: () => Math.random() * 4 - 2, transition: { yoyo: Infinity, duration: 0.3 } }, // Légère rotation aléatoire pour fun
};

// Composant Hero (ciel d'accueil)
const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="hero-section"
  >
    <h1>Master Cloud & DevOps Certifications</h1>
    <p>Practice with exam-like mocks, sharpen your skills, and achieve your goals.</p>
  </motion.div>
);

// Composant TechItem (nuage individuel, memoized pour perf)
const TechItem = React.memo(({ tech, onNavigate }) => (
  <motion.div
    variants={cloudVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    onClick={() => onNavigate(`/exams/${tech.name.toLowerCase()}`)}
    className="tech-item cloud-drift"
    role="button"
    aria-label={`Navigate to ${tech.name} exams`}
    tabIndex={0}
  >
    <img
      src={tech.logo}
      alt={tech.name}
      loading="lazy" // Optimisation créative pour chargement
      className="tech-logo"
    />
    <p>{tech.name}</p>
  </motion.div>
));

// Composant TechGrid (constellation de nuages)
const TechGrid = ({ techs, onNavigate }) => {
  // Stagger pour entrée progressive créative
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="tech-grid"
    >
      {techs.map((t, i) => (
        <TechItem key={i} tech={t} onNavigate={onNavigate} />
      ))}
    </motion.div>
  );
};

// Composant CTA (portail warp)
const CTASection = ({ onNavigate }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)" }} // Effet glow créatif
    whileTap={{ scale: 0.95, rotate: 5 }} // Twist fun sur click
    onClick={() => onNavigate("/exams")}
    className="cta-button warp-portal"
  >
    Choose your technology →
  </motion.button>
);

export default function Home() {
  const navigateTo = useTechNavigation();
  
  // Memo pour éviter re-renders inutiles
  const memoizedTechs = useMemo(() => techs, []);

  return (
    <>
      <HeroSection />
      <TechGrid techs={memoizedTechs} onNavigate={navigateTo} />
      <CTASection onNavigate={navigateTo} />
    </>
  );
}
