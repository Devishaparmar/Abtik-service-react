import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-[5vw] py-[5vh] bg-[radial-gradient(circle,_rgba(0,30,60,0.8)_10%,_rgba(0,0,0,1)_60%)] bg-fixed min-h-[60vh]">
      <div className="flex-1 text-left lg:pr-5 text-center lg:text-left mb-5 lg:mb-0">
        <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] text-[#00bfff] mb-5">About Abtik</h1>
        <p className="text-[clamp(0.9rem,3vw,1.1rem)] text-[#bbb]">
          Abtik Group of Companies is a leading startup consulting firm based in India,
          dedicated to supporting modern businesses with tailored advisory services.
        </p>
      </div>

      <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative">
        <div className="w-[400px] h-[400px] mx-auto relative perspective-[1000px] overflow-visible shadow-[0_15px_35px_rgba(0,0,0,0.1)] max-w-full">
          <div className="absolute w-full h-full [transform-style:preserve-3d] animate-[float_10s_ease-in-out_infinite] [transform:rotateX(60deg)_rotateZ(45deg)]">
            <div
              id="isoGrid"
              className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -ml-[250px] -mt-[250px] grid grid-cols-10 grid-rows-10"
            ></div>

            {/* Data streams */}
            <div className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#3498db] to-transparent opacity-70 z-50 [transform-style:preserve-3d] animate-[stream-move_4s_linear_infinite]" style={{ width: "60%", top: "40%", left: "20%", animationDelay: "0s" }}></div>
            <div className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#3498db] to-transparent opacity-70 z-50 [transform-style:preserve-3d] animate-[stream-move_4s_linear_infinite]" style={{ width: "40%", top: "60%", left: "30%", animationDelay: "1s" }}></div>
            <div className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#3498db] to-transparent opacity-70 z-50 [transform-style:preserve-3d] animate-[stream-move_4s_linear_infinite]" style={{ width: "70%", top: "30%", left: "15%", animationDelay: "2s" }}></div>
            <div className="absolute h-[2px] bg-gradient-to-r from-transparent via-[#3498db] to-transparent opacity-70 z-50 [transform-style:preserve-3d] animate-[stream-move_4s_linear_infinite]" style={{ width: "50%", top: "70%", left: "25%", animationDelay: "3s" }}></div>

            {/* Logo Center */}
            <div className="absolute top-1/2 left-1/2 w-[120px] h-[120px] rounded-[20px] bg-[radial-gradient(circle,_rgba(0,30,60,0.8)_10%,_rgba(0,0,0,1)_60%)] shadow-[0px_0px_15px_rgba(0,102,255,0.9)] flex items-center justify-center z-[100] text-white font-bold text-[28px] tracking-[2px] animate-[logo-float_5s_ease-in-out_infinite] [transform:translate(-50%,-50%)]">
              ABTIK
            </div>

            {/* Info pills */}
            <div className="absolute px-4 py-2 bg-white text-[#2c3e50] text-[14px] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] z-[90] animate-[fade-in-out_6s_infinite]" style={{ top: "80px", left: "50%", transform: "translateX(-50%)", animationDelay: "0s" }}>
              Business Solutions
            </div>
            <div className="absolute px-4 py-2 bg-white text-[#2c3e50] text-[14px] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] z-[90] animate-[fade-in-out_6s_infinite]" style={{ bottom: "80px", left: "50%", transform: "translateX(-50%)", animationDelay: "2s" }}>
              Professional Consultation
            </div>
            <div className="absolute px-4 py-2 bg-white text-[#2c3e50] text-[14px] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] z-[90] animate-[fade-in-out_6s_infinite]" style={{ top: "50%", left: "-10%", transform: "translateY(-50%)", animationDelay: "4s" }}>
              GST Related Services
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;