import { useState } from "react";
import Input from "./components/Input";

const SignUp = () => {

  const [name, setName] = useState('')

  return ( 
    <>
      <div className="page">
        <div className="form">
          <h2>Sign up and start learning</h2>
          <form>
            <Input id="name" type="email" placeholder='Full name' setValue={setName}/>
            <p>{ name }</p>
          </form>
        </div>
      </div>
    </>
  );
}
 
export default SignUp;