import useLoad from "../utilities/hooks/useLoad";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Teach = () => {
  useLoad()
  
  return ( 
    <>
      <Navbar/>
      <div className="view">
        <div className="container">
          <h1>Teach on PoLearn</h1>
        </div>
      </div>
      <Footer/>
    </>
   );
}

export default Teach;