import box from "./../../assets/box_dark.svg"
import nashdaq from "./../../assets/nasdaq_dark.svg"
import volkswagen from "./../../assets/volkswagen_dark.svg"
import netapp from "./../../assets/netapp_dark.svg"
import eventbrite from "./../../assets/eventbrite_dark.svg"
import tcs from "./../../assets/tcs_dark.svg"


const Partners = () => {
  return ( 
    <>
      <section className="partners">
        <div className="container container-pdg">
          <div className="content">
            <h2 className="center">Trusted by over 12,500 great teams</h2>
            <p className="center">Leading companies use the same course to help employees keep their skills fresh.</p>
            <div className="partners-img">
              <img src={ nashdaq } alt="" />
              <img src={ volkswagen } alt="" />
              <img src={ box } alt="" />
              <img src={ netapp } alt="" />
              <img src={ eventbrite } alt="" />
              <img src={ tcs } alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;