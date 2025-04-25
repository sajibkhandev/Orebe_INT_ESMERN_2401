import React from 'react'

const AboutBlog = ({title,text}) => {
  return (
    <div>
        <h4 className='text-secondary text-[25px] font-dm font-bold'>{title}</h4>
        <p className='text-primary text-base font-dm font-normal w-[506px] pt-3'>{text}</p>

      </div>
  )
}

export default AboutBlog