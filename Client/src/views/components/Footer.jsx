import { Link } from "react-router-dom";
import appIcon from "../../assets/appicon.png"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const Footer = () => {

  const formateUrl = (s) => {
    let url = '/'
    for (let i = 0; i < s.length; i++){
      if (s[i] === ' '){
        url += '-'
      }
      else {
        url += s[i]
      }
    }

    return url
  }

  const links = 
  [
    [
      "poLearn business",
      "teach on poLearn",
      "get the app",
      "about us",
      "contact us"
    ],
    [
      "careers",
      "blog",
      "help and support",
      "affiliate",
      "investors"
    ],
    [
      "terms",
      "privacy policy",
      "cookie settings",
      "sitemap",
      "accessibility statement"
    ]
  ]
  return ( 
    <> 
      <footer>
        <section>
          <div className="container container-pdg">
            <div className="content">
              <Link 
                to="/" 
                onClick={ () => window.scrollTo(0, 0) }
                style={{
                  alignSelf: "start"
                }}>
                  <img width="60px" src={ appIcon } alt="" />
              </Link>
              <div className="footer-links">
              {
                links.map(category => (
                  <ul key={category}>
                  {
                    category.map( link => (
                      <li key={link}><Link to={ formateUrl(link) }>{ link }</Link></li>
                    ))
                  }
                  </ul>
                ))
              }
                <ul>
                  <span>Follow us</span>
                  <div className="links">
                    <span><a href="https://linkedin.com/Djoufson"><FaLinkedin/></a></span>
                    <span><a href="https://github.com/Djoufson"><FaGithub/></a></span>
                    <span><a href="https://facebook.com/djouf_lg"><FaFacebook/></a></span>
                  </div>
                </ul>
              </div>
              <div className="footer-bottom">
                <h2>PoLearn</h2>
                <p>&copy; 2022 PoLearn, Inc.</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
 
export default Footer;