import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Categories = () => {
  const { slug } = useParams();

  return ( 
    <>
    <Navbar/>
    <div className="view">
      <div className="container">
        <h1>{ slug }</h1>
      </div>
    </div>
    <Footer/>
    </>
   );
}
 
export default Categories;