import { Link } from "react-router-dom";

const SliderCard = ({ slide, className }) => {
  const hasLink = slide.url != null && 
    slide.url != "" && 
    slide.link != null && 
    slide.link != ""
  return ( 
    <>
      <div className={ className }>
        <h1>{ slide.title }</h1>
        <p>{ slide.description }</p>

        { hasLink &&
          
        <Link 
          className="btn btn-primary" 
          to={ slide.url }>
          { slide.link }
        </Link>
        }
      </div>
    </>
   );
}

export default SliderCard;