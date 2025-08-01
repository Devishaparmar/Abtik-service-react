import React from 'react';
import '../styles/ContactHero.css';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center py-[5vh] px-[5vw] bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] min-h-[60vh]">
      {/* Hero Left */}
      <div className="flex-1 text-left lg:pr-5 mb-5 lg:mb-0 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh font-dm-sans">
          Let’s Connect
        </h2>
        <p className="text-sm sm:text-base text-[#bbb] font-dm-sans max-w-md mx-auto lg:mx-0">
          Have questions or need support? <br /> Reach out we’re here to help your business thrive. Partnerships start with a conversation.
        </p>
      </div>

      {/* Hero Right */}
      <div className="w-full lg:w-1/2 h-[60vh] flex justify-center items-center relative overflow-hidden">
        <div className="map-animation-box">
          <div className="map-animation-container">
            <svg viewBox="0 0 100 100" className="w-[clamp(80px,20vw,120px)] h-auto overflow-visible">
              <ellipse className="map-marker-shadow" cx="50" cy="80" rx="15" ry="3" fill="rgba(0,0,0,0.3)" />
              <g className="map-marker-group">
                <path
                  className="map-marker"
                  d="M50,15 C63,15 73,25 73,38 C73,56 50,85 50,85 C50,85 27,56 27,38 C27,25 37,15 50,15 Z"
                  fill="#E53935"
                />
                <circle className="map-marker-circle" cx="50" cy="38" r="10" fill="white" />
                <text
                  className="map-marker-text"
                  x="50"
                  y="42"
                  textAnchor="middle"
                  fontWeight="bold"
                  fontSize="14"
                  fill="#E53935"
                >
                  A
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;