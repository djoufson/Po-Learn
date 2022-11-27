import CardFormation from "../components/CardFormation"

const formations = [
  { 
    id: 1,
    title: "learn python: the complete python programming course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    slug: "the complete python programming course",
    updated: "September 2015",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam.",
    thumbnail: "courses/thumbnails/course1.jpg"
  },
  { 
    id: 2,
    title: "learn python: the complete python programming course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    slug: "the complete python programming course",
    updated: "September 2015",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam.",
    thumbnail: "courses/thumbnails/course2.jpg"
  },
  { 
    id: 3,
    title: "learn python: the complete python programming course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    slug: "the complete python programming course",
    updated: "September 2015",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam.",
    thumbnail: "courses/thumbnails/course3.jpg"
  },
  { 
    id: 4,
    title: "learn python: the complete python programming course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    slug: "the complete python programming course",
    updated: "September 2015",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam.",
    thumbnail: "courses/thumbnails/course4.jpg"
  },
  { 
    id: 5,
    title: "learn python: the complete python programming course", 
    author: "John Doe, The Codex", 
    price: 84.99, 
    stars: 4.3, 
    rates: 3761,
    slug: "the complete python programming course",
    updated: "September 2015",
    details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facere quo ut necessitatibus ipsum impedit ad laborum vero dolor quibusdam.",
    thumbnail: "courses/thumbnails/course5.jpg"
  }
]

const Selection = () => {

  const formateUrl = (s) => {
    let url = ""
    // console.log(s.length)
    
    for(let i = 0; i < s.length; i++){
      if(s.charAt(i) === " "){
        url = url.concat("-")
        continue
      }
      url = url.concat(s.charAt(i))
    }

    return `/courses/${url}`
  }

  return ( 
    <>
      <section className="selection">
        <div className="container container-pdg">
          <div className="content">
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
                  <CardFormation 
                    paht={`http://localhost:8000/${formation.thumbnail}`} 
                    url={formateUrl(formation.slug)} 
                    key={formation.id} 
                    formation={ formation }/>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Selection;