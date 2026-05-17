"use client";
import Philosophy from "@/components/sections/Philosophy";
import OurProcess from "@/components/sections/OurProcess";
import Hero from "../components/sections/Hero";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ExpertiseSection from "@/components/sections/Expertise";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ServicesMarquee />
      <Philosophy />
      <ExpertiseSection />
      <SelectedWorks />
      <OurProcess />
      <Testimonials />
      <FAQ />
     
    </main>
  );
}
