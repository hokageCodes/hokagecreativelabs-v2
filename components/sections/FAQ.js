"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer branding, UI/UX design, web and app development, eCommerce, dashboards, SEO, content, and training. See our Expertise section for details."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary, but most engagements last 4-12 weeks depending on scope and complexity. We provide clear timelines up front."
  },
  {
    question: "What is your process?",
    answer: "Our process includes discovery, strategy, design, development, and launch. We keep you involved at every step."
  },
  {
    question: "How do we get started?",
    answer: "Just reach out via our contact page. We'll schedule a free consultation to discuss your goals and how we can help."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white text-[#21083F] py-24 px-6 border-t border-[#21083F]/10" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-4 font-sans">Frequently Asked Questions</h2>
          <p className="text-lg text-[#21083F]/80 max-w-2xl mx-auto">Answers to common questions about our services, process, and working with us.</p>
        </header>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#21083F]/10 rounded-lg">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#21083F] transition"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => handleToggle(i)}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transition-transform ${openIndex === i ? 'rotate-90' : ''}`}>▶</span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`px-6 pb-4 text-[#21083F]/80 text-base transition-all duration-300 ease-in-out ${openIndex === i ? 'block' : 'hidden'}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
