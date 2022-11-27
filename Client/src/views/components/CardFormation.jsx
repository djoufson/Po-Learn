import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa"
import image from "./../../assets/slide_2.jpg"

const CardFormation = ({ formation, url, paht }) => {
  return ( 
    <>
      <div className="card-formation">
        <Link to={ url }>
          <img className="img" src={ paht } alt=""></img>
        </Link>
        <Link to={ url }><h3 className="card-title">{ formation.title }</h3></Link>
        <span className="card-author">{ formation.author }</span>
        <p className="card-price">${ formation.price }</p>

        <div className="master-details">
          <h3 className="details-title">{ formation.title }</h3>
          <p className="updated">Updated <strong>{ formation.updated }</strong></p>
          <p className="details-content">{ formation.details }</p>
          <div className="card-bottom">
            <button className="btn btn-light btn-rounded"><FaRegHeart/></button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default CardFormation;