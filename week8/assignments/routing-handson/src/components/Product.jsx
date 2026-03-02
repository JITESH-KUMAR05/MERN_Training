import React from 'react'
import {useLocation} from "react-router"

const Product = () => {
    const {state} = useLocation();
    // console.log(state?.product)
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center p-10  mt-14'>
        <div className='w-2/5'>
            <img src={state?.product?.image} className='w-96 ' alt="" />
        </div>
        <div className='w-3/5 p-10'>
            <h1 className='text-4xl  font-semibold'>{state?.product?.title}</h1>
            <p className='text-gray-700 my-4'>{state?.product?.description}</p>
            <h1 className='text-xl font-semibold'>💲{state?.product?.price}</h1>
            <h1 className='text-xl font-semibold bg-amber-500 w-fit p-1'>Category: {state?.product?.category}</h1>
        </div>

    </div>
  )
}

export default Product
