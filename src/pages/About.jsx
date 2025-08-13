import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Assuming Swal is installed (npm install sweetalert2)
import '../styles/About.css'; // For custom animations and specific styles
import Navbar from '../section/Navbar';
import Footer from '../section/Footer';
import Logo from "../assets/Logo/Abtik white.png"
import PartnerSlider from '../section/Partner';
import ContactFormSection from '../section/Contact';
const About = () => {
    const [isPreloaderVisible, setIsPreloaderVisible] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isFabActive, setIsFabActive] = useState(false);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const chatbotMessagesRef = useRef(null);
    const chatbotTextInputRef = useRef(null);

    // Chatbot state
    const [messages, setMessages] = useState([
        { text: "Hello! I'm Abtik Assistant. How can I help you today?", sender: 'bot' }
    ]);

    const chatResponses = {
        "what services do you offer":
            "We offer professional consultation, business registration, funding services, certifications, trademarks, and GST compliance services.",
        "how can i contact support":
            "You can reach our support team at support@abtik.com or call us at +91 89281 38434.",
        "what are your working hours":
            "Our office hours are Monday to Saturday, 10:00 AM to 7:00 PM (IST).",
        "do you provide funding assistance":
            "Yes! We help startups and businesses secure funding through various programs and investors.",
        default:
            "I'm sorry, I didn't understand that. Could you please rephrase your question?",
    };

    const chatSuggestions = [
        "What services do you offer?",
        "How can I contact support?",
        "What are your working hours?",
        "Do you provide funding assistance?",
    ];


    useEffect(() => {
        // Preloader logic
        const preloaderTimeout = setTimeout(() => {
            setIsPreloaderVisible(false);
        }, 3000); // 2 seconds initial delay + 1 second fade-out transition

        // Hero section grid animation setup
        const isoGrid = document.getElementById("isoGrid");
        if (isoGrid) {
            const rows = 10;
            const cols = 10;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const cell = document.createElement("div");
                    cell.className = "grid-cell";
                    const content = document.createElement("div");
                    content.className = "cell-content";
                    if (Math.random() < 0.2) {
                        content.classList.add("pulse");
                        content.style.animationDelay = `${Math.random() * 5}s`;
                    }
                    cell.appendChild(content);
                    isoGrid.appendChild(cell);
                }
            }

            const gridWrapper = document.querySelector(".gridWrapper");
            const gridContainer = document.querySelector(".grid-container");

            const handleMouseMove = (e) => {
                const rect = gridWrapper.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const offsetX = ((mouseX - centerX) / centerX) * 10;
                const offsetY = ((mouseY - centerY) / centerY) * 10;

                gridContainer.style.transform = `rotateX(${60 + offsetY / 2}deg) rotateZ(${45 + offsetX / 2}deg)`;

                const cells = document.querySelectorAll(".grid-cell");
                cells.forEach((cell) => {
                    const cellRect = cell.getBoundingClientRect();
                    const cellX = cellRect.left + cellRect.width / 2 - rect.left;
                    const cellY = cellRect.top + cellRect.height / 2 - rect.top;

                    const distance = Math.sqrt(
                        Math.pow(mouseX - cellX, 2) + Math.pow(mouseY - cellY, 2)
                    );

                    if (
                        distance < 80 &&
                        !cell.querySelector(".cell-content").classList.contains("pulse")
                    ) {
                        cell.querySelector(".cell-content").style.background =
                            "rgba(52, 152, 219, 0.5)";
                    } else if (
                        !cell.querySelector(".cell-content").classList.contains("pulse")
                    ) {
                        cell.querySelector(".cell-content").style.background =
                            "rgba(41, 128, 185, 0.2)";
                    }
                });
            };

            const handleMouseLeave = () => {
                gridContainer.style.transform = "rotateX(60deg) rotateZ(45deg)";
                const cells = document.querySelectorAll(".grid-cell");
                cells.forEach((cell) => {
                    if (!cell.querySelector(".cell-content").classList.contains("pulse")) {
                        cell.querySelector(".cell-content").style.background =
                            "rgba(41, 128, 185, 0.2)";
                    }
                });
            };

            gridWrapper.addEventListener("mousemove", handleMouseMove);
            gridWrapper.addEventListener("mouseleave", handleMouseLeave);

            // Add dynamic pulsing effect
            const addRandomPulse = () => {
                const cells = document.querySelectorAll(".grid-cell");
                const randomCell = cells[Math.floor(Math.random() * cells.length)];
                const content = randomCell.querySelector(".cell-content");

                if (!content.classList.contains("pulse")) {
                    content.classList.add("pulse");
                    content.style.animationDelay = "0s";
                    setTimeout(() => {
                        content.classList.remove("pulse");
                        content.style.animationDelay = `${Math.random() * 5}s`;
                    }, 2000); // Remove pulse after 2 seconds
                }
            };
            const pulseInterval = setInterval(addRandomPulse, 3000);


            // Animate on Scroll
            const elementsToAnimate = document.querySelectorAll(
                ".about-card, .why-card, .member-card"
            );

            const animateOnScroll = () => {
                elementsToAnimate.forEach((el) => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.8) {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    }
                });
            };

            window.addEventListener("scroll", animateOnScroll);
            animateOnScroll(); // Initial check

            return () => {
                clearTimeout(preloaderTimeout);
                clearInterval(pulseInterval);
                gridWrapper.removeEventListener("mousemove", handleMouseMove);
                gridWrapper.removeEventListener("mouseleave", handleMouseLeave);
                window.removeEventListener("scroll", animateOnScroll);
            };
        }
    }, []);

    // Scroll to bottom of chatbot messages
    useEffect(() => {
        if (chatbotMessagesRef.current) {
            chatbotMessagesRef.current.scrollTop = chatbotMessagesRef.current.scrollHeight;
        }
    }, [messages, isChatbotOpen]); // Scroll when messages update or chatbot opens

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleEmailSubscribe = async (e) => {
        e.preventDefault();
        const emailInput = e.target.querySelector('input[type="email"]');
        if (emailInput.value && emailInput.value.includes("@")) {
            await Swal.fire({
                title: "Thank You!",
                text: `Subscribed with ${emailInput.value}!`,
                icon: "success",
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
            });
            emailInput.value = "";
        } else {
            await Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address",
                icon: "error",
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('input[placeholder="Enter your name"]').value;
        const number = form.querySelector('input[placeholder="Enter your number"]').value;
        const email = form.querySelector('input[placeholder="Enter your Email"]').value;
        const message = form.querySelector('textarea[placeholder="Enter your message"]').value;

        if (name && number && email && message) {
            await Swal.fire({
                title: "Message Sent!",
                text: "We will get back to you soon",
                icon: "success",
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
            });
            form.reset();
        } else {
            await Swal.fire({
                title: "Incomplete Form",
                text: "Please fill all fields",
                icon: "error",
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    const handleSendMessage = () => {
        const message = chatbotTextInputRef.current.value.trim();
        if (message === "") return;
        setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
        chatbotTextInputRef.current.value = "";
        setTimeout(() => {
            const response = getBotResponse(message);
            setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
        }, 800);
    };

    const getBotResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase().trim();
        const cleanMessage = lowerMessage.replace("?", "");
        for (const [key, response] of Object.entries(chatResponses)) {
            if (cleanMessage.includes(key)) {
                return response;
            }
        }
        return chatResponses.default;
    };

    const handleSuggestionClick = (suggestion) => {
        setMessages((prevMessages) => [...prevMessages, { text: suggestion, sender: 'user' }]);
        setTimeout(() => {
            const response = getBotResponse(suggestion);
            setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
        }, 800);
    };


    return (<>
          <Navbar/>
        <div className="font-sans text-white bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed bg-cover min-h-screen relative overflow-x-hidden">
            {/* Preloader */}
           

            {/* Main Content */}
          
                {/* HEADER */}

                {/* HERO SECTION */}
                <section className="hero flex flex-col md:flex-row justify-between items-center py-10 px-5 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed min-h-[60vh]">
                    <div className="hero-left flex-1 text-left md:pr-5 mb-5 md:mb-0">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh">About Abtik</h1>
                        <p className="text-gray-400 mb-5 text-base md:text-lg">
                            Abtik Group of Companies is a leading startup consulting firm based in India, dedicated to supporting
                            modern businesses with tailored advisory services.
                        </p>
                    </div>
                    <div className="hero-right overflow-hidden flex-1 w-full md:w-1/2 relative h-[400px] md:h-[400px] flex items-center justify-center">
                        <div className="gridWrapper">
                            <div className="grid-container">
                                <div className="isoGrid" id="isoGrid">
                                    {/* Grid cells will be added by JavaScript (in useEffect) */}
                                </div>
                                {/* Data streams */}
                                <div className="data-stream" style={{ width: '60%', top: '40%', left: '20%', animationDelay: '0s' }}></div>
                                <div className="data-stream" style={{ width: '40%', top: '60%', left: '30%', animationDelay: '1s' }}></div>
                                <div className="data-stream" style={{ width: '70%', top: '30%', left: '15%', animationDelay: '2s' }}></div>
                                <div className="data-stream" style={{ width: '50%', top: '70%', left: '25%', animationDelay: '3s' }}></div>
                            </div>
                            <div className="hero-right-logo hidden md:flex items-center justify-center rounded-xl shadow-lg animate-logo-float">
                                <div className="hero-right-logo-text text-white font-bold text-3xl tracking-wide">ABTIK</div>
                            </div>
                            {/* Information pills */}
                            <div className="info-pill" style={{ top: '80px', left: '50%', transform: 'translateX(-50%)', animationDelay: '0s' }}>Business Solutions</div>
                            <div className="info-pill" style={{ bottom: '80px', left: '50%', transform: 'translateX(-50%)', animationDelay: '2s' }}>professional consultation</div>
                            <div className="info-pill" style={{ top: '50%', left: '-10%', transform: 'translateY(-50%)', animationDelay: '4s' }}>GST Related Services</div>
                        </div>
                    </div>
                </section>

                {/* Logo-Slider */}
              <PartnerSlider/>

                {/* About Abtik */}
                <section id="about-abtik" className="about-section py-12 px-4 text-center bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh">About Abtik</h2>
                    <div className="card-grid grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto px-5">
                        <div className="about-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Our Vision</h3>
                            <p className="text-gray-400 text-sm md:text-base">To be the most trusted partner for startups and businesses in India, empowering them with strategic advisory services that drive innovation, compliance, and sustainable growth in a dynamic market.</p>
                        </div>
                        <div className="about-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Our Mission</h3>
                            <p className="text-gray-400 text-sm md:text-base">At Abtik Group of Companies, we are committed to simplifying the entrepreneurial journey by providing end-to-end consultancy solutions—from business registration to funding guidance, certifications, and compliance.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Abtik */}
                <section id="why-choose-us" className="why-section py-12 px-4 text-center bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh">Why Choose Us</h2>
                    <div className="why-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-5">
                        <div className="why-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Expert-Led Guidance</h3>
                            <p className="text-gray-400 text-sm md:text-base">Benefit from strategic advice delivered by experienced professionals who understand industry standards and business nuances.</p>
                        </div>
                        <div className="why-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Hassle-Free Processes</h3>
                            <p className="text-gray-400 text-sm md:text-base">We handle all your paperwork, registrations, and compliance requirements—so you can focus on running your business.</p>
                        </div>
                        <div className="why-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Transparent Partnerships</h3>
                            <p className="text-gray-400 text-sm md:text-base">We value honest collaboration—no hidden costs, just reliable support aligned with your goals and growth.</p>
                        </div>
                    </div>
                </section>

                {/* Our Team Pillars */}
                <section id="team" className="team-section py-12 px-4 text-center bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh">Meet the Team</h2>
                    <div className="simple-team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-5">
                        <div className="member-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all  hover:translate-y-[-0.1px] duration-1000 hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Abhinav Thaker</h3>
                            <p className="text-gray-400 text-sm md:text-base">Founder</p>
                        </div>
                        <div className="member-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-1000 hover:translate-y-[-0.1px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Raj Bhensla</h3>
                            <p className="text-gray-400 text-sm md:text-base">Director</p>
                        </div>
                        <div className="member-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-1000 hover:translate-y-[-0.1px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Bharat Barot</h3>
                            <p className="text-gray-400 text-sm md:text-base">Vice President</p>
                        </div>
                        <div className="member-card bg-white/5 p-6 rounded-lg border border-blue-600/60 text-left transition-all duration-1000 hover:translate-y-[-0.1px] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] opacity-0 translate-y-5">
                            <h3 className="text-white mb-3 text-xl md:text-2xl">Virendra Rao</h3>
                            <p className="text-gray-400 text-sm md:text-base">Operation Manager</p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
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
            
        </div></>
    );
};

export default About;