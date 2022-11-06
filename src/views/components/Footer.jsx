import { Link } from "react-router-dom";

const Footer = () => {

  const formateUrl = (s) => {
    let url = ''
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
      "PoLearn Business",
      "Teach on PoLearn",
      "Get the app",
      "About us",
      "Contact us"
    ],
    [
      "Careers",
      "Blog",
      "Help and Support",
      "Affiliate",
      "Investors"
    ],
    [
      "Terms",
      "Privacy Policy",
      "Cookie Settings",
      "Sitemap",
      "Accessibility statement"
    ]
  ]
  return ( 
    <> 
      <footer>
        <section>
          <div className="container container-pdg">
            <div className="content">
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
              </div>
              <div className="footer-bottom">
                <h2>PO LEARN</h2>
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