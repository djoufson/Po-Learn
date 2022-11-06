import arrow from '../../assets/arrow_light.svg'

const Hero = () => {
  const slides = [ 1, 2, 3 ]
  return ( 
    <>
      <div className="hero">
        <div className="slider">
          { slides.map(s => (
            <div className="slide" key={s}></div>
            )) }
        </div>
        <button className="left"><img src={ arrow } alt="" /></button>
        <button className="right"><img src={ arrow } alt="" /></button>
      </div>
    </>
  );
}
 
export default Hero;
