import { Link } from "react-router-dom";
import upskill from "../../assets/impressions1.jpg"

const Upskill = () => {
  return ( 
    <>
      <section className="upskill">
        <div className="container">
          <div className="content">
            <div className="teach-with-us">
              <div className="text">
                <h1>Upskill your team with PoLearn Business</h1>
                <p>Instructors from around the world teach millions of students on PoLearn. We provide the tools and skills to teach what you love</p>
                <Link className="btn btn-dark" to='/teach-on-polearn' >Start teaching today</Link>
              </div>
              <img width="50%" src={ upskill } alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Upskill;