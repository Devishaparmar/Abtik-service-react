import React, { useEffect } from 'react';

const CareerHeroSection = () => {
  useEffect(() => {
    // Initialize particles.js for the particles effect
    if (window.particlesJS) {
      window.particlesJS('particles', {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <section className="flex justify-around items-center px-[5vw] py-[8vh] bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed flex-wrap gap-5">
      {/* Hero Left */}
      <div className="flex-1 text-left min-w-[280px]">
        <h1 className="text-[clamp(2rem,5vw,2.5rem)]  font-['DM_Sans'] text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tight">Grow With Us</h1>
        <p className="text-[clamp(0.9rem,3vw,1rem)] text-[#bbb] max-w-[500px] font-['DM_Sans']">
          Join a dynamic team shaping the future of businesses. <br /> Explore exciting opportunities where your skills meet innovation.
        </p>
      </div>

      {/* Hero Right */}
      <div className="flex-1 text-center">
        <div className="hero-animation-container h-[60vh] w-[clamp(300px,50vw,600px)] relative mx-auto">
          <div className="scene w-full h-full perspective-[1000px]">
            {/* Connecting Lines SVG */}
            <svg className="connecting-lines absolute top-[10%] left-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g filter="url(#glow)">
                <line x1="200" y1="200" x2="120" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="200" y1="200" x2="260" y2="260" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="200" y1="200" x2="280" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="200" y1="200" x2="100" y2="280" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="120" y1="100" x2="280" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="280" y1="120" x2="260" y2="260" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="260" y1="260" x2="100" y2="280" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="100" y1="280" x2="120" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </g>
            </svg>

            {/* Career Items */}
            <div className="career-item item-1 absolute w-[clamp(80px,10vw,100px)] h-[clamp(80px,10vw,100px)] top-1/2 left-[41%] animate-float delay-0 z-[5] bg-[rgba(255,255,255,0.9)] rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-transform duration-300">
              <div className="icon-wrapper flex flex-col items-center justify-center text-center p-2">
                <svg className="icon w-[clamp(30px,5vw,40px)] h-[clamp(30px,5vw,40px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
                <div className="item-title font-['Arial'] text-[clamp(10px,1.5vw,12px)] font-bold mt-2 text-[#333]">CAREERS</div>
              </div>
            </div>

            <div className="career-item item-2 absolute w-[clamp(80px,10vw,100px)] h-[clamp(80px,10vw,100px)] top-1/4 left-1/4 animate-float delay-1000 z-[4] bg-[rgba(255,255,255,0.9)] rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-transform duration-300">
              <div className="icon-wrapper flex flex-col items-center justify-center text-center p-2">
                <svg className="icon w-[clamp(30px,5vw,40px)] h-[clamp(30px,5vw,40px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
                <div className="item-title font-['Arial'] text-[clamp(10px,1.5vw,12px)] font-bold mt-2 text-[#333]">JOBS</div>
              </div>
            </div>

            <div className="career-item item-3 absolute w-[clamp(80px,10vw,100px)] h-[clamp(80px,10vw,100px)] top-[70%] left-[60%] animate-float delay-2000 z-[3] bg-[rgba(255,255,255,0.9)] rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-transform duration-300">
              <div className="icon-wrapper flex flex-col items-center justify-center text-center p-2">
                <svg className="icon w-[clamp(30px,5vw,40px)] h-[clamp(30px,5vw,40px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#FBBC05" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                <div className="item-title font-['Arial'] text-[clamp(10px,1.5vw,12px)] font-bold mt-2 text-[#333]">SKILLS</div>
              </div>
            </div>

            <div className="career-item item-4 absolute w-[clamp(80px,10vw,100px)] h-[clamp(80px,10vw,100px)] top-[30%] left-[65%] animate-float delay-3000 z-[2] bg-[rgba(255,255,255,0.9)] rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-transform duration-300">
              <div className="icon-wrapper flex flex-col items-center justify-center text-center p-2">
                <svg className="icon w-[clamp(30px,5vw,40px)] h-[clamp(30px,5vw,40px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#34A853" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <div className="item-title font-['Arial'] text-[clamp(10px,1.5vw,12px)] font-bold mt-2 text-[#333]">TEAM</div>
              </div>
            </div>

            <div className="career-item item-5 absolute w-[clamp(80px,10vw,100px)] h-[clamp(80px,10vw,100px)] top-[70%] left-[20%] animate-float delay-4000 z-[1] bg-[rgba(255,255,255,0.9)] rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-transform duration-300">
              <div className="icon-wrapper flex flex-col items-center justify-center text-center p-2">
                <svg className="icon w-[clamp(30px,5vw,40px)] h-[clamp(30px,5vw,40px)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="#8E24AA" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                </svg>
                <div className="item-title font-['Arial'] text-[clamp(10px,1.5vw,12px)] font-bold mt-2 text-[#333]">GROWTH</div>
              </div>
            </div>

            <div id="particles" className="particles absolute top-0 left-0 w-full h-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;