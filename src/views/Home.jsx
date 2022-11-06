import CardFormation from "./components/CardFormation";
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
      <h1>Home</h1>
    </>
   );
}
 
export default Home;