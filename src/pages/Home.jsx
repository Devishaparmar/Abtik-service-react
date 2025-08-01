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
    </>)
}
export default Home