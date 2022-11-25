import { useState } from "react";
import google from "../assets/google.svg"
import github from "../assets/github.svg"
import Input from "./components/Input";
import { Link } from "react-router-dom";
import useLoad from "../utilities/hooks/useLoad";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const Login = () => {
  useLoad()
  const [name, setName] = useState('')
  const submission = (e) => {
    e.preventDefault()
  }
  return ( 
    <>
      <Navbar/>
      <div className="page log-in">
        <div className="form">
          <h2>Log in and retrieve your lessons</h2>
          <form onSubmit={ submission }>
            <Input id="email" type="email" placeholder='Mail' setValue={setName}/>
            <Input id="password" type="password" placeholder='Password' setValue={setName}/>
            <div className="social">
              <Link to='#' className="icon"><img src={ google } alt="Google" /></Link>
              <Link to='#' className="icon"><img src={ github } alt="Github" /></Link>
            </div>
            <button className="btn btn-primary">Log in</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
 
export default Login;