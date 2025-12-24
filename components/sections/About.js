"use client";
import React from "react";

const About = () => {
  return (
    <section className="bg-white text-[#21083F] px-6 py-12" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 flex flex-col items-center text-center">
          <h2 id="about-heading" className="mt-3 text-5xl md:text-6xl font-bold font-sans">
            About Us
          </h2>
          <p className="mt-6 max-w-xl text-[#21083F]/80 text-lg leading-relaxed font-sans">
            We are Hokage Creative Labs, a team of technologists, designers, and strategists passionate about building digital legacies. Our mission is to bridge the gap between creative vision and technical execution, delivering products that are as beautiful as they are functional.
          </p>
        </header>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc pl-6 text-lg text-[#21083F]/80">
              <li>Innovation at every step</li>
              <li>Empathy-driven design</li>
              <li>Relentless pursuit of quality</li>
              <li>Collaboration and transparency</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">What We Do</h3>
            <p className="text-lg text-[#21083F]/80">From branding to full-stack development, we partner with clients to create digital experiences that stand out. Our expertise spans web, mobile, and emerging technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
