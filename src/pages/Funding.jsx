import React, { useState, useEffect } from 'react';
import Footer from '../section/Footer';
import Navbar from '../section/Navbar';
import { useNavigate } from 'react-router-dom';

const fundingDetails = {
    "Startup India Seed Fund Scheme (SISFS)": (
        <div>
            <h2 className="text-[#007aff] text-[clamp(1.5rem,4vw,1.8rem)] mb-5">Startup India Seed Fund Scheme (SISFS)</h2>
            <p>To provide financial assistance to early-stage startups for proof-of-concept, prototype development, and market entry.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Benefits:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Funding up to ₹20 Lakhs (for validation/PoC)</li>
                <li>Up to ₹50 Lakhs (for commercialization)</li>
                <li>Mentorship & incubation support</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>DPIIT-recognized startup (&lt; 2 years old)</li>
                <li>Innovative, scalable business model</li>
                <li>Prototype/MVP (Minimum Viable Product) preferred</li>
                <li>At least 51% Indian shareholding</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all text-[clamp(0.8rem,2vw,0.9rem)]">Apply Now</button>
        </div>
    ),
    "MSME DESIGN": (
        <div>
            <h2 className="text-[#007aff] text-[clamp(1.5rem,4vw,1.8rem)] mb-5">MSME DESIGN</h2>
            <p>Support MSMEs in design innovation for product development.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Benefits:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Up to ₹40 Lakhs funding</li>
                <li>Subsidy on design consultancy & IP protection</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Registered MSMEs</li>
                <li>Profitable or viable business model</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all text-[clamp(0.8rem,2vw,0.9rem)]">Learn More</button>
        </div>
    ),
    "Gujrat grant": (
        <div>
            <h2 className="text-[#007aff] text-[clamp(1.5rem,4vw,1.8rem)] mb-5">Gujrat Grant</h2>
            <p>Encourage entrepreneurship in Gujarat with financial aid.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Benefits:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Up to ₹30 Lakhs grant</li>
                <li>Subsidies on patents & infrastructure</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Business registered in Gujarat</li>
                <li>Innovative/tech-driven model</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all text-[clamp(0.8rem,2vw,0.9rem)]">Apply Now</button>
        </div>
    ),
    "Nidhi pryas": (
        <div>
            <h2 className="text-[#007aff] text-[clamp(1.5rem,4vw,1.8rem)] mb-5">Nidhi Pryas</h2>
            <p>Fund early-stage startups for prototype development.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Benefits:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Up to ₹10 Lakhs grant</li>
                <li>Access to DST-recognized incubators</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Indian startup with a tech-based idea</li>
                <li>Willing to develop a prototype</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all text-[clamp(0.8rem,2vw,0.9rem)]">Get Started</button>
        </div>
    ),
    "Venture Capital": (
        <div>
            <h2 className="text-[#007aff] text-[clamp(1.5rem,4vw,1.8rem)] mb-5">Venture Capital</h2>
            <p>Equity investment for high-growth startups.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Benefits:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Equity based Funding</li>
                <li>Mentorship & industry networks</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Scalable business model</li>
                <li>Strong founding team</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all text-[clamp(0.8rem,2vw,0.9rem)]">Connect With Investors</button>
        </div>
    ),
    "Women Startup Program": (
        <div>
            <h2 className="text-[#007aff] text-[clamp(1.5rem,4vw,1.8rem)] mb-5">Women Startup Program</h2>
            <p>Empower female entrepreneurs with financial aid.</p>
            <h3 className="text-lg font-semibold mt-4 mb-2">Benefits:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Financial support</li>
                <li>Exclusive mentorship & networking</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5 text-[clamp(0.9rem,2.5vw,1rem)]">
                <li>Women-led startup (≥51% ownership)</li>
                <li>Registered business</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all text-[clamp(0.8rem,2vw,0.9rem)]">Apply Now</button>
        </div>
    )
};

const Funding = () => {
    const nav=useNavigate()
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isFabOpen, setIsFabOpen] = useState(false);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hello! I'm Abtik Assistant. How can I help you today?" }
    ]);
    const [inputText, setInputText] = useState('');

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const closeNav = () => setIsNavOpen(false);

    const openModal = (fundingType) => {
        setModalContent(fundingDetails[fundingType]);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleContactClick = () => {
      nav("/contact")
        closeModal();
    };

    const toggleFab = () => setIsFabOpen(!isFabOpen);

    const openChatbot = () => {
        setIsChatbotOpen(true);
        setIsFabOpen(false);
    };

    const closeChatbot = () => setIsChatbotOpen(false);

    const sendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { type: 'user', text: inputText }]);
            setMessages(prev => [...prev, { type: 'bot', text: "Thanks for your message! How else can I assist you?" }]);
            setInputText('');
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        const animateOnScroll = () => {
            document.querySelectorAll('.card').forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < window.innerHeight - 100) {
                    card.style.animationPlayState = 'running';
                }
            });
        };
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        return () => {
            window.removeEventListener('scroll', animateOnScroll);
            window.removeEventListener('load', animateOnScroll);
        };
    }, []);

    return (
        <div className="font-inter text-white bg-gradient-to-br from-[#001e3c]/80 to-black min-h-screen opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
            {/* Header */}
            <Navbar />

            {/* Hero Section */}
            <section className="flex flex-col items-center px-5 py-[clamp(40px,8vw,60px)] text-center bg-gradient-to-br from-[#001e3c]/80 to-black">
                <h2 className="text-[#00bfff] text-[clamp(1.8rem,5vw,2.5rem)] mb-5">Funding Solutions</h2>
                <p className="text-[clamp(1rem,3vw,1.2rem)] text-[#cbd5e0]">Find the perfect funding option for your business growth</p>
            </section>

            {/* Funding Grid Section */}
            <section className="py-16 px-5 bg-gradient-to-br from-[#001e3c]/80 to-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full mx-auto">
                    {[
                        { name: "Startup India Seed Fund Scheme (SISFS)", description: "Govt-funded ₹20L grants for early-stage DPIIT-recognized startups.", delay: "0.1s" },
                        { name: "MSME DESIGN", description: "Up to ₹40L for MSME product design innovation support.", delay: "0.2s" },
                        { name: "Gujrat grant", description: "State-backed financial support for Gujarat-based enterprises.", delay: "0.3s" },
                        { name: "Nidhi pryas", description: "₹10L prototype funding for early-stage tech startups.", delay: "0.4s" },
                        { name: "Venture Capital", description: "Investor capital for startups in exchange for company ownership.", delay: "0.5s" },
                        { name: "Women Startup Program", description: "Financial support for female entrepreneurs launching innovative startups.", delay: "0.6s" }
                    ].map((funding, index) => (
                        <div
                            key={index}
                            className="card bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#3b82f6]/30 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,123,255,0.2)] flex flex-col animate-[fadeInUp_0.6s_ease_forwards] opacity-0 m-[5px]"
                            data-funding={funding.name}
                            style={{ animationDelay: funding.delay, animationPlayState: 'paused' }}
                            onClick={() => openModal(funding.name)}
                        >
                            <h3 className="text-[#00bfff] text-[1.2rem] mb-2.5">{funding.name}</h3>
                            <p className="text-[#cbd5e0] mb-3.5 flex-1 text-[0.9rem]">{funding.description}</p>
                            <button
                                className="bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg cursor-pointer font-semibold text-[0.9rem] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all self-start"
                                onClick={() => openModal(funding.name)}
                            >
                                See More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <div className={`fixed inset-0 bg-black/70 z-[900] ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={closeModal}></div>
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-5 max-w-[90%] w-[600px] max-h-[80vh] overflow-y-auto z-[1000] ${isModalOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-90'} transition-all duration-300 text-[#333] max-md:p-3.5 max-md:w-[95%]`}>
                <button className="absolute top-2.5 right-2.5 text-[20px] bg-none border-none cursor-pointer" onClick={closeModal}>×</button>
                <div onClick={handleContactClick}>{modalContent}</div>
            </div>

            {/* Footer */}
            <Footer />


            <style>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .font-inter {
                    font-family: 'Inter', Arial, sans-serif;
                }
            `}</style>
        </div>
    );
};

export default Funding;