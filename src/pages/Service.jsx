import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Service.css';
import Footer from '../section/Footer';
import Navbar from '../section/Navbar';

const Service = () => {
  // Set isLoaded to true initially so content is always visible
  const [isLoaded, setIsLoaded] = useState(true);

  // The useEffect for preloader logic is commented out,
  // so we'll ensure content is visible by default.

  return (<>
  <Navbar/>

    <div className="font-sans text-white bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed bg-cover min-h-screen">
      {/*
        Removed the preloader div completely as it's no longer needed
        and was likely obscuring your content.
      */}

      {/* Main Content */}
      {/* The 'hidden' class conditional rendering is no longer strictly necessary
          if isLoaded is always true, but it doesn't hurt. */}
      <div id="main-content" className={isLoaded ? 'block' : 'hidden'}>
        {/* Hero Section */}
        <section className="hero flex flex-col md:flex-row justify-between items-center py-10 px-5 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed">
          <div className="hero-left flex-1 text-left">
            <h2 className="lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh">
              From Vision to Venture — We Make It Happen.
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-5">
              Expert solutions for registrations, compliance, funding & certifications <br />
              all under one roof. Scale smarter with our tailored consultancy services.
            </p>
          </div>
          <div className="hero-right flex-1 flex justify-center items-center h-[60vh] md:h-[60vh]">
            <svg viewBox="0 0 800 400" className="w-full max-w-[600px] h-auto hidden md:block">
              <defs>
                <linearGradient id="funding-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4361ee" />
                  <stop offset="100%" stopColor="#3a0ca3" />
                </linearGradient>
                <linearGradient id="loans-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4cc9f0" />
                  <stop offset="100%" stopColor="#4895ef" />
                </linearGradient>
                <linearGradient id="cert-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f72585" />
                  <stop offset="100%" stopColor="#b5179e" />
                </linearGradient>
                <linearGradient id="consult-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g className="logo-group">
                <circle cx="400" cy="170" r="50" fill="#001E3C" stroke="#fff" strokeWidth="1.5" />
                <text x="400" y="175" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#fff" fontWeight="bold">ABTIK</text>
                <circle cx="400" cy="170" r="10" fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.7">
                  <animate attributeName="r" values="10;40;10" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.7;0;0.7" dur="8s" repeatCount="indefinite" />
                </circle>
              </g>
              <g className="service-card" transform="translate(150,90)">
                <rect width="120" height="80" rx="10" fill="url(#loans-gradient)" filter="url(#glow)" />
                <text x="60" y="35" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#fff" fontWeight="bold">LOANS</text>
                <path d="M32,55 C32,50 88,50 88,55" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M40,20 L80,20" stroke="#fff" strokeWidth="1" />
                <circle cx="30" cy="20" r="3" fill="#fff" />
                <animateTransform attributeName="transform" type="translate" values="150,90;150,85;150,90" dur="4s" repeatCount="indefinite" />
              </g>
              <g className="service-card" transform="translate(530,90)">
                <rect width="120" height="80" rx="10" fill="url(#funding-gradient)" filter="url(#glow)" />
                <text x="60" y="35" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#fff" fontWeight="bold">FUNDING</text>
                <circle cx="38" cy="47" r="10" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M35,40 L41,47 L35,54" fill="none" stroke="#fff" strokeWidth="1" />
                <circle cx="82" cy="47" r="10" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M75,47 L82,40 L89,47" fill="none" stroke="#fff" strokeWidth="1" />
                <animateTransform attributeName="transform" type="translate" values="530,90;530,85;530,90" dur="5s" repeatCount="indefinite" begin="1s" />
              </g>
              <g className="service-card" transform="translate(150,230)">
                <rect width="120" height="80" rx="10" fill="url(#cert-gradient)" filter="url(#glow)" />
                <text x="60" y="65" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#fff" fontWeight="bold">CERTIFICATION</text>
                <path d="M35,45 L45,55 L60,45 L70,50 L85,40" fill="none" stroke="#fff" strokeWidth="1.5" />
                <circle cx="35" cy="45" r="3" fill="#fff" />
                <circle cx="85" cy="40" r="3" fill="#fff" />
                <animateTransform attributeName="transform" type="translate" values="150,230;150,225;150,230" dur="6s" repeatCount="indefinite" begin="0.5s" />
              </g>
              <g className="service-card" transform="translate(530,230)">
                <rect width="120" height="80" rx="10" fill="url(#consult-gradient)" filter="url(#glow)" />
                <text x="60" y="65" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#fff" fontWeight="bold">CONSULTATION</text>
                <circle cx="40" cy="40" r="8" fill="none" stroke="#fff" strokeWidth="1" />
                <circle cx="80" cy="40" r="8" fill="none" stroke="#fff" strokeWidth="1" />
                <path d="M40,50 C40,70 80,70 80,50" fill="none" stroke="#fff" strokeWidth="1" />
                <animateTransform attributeName="transform" type="translate" values="530,230;530,225;530,230" dur="7s" repeatCount="indefinite" begin="1.5s" />
              </g>
              <g className="connections" strokeOpacity="0.6" strokeWidth="1.5">
                <path d="M400,170 C350,140 280,130 210,130" stroke="#4cc9f0" fill="none" />
                <path d="M400,170 C450,140 520,130 590,130" stroke="#4361ee" fill="none" />
                <path d="M400,170 C350,200 280,230 210,230" stroke="#f72585" fill="none" />
                <path d="M400,170 C450,200 520,230 590,230" stroke="#4ade80" fill="none" />
              </g>
              <g className="particles">
                <circle cx="350" cy="150" r="2" fill="#4cc9f0">
                  <animate attributeName="cx" values="350;360;350" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="380" cy="210" r="2" fill="#f72585">
                  <animate attributeName="cy" values="210;200;210" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="420" cy="210" r="2" fill="#4ade80">
                  <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="150" r="2" fill="#4361ee">
                  <animate attributeName="cx" values="450;440;450" dur="6s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed text-center">
          <h2 className="text-2xl md:text-3xl text-cyan-400 mb-8">Our Services</h2>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg fill="#000000" width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <rect height="1" transform="translate(22 51) rotate(180)" width="18" x="2" y="25" fill="#fff" />
                    <rect height="1" transform="translate(27 59) rotate(180)" width="17" x="5" y="29" fill="#fff" />
                    <rect height="1" transform="translate(40 -9) rotate(90)" width="19" x="15" y="15" fill="#fff" />
                    <rect height="1" transform="translate(21 10) rotate(90)" width="19" x="-4" y="15" fill="#fff" />
                    <path d="M25,25H24v2a2,2,0,0,1-2,2h0v1h0a3,3,0,0,0,3-3Z" fill="#fff" />
                    <path d="M19,26h1v1a2,2,0,0,0,2,2h0v1h0a3,3,0,0,1-3-3Z" fill="#fff" />
                    <path d="M2,26H3v1a2,2,0,0,0,2,2H6v1H5a3,3,0,0,1-3-3Z" fill="#fff" />
                    <rect height="1" width="5" x="25" y="6" fill="#fff" />
                    <rect height="1" width="19" x="8" y="2" fill="#fff" />
                    <path d="M5,6H6V5A2,2,0,0,1,8,3H9V2H8A3,3,0,0,0,5,5Z" fill="#fff" />
                    <path d="M24,6h1V5a2,2,0,0,1,2-2h0V2h0a3,3,0,0,0-3,3Z" fill="#fff" />
                    <path d="M30,6H29V5a2,2,0,0,0-2-2h0V2h0a3,3,0,0,1,3,3Z" fill="#fff" />
                    <path d="M12,9a3,3,0,1,1,3,3A3,3,0,0,1,12,9Zm1,0a2,2,0,1,0,2-2A2,2,0,0,0,13,9Z" fill="#fff" />
                    <polygon points="14 15 15 14 15 11 14 11 14 15" fill="#fff" />
                    <polygon points="15 14 16 15 16 11 15 11 15 14" fill="#fff" />
                    <rect height="1" width="9" x="12" y="18" fill="#fff" />
                    <rect height="1" width="2" x="9" y="18" fill="#fff" />
                    <rect height="1" width="9" x="12" y="21" fill="#fff" />
                    <rect height="1" width="2" x="9" y="21" fill="#fff" />
                  </svg>
                ),
                title: 'Certification',
                desc: 'Unlock your business’s potential with hassle-free certification services. We guide you through industry-specific licenses, Startup India Certificate, Tax-Exemption, ISO certifications, and regulatory approvals to enhance credibility and compliance.',
                link: '/services/certification'
              },
              {
                icon: (
                  <svg fill="#000000" width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#fff">
                      <path d="M266.533,114.519c-55.518,0-100.687,45.168-100.687,100.687c0,16.021,3.858,31.964,11.153,46.104 	c1.713,3.325,5.803,4.627,9.126,2.915c3.325-1.716,4.631-5.801,2.914-9.126c-6.399-12.404-9.645-25.826-9.645-39.893 	c0-48.049,39.089-87.138,87.138-87.138s87.139,39.089,87.139,87.138c0,28.891-14.283,55.85-38.211,72.115 	c-3.094,2.104-3.896,6.317-1.793,9.412c1.312,1.928,3.439,2.965,5.607,2.965c1.313,0,2.637-0.38,3.803-1.172 	c27.642-18.791,44.143-49.938,44.143-83.32C367.221,159.687,322.053,114.519,266.533,114.519z" />
                      <path d="M288.548,279.445c0.806,0,1.625-0.146,2.423-0.452c26.231-10.056,43.854-35.689,43.854-63.788 	c0-37.657-30.635-68.292-68.292-68.292c-37.656,0-68.294,30.635-68.294,68.292c0,17.505,6.616,34.151,18.63,46.875 	c2.566,2.721,6.855,2.847,9.575,0.276c2.722-2.569,2.845-6.855,0.275-9.575c-9.628-10.201-14.932-23.546-14.932-37.576 	c0-30.185,24.559-54.743,54.745-54.743c30.186,0,54.744,24.558,54.744,54.743c0,22.527-14.129,43.076-35.156,51.138 	c-3.493,1.34-5.239,5.258-3.901,8.751C283.254,277.789,285.822,279.445,288.548,279.445z" />
                      <path d="M139.154,291.404c3.741,0,6.774-3.034,6.774-6.775c0-3.74-3.033-6.773-6.774-6.773H120.2c-3.74,0-6.773,3.033-6.773,6.773 	v94.236c0,3.74,3.033,6.774,6.773,6.774h43.683h123.129c16.077,0,31.971-5.372,44.752-15.127l41.123-31.384 	c11.452-8.738,13.832-25.293,5.306-36.902c-8.536-11.625-25.058-14.301-36.831-5.965l-21.052,14.91 	c-3.053,2.163-3.774,6.391-1.612,9.445c2.164,3.051,6.391,3.773,9.444,1.612l21.053-14.911c5.78-4.096,13.891-2.776,18.077,2.928 	c4.187,5.699,3.019,13.824-2.603,18.113l-41.124,31.383c-10.436,7.964-23.408,12.349-36.533,12.349H170.657v-80.687h45.86 	c7.957,0,15.471,3.062,21.159,8.624c8.239,8.048,19.117,12.48,30.632,12.48h13.123c6.145,0,11.142,4.997,11.142,11.14 	c0,8.19-6.662,14.854-14.853,14.854h-47.532c-3.74,0-6.774,3.033-6.774,6.773c0,3.741,3.034,6.774,6.774,6.774h47.532 	c15.66,0,28.401-12.741,28.401-28.401c0-13.611-11.076-24.688-24.69-24.688h-13.123c-7.956,0-15.471-3.063-21.162-8.623 	c-8.233-8.051-19.111-12.482-30.629-12.482h-52.635c-3.74,0-6.774,3.033-6.774,6.773v87.462h-30.134v-80.687H139.154z" />
                      <path d="M266.533,264.991c3.741,0,6.774-3.034,6.774-6.774v-5.484c9.539-1.76,16.792-10.123,16.792-20.163 	c0-11.316-9.205-20.521-20.521-20.521h-1.047h-3.98h-1.047c-3.845,0-6.973-3.126-6.973-6.971c0-3.845,3.128-6.971,6.973-6.971 	h15.839c3.741,0,6.774-3.034,6.774-6.774c0-3.74-3.033-6.774-6.774-6.774h-6.035v-4.326c0-3.741-3.033-6.774-6.774-6.774 	c-3.74,0-6.773,3.034-6.773,6.774v4.685c-9.532,1.767-16.777,10.127-16.777,20.161c0,11.314,9.205,20.519,20.521,20.519h1.047h3.98 	h1.047c3.845,0,6.973,3.128,6.973,6.973s-3.128,6.971-6.973,6.971h-15.839c-3.74,0-6.774,3.034-6.774,6.774 	c0,3.741,3.034,6.774,6.774,6.774h6.021v5.128C259.76,261.957,262.793,264.991,266.533,264.991z" />
                      <path d="M438.971,425.09l-55.309-38.197c-3.078-2.125-7.299-1.355-9.424,1.724c-2.126,3.079-1.354,7.298,1.724,9.425l47.238,32.623 	l-36.613,25.288V444.5c0-3.74-3.034-6.774-6.774-6.774H166.964v-14.123h212.849c3.74,0,6.774-3.034,6.774-6.774 	s-3.034-6.773-6.774-6.773H160.189c-3.74,0-6.773,3.033-6.773,6.773V444.5c0,3.74,3.033,6.773,6.773,6.773h212.849v17.59 	c0,2.518,1.397,4.829,3.627,5.999c0.989,0.519,2.069,0.775,3.147,0.775c1.352,0,2.697-0.405,3.85-1.2l55.309-38.199 	c1.832-1.265,2.925-3.35,2.925-5.574C441.896,428.438,440.803,426.354,438.971,425.09z" />
                      <path d="M131.646,410.055h-30.093c-3.74,0-6.774,3.033-6.774,6.773V444.5c0,3.74,3.034,6.773,6.774,6.773h30.093 	c3.74,0,6.773-3.033,6.773-6.773v-27.672C138.419,413.088,135.386,410.055,131.646,410.055z M124.871,437.726h-16.544v-14.123 	h16.544V437.726z" />
                      <path d="M73.008,410.055c-3.74,0-6.774,3.033-6.774,6.773V444.5c0,3.74,3.034,6.773,6.774,6.773s6.774-3.033,6.774-6.773v-27.672 	C79.782,413.088,76.748,410.055,73.008,410.055z" />
                      <path d="M73.029,86.91l55.309,38.199c1.176,0.811,2.516,1.2,3.844,1.2c2.151,0,4.267-1.021,5.58-2.924 	c2.126-3.079,1.354-7.297-1.724-9.424L88.8,81.335l36.613-25.288V67.5c0,3.74,3.034,6.774,6.774,6.774h212.849v14.123H132.188 	c-3.74,0-6.774,3.034-6.774,6.774c0,3.74,3.034,6.774,6.774,6.774h219.623c3.74,0,6.773-3.034,6.773-6.774V67.5 	c0-3.741-3.033-6.774-6.773-6.774H138.962V43.136c0-2.518-1.397-4.829-3.627-6c-2.23-1.168-4.927-1.005-6.997,0.426L73.029,75.762 	c-1.832,1.264-2.925,3.349-2.925,5.574S71.197,85.645,73.029,86.91z" />
                      <path d="M380.355,101.945h30.092c3.74,0,6.774-3.034,6.774-6.774V67.5c0-3.741-3.034-6.774-6.774-6.774h-30.092 	c-3.741,0-6.775,3.034-6.775,6.774v27.671C373.58,98.912,376.614,101.945,380.355,101.945z M387.129,74.274h16.544v14.123h-16.544 	V74.274z" />
                      <path d="M438.992,60.726c-3.74,0-6.774,3.034-6.774,6.774v27.671c0,3.74,3.034,6.774,6.774,6.774s6.774-3.034,6.774-6.774V67.5 	C445.767,63.759,442.732,60.726,438.992,60.726z" />
                    </g>
                  </svg>
                ),
                title: 'Funding',
                desc: 'Fuel your growth with tailored funding solutions. Whether you need investors, grants, or government schemes, we connect you to the right financial resources.',
                link: '/services/funding'
              },
              {
                icon: (
                  <svg fill="#000000" width="50" height="50" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M208,80a8.00039,8.00039,0,0,1-8,8H167.85156c.08789,1.32373.14844,2.65454.14844,4a60.06812,60.06812,0,0,1-60,60H92.69238l72.68946,66.08008a8.0006,8.0006,0,0,1-10.76368,11.83984l-88-80A8.0004,8.0004,0,0,1,72,136h36a44.04978,44.04978,0,0,0,44-44c0-1.34912-.0708-2.68164-.18994-4H72a8,8,0,0,1,0-16h75.17188A44.03678,44.03678,0,0,0,108,48H72a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16H148.73535a60.16006,60.16006,0,0,1,15.82422,24H200A8.00039,8.00039,0,0,1,208,80Z"
                      fill="#fff"
                    />
                  </svg>
                ),
                title: 'Loan Services',
                desc: 'Get quick and competitive business loans with expert support. We simplify applications, improve eligibility, and negotiate better terms for your financial needs.',
                link: '/services/loan'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-box bg-white/5 border border-blue-600/60 rounded-[15px] p-6 min-h-[300px] flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,102,255,0.6)] transition-all"
              >
                <div className='flex  font-semibold space-y-2'>

                {service.icon}
                <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                </div>
                <p className="service-desc text-sm text-gray-400 flex-grow">{service.desc}</p>
                <Link
                  to={service.link}
                  className="bg-gradient-to-b from-blue-500 to-blue-900 text-white py-2 px-4 rounded-[12px] font-bold hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-950 hover:scale-105 transition-all w-[120px] mt-4"
                >
                  Show More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Service;