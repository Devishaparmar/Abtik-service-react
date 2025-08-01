import React, { useEffect, useRef } from 'react';

// Replace with your actual icons
import Flag from "../assets/OurServices/flag-2-fill.svg"
import Branch from "../assets/OurServices/git-branch-fill.svg"
import Global from "../assets/OurServices/global-fill.svg"
import Hash from "../assets/OurServices/hashtag.svg"
import Layer from "../assets/OurServices/Layer_1.svg"
import Thumb from "../assets/OurServices/thumb-up-fill (1).svg"
const servicesData = [
  {
    icon: Thumb,
    alt: "Professional-icon",
    title: "Professional consultation",
    description:
      "Expert guidance to streamline your business strategy, operations, and growth—tailored solutions for startups and enterprises....",
  },
  {
    icon: Global,
    alt: "global-icon",
    title: "Business Registration",
    description:
      "Fast and hassle-free company registration, from sole proprietorships to private limited firms, ensuring legal compliance from day one....",
  },
  {
    icon: Flag,
    alt: "funding-icon",
    title: "Funding Services",
    description:
      "Connect with investors, loans, and grants to secure capital for your business expansion and financial stability....",
  },
  {
    icon: Layer,
    alt: "certification-icon",
    title: "Certification & licenses",
    description:
      "End-to-end support for industry-specific certifications, permits, and licenses to keep your business compliant and credible....",
  },
  {
    icon: Hash,
    alt: "trademark-icon",
    title: "Trademark & patents",
    description:
      "Protect your brand and innovations with seamless trademark registration and patent filing services....",
  },
  {
    icon: Branch,
    alt: "compliance-icon",
    title: "Compliances & GST",
    description:
      "Simplify tax filings, GST compliance, and regulatory requirements to avoid penalties and ensure smooth business operations....",
  },
];

const statsData = [
  { icon: "🧭", target: 100, label: "Staff" },
  { icon: "💬", target: 10, label: "Awards and Medals" },
  { icon: "👤", target: 130000, label: "Customers" },
  { icon: "🌀", target: 25, label: "Facilities" },
];

const ServicesAndStatsSection = () => {
  const staffCounterRef = useRef(null);
  const awardsCounterRef = useRef(null);
  const customersCounterRef = useRef(null);
  const facilitiesCounterRef = useRef(null);

  useEffect(() => {
    const counterRefs = [
      staffCounterRef,
      awardsCounterRef,
      customersCounterRef,
      facilitiesCounterRef,
    ];

    counterRefs.forEach((ref) => {
      const counterElement = ref.current;
      if (!counterElement) return;

      let animationFrameId;
      const target = +counterElement.getAttribute("data-target");
      let currentCount = 0;
      const duration = 2000;
      let startTime = null;

      const updateCount = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        currentCount = Math.ceil(progress * target);
        counterElement.innerText = currentCount.toLocaleString();

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        } else {
          counterElement.innerText = target.toLocaleString();
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrameId);
    });
  }, []);

  return (
    <>
      {/* Services Section */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#00BFFF] py-6 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)]">
        Our Services
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.05)] cursor-pointer border border-blue-600/60 p-5 rounded-lg text-white hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] transition-all duration-300 ease-in-out"
          >
            <img src={service.icon} alt={service.alt} className="w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-[#bbb] leading-relaxed">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="flex flex-wrap justify-around items-center gap-6 px-6 py-12 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center basis-[200px] "
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <h2
              ref={
                index === 0
                  ? staffCounterRef
                  : index === 1
                  ? awardsCounterRef
                  : index === 2
                  ? customersCounterRef
                  : facilitiesCounterRef
              }
              data-target={stat.target}
              className="text-white text-3xl font-bold"
            >
              0
            </h2>
            <p className="text-[#bbb] text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesAndStatsSection;
