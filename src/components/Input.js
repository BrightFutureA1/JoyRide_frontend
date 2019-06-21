import React from 'react'

const Input = props => {
  const {handleChange, name, placeholder, title, id, type, value} = props
    return (
      <>
        <label htmlFor={name}>{title}</label>
        <input 
          
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input