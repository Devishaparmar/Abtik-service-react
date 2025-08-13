import React from "react"
import Navbar from "../section/Navbar"
import Footer from "../section/Footer"
import ContactFormSection from "../section/Contact"
import Testimonial from "../section/Testimonial"
import FAQSection from "../section/Faq"
import LatestBlogPosts from "../section/BlogSection"
import VideoPlayerSection from "../section/VideoSection"
import OurService from "../section/OurService"
import PartnerSlider from "../section/Partner"
import HeroSection from "../section/HomeHeroSection"
const Home = () => {
    return (<>
        <Navbar />
        <HeroSection/>
        <PartnerSlider/>
        <OurService/>
        <VideoPlayerSection/>
        <ContactFormSection />
        <LatestBlogPosts/>
        <FAQSection/>
        <Testimonial />
        <Footer />
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
    </>)
}
export default Home