
"use client";
export const metadata = {
  title: "About Company | Hokage Creative Labs",
  description: "Learn about Hokage Creative Labs, our mission, vision, values, and the team behind our digital legacy-building.",
  keywords: [
    "Hokage Creative Labs",
    "about",
    "company",
    "team",
    "mission",
    "vision",
    "values",
    "digital agency",
    "branding",
    "web development"
  ],
  openGraph: {
    title: "About Company | Hokage Creative Labs",
    description: "Meet the team and discover our values, mission, and vision at Hokage Creative Labs.",
    url: "https://hokagecreativelabs.com/company",
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
    title: "About Company | Hokage Creative Labs",
    description: "Meet the team and discover our values, mission, and vision at Hokage Creative Labs.",
    site: "@hokagecreativelabs",
    images: [
      "/Logo-Blue.jpg"
    ]
  }
};

"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutCompany = () => {
  return (
    <>
      {/* Decorative SVG Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full" style={{ opacity: 0.08 }} focusable="false" aria-hidden="true">
          <defs>
            <pattern id="pattern-circles-company" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#21083F" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles-company)" />
        </svg>
      </div>
      <div className="relative z-10">
      {/* Mission & Vision Section comes first */}
      {/* Top Intro Section moved below Mission & Vision */}
      <section className="bg-white text-[#21083F] px-6 py-32 flex flex-col items-center justify-center" aria-labelledby="about-company-heading">
        <div className="max-w-6xl w-full mt-24">
          <h1 id="about-company-heading" className="text-5xl md:text-6xl font-bold mb-8 text-center">About Hokage Creative Labs</h1>
          <p className="text-lg text-[#21083F]/80 mb-8 text-center">
            Hokage Creative Labs is a collective of technologists, designers, and strategists dedicated to building digital legacies. We believe in the power of technology to transform brands and create lasting impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white text-[#21083F] px-6 flex flex-col items-center justify-center" aria-labelledby="mission-vision-heading">
        <div className="max-w-6xl w-full">
          <h2 id="mission-vision-heading" className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#21083F]/80 text-lg text-center">
                  To bridge the gap between creative vision and technical execution, delivering products that are as beautiful as they are functional. We partner with ambitious brands to craft digital experiences that stand out in a crowded world.
                </p>
              </CardContent>
            </Card>
            {/* Vision Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#21083F]/80 text-lg text-center">
                  To be the most trusted creative technology partner for brands seeking to leave a mark on the digital world—where innovation, empathy, and quality define every experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values, Team, Story, CTA */}
      <section className="bg-white text-[#21083F] px-6 py-24 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Top row: 3 cards */}
              <Card className="flex flex-col items-center p-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#7FF41A]/20">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20m0 0l-4-4m4 4l4-4" stroke="#7FF41A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <CardTitle className="text-lg font-bold text-center mb-2">Innovation at every step</CardTitle>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">We constantly push boundaries, seeking new ways to solve problems and deliver value.</CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#A18AFF]/20">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zm0-4v-4m0 0V7m0 4h4m-4 0H8" stroke="#A18AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <CardTitle className="text-lg font-bold text-center mb-2">Empathy-driven design</CardTitle>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">We design with real people in mind, ensuring every experience is intuitive and meaningful.</CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#FBBF24]/20">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#FBBF24" strokeWidth="2"/></svg>
                </div>
                <CardTitle className="text-lg font-bold text-center mb-2">Relentless pursuit of quality</CardTitle>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">We sweat the details, holding ourselves to the highest standards in everything we build.</CardContent>
              </Card>
              {/* Bottom row: 2 cards centered */}
              <div className="hidden md:block"></div>
              <Card className="flex flex-col items-center p-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#34D399]/20">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 8l4 4-4 4M7 8l-4 4 4 4" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <CardTitle className="text-lg font-bold text-center mb-2">Collaboration & transparency</CardTitle>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">We work openly and together, believing the best results come from shared vision and trust.</CardContent>
              </Card>
              <Card className="flex flex-col items-center p-6">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#F472B6]/20">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <CardTitle className="text-lg font-bold text-center mb-2">Building for the future</CardTitle>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">We create with tomorrow in mind, ensuring our work stands the test of time and change.</CardContent>
              </Card>
              <div className="hidden md:block"></div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-4 gap-12">
              {/* Creative Director */}
              <Card className="flex flex-col items-center p-6">
                <img src="/team/busayo.jpg" alt="Busayo Ogunde" className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#A18AFF]" />
                <CardTitle className="text-lg font-bold text-center mb-1">Busayo Ogunde</CardTitle>
                <div className="text-[#A18AFF] text-sm font-semibold mb-2">Creative Director</div>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">Visionary leader blending art and tech to craft unforgettable digital experiences.</CardContent>
              </Card>
              {/* Lead Engineer */}
              <Card className="flex flex-col items-center p-6">
                <img src="/team/eric.jpg" alt="Eric Rukevwe" className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#7FF41A]" />
                <CardTitle className="text-lg font-bold text-center mb-1">Eric Rukevwe</CardTitle>
                <div className="text-[#7FF41A] text-sm font-semibold mb-2">Lead Engineer</div>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">Architects robust, scalable solutions and leads our dev team with passion.</CardContent>
              </Card>
              {/* Product Designer */}
              <Card className="flex flex-col items-center p-6">
                <img src="/team/yasmeen.jpg" alt="Yasmeen Adebisi" className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#FBBF24]" />
                <CardTitle className="text-lg font-bold text-center mb-1">Yasmeen Adebisi</CardTitle>
                <div className="text-[#FBBF24] text-sm font-semibold mb-2">Product Designer</div>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">Designs beautiful, user-centric interfaces that delight and convert.</CardContent>
              </Card>
              {/* Legal / Compliance */}
              <Card className="flex flex-col items-center p-6">
                <img src="/team/oladayo.jpg" alt="Oladayo Akinmokun" className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#34D399]" />
                <CardTitle className="text-lg font-bold text-center mb-1">Oladayo Akinmokun</CardTitle>
                <div className="text-[#34D399] text-sm font-semibold mb-2">Legal / Compliance</div>
                <CardContent className="text-center text-[#21083F]/80 text-base p-0">Ensures our work is ethical, secure, and always above board.</CardContent>
              </Card>
            </div>
            <p className="text-[#21083F]/60 text-center text-base mt-8">Our team brings together diverse backgrounds and expertise, united by a passion for excellence and innovation.</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutCompany;
