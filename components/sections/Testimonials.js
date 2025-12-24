import React from "react";

const testimonials = [
  {
    name: "Toyin Ogunde",
    title: "Head Chef at Party Deal",
    quote: "Hokage Creative Labs brought our vision to life with creativity and professionalism. The process was smooth and the results were deliciously effective!"
  },
  {
    name: "Oladayo Akinmokun",
    title: "The Cyber Lawyer",
    quote: "The Hokage team is innovative, responsive, and truly understands the digital legal landscape. Highly recommended for any tech-forward business."
  },
  {
    name: "Kenny Okunola",
    title: "Co-founder, ITL Network",
    quote: "From strategy to execution, Hokage exceeded our expectations. Their attention to detail and technical expertise set them apart."
  }
];

const Testimonials = () => (
  <section className="bg-[#F3F0FF] text-[#21083F] py-24 px-6" aria-labelledby="testimonials-heading">
    <div className="max-w-6xl mx-auto">
      <header className="mb-16 text-center">
        <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold mb-4 font-sans">What Our Clients Say</h2>
        <p className="text-lg text-[#21083F]/80 max-w-2xl mx-auto">Real feedback from real partners who trusted us to bring their ideas to life.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <figure key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <blockquote className="text-lg font-medium mb-4">“{t.quote}”</blockquote>
            <figcaption className="text-sm font-semibold">
              {t.name}
              <span className="block text-xs text-[#21083F]/60 font-normal">{t.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
