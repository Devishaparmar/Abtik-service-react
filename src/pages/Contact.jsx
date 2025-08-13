import Navbar from "../section/Navbar";
import Footer from "../section/Footer"
import ContactFormSection from "../section/Contact";
import MapSection from "../section/MapSection";
import ContactHero from "../section/ContactHero"
const Contact=()=>{

  return(<>
  <Navbar/>
<ContactHero/>
<MapSection/>
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
  </>)
}
export default Contact