import React from 'react'

const Form = () => {
  return (
    <div className='w-full text-center'>
      <form action="">
        <label htmlFor="title">title: </label>
        <input className='border-2 bg-amber-100 rounded-3xl px-5 py-2 text-2xl' type="text" placeholder='title' />
      </form>
    </div>
  )
}

export default Form
