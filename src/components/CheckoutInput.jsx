import React from 'react'

const CheckoutInput = ({labelText,inputplayText,type,labelClassName,inputClassName,id}) => {
  return (
    <>
    <label className={`text-base text-secondary font-dm font-bold ${labelClassName}`} htmlFor={id}>{labelText}<br />
          <input required={type} id={id} className={`w-[507px] py-[10px] mb-6 border-b border-[#F0F0F0] ${inputClassName}`} type="text" placeholder={inputplayText}/>
        </label>
    <br />
    </>
  )
}

export default CheckoutInput