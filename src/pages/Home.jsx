import React from "react";
import TechCard from "../components/TechCard";
import { examsData } from "../data/exams";

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Docs as Exam</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(examsData).map(([key, tech]) => (
          <TechCard key={key} techKey={key} tech={tech} />
        ))}
      </div>
    </div>
  );
}
