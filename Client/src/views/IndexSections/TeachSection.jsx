import { Link } from "react-router-dom";
import teach from "./../../assets/teach.jpg"

const TeachSection = () => {
  return ( 
    <>
      
      <section className="feedback">
        <div className="container container-pdg">
          <div className="content">
            <div className="teach-with-us">
              <img src={ teach } alt="" />
              <div className="text">
                <h2>Become an instructor</h2>
                <p>Instructors from around the world teach millions of students on PoLearn. We provide the tools and skills to teach what you love</p>
                <Link className="btn btn-dark" to='/teach-on-polearn' >Start teaching today</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default TeachSection;