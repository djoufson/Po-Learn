import { Link } from "react-router-dom";

const DashNavigation = ({changeTab}) => {
  return ( 
    <>
      <div className="dashboard">
        <h1><Link to="/">Po Learn</Link></h1>
        <button className="btn btn-light" onClick={ () => changeTab(0) }>Uploads</button>
        <button className="btn btn-light" onClick={ () => changeTab(1) }>Downloads</button>
      </div>
    </>
   );
}

export default DashNavigation;