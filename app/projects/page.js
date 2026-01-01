
"use client";
export const metadata = {
  title: "Projects | Hokage Creative Labs",
  description: "Explore our portfolio of branding, web, UI/UX, and digital products for ambitious brands.",
  keywords: [
    "Hokage Creative Labs",
    "projects",
    "portfolio",
    "branding",
    "web development",
    "UI/UX",
    "digital products",
    "case studies",
    "Nigeria",
    "agency"
  ],
  openGraph: {
    title: "Projects | Hokage Creative Labs",
    description: "See our work in branding, web, UI/UX, and digital products for ambitious brands.",
    url: "https://hokagecreativelabs.com/projects",
    siteName: "Hokage Creative Labs",
    images: [
      {
        url: "/Logo-Blue.jpg",
        width: 1200,
        height: 630,
        alt: "Hokage Creative Labs Logo"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Hokage Creative Labs",
    description: "See our work in branding, web, UI/UX, and digital products for ambitious brands.",
    site: "@hokagecreativelabs",
    images: [
      "/Logo-Blue.jpg"
    ]
  }
};
"use client";
import { useState } from "react";
import { expertiseList, projects } from "../../data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ProjectsCTA from "@/components/sections/ProjectsCTA";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <section className="bg-white text-[#21083F] py-32 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 font-sans">Our Projects</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              key="all"
              variant={activeTab === "all" ? "default" : "outline"}
              onClick={() => setActiveTab("all")}
              className={`px-5 py-3 rounded-full font-semibold ${activeTab === "all" ? 'bg-[#21083F] text-white border-[#21083F]' : 'bg-white text-[#21083F] border-[#21083F] hover:bg-[#F3F0FF] hover:text-[#21083F]'}`}
            >
              All
            </Button>
            {expertiseList.map((exp) => (
              <Button
                key={exp.key}
                variant={activeTab === exp.key ? "default" : "outline"}
                onClick={() => setActiveTab(exp.key)}
                className={`px-5 py-3 rounded-full font-semibold ${activeTab === exp.key ? 'bg-[#21083F] text-white border-[#21083F]' : 'bg-white text-[#21083F] border-[#21083F] hover:bg-[#F3F0FF] hover:text-[#21083F]'}`}
              >
                {exp.title}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {(activeTab === "all" ? projects : projects.filter(p => p.tags.includes(activeTab))).map((project) => {
              // Generate a slug for the project (simple kebab-case from title)
              const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <Card key={project.title} className="flex flex-col font-sans bg-white border border-[#21083F]/10 shadow-lg max-w-xs w-full mx-auto h-full min-h-[320px]">
                  <CardHeader className="p-0">
                    <Image src={project.image} alt={project.title} width={400} height={180} className="w-full h-44 object-cover rounded-t-xl" />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between p-4">
                    <CardTitle className="text-lg font-bold mb-1 text-[#21083F] text-left">{project.title}</CardTitle>
                    <CardDescription className="text-[#21083F]/80 mb-3 text-left">{project.desc}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={tag + i} className="bg-[#F3F0FF] text-[#21083F] px-2 py-1 rounded-full text-xs font-semibold border border-[#e5e0f7]">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-stretch gap-2 p-4 pt-0">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#21083F] text-white font-semibold shadow hover:bg-[#3a1c6b] transition-all w-full"
                      >
                        View Live <span>→</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-gray-300 text-gray-500 font-semibold shadow cursor-not-allowed w-full">No Live Link</span>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <ProjectsCTA />
    </>
  );
}
