const CardFormation = ({formation}) => {
  return ( 
    <>
      <div className="card-formation">
        <div className="img" ></div>
        <img src="" alt="" />
        <h3 className="card-title">{ formation.title }</h3>
        <span className="card-author">{ formation.author }</span>
        {/* <p className="stars">{ formation.stars }</p> */}
        {/* <p className="rates">{ formation.rates }</p> */}
        <p className="card-price">${ formation.price }</p>

        {/* Master details */}
        <div className="master-details">
          <h3 className="details-title">{ formation.title }</h3>
          <p className="updated">Updated <strong>{ formation.updated }</strong></p>
          <p className="details-content">{ formation.details }</p>
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </>
   );
}
 
export default CardFormation;