"use client";
import React, { useState } from 'react';
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
      description: "Rigorous QA testing followed by a seamless go-live strategy. We don't just hand over the keys; we ensure analytics are tracked, servers are optimized, and your team is trained to manage the platform.",
      tags: ["QA Testing", "Cloud Deploy", "Analytics"]
    }
  ];

  const phaseIconClass = (isActive) =>
    `w-10 h-10 mb-4 transition-colors duration-300 ${isActive ? 'text-cocoyam-light' : 'text-white/40'}`;

  return (
    <section className="bg-[#0A0118] text-white py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            How we work:<br />
            <span className="text-white">A blend of art and engineering.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            We believe the best digital experiences are forged at the intersection of rigorous technical architecture and boundless creativity.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Sidebar */}
          <div className="lg:col-span-3 lg:pr-8">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold mb-2">OUR PROCESS</h2>
              <p className="text-white/50 text-sm mb-8">
                Scroll to explore the four phases of our digital product lifecycle.
              </p>
              
              {/* Phase Icons Navigation */}
              <div className="flex lg:flex-col gap-4">
                {phases.map((phase, index) => {
                  const Icon = phase.icon;
                  const isActive = activePhase === index;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActivePhase(index)}
                      className={`
                        group flex items-center justify-center w-14 h-14 rounded-full border-2 
                        transition-all duration-300
                        ${isActive 
                          ? 'bg-[#7FF41A] border-[#7FF41A] scale-110' 
                          : 'bg-white/5 border-white/20 hover:border-[#7FF41A]/50'
                        }
                      `}
                    >
                      <Icon 
                        className={`w-6 h-6 transition-colors ${
                          isActive ? 'text-[#21083F]' : 'text-white/70 group-hover:text-[#7FF41A]'
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Timeline and Cards */}
          <div className="lg:col-span-9 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden lg:block" />
            
            {/* Phase Cards */}
            <div className="space-y-12">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`
                      relative lg:pl-16 cursor-pointer group
                      transition-all duration-500
                      ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'}
                    `}
                  >
                    {/* Timeline Dot */}
                    <div className={`
                      absolute left-0 top-8 hidden lg:block
                      w-4 h-4 rounded-full border-2 -ml-2
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-[#7FF41A] border-[#7FF41A] scale-150' 
                        : 'bg-[#0A0118] border-white/30 group-hover:border-[#7FF41A]/50'
                      }
                    `} />

                    {/* Card */}
                    <div className={`
                      relative bg-gradient-to-br from-white/5 to-white/[0.02] 
                      border rounded-2xl p-8 transition-all duration-500
                      ${isActive 
                        ? 'border-[#7FF41A] shadow-lg shadow-[#7FF41A]/10' 
                        : 'border-white/10 group-hover:border-[#7FF41A]/30'
                      }
                    `}>
                      {/* Phase Label */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`
                          px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider
                          ${isActive 
                            ? 'bg-[#7FF41A]/20 text-[#7FF41A] border border-[#7FF41A]/30' 
                            : 'bg-white/5 text-white/60 border border-white/10'
                          }
                        `}>
                          {phase.number} {phase.label}
                        </div>
                        
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${isActive 
                            ? 'bg-[#7FF41A]' 
                            : 'bg-white/5 group-hover:bg-white/10'
                          }
                        `}>
                          <Icon 
                            className={`w-6 h-6 ${
                              isActive ? 'text-[#21083F]' : 'text-white/70'
                            }`} 
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-[#7FF41A] transition-colors">
                        {phase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6">
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
                                ? 'bg-white/5 border-[#7FF41A]/30 text-white/90'
                                : 'bg-white/5 border-white/10 text-white/70'
                              }
                            `}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Accent Line */}
                      <div className={`
                        absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                        bg-gradient-to-r from-transparent via-[#7FF41A] to-transparent
                        transition-opacity duration-500
                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                      `} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 relative">
          <div className="relative bg-gradient-to-br from-[#7FF41A]/10 to-transparent border border-[#7FF41A]/20 rounded-3xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "linear-gradient(to right, rgba(127,244,26,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(127,244,26,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to build something extraordinary?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Let's apply our methodology to your next big idea.
              </p>
              <button className="group inline-flex items-center gap-3 bg-[#7FF41A] text-[#21083F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#aaff4a] transition-all duration-300 shadow-lg shadow-[#7FF41A]/20">
                Start Your Project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;