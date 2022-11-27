const BackToTop = ({ element = window } ) => {
  element.onscroll = () => {
    const topButton = document.getElementById('back-to-top')
    const scroll = window.scrollY
    if(topButton){
      if(scroll > 600){
        topButton.classList.add('visible')
      }
      else{
        topButton.classList.remove('visible')
      }
    }
  }
  const backToTop = () => {
    element.scrollTo(0, 0)
  }
  return ( 
    <>
      <div className="container"
        style={{
          position: 'relative'
        }}>
        <button 
          id="back-to-top"
          className="btn btn-light"
          onClick={ backToTop }
        >Top</button>
      </div>
    </>
   );
}
 
export default BackToTop;