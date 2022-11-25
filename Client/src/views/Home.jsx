import Hero from "./components/Hero";
import Selection from "./IndexSections/Selection"
import Partners from "./IndexSections/Partners";
import Feedback from "./IndexSections/Feedback";
import useLoad from "../utilities/hooks/useLoad";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const Home = () => {
  useLoad()

  return ( 
    <>
    <Navbar/>
      <div className="view">
        {/* Hero section */}
        <section className="hero">
          <div className="container">
            <Hero/>
          </div>
        </section>

        {/* The catalog part */}
        <Selection/>

        {/* Partners part */}
        <Partners/>

        {/* Feedback part */}
        <Feedback/>
      </div>
      <Footer/>
    </>
   );
}
 
export default Home;