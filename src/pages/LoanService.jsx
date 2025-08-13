import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  X,
  Plus,
  ArrowRight,
  Menu,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Navbar from "../section/Navbar";
import Footer from "../section/Footer";
import { useNavigate } from "react-router-dom";

const FundingServices = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm Abtik Assistant. How can I help you today?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const fundingDetails = {
    "Mudra Loan": {
      title: "Mudra Loan - Fuel Your Business Growth",
      description:
        "The Pradhan Mantri MUDRA Yojana (PMMY) is a government-backed scheme providing financial support up to ₹10 lakhs to small businesses and entrepreneurs.",
      benefits: [
        "Collateral-free– No asset mortgage needed",
        "Women entrepreneurs get 0.25% interest subsidy",
        "Covers working capital, machinery, shop setup, etc.",
      ],
      eligibility: [
        "Indian citizen aged 18+",
        "Business plan for new enterprises",
        "Existing businesses: 1+ year operations (for Kishor/Tarun)",
      ],
    },
    "CGTMSE Loan": {
      title: "CGTMSE Loan - Collateral-Free Funding for MSMEs",
      description:
        "The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme enables MSMEs to secure business loans without collateral up to ₹5 crores, backed by a government guarantee.",
      benefits: [
        "Zero Collateral Required - Government covers 75-85% of loan amount",
        "Loan Range - From ₹10 lakhs to ₹2 crores",
        "Flexible Usage - Working capital, equipment purchase, business expansion",
        "Women Entrepreneurs - Additional 0.25% interest subsidy",
        "Competitive Rates - As low as 8.5% p.a. (varies by lender)",
      ],
      eligibility: [
        "Business Type: Manufacturing or service MSME (Udyam registered preferred)",
        "Operational History: Minimum 2 years for loans above ₹10 lakhs",
        "Credit Score: 650+ (varies by bank)",
        "Turnover: Should justify loan amount",
      ],
    },
    "NAIFF Loan": {
      title: "NABARD NAIFF Loan - Boost Your Agri-Business Infrastructure",
      description:
        "The Nabard Agri Infra Financing Facility (NAIFF) provides up to ₹100 crores for agri-infrastructure projects with: 3% interest subvention (effective rate ~7-9%), Long repayment up to 10 years, 2-year moratorium available",
      benefits: [
        "Collateral-free up to ₹1.6 Cr (CGTMSE cover)",
        "Additional 25% subsidy for FPOs under Agri-Market Infrastructure Fund",
        "90% project financing available",
      ],
      eligibility: [
        "Entities: Agri-entrepreneurs/FPOs/Cooperatives/Startups",
        "Experience: 2+ years in agri-sector (waived for tech projects)",
        "Land: Owned/leased (min. 5 years remaining)",
      ],
    },
    "PMEGP Loan": {
      title: "PMEGP Loan - Subsidized Funding for Entrepreneurs & MSMEs",
      description:
        "The Prime Minister's Employment Generation Programme (PMEGP) offers: 15-35% subsidy on project cost, Bank loans for remaining amount, Maximum project cost: ₹50 lakhs (manufacturing) / ₹20 lakhs (services)",
      benefits: [
        "Higher Subsidy Rates: General Category: 15% (Urban), 25% (Rural)",
        "Special Categories (SC/ST/Women/PH/Minorities): 25% (Urban), 35% (Rural)",
        "Collateral-Free (For loans up to ₹10 lakhs)",
        "Low Interest Rates (~9-12% p.a.)",
        "Repayment Period: 3-7 years (including moratorium)",
      ],
      eligibility: [
        "Age: 18+ years",
        "No existing PMEGP/KVIC subsidy",
        "Educational Qualification: 8th pass for projects up to ₹10 lakhs",
        "Above 8th standard for higher amounts",
      ],
    },
  };

  const fundingCards = [
    {
      id: "Mudra Loan",
      title: "Mudra Loan - Fuel Your Business Growth",
      description:
        "The Pradhan Mantri MUDRA Yojana (PMMY) is a government-backed scheme providing financial support up to ₹10 lakhs to small businesses and entrepreneurs.",
    },
    {
      id: "CGTMSE Loan",
      title: "CGTMSE Loan - Collateral-Free Funding for MSMEs",
      description:
        "The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme enables MSMEs to secure business loans without collateral up to ₹2 crores, backed by a government guarantee.",
    },
    {
      id: "NAIFF Loan",
      title: "NABARD NAIFF Loan - Boost Your Agri-Business Infrastructure",
      description:
        "The Nabard Agri Infra Financing Facility (NAIFF) provides up to ₹100 crores for agri-infrastructure projects.",
    },
    {
      id: "PMEGP Loan",
      title: "PMEGP Loan - Subsidized Funding for Entrepreneurs & MSMEs",
      description:
        "The Prime Minister's Employment Generation Programme (PMEGP) offers:",
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveModal(cardId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleApplyNow = () => {
    nav("/contact");
    closeModal();
  };

  const handleChatSend = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { type: "user", text: chatInput }]);
      setChatInput("");
      // Simulate bot response
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Thank you for your message! Our team will get back to you soon.",
          },
        ]);
      }, 1000);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918928138434", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+918928138434", "_blank");
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
        setIsChatbotOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const AnimatedButton = ({ children, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`group relative font-bold px-5 py-2.5 text-white bg-gradient-to-b from-blue-500 to-blue-800 border-none rounded-xl cursor-pointer inline-flex items-center gap-2 overflow-hidden hover:from-blue-600 hover:to-blue-900 hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-360" />
    </button>
  );

  const FundingCard = ({ card, index }) => (
    <div
      className={`m-1 bg-gradient-to-br from-slate-800 to-slate-700 border border-blue-400/30 rounded-2xl p-4 shadow-lg hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer animate-fadeInUp opacity-0`}
      style={{
        animationDelay: `${(index + 1) * 0.1}s`,
        animationFillMode: "forwards",
      }}
      onClick={() => handleCardClick(card.id)}
    >
      <h3 className="text-xl mb-2.5 text-cyan-400">{card.title}</h3>
      <p className="mb-4 text-slate-300 flex-grow text-sm">
        {card.description}
      </p>
      <button className="self-start px-4 py-2 bg-gradient-to-b from-blue-500 to-blue-800 text-white border-none rounded-lg cursor-pointer font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 text-sm">
        See More
      </button>
    </div>
  );

  const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
      <>
        <div
          className="fixed inset-0 bg-black/70 z-[9999] transition-opacity duration-300"
          onClick={onClose}
        />
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-5 max-w-[90%] w-[600px] max-h-[80vh] overflow-y-auto z-[99999] text-gray-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl bg-none border-none cursor-pointer"
          >
            <X />
          </button>
          <h2 className="text-blue-600 mb-5 text-2xl font-bold">
            {content.title}
          </h2>
          <p className="mb-5 text-gray-700">{content.description}</p>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Benefits:
          </h3>
          <ul className="mb-5 pl-5 list-disc text-gray-700">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="mb-1">
                {benefit}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Eligibility:
          </h3>
          <ul className="mb-5 pl-5 list-disc text-gray-700">
            {content.eligibility.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={handleApplyNow}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Apply Now
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="font-['DM_Sans'] bg-black text-white min-h-screen">
        <style jsx>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            opacity: 0;
            animation: fadeIn 1s ease-in forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }

          body {
            background: radial-gradient(
              circle,
              rgba(0, 30, 60, 0.8) 10%,
              rgba(0, 0, 0, 1) 60%
            );
            background-attachment: fixed;
            background-size: cover;
          }
        `}</style>

        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col items-center py-10 md:py-16 px-5 text-center">
          <h2 className="text-3xl md:text-4xl text-cyan-400 mb-5">
            Funding Solutions
          </h2>
          <p className="text-lg md:text-xl">
            Find the perfect funding option for your business growth
          </p>
        </section>

        {/* Funding Grid Section */}
        <section className="py-16 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {fundingCards.map((card, index) => (
              <FundingCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </section>

        {/* Modal */}
        {activeModal && (
          <Modal
            isOpen={!!activeModal}
            onClose={closeModal}
            content={fundingDetails[activeModal]}
          />
        )}

        <Footer />
      </div>

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

export default FundingServices;
