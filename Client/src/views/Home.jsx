import Hero from "./components/Hero";
import Selection from "./IndexSections/Selection"
import Partners from "./IndexSections/Partners";
import Feedback from "./IndexSections/Feedback";
import useLoad from "../utilities/hooks/useLoad";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import TeachSection from "./IndexSections/TeachSection";


const Home = () => {
  useLoad()

  return ( 
    <>
      <Navbar/>
      <div className="view">
        {/* Hero section */}
        <Hero/>
        
        {/* The catalog part */}
        <Selection/>

        {/* Partners part */}
        <Partners/>

        {/* Teach on PoLearn */}
        <TeachSection/>
        
        {/* Feedback part */}
        <Feedback/>

        {/* Back to top */}
        <BackToTop/>
      </div>
      <Footer/>
    </>
   );
}
 
export default Home;