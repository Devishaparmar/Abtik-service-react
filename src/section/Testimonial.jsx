import React, { useState, useEffect, useRef, useCallback } from 'react';

const testimonialData = [
  {
    quote: "“",
    text: "The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.",
    author: "Sarah Johnson",
    company: "TechSavvv Solutions",
  },
  {
    quote: "“",
    text: "Working with this platform has transformed how we manage data and collaborate across departments.",
    author: "Rahul Mehta",
    company: "InfoCore Pvt Ltd",
  },
  {
    quote: "“",
    text: "Exceptional service and support! The integration was seamless and intuitive.",
    author: "Ayesha Khan",
    company: "BrightPath AI",
  },
  {
    quote: "“",
    text: "A revolutionary product that’s helped us scale operations quickly and efficiently.",
    author: "David Lee",
    company: "EdgeWare Inc",
  },
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselIntervalRef = useRef(null);

  const updateTestimonialCards = useCallback(() => {
    // Handled by CSS classes in JSX
  }, [currentTestimonial]);

  const pauseCarousel = useCallback(() => {
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current);
      carouselIntervalRef.current = null;
    }
  }, []);

  const startCarousel = useCallback(() => {
    if (!carouselIntervalRef.current) {
      carouselIntervalRef.current = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonialData.length);
      }, 4000);
    }
  }, []);

  useEffect(() => {
    updateTestimonialCards();
    startCarousel();

    const carouselElement = document.getElementById("testimonial-carousel");
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", pauseCarousel);
      carouselElement.addEventListener("mouseleave", startCarousel);
    }

    return () => {
      pauseCarousel();
      if (carouselElement) {
        carouselElement.removeEventListener("mouseenter", pauseCarousel);
        carouselElement.removeEventListener("mouseleave", startCarousel);
      }
    };
  }, [updateTestimonialCards, startCarousel, pauseCarousel]);

  return (
    <>
      <style>
        {`
          .perspective-[1000px] {
            perspective: 1000px;
          }
          .card {
            transition: all 0.8s ease;
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
          .card.active {
            opacity: 1;
            transform: translateZ(0) scale(1);
            z-index: 30;
          }
          .card.behind-1 {
            opacity: 0.7;
            transform: translateZ(-100px) scale(0.9);
            z-index: 20;
          }
          .card.behind-2 {
            opacity: 0.4;
            transform: translateZ(-200px) scale(0.8);
            z-index: 10;
          }
          .card:not(.active):not(.behind-1):not(.behind-2) {
            opacity: 0;
            transform: translateZ(-300px) scale(0.7);
            z-index: 0;
          }
        `}
      </style>
      <section className="bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed py-20 px-5 flex justify-center items-center min-h-screen">
        <div id="testimonial-carousel" className="relative w-full max-w-[600px] h-[300px] perspective-[1000px]">
          {testimonialData.map((card, index) => (
            <div
              key={index}
              className={`
                card absolute w-full h-full p-6 box-border bg-[#111] border border-[#0af] rounded-xl 
                shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-all duration-800 ease 
                text-white pointer-events-auto
                ${index === currentTestimonial ? 'active' : 
                  index === (currentTestimonial + 1) % testimonialData.length ? 'behind-1' : 
                  index === (currentTestimonial + 2) % testimonialData.length ? 'behind-2' : ''}
              `}
            >
              <div className="text-4xl text-[#0af] mb-4">{card.quote}</div>
              <div className="text-lg mb-5">{card.text}</div>
              <div>
                <span className="font-bold text-white">{card.author}</span>
                <span className="text-[#888] ml-2">{card.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;