"use client";
import React, { useState } from 'react';
import { projects } from '../../data';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const SelectedWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white text-[#21083F] py-24 px-6 font-sans" aria-labelledby="selected-works-heading">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 id="selected-works-heading" className="text-6xl md:text-8xl font-extrabold mb-4 text-[#21083F]">
            Selected Work
          </h2>
          <div className="mt-8 h-px bg-gradient-to-r from-[#21083F]/20 via-[#21083F]/5 to-transparent" />
          <p className="text-[#21083F]/70 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            A curation of our most impactful projects and innovations. We bridge the gap between creative vision and technical execution.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10" aria-label="Project List">
          {projects.slice(0, 5).map((project) => (
            <li key={project.title} className="list-none">
              <article className="group relative bg-white border border-[#21083F]/10 rounded-xl overflow-hidden shadow-lg flex flex-col" itemScope itemType="https://schema.org/CreativeWork">
                <div className="h-56 w-full bg-gray-800 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    width={480}
                    height={224}
                    priority={true}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 font-sans text-[#21083F]" itemProp="headline">
                    {project.title}
                  </h3>
                  <p className="text-[#21083F]/80 mb-4 flex-1 font-sans" itemProp="description">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag + i}
                        className="bg-[#F3F0FF] text-[#21083F] px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-full flex justify-center">
                    <a
                      href={`/projects?project=${encodeURIComponent(project.title)}`}
                      className="font-semibold mt-auto flex items-center gap-2 font-sans text-[#21083F] hover:underline"
                      aria-label={`View project: ${project.title}`}
                    >
                      View Project <FaArrowRight />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        <a href="/projects" className="inline-flex items-center bg-[#21083F] text-white font-semibold px-8 py-4 rounded-md shadow hover:bg-[#3a1c6b] transition text-lg" aria-label="See Full Work">
          See Full Work
        </a>
      </div>
    </section>
  );
};

export default SelectedWorks;