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
                <ul className="bulleted-list">
                  <li>Unlimited access to 17,000+ top PoLearn courses, anytime, anywhere</li>
                  <li>International course collection in 14 languages</li>
                  <li>Certifications in tech and business</li>
                </ul>
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