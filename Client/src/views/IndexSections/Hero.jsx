import { useState } from 'react';
import arrow from '../../assets/arrow_light.svg'
import SliderCard from '../components/SliderCard';

const Hero = () => {
  const sliderContents = [
    {
      id: 1,
      title: "Unlock the power of your people", 
      description: "PoLearn Business is trusted by 12.5K+ companies around the world", 
      link: "Request a demo",
      url:"#",
      imagePath: "slide_1.jpg"
    },
    {
      id: 2,
      title: "Learning that gets you", 
      description: "Skills for your present (and your future). Get started with us", 
      imagePath: "slide_3.jpg"
    },
    {
      id: 3,
      title: "Unlock the power of your people", 
      description: "PoLearn Business is trusted by 12.5K+ companies around the world", 
      link: "Request a demo",
      url:"#",
      imagePath: "slide_2.jpg"
    }
  ]
  const [index, setIndex] = useState(0)
  const [slide1Class, setSlide1Class ] = useState("slide-content active")
  const [slide2Class, setSlide2Class ] = useState("slide-content")
  const [slideWrapperClass, setSlideWrapperClass ] = useState("slider-bg-wrapper")
  const [slide1, setSlide1] = useState(sliderContents[0])
  const [slide2, setSlide2] = useState(sliderContents[1])
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isLastSlide, setIsLastSlide] = useState(false)

  // console.log(slides)
  const setActive = (id) => { 
    if(id === 1){
      setSlide2Class("slide-content")
      setTimeout(() => {
        setSlide1Class("slide-content active")
      }, 500)
    } else {
      setSlide1Class("slide-content")
      setTimeout(() => {
        setSlide2Class("slide-content active")
      }, 500)
    }
  }

  const setWrapperActive = (id) => {
    setSlideWrapperClass(`slider-bg-wrapper active-${ id }`)
  }

  const slide = (e) => {
    let sender = e.target
    switch (sender.id) {
      case 'right-arrow':
        moveRight()
        break
      case 'left-arrow':
        moveLeft()
        break
      default:
        break;
    }
  }

  const moveLeft = () => {  
    
    if(index > 0){
      if(index % 2 === 0){
        setSlide2(sliderContents[index - 1])
        setActive(2)
      }
      else{
        setSlide1(sliderContents[index - 1])
        setActive(1)
      }
      setWrapperActive(index - 1)
      setIndex(prev => {
        const nw = prev - 1
        setIsLastSlide(false)
        if(nw === 0){
          setIsFirstSlide(true)
        }
        else{
          setIsFirstSlide(false)
        }
        return nw
      })
    }
  }

  const moveRight = () => { 
    if(index < sliderContents.length - 1){
      if(index % 2 === 0){
        setSlide2(sliderContents[index + 1])
        setActive(2)
      }
      else{
        setSlide1(sliderContents[index + 1])
        setActive(1)
      }
      setWrapperActive(index + 1)
      setIndex(prev => {
        const nw = prev + 1
        setIsFirstSlide(false)
        if(nw === sliderContents.length - 1){
          setIsLastSlide(true)
        }
        else{
          setIsLastSlide(false)
        }
        return nw
      })
    }
  }

  return ( 
    <>
      <section className="hero">
        <div className="container">
          <div className="slider">
            <div className={ slideWrapperClass }>
              {
                sliderContents.map((s, i) => (
                  <div
                    style={{
                      background: `url(${s.imagePath})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                    key={ s.id } className={ "slide-bg slide-bg-" + i }>
                  </div>
                ))
              }
            </div>
            <div className="slider-cards">
              <SliderCard slide={ slide1 } className={ slide1Class }/>
              <SliderCard slide={ slide2 } className={ slide2Class }/>
            </div>
          </div>
          <div className="filter"></div>
          { !isFirstSlide && <button className="left" id="left-arrow" onClick={ slide }><img id="left-arrow" src={ arrow } alt="" /></button> }
          { !isLastSlide && <button className="right" id="right-arrow" onClick={ slide }><img id="right-arrow" src={ arrow } alt="" /></button> }
        </div>
      </section>
    </>
  );
}

export default Hero;
