import React, { useState, useCallback } from 'react';

// Import asset (adjust path as necessary)
import ArrowWhiteSvg from '../assets/Icons/Arrow.svg'; // Assuming this is in src/asset

const faqData = [
  {
    question: "What services does Abtik offer?",
    answer: "Abtik provides professional consultation, business registration, funding services, certifications, trademarks, and GST compliance services tailored to startups and businesses in India.",
  },
  {
    question: "How can I contact Abtik for support?",
    answer: "You can reach our support team via email at support@abtik.com or call us at +91 89281 38434, Monday to Saturday, 10:00 AM to 7:00 PM (IST).",
  },
  {
    question: "Does Abtik assist with funding?",
    answer: "Yes, we help startups and businesses secure funding through various programs and investor connections, guiding you through the process.",
  },
  {
    question: "What are Abtik's working hours?",
    answer: "Our office is open Monday to Saturday, from 10:00 AM to 7:00 PM (IST), ready to assist with your business needs.",
  },
];

const FAQSection = () => {
  // State to track the index of the currently open Q&A card
  // null means no card is open.
  const [openQnaIndex, setOpenQnaIndex] = useState(null);

  const toggleQna = useCallback((index) => {
    // If the clicked card is already open, close it (set to null)
    // Otherwise, open the clicked card (set its index)
    setOpenQnaIndex(prevIndex => (prevIndex === index ? null : index));
  }, []); // No dependencies needed as index and prevIndex are handled by React

  return (
    <section id="qna" className="qna-section bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed text-white py-10 px-5 text-center">
      <h2 className="text-4xl mb-8 text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tight ">Q&A Section</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`qna-card border border-[#2998ff] rounded-lg mx-auto my-4 max-w-[600px] overflow-hidden transition-all duration-400 ease ${
            openQnaIndex === index ? 'open' : ''
          }`}
        >
          <button
            className="qna-header w-full bg-transparent border-none outline-none p-5 text-base font-bold text-white text-left flex justify-between items-center cursor-pointer transition-colors duration-300 ease hover:bg-[#132d4f]"
          onClick={() => toggleQna(index)}
          >
            {item.question}
            <span>
              <img
                src={ArrowWhiteSvg}
                alt="arrow-icon"
                className={`w-4.5 h-4.5 transition-transform duration-300 ease ${
                  openQnaIndex === index ? 'rotate-180' : ''
                }`}
              />
            </span>
          </button>
          <div
            className="qna-detail max-h-0 overflow-hidden transition-[max-height,padding] duration-500 ease bg-[#111] px-5 py-0"
            // Dynamically apply max-height and padding based on open state
            style={{
              maxHeight: openQnaIndex === index ? '500px' : '0', // Increased max-height for content, adjust as needed
              padding: openQnaIndex === index ? '20px' : '0 20px', // Apply padding when open
            }}
          >
            <p className="text-sm text-[#ccc] leading-relaxed py-0">
              {/* Added py-0 here to prevent double padding with qna-detail py when open */}
              {item.answer}
            </p>
          </div>
        </div>
      ))}
      <div className="mail-btn-container mt-10">
        <a href="mailto:support@abtik.com" className="mail-btn bg-gradient-to-t from-[#004999] to-[#007AFF] text-white py-3 px-7 rounded-xl font-bold no-underline transition-all duration-300 ease hover:bg-gradient-to-t hover:from-[#023b7b] hover:to-[#2f92ff] hover:scale-105">Ask a Question</a>
      </div>
    </section>
  );
};

export default FAQSection;