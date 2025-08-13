import React, { useState, useEffect } from 'react';
import Navbar from '../section/Navbar';
import Footer from '../section/Footer';
import { useNavigate } from 'react-router-dom';

const loanDetails = {
    "Startup India Certificate": (
        <div>
            <h2 className="text-[#007aff] text-2xl mb-5">Startup India Certificate</h2>
            <p>Officially recognize your business as an innovative startup and unlock exclusive government benefits:</p>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>Tax Benefits:</strong> Enjoy 3-year tax exemptions</li>
                <li><strong>Funding Support:</strong> Access government funds and investor networks</li>
                <li><strong>IPR Fast-Tracking:</strong> Get priority patent approvals</li>
                <li><strong>Simplified Compliance:</strong> Self-certify under labor and environmental laws</li>
                <li><strong>Tender Preference:</strong> Eligibility for government tenders without prior experience</li>
            </ul>
            <h3>Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5">
                <li>Registered as a Private Ltd, LLP, or Partnership Firm (≤ 10 years old)</li>
                <li>Annual turnover ≤ ₹100 crores in any financial year</li>
                <li>Working towards innovation, scalability, or new technology</li>
                <li>Approval from DPIIT (Dept. for Promotion of Industry & Internal Trade)</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all">Contact Us to Apply</button>
        </div>
    ),
    "Tax Exemption Certificate": (
        <div>
            <h2 className="text-[#007aff] text-2xl mb-5">Tax Exemption Certificate</h2>
            <p>Save on taxes while growing your business with our expert assistance:</p>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>3-Year Tax Holiday:</strong> 100% income tax exemption for eligible startups</li>
                <li><strong>Investor Confidence:</strong> Enhances credibility for funding</li>
                <li><strong>Compliance Assurance:</strong> We handle all paperwork and approvals</li>
            </ul>
            <h3>Requirements:</h3>
            <ul className="list-disc pl-5 mb-5">
                <li>DPIIT recognized startup</li>
                <li>Innovation-focused business model</li>
                <li>Annual revenue under ₹100 crores</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all">Get Your Tax Benefits</button>
        </div>
    ),
    "MSME Certificate": (
        <div>
            <h2 className="text-[#007aff] text-2xl mb-5">MSME Certificate</h2>
            <p>Unlock government benefits designed for small and medium businesses:</p>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>Collateral-free loans</strong> under Credit Guarantee Scheme</li>
                <li><strong>Tax rebates</strong> on income tax and GST</li>
                <li><strong>Subsidies</strong> for patents & trademarks</li>
                <li><strong>Priority access</strong> to government tenders</li>
            </ul>
            <h3>Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>Manufacturing:</strong> Investment ≤ ₹50 cr & turnover ≤ ₹250 cr</li>
                <li><strong>Service Sector:</strong> Investment ≤ ₹20 cr & turnover ≤ ₹100 cr</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all">Register Your MSME</button>
        </div>
    ),
    "ISO Certificates": (
        <div>
            <h2 className="text-[#007aff] text-2xl mb-5">ISO Certification</h2>
            <p>Enhance your business credibility with internationally recognized standards:</p>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>ISO 9001:</strong> Quality Management System</li>
                <li><strong>ISO 14001:</strong> Environmental Management</li>
                <li><strong>ISO 27001:</strong> Information Security</li>
                <li><strong>ISO 45001:</strong> Occupational Health & Safety</li>
            </ul>
            <h3>Benefits:</h3>
            <ul className="list-disc pl-5 mb-5">
                <li>Improve operational efficiency</li>
                <li>Increase customer trust</li>
                <li>Access global markets</li>
                <li>Win more contracts</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all">Get ISO Certified</button>
        </div>
    ),
    "Make In India Certificates": (
        <div>
            <h2 className="text-[#007aff] text-2xl mb-5">Make In India Certification</h2>
            <p>Promote local manufacturing and gain valuable incentives:</p>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>Tax benefits</strong> and subsidies</li>
                <li><strong>Priority</strong> in government procurement</li>
                <li><strong>Export promotion</strong> schemes</li>
                <li><strong>Brand recognition</strong> as domestic manufacturer</li>
            </ul>
            <h3>Requirements:</h3>
            <ul className="list-disc pl-5 mb-5">
                <li>Manufacturing unit in India</li>
                <li>Minimum 51% domestic value addition</li>
                <li>Compliance with quality standards</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all">Apply for Certification</button>
        </div>
    ),
    "ZED Certificates": (
        <div>
            <h2 className="text-[#007aff] text-2xl mb-5">ZED Certification</h2>
            <p>Zero Defect Zero Effect certification for manufacturing excellence:</p>
            <ul className="list-disc pl-5 mb-5">
                <li><strong>Quality recognition</strong> for defect-free manufacturing</li>
                <li><strong>Environmental compliance</strong> with zero effect</li>
                <li><strong>Financial support</strong> up to ₹50 lakhs</li>
                <li><strong>Government tenders</strong> priority</li>
            </ul>
            <h3>Eligibility:</h3>
            <ul className="list-disc pl-5 mb-5">
                <li>Indian MSME in manufacturing</li>
                <li>Quality management systems</li>
                <li>Environmental compliance</li>
            </ul>
            <button className="contact-btn bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all">Start ZED Certification</button>
        </div>
    )
};

const App = () => {
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

    const openModal = (loanType) => {
        setModalContent(loanDetails[loanType]);
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
        <>
            {/* Header */}
          <Navbar/>
            {/* Hero Section */}
            <section className="flex flex-col items-center py-2.5 px-2.5 md:py-10 md:px-3.5 text-center bg-gradient-to-br from-[#001e3c]/80 to-black">
                <h2 className="text-[#00bfff] text-4xl md:text-5xl mb-5">Certification Services</h2>
                <p className="text-[#cbd5e0] text-lg md:text-xl">Get the right certifications to grow your business</p>
            </section>

            {/* Loan Grid Section */}
            <section className="py-16 px-5 bg-gradient-to-br from-[#001e3c]/80 to-black">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full mx-auto">
                    {[
                        { name: "Startup India Certificate", description: "Boost credibility, access benefits, and grow faster with official recognition from Startup India.", delay: "0.1s" },
                        { name: "Tax Exemption Certificate", description: "Save taxes legally while maximizing your profits and staying compliant with regulations.", delay: "0.2s" },
                        { name: "MSME Certificate", description: "Unlock government subsidies, easier loans, and access to tender opportunities.", delay: "0.3s" },
                        { name: "ISO Certificates", description: "Enhance trust, quality, and open doors to global business opportunities.", delay: "0.4s" },
                        { name: "Make In India Certificates", description: "Promote local manufacturing and gain valuable government incentives.", delay: "0.5s" },
                        { name: "ZED Certificates", description: "Zero-defect, zero-effect certification for quality assurance and global competitiveness.", delay: "0.6s" }
                    ].map((loan, index) => (
                        <div
                            key={index}
                            className="card bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-[#3b82f6]/30 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,123,255,0.2)] flex flex-col animate-[fadeInUp_0.6s_ease_forwards] opacity-0"
                            data-loan={loan.name}
                            style={{ animationDelay: loan.delay, animationPlayState: 'paused' }}
                        >
                            <h3 className="text-[#00bfff] text-lg mb-2.5">{loan.name}</h3>
                            <p className="text-[#cbd5e0] mb-3.5 flex-1 text-sm">{loan.description}</p>
                            <button
                                className="bg-gradient-to-b from-[#007aff] to-[#004999] text-white px-4 py-2 rounded-lg cursor-pointer font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(0,123,255,0.4)] transition-all"
                                onClick={() => openModal(loan.name)}
                            >
                                See More
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <div className={`fixed inset-0 bg-black/70 z-[900] ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-all duration-300`} onClick={closeModal}></div>
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-7 max-w-[90%] w-[600px] max-h-[80vh] overflow-y-auto z-[1000] ${isModalOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-90'} transition-all duration-300 text-[#333]`}>
                <button className="absolute top-3.5 right-3.5 text-2xl bg-none border-none cursor-pointer" onClick={closeModal}>×</button>
                <div onClick={handleContactClick}>{modalContent}</div>
            </div>

            {/* Footer */}
           <Footer/>

            {/* Floating Action Button */}
            

            <style>{`
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>



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