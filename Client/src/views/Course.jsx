import { Link, useParams } from "react-router-dom";
import useLoad from "../utilities/hooks/useLoad";
import Footer from "./components/Footer";
import LessonCard from "./components/LessonCard";
import Navbar from "./components/Navbar";

const Course = () => {
  const course = { 
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
  }
  const lessons = [
    {
      id: 1,
      title: "Why to choose Python",
      length: 90
    },
    {
      id: 2,
      title: "Introduction to Python programming",
      length: 18
    },
    {
      id: 3,
      title: "Set up the environment",
      length: 23
    },
    {
      id: 4,
      title: "Hello World!",
      length: 15
    },
  ]
  useLoad()
  const { slug, id } = useParams();

  return ( 
    <>
    <Navbar/>
    <div className="view">
      <div className="container">
        <h1>{ course.title } / { id }</h1>
        <video src=""></video>
        <div className="playlist">
          <ul>
            {
              lessons.map(lesson => (
                <li key={ lesson.id }>
                  <LessonCard 
                    activeId={ id }
                    slug={ slug } 
                    lesson={ lesson }/>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="subscribe">
          <h2>{ course.title }</h2>
          <p>{ course.details }</p>
          <Link to="#" className="btn btn-primary">{ course.price } $</Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   );
}
 
export default Course;