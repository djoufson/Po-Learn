import { useState } from "react";

const Input = ({ id, placeholder, setValue, type }) => {
  const [className, setClassName] = useState('input-wrapper')
  const handleClick = (e) => {
    const entry = document.getElementById(id)
    entry.focus()
    if (className === 'input-wrapper focus'){
      return
    }
    //console.log(entry)
    setClassName("input-wrapper focus")
  }

  const handleChange = (e) => {
    const value = e.target.value
    if(value === ""){
      setClassName("input-wrapper")
      return
    }

    setClassName("input-wrapper focus")
    setValue(e.target.value)
  }
  const handleBlur = (e) => {
    const entry = document.getElementById(id)
    if(entry.value === "")
      setClassName("input-wrapper")
  }

  return ( 
    <>
      <div className={ className }>
        <div className="click-handler" onClick={ handleClick }></div>
        <label htmlFor={ id } className="placeholder">{ placeholder }</label>
        <input onBlur={ handleBlur } id={ id } type={ type } onChange={ (e) => handleChange(e) } />
      </div>
    </>
  );
}

export default Input;