import React, { useEffect, useRef } from 'react';

// Import all partner logo assets
// Assuming your logos are named Artboard 1.png to Artboard 11.png
// and located in the /asset/Logo/ directory
import Artboard1 from '../assets/Partner/portfolio logo-01.png';
import Artboard2 from '../assets/Partner/portfolio logo-02.png';
import Artboard3 from '../assets/Partner/portfolio logo-03.png';
import Artboard4 from '../assets/Partner/portfolio logo-04.png';
import Artboard5 from '../assets/Partner/portfolio logo-05.png';
import Artboard6 from '../assets/Partner/portfolio logo-06.png';
import Artboard7 from '../assets/Partner/portfolio logo-07.png';
import Artboard8 from '../assets/Partner/portfolio logo-07.png';
import Artboard9 from '../assets/Partner/portfolio logo-09.png';
import Artboard10 from '../assets/Partner/portfolio logo-10.png';
import Artboard11 from '../assets/Partner/portfolio logo-11.png';
import Artboard12 from '../assets/Partner/portfolio logo-12.png';


const partnerLogos = [
  Artboard1, Artboard2, Artboard3, Artboard4, Artboard5,
  Artboard6, Artboard7, Artboard8, Artboard9, Artboard10, Artboard11,Artboard12
];

const PartnerSlider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosElement = logosRef.current;
    if (logosElement) {
      // Duplicate logos for seamless infinite scroll effect
      // Check to prevent multiple duplications on re-renders in dev mode
      if (logosElement.children.length === partnerLogos.length) {
        logosElement.innerHTML += logosElement.innerHTML;
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="logo-slider py-5 overflow-hidden bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed">
      <div className="slider-wrapper w-full mx-auto overflow-hidden">
        <div ref={logosRef} className="logos flex animate-[slide_35s_linear_infinite]">
          {partnerLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-[200px] h-auto mix-blend-darken" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;