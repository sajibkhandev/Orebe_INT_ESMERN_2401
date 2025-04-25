import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-f39 text-secodary font-dm font-bold ${className}`}>{text}</h2>
  )
}

export default Heading