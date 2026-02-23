import React from 'react'
const Product = (props) => {
  return (
    <div className='w-62 p-5 rounded-2xl bg-amber-100'>  

        <img className='w-[90%] m-auto rounded-3xl' src={props.image} alt="" />

        <div className='font-bold flex justify-between p-1'>
            <h2 >{props.name}</h2>
            <h3>{props.brand}</h3>
        </div>
        <p className='text-gray-400 p-1'>{props.description}</p>
        <p className='font-semibold'>₹{props.price}</p>
      
    </div>
  )
}

export default Product
