import CardFormation from "./components/CardFormation";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"

const Home = () => {
  const formation = { 
    title: "Learn Python: The complete Python Programming Course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  }
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
        <section className="catalog">
          {/* <CardFormation formation={formation}/> */}
        </section>

        {/* Testimonials part */}
        <section className="testimonials">

        </section>
      </div>
    </>
   );
}
 
export default Home;