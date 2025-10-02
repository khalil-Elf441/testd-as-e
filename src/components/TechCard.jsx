import React from "react";
import { useNavigate } from "react-router-dom";

export default function TechCard({ techKey, tech }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white shadow rounded p-4 cursor-pointer hover:scale-105 transform transition"
      onClick={() => navigate(`/tech/${techKey}`)}
    >
      <img src={tech.logo} alt={tech.name} className="w-24 h-24 mx-auto mb-2" />
      <h2 className="text-center font-bold">{tech.name}</h2>
    </div>
  );
}
