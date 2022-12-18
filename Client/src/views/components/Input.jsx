import { useState } from "react";

const Input = ({ id, placeholder, setValue, type }) => {
  const [className, setClassName] = useState('input-wrapper')
  const entry = document.getElementById(id)
  const handleClick = (e) => {
    if (className === 'input-wrapper focus'){
      return
    }
    //console.log(entry)
    entry.focus()
    setClassName("input-wrapper focus")
  }

  const handleBlur = (e) => {
    setClassName("input-wrapper")
  }

  return ( 
    <>
      <div className={ className }>
        <div className="click-handler" onClick={ handleClick }></div>
        <label htmlFor={ id } onBlur={ handleBlur } className="placeholder">{ placeholder }</label>
        <input id={ id } type={ type } onChange={(e) => (setValue(e.target.value))} />
      </div>
    </>
  );
}

export default Input;