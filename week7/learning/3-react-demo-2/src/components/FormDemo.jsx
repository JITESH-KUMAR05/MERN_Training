import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo = () => {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (obj) => {
        console.log(obj);
    }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input type="text" {...register("username", {required:true, minLength:3})} placeholder='username' />
            {
                errors.username?.type==="required" && <p className='text-red-600'>Username is required</p>
            }
            {
                errors.username?.type==="minLength" && <p className='text-red-600'>min length shd be 3</p>
            }
        </div>
        <div>
            <input type="email" {...register("email")} placeholder='email' />

            {
                errors.email?.type==="required" && <p className='text-red-600'>min length shd be 3</p>
            }
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default FormDemo
