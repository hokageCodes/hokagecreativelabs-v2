"use client";
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SelectedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      category: "VR / AR",
      client: "NIKE",
      title: "Neon Horizon",
      description: "An immersive virtual reality experience designed to showcase the future of athletic performance.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
      tags: ["Three.js", "WebXR", "Interactive"],
      color: "from-pink-500/20 to-blue-500/20"
    },
    {
      id: 2,
      category: "UI / UX",
      client: "MUSE STUDIO",
      title: "Muse Studio Platform",
      description: "A collaborative design tool for creative teams, featuring live editing and feedback.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "Design System", "Collaboration"],
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 3,
      category: "BRANDING / WEB",
      client: "AURORA STUDIOS",
      title: "Brand Evolution",
      description: "Complete rebrand with custom website and design system for creative production house.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tags: ["Identity", "Web Design", "Motion"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      category: "E-COMMERCE",
      client: "LUXE MARKETPLACE",
      title: "Premium Shopping Experience",
      description: "High-end eCommerce platform with custom cart optimization and seamless checkout flow.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Shopify", "Custom Dev", "Conversion"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      category: "WEB APP",
      client: "INSIGHT DASH",
      title: "Insight Dash",
      description: "A data visualization dashboard for enterprise analytics, built for clarity and speed.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["Next.js", "Data Viz", "SaaS"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 6,
      category: "3D / MOTION",
      client: "STELLAR GAMES",
      title: "Cosmic Interface",
      description: "Interactive 3D game menu system with advanced particle effects and smooth animations.",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop",
      tags: ["WebGL", "GSAP", "Three.js"],
      color: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="bg-cocoyam text-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
            Selected Work
          </h1>
          {/* <p className="text-5xl md:text-6xl font-extrabold text-white/30">
            2021-2024
          </p> */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
          <p className="text-white/60 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            A curation of our most impactful projects and innovations. We bridge the gap between creative vision and technical execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-[#21083F] rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image Container */}
              <div className="h-56 w-full bg-gray-800 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category & Client */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/60 uppercase tracking-widest font-mono">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/40 font-mono">
                    {project.client}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 font-sans">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-4 flex-1 font-sans">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-xs px-2 py-1 rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href="#"
                  className="text-cocoyam-light font-semibold hover:underline mt-auto flex items-center gap-2 font-sans"
                >
                  View Project <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;