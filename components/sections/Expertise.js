import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaRocket, FaCloud, FaLock, FaShoppingCart, FaChartBar, FaSearch, FaComments, FaGraduationCap } from "react-icons/fa";

const expertiseList = [
  {
    icon: <FaPaintBrush size={32} className="text-cocoyam-light" />,
    title: "Branding",
    desc: "We craft visual identities that resonate. From logos to comprehensive brand guidelines, we build systems that tell your story across every touchpoint with consistency and impact."
  },
  {
    icon: <FaPaintBrush size={32} className="text-cocoyam-light" />,
    title: "UI/UX Design",
    desc: "Beautiful interfaces meet intuitive experiences. We design digital products that users love to interact with—combining aesthetic excellence with seamless usability."
  },
  {
    icon: <FaCode size={32} className="text-cocoyam-light" />,
    title: "Software Development",
    desc: "Robust, scalable solutions built with precision. We transform complex requirements into clean, maintainable code using modern frameworks and best practices."
  },
  {
    icon: <FaShoppingCart size={32} className="text-cocoyam-light" />,
    title: "eCommerce Applications",
    desc: "High-converting online stores that drive revenue. From shopping cart optimization to payment integration, we build eCommerce platforms that sell."
  },
  {
    icon: <FaChartBar size={32} className="text-cocoyam-light" />,
    title: "Custom Dashboards",
    desc: "Data visualization that empowers decisions. We create intuitive dashboards that transform complex data into actionable insights at a glance."
  },
  {
    icon: <FaSearch size={32} className="text-cocoyam-light" />,
    title: "SEO Optimization",
    desc: "We optimize your digital presence for search engines, ensuring your brand is discoverable and ranks high where it matters most."
  },
  {
    icon: <FaComments size={32} className="text-cocoyam-light" />,
    title: "Content & Messaging",
    desc: "Compelling copy and content strategies that engage, inform, and convert your audience across all platforms."
  },
  {
    icon: <FaGraduationCap size={32} className="text-cocoyam-light" />,
    title: "Training & Workshops",
    desc: "Empowering your team with the knowledge and skills to maintain, scale, and innovate your digital products."
  }
];

const ExpertiseSection = () => {
  return (
    <section className="bg-cocoyam text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-sans">Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {expertiseList.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-[#21083F] rounded-xl p-8 shadow-lg h-full font-sans">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;