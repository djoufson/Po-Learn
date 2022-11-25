import { Link } from "react-router-dom";

const CardFormation = ({ formation, url }) => {
  return ( 
    <>
      <div className="card-formation">
        <Link to={ url }>
          <div className="img" ></div>
        </Link>
        <Link to={ url }><h3 className="card-title">{ formation.title }</h3></Link>
        <span className="card-author">{ formation.author }</span>
        <p className="card-price">${ formation.price }</p>

        <div className="master-details">
          <h3 className="details-title">{ formation.title }</h3>
          <p className="updated">Updated <strong>{ formation.updated }</strong></p>
          <p className="details-content">{ formation.details }</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </>
   );
}
 
export default CardFormation;