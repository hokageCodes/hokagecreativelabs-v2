import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/utils";

const ProjectsCTA = () => (
  <section className="bg-white text-[#21083F] py-20 px-6 text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Ready to start your own project?</h2>
      <p className="mb-8 text-lg text-[#21083F]/80">Let’s bring your vision to life. Book a free consultation and let’s make something amazing together.</p>
      <Button
        size="lg"
        className="font-semibold bg-cocoyam-light text-[#21083F] hover:bg-[#aaff4a] transition-all px-8 py-4 rounded-full"
        onClick={openCalendly}
      >
        Book a Consultation
      </Button>
    </div>
  </section>
);

export default ProjectsCTA;
