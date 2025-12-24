"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Layers, Code2, Rocket } from 'lucide-react';

const OurProcess = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: "01",
      label: "IMMERSION",
      icon: Search,
      title: "Deep Dive Discovery",
      description: "We audit your current ecosystem and define technical requirements. This phase is about understanding the 'why' before we touch the 'how.' We conduct stakeholder interviews, market analysis, and technical feasibility studies.",
      tags: ["User Research", "Tech Audit", "Roadmapping"]
    },
    {
      number: "02",
      label: "ARCHITECTURE",
      icon: Layers,
      title: "Strategic Framework",
      description: "Blueprinting the user journey and selecting the right tech stack. We bridge the gap between business goals and user needs, delivering wireframes, information architecture, and a scalable system design.",
      tags: ["Wireframing", "System Design", "Stack Selection"]
    },
    {
      number: "03",
      label: "SYNTHESIS",
      icon: Code2,
      title: "Design & Development",
      description: "Iterative sprints where visual design meets robust code. We work in two-week cycles, ensuring constant feedback. High-fidelity UI is translated into clean, semantic code with performance at the forefront.",
      tags: ["UI/UX Design", "Frontend Dev", "API Integration"]
    },
    {
      number: "04",
      label: "DEPLOYMENT",
      icon: Rocket,
      title: "Launch & Scale",
      description: "Rigorous QA testing followed  by a seamless go-live strategy. We don't just hand over the keys; we ensure analytics are tracked, servers are optimized, and your team is trained to manage the platform.",
      tags: ["QA Testing", "Cloud Deploy", "Analytics"]
    }
  ];

  const phaseIconClass = (isActive) =>
    `w-10 h-10 mb-4 transition-colors duration-300 ${isActive ? 'text-cocoyam-light' : 'text-white/40'}`;

  return (
    <section id="ourprocess-heading" className="bg-[#1A1333] text-white py-20 px-4 min-h-screen" aria-labelledby="our-process-heading">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 id="our-process-heading" className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
            How we work:<br />
            <span className="text-[#A18AFF]">A blend of art and engineering.</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            We believe the best digital experiences are forged at the intersection of rigorous technical architecture and boundless creativity.
          </p>
        </header>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0" aria-label="Process Timeline">
          {/* Sidebar */}
          <div className="lg:col-span-3 lg:pr-8">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold mb-2 text-white">OUR PROCESS</h2>
              <p className="text-white/70 text-sm mb-8">
                Scroll to explore the four phases of our digital product lifecycle.
              </p>
              
              {/* Phase Icons Navigation */}
              <div className="flex lg:flex-col gap-4">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  const isActive = activePhase === index;
                  
                  return (
                    <Button
                      key={index}
                      variant={isActive ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setActivePhase(index)}
                      className={`group flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-[#A18AFF] border-[#A18AFF] scale-110' : 'bg-white/10 border-white/20 hover:border-[#A18AFF]/50'}`}
                    >
                      <Icon 
                        className={`w-6 h-6 transition-colors ${isActive ? 'text-[#1A1333]' : 'text-white/70 group-hover:text-[#A18AFF]'}`} 
                      />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timeline and Cards */}
          <div className="lg:col-span-9 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#A18AFF]/30 via-white/10 to-transparent hidden lg:block" />
            
            {/* Phase Cards */}
            <ol className="space-y-12" aria-label="Process Phases">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                return (
                  <li key={index} className="list-none">
                    <article
                      onClick={() => setActivePhase(index)}
                      className={`
                        relative lg:pl-16 cursor-pointer group
                        transition-all duration-500
                        ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'}
                      `}
                      itemScope
                      itemType="https://schema.org/HowToStep"
                    >
                      {/* Timeline Dot */}
                      <div className={`
                        absolute left-0 top-8 hidden lg:block
                        w-4 h-4 rounded-full border-2 -ml-2
                        transition-all duration-300
                        ${isActive 
                          ? 'bg-[#6C47FF] border-[#6C47FF] scale-150' 
                          : 'bg-[#0A0118] border-white/30 group-hover:border-[#6C47FF]/50'
                        }
                      `} />

                      {/* Card */}
                      <div className={`
                        relative bg-gradient-to-br from-[#2A2150] to-[#1A1333] 
                        border rounded-2xl p-8 transition-all duration-500
                        ${isActive 
                          ? 'border-[#A18AFF] shadow-lg shadow-[#A18AFF]/10' 
                          : 'border-white/10 group-hover:border-[#A18AFF]/30'
                        }
                      `}>
                        {/* Phase Label */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`
                            px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider
                            ${isActive 
                              ? 'bg-[#A18AFF]/20 text-[#A18AFF] border border-[#A18AFF]/30' 
                              : 'bg-white/10 text-white/60 border border-white/10'
                            }
                          `}>
                            {phase.number} {phase.label}
                          </div>
                          <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center
                            transition-all duration-300
                            ${isActive 
                              ? 'bg-[#A18AFF]' 
                              : 'bg-white/10 group-hover:bg-white/20'
                            }
                          `}>
                            <Icon 
                              className={`w-6 h-6 ${
                                isActive ? 'text-[#1A1333]' : 'text-white/70'
                              }`} 
                              aria-hidden="true"
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold mb-4 group-hover:text-[#A18AFF] transition-colors" itemProp="name">
                          {phase.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/90 leading-relaxed mb-6" itemProp="description">
                          {phase.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {phase.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`
                                px-4 py-2 rounded-lg text-sm border transition-all duration-300
                                ${isActive
                                  ? 'bg-[#A18AFF]/10 border-[#A18AFF]/30 text-white'
                                  : 'bg-white/10 border-white/10 text-white/70'
                                }
                              `}
                              itemProp="tool"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Accent Line */}
                        <div className={`
                          absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                          bg-gradient-to-r from-transparent via-[#A18AFF] to-transparent
                          transition-opacity duration-500
                          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                        `} />
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 relative">
          <div className="relative bg-white border border-[#A18AFF]/20 rounded-3xl p-12 overflow-hidden flex justify-center">
            <div className="relative z-10 max-w-3xl text-center mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#21083F]">
                Ready to build something extraordinary?
              </h2>
              <p className="text-[#21083F]/80 text-lg mb-8">
                Let's apply our methodology to your next big idea.
              </p>
              <Button size="lg" className="group inline-flex items-center gap-3 bg-[#21083F] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A18AFF] transition-all duration-300 shadow-lg shadow-[#A18AFF]/20 mx-auto">
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;