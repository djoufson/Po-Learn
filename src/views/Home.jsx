import Hero from "./components/Hero";
import Selection from "./IndexSections/Selection"
import Partners from "./IndexSections/Partners";
import Feedback from "./IndexSections/Feedback";


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

        {/* Partners part */}
        <Partners/>

        {/* Feedback part */}
        <Feedback/>
      </div>
    </>
   );
}
 
export default Home;