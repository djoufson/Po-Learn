import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri"
import { FaUserNinja, /*FaRegUser*/ } from "react-icons/fa"
import appIcon from '../../assets/appicon.png'
import search from '../../assets/search.svg'
import arrow from '../../assets/arrow.svg'

const FormateUrl = (s) => {
  let url = ''
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '&'){
      url += '-and-'
    }
    else{
      url += s[i]
    }
  }
  return `/courses/categories/${url}`
}

const FormateString = (s) => {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-'){
      result = result.concat(' ')
    }
    else if (s[i] === '&'){
      result = result.concat('&')
    }
    else{
      result = result.concat(s.charAt(i))
    }
  }

  return result
}

const Navbar = () => {
  const categories = [
    "web-development", 
    "data-science",
    "mobile-development",
    "programming-languages",
    "game-development",
    "photography&video",
    "databases"
  ]
  return ( 
    <header>
      <nav className="nav">
        <div className="nav-logo">
          <Link to='/'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
            <img width="50px" src={ appIcon } alt="" />
            <p>PoLearn</p>
          </Link>
        </div>
        <ul className="dropdown">
          Categories
          <div className="content">
            <div className="content-wrapper">
              {
                categories.map(cat => (
                  <li key={cat}>
                    <Link to={ FormateUrl(cat) }>
                      { FormateString(cat) }
                      <img src={ arrow } alt="" />
                    </Link>
                  </li>
                ))
              }
            </div>
          </div>
        </ul>
        <div className="search-bar">
          <img src={ search } alt="" />
          <input type="text" placeholder="Search for anything" />
        </div>
        <div className="teach dropdown">
            Teach on PoLearn
            <div className="content">
              <div className="content-wrapper">
                <p>Turn what you know in an opportunity to reach millions around the world</p>
                <Link to='/teach-on-polearn' className="btn btn-dark">Learn more</Link>
              </div>
            </div>
        </div>
        <div className="nav-links">
          <div className="dropdown cart">
            <Link className="btn btn-light btn-rounded" to="/"><RiShoppingCart2Line/></Link>
            <div className="content">
              <div className="content-wrapper">
                <p>The courses you added to your cart</p>
              </div>
            </div>
          </div>
          <Link to='/profile' className="btn btn-dark btn-rounded"><FaUserNinja/></Link>
          <Link to='/login' className="btn btn-light">Log in</Link>
          <Link to='/sign-up' className="btn btn-dark">Sign up</Link>
        </div>
      </nav>
    </header>
   );
}

export default Navbar;