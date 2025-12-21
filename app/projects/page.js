"use client";
import { useState } from "react";
import { FaPaintBrush, FaCode, FaShoppingCart, FaChartBar, FaSearch, FaComments, FaGraduationCap } from "react-icons/fa";
import { expertiseList, projects } from "../../data";

const iconMap = {
  FaPaintBrush: <FaPaintBrush size={24} className="text-cocoyam-light" />,
  FaCode: <FaCode size={24} className="text-cocoyam-light" />,
  FaShoppingCart: <FaShoppingCart size={24} className="text-cocoyam-light" />,
  FaChartBar: <FaChartBar size={24} className="text-cocoyam-light" />,
  FaSearch: <FaSearch size={24} className="text-cocoyam-light" />,
  FaComments: <FaComments size={24} className="text-cocoyam-light" />,
  FaGraduationCap: <FaGraduationCap size={24} className="text-cocoyam-light" />,
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("branding");

  return (
    <section className="bg-[#0A0118] text-white py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 font-sans">Our Projects</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {expertiseList.map((exp) => (
            <button
              key={exp.key}
              onClick={() => setActiveTab(exp.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all border-2 border-transparent ${activeTab === exp.key ? 'bg-cocoyam-light text-[#21083F] border-cocoyam-light' : 'bg-[#21083F] text-white/80 hover:bg-cocoyam-light hover:text-[#21083F]'}`}
            >
              {iconMap[exp.icon]}
              {exp.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.filter(p => p.tags.includes(activeTab)).map((project, idx) => (
            <div key={project.title} className="bg-[#21083F] rounded-xl p-6 shadow-lg flex flex-col items-center text-center font-sans">
              <img src={project.image} alt={project.title} className="mb-4 w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/70 mb-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span key={tag + i} className="bg-cocoyam-light text-[#21083F] px-3 py-1 rounded-full text-xs font-semibold">{expertiseList.find(e => e.key === tag)?.title || tag}</span>
                ))}
              </div>
              <a href={`/projects?project=${encodeURIComponent(project.title)}`} className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cocoyam-light text-[#21083F] font-semibold shadow hover:bg-[#aaff4a] transition-all">View Details <span>→</span></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
