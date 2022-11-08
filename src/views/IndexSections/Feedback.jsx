import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input"

const Feedback = () => {
  const [email, setEmail] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
  }
  return ( 
    <>
      <section className="feedback">
        <div className="container container-pdg">
          <div className="content">
            {/* <div className="teach-with-us">
              <img src="" alt="" />
              <div className="text">
                <h2>Become an instructor</h2>
                <p>Instructors from around the world teach millions of students on PoLearn. We provide the tools and skills to teach what you love</p>
                <Link className="btn btn-dark" to='teach-on-polearn' >Start teaching today</Link>
              </div>
            </div> */}
            <div className="feedback-wrapper">
              <div className="text">
                <h2>Leave us a message</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda explicabo dolor itaque magnam praesentium illo vero consequuntur sint a distinctio vitae quasi ratione fugit neque omnis amet architecto, possimus autem?</p>
              </div>
              <div className="form">
                <form onSubmit={ submitForm }>
                  <Input 
                    id="mail" 
                    placeholder="Enter you mail address"
                    type="mail"
                    setValue={setEmail}/>
                  <textarea 
                    name="content" 
                    id="content" 
                    rows="10"
                    placeholder="Enter your message here"></textarea>
                  <button className="btn btn-dark">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Feedback;