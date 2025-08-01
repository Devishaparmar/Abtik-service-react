import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Career from "./pages/Career";
import News from "./pages/News"
import Certificate from "./pages/Certificate";
import Funding from "./pages/Funding";
import LoanService from "./pages/LoanService";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Cancellation from "./pages/Cancellation"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about-us"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/service"} element={<Service />} />
        <Route path={"/career"} element={<Career />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/services/certification"} element={<Certificate />} />
        <Route path={"/services/funding"} element={<Funding />} />
        <Route path={"/services/loan"} element={<LoanService />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
        <Route path={"/cancellation-refunded-policy"} element={<Cancellation />} />



        <Route path={"/career"} element={<Career />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
