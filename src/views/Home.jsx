import CardFormation from "./components/CardFormation";
import Hero from "./components/Hero";
import Selection from "./IndexSections/Selection"
import Navbar from "./components/Navbar"

const Home = () => {
  return ( 
    <>
      <div className="view">
        {/* Hero section */}
        <section className="hero">
          <div className="container">
            <Hero/>
          </div>
        </section>

        {/* The catalog part */}
        <Selection/>

        {/* Testimonials part */}
        <section className="testimonials">

        </section>
      </div>
    </>
   );
}
 
export default Home;