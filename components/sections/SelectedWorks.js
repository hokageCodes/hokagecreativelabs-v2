"use client";
import React, { useState } from 'react';
import { projects } from '../../data';
import { FaArrowRight } from 'react-icons/fa';

const SelectedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
          {projects.map((project) => (
            <div
              key={project.title}
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
                <h3 className="text-xl font-semibold mb-2 font-sans">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 flex-1 font-sans">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={tag + i}
                      className="bg-cocoyam-light text-[#21083F] px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/projects?project=${encodeURIComponent(project.title)}`}
                  className="text-cocoyam-light font-semibold hover:underline mt-auto flex items-center gap-2 font-sans"
                >
                  View Project <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a href="/projects" className="inline-flex items-center bg-cocoyam-light text-[#21083F] font-semibold px-8 py-4 rounded-md shadow hover:bg-[#aaff4a] transition text-lg">
          See Full Work
        </a>
      </div>
    </section>
  );
};

export default SelectedWorks;