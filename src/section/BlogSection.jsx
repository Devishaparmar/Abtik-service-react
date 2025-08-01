import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

// Import asset (adjust path as necessary)
import ArrowWhiteSvg from '../assets/Icons/Arrow.svg'; // Assuming this is in src/asset

const blogPostsData = [
  {
    title: "Startup India Certificate: The Ultimate Guide to Benefits",
    preview: "The Startup India Certificate is a must-have for any ambitious entrepreneur. From tax savings to investor trust, it opens doors most startups never discover.",
    link: "/startup-india-certificate-benefits", // Changed to a more React Router friendly path
  },
  {
    title: "MSME Certificate: The Complete Guide to Udyam Registration Benefits & Process.",
    preview: "The MSME Certificate isn’t just paperwork—it’s a growth accelerator. From loans without collateral to tax savings, it empowers small businesses to compete with giants...",
    link: "/msme-certificate-guide", // Changed to a more React Router friendly path
  },
  {
    title: "MSME Certificate: The Complete Guide to Udyam Registration Benefits & Process.",
    preview: "The MSME Certificate isn’t just paperwork—it’s a growth accelerator. From loans without collateral to tax savings, it empowers small businesses to compete with giants...",
    link: "/another-msme-post", // Changed to a more React Router friendly path
  },
];

const LatestBlogPosts = () => {
  return (
    <section className="blog-section py-10 px-5 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed text-center min-h-[400px] md:min-h-[auto]">
      <h2 className="section-title text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold  leading-tigh mb-8">Latest Blog Posts</h2>
      
      <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
        {blogPostsData.map((post, index) => (
          <div
            key={index} // Unique key for list rendering in React
            className="blog-card flex flex-col p-5 border-2 border-[#007AFF] rounded-lg shadow-md 
                       transition-transform duration-300 ease hover:translate-y-[-5px] 
                       overflow-wrap-break-word min-h-[400px] 
                       odd:bg-white odd:text-[#333] even:bg-[#1b1b1b] even:text-[#d8d8d8]"
          >
            <h3 className="text-2xl mb-2.5">{post.title}</h3>
            <p className="blog-preview text-base mb-4 leading-relaxed">{post.preview}</p>
            
            <Link 
              to={post.link} 
              className="read-more inline-flex items-center text-base font-bold no-underline 
                         py-2.5 px-5 text-white bg-gradient-to-t from-[#004999] to-[#007AFF] 
                         border-none rounded-xl transition-all duration-300 ease 
                         mt-auto self-center hover:bg-gradient-to-t hover:from-[#023b7b] 
                         hover:to-[#2f92ff] hover:scale-105 group "
            >
              Read More
              <span className="arrow">
                <img src={ArrowWhiteSvg} alt="arrow-icon" className="w-6 h-6 ml-1.5 group-hover:rotate-90 duration-300" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;