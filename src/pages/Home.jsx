import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const techs = [
  { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GCP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "Kubernetes", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Red Hat", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Red_Hat_logo.svg" },
  { name: "Linux Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Linux-Foundation-logo.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col items-center justify-center px-6">
      
      {/* Hero section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6"
      >
        Master Cloud & DevOps Certifications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg md:text-2xl mb-10 text-center max-w-2xl"
      >
        Practice with <span className="font-bold">exam-like mocks</span>, sharpen your skills, and achieve your goals.
      </motion.p>

      {/* Tech Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl"
      >
        {techs.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="bg-white bg-opacity-10 rounded-2xl p-6 flex flex-col items-center cursor-pointer shadow-lg hover:bg-opacity-20 transition"
            onClick={() => navigate(`/exams/${t.name.toLowerCase()}`)}
          >
            <img src={t.logo} alt={t.name} className="h-16 mb-4" />
            <p className="text-lg font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-12 px-6 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-lg"
        onClick={() => navigate("/exams")}
      >
        Choose your technology →
      </motion.button>
    </div>
  );
}
