import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-black py-4 px-14 text-white text-sm font-dm font-bold hover:bg-transparent hover:text-black border border-transparent hover:border-black duration-300 ${className}`}>{text}</button>
  )
}

export default Button