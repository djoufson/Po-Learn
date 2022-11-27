import { Link } from "react-router-dom";

const SliderCard = ({ slide, className }) => {
  
  return ( 
    <>
      <div className={ className }>
        <h1>{ slide.title }</h1>
        <p>{ slide.description }</p>
          
        <Link 
          className="btn btn-primary" 
          to={ slide.url }>
          { slide.link }
        </Link>
      </div>
    </>
   );
}

export default SliderCard;