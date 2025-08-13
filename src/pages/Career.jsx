import React, { useState, useEffect, useRef } from 'react';
import '../styles/Career.css';
import Footer from '../section/Footer';
import Navbar from '../section/Navbar';
import ContactFormSection from '../section/Contact';
import CareerHeroSection from "../section/CareerHeroSection"
import Image from "../assets/Career/Mask group.png"
import Arrow from "../assets/Icons/Arrow.svg"
const App = () => {
  const [typingText, setTypingText] = useState('');
  const [countersStarted, setCountersStarted] = useState(false);
  const [openJobIndex, setOpenJobIndex] = useState(null);

  const typingTexts = [
    "Define your path.",
    "Shape your future.",
    "Grow with Abtik Services.",
  ];
  let typingIndex = 0;
  let charIndex = 0;

  const careerRef = useRef(null);

  useEffect(() => {
    // Typing Effect
    const typeText = () => {
      if (charIndex < typingTexts[typingIndex].length) {
        setTypingText((prev) => prev + typingTexts[typingIndex].charAt(charIndex));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setTypingText('');
          charIndex = 0;
          typingIndex = (typingIndex + 1) % typingTexts.length;
          typeText();
        }, 2000);
      }
    };
    typeText();

    // Animated Counters
    const startCounting = () => {
      document.querySelectorAll('.counter').forEach((counter) => {
        counter.textContent = '0';
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.textContent;
          const increment = target / 100;
          if (current < target) {
            counter.textContent = `${Math.ceil(current + increment)}`;
            setTimeout(updateCount, 20);
          } else {
            counter.textContent = target;
          }
        };
        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          startCounting();
          setCountersStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (careerRef.current) observer.observe(careerRef.current);

    return () => observer.disconnect();
  }, [countersStarted]);

  const toggleJobCard = (index) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };

  return (<>
  <Navbar/>
  <CareerHeroSection/>
    <div className="font-sans text-white bg-[radial-gradient(circle,_rgba(0,30,60,0.8)_10%,_rgba(0,0,0,1)_60%)] bg-fixed bg-cover min-h-screen">
      {/* Define Career Section */}
      <section id="define-career" ref={careerRef} className="py-10 px-5 text-center bg-[radial-gradient(circle,_rgba(0,30,60,0.8)_10%,_rgba(0,0,0,1)_60%)] bg-fixed">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-400">
          Career Opportunities at <br />
          <span className="text-blue-500">Abtik Services</span>
        </h2>
        <div className="text-lg md:text-xl text-white mb-10 h-8">{typingText}</div>
        <div className="career-container flex flex-wrap justify-center items-center gap-10 mx-auto max-w-6xl">
          <div className="career-text border border-blue-400 rounded-lg p-8 max-w-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-400/50 transition-all">
            <p className="text-gray-300 text-base md:text-lg">
              At Abtik Group, we believe in innovation, collaboration, and growth. Whether you're a fresh graduate or an experienced professional.
            </p>
          </div>
          <div className="career-image max-w-xs flex justify-center items-center">
            <img src={Image} alt="Career growth" className="w-full h-auto" />
          </div>
        </div>
        <div className="counter-container flex justify-center gap-10 mt-10 flex-wrap">
          <div>
            <div className="counter text-2xl md:text-3xl font-bold text-blue-400" data-target="150">0</div>
            <div className="counter-label text-gray-400 text-base">Team Members</div>
          </div>
          <div>
            <div className="counter text-2xl md:text-3xl font-bold text-blue-400" data-target="5">0</div>
            <div className="counter-label text-gray-400 text-base">Years in Business</div>
          </div>
          <div>
            <div className="counter text-2xl md:text-3xl font-bold text-blue-400" data-target="1200">0</div>
            <div className="counter-label text-gray-400 text-base">Clients Served</div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="job-openings" className="py-10 px-5 text-center bg-[radial-gradient(circle,_rgba(0,30,60,0.8)_10%,_rgba(0,0,0,1)_60%)] bg-fixed">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-400">Job Openings</h2>
        {[
          { title: 'Business Development Manager', detail: 'Manage clients, build strategies, and drive business growth. Requires 3+ years experience in B2B sales.' },
          { title: 'Graphic Designer', detail: 'Create stunning visuals for digital campaigns. Proficiency in Adobe Suite required. Portfolio link mandatory.' },
          { title: 'Relationship Manager', detail: 'Build long-lasting client relationships and resolve customer queries. Excellent communication skills required.' },
          { title: 'Business Development Executive', detail: 'Help expand our client base. Entry-level candidates welcome. Full-time position with great growth opportunities.' },
        ].map((job, index) => (
          <div key={index} className="job-card   border border-blue-400 rounded-lg mx-auto max-w-xl mb-4 overflow-hidden">
            <button
              className="job-header w-full cursor-pointer bg-transparent border-none p-5 text-left text-white font-bold text-base md:text-lg flex justify-between items-center hover:bg-blue-900/50 transition-all"
              onClick={() => toggleJobCard(index)}
            >
              {job.title}
              <img
                src={Arrow}
                alt="arrow-icon"
                className={`w-6 h-6 transition-transform ${openJobIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`job-detail bg-gray-900 transition-all duration-500 ${openJobIndex === index ? 'max-h-72 p-5' : 'max-h-0 p-0 overflow-hidden'}`}>
              <p className="text-gray-300 text-sm md:text-base">{job.detail}</p>
            </div>
          </div>
        ))}
        <div className="mail-btn-container mt-10">
          <a
            href="mailto:careers@abtik.com"
            className="mail-btn bg-gradient-to-b from-blue-500 to-blue-900 text-white py-3 px-7 rounded-full font-bold hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-900 hover:scale-105 transition-all"
          >
            Mail Us Now
          </a>
        </div>
      </section>
    </div>
    <ContactFormSection/>
    <Footer/>

           {/* Floating Chatbot */}
            <iframe
                src="https://chat.vengoai.app/?agentId=98471870"
                style={{
                    position: "fixed",
                    
                    bottom: "20px",
                    right: "20px",
                    width: "350px",
                    height: "500px",
                    border: "none",
                    zIndex: 9999,
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
                title="Chatbot"
            ></iframe>
    </>
  );
};

export default App;