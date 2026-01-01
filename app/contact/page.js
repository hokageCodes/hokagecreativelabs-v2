"use client";
"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-white text-[#21083F] px-6 py-24 min-h-screen flex flex-col items-center justify-center" aria-labelledby="contact-heading">
      <div className="max-w-2xl w-full">
        <h1 id="contact-heading" className="text-5xl md:text-6xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-lg text-[#21083F]/80 mb-8 text-center">We'd love to hear from you! Fill out the form below or email us at <a href="mailto:hello@hokagecreativelabs.com" className="underline">info@hokagecreativelabs.com</a>.</p>
        <form className="space-y-6">
          <input type="text" name="name" placeholder="Your Name" className="w-full border border-[#21083F]/20 rounded px-4 py-3 text-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border border-[#21083F]/20 rounded px-4 py-3 text-lg" required />
          <textarea name="message" placeholder="Your Message" className="w-full border border-[#21083F]/20 rounded px-4 py-3 text-lg min-h-[120px]" required />
          <button type="submit" className="w-full bg-[#21083F] text-white font-semibold py-3 rounded text-lg hover:opacity-90 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
