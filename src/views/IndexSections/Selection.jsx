import { Link } from "react-router-dom";
import CardFormation from "../components/CardFormation"

const formations = [
  { 
    id: 1,
    title: "Learn Python: The complete Python Programming Course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  },
  { 
    id: 2,
    title: "Learning Python for Data Analysis and Visualization", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  },
  { 
    id: 3,
    title: "Learn Python: The complete Python Programming Course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  },
  { 
    id: 4,
    title: "Learn Python: The complete Python Programming Course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  },
  { 
    id: 5,
    title: "Learn Python: The complete Python Programming Course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  },
  { 
    id: 6,
    title: "Learn Python: The complete Python Programming Course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    updated: "September 2015",
    details: "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam."
  },
]

const Selection = () => {

  const formateUrl = (s) => {
    return s
  }

  return ( 
    <>
      <div className="view">
        <div className="container">
          <section className="selection">
            <h1>A broad selection of courses</h1>
            <p>Choose from 204,000 online video courses with new additions published every month</p>
            <div className="formations"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px"
              }}>
              {
                formations.map(formation => (
                  <CardFormation url={formateUrl(formation.title)} key={formation.id} formation={ formation }/>
                ))
              }
            </div>
          </section>
        </div>
      </div>
    </>
   );
}
 
export default Selection;