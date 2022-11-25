import { useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Course = () => {
  const { slug, id } = useParams();

  return ( 
    <>
    <Navbar/>
    <div className="view">
      <div className="container">
        <h1>{ slug }</h1>
        <p>{ id }</p>
      </div>
    </div>
    <Footer/>
    </>
   );
}
 
export default Course;