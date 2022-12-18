import { useState } from "react";
import Input from "../components/Input"

const Feedback = () => {
  const [email, setEmail] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
    console.log(email)
  }
  return (
    <>
      <section className="feedback">
        <div className="container">
          <div className="content">
            <div className="feedback-wrapper">
              <div className="text">
                <h1>Leave us a message</h1>
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