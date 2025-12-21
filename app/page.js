import Philosophy from "@/components/sections/Philosophy";
import Hero from "../components/sections/Hero";
import ExpertiseSection from "@/components/sections/Expertise";
import SelectedWorks from "@/components/sections/SelectedWorks";
import OurProcess from "@/components/sections/OurProcess";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <ExpertiseSection />
      <SelectedWorks />
      <OurProcess />
    </main>
  );
}
