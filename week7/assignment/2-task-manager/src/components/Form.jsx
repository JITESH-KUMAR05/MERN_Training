import React from 'react'

const Form = () => {
  return (
    <div className='w-[60%] m-auto text-center text-2xl rounded-2xl bg-amber-500 p-10'>
      <form action="">
        <div>
            <label className='' htmlFor="title">title: </label>
            <input className='border-2 bg-amber-100 rounded-3xl px-5 py-1 text-1xl' type="text" placeholder='title' />
        </div>
        
      </form>
    </div>
  )
}

export default Form
