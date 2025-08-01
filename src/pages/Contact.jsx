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
  </>)
}
export default Contact