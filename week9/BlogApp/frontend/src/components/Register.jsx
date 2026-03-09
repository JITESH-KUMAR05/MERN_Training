import React from 'react'
import { useForm } from "react-hook-form"

const Register = () => {
    const {register, handleSubmit, formState:{errors}}  = useForm();
    // need to make an api call to the backend register api
    const submitHandler = (data) => {
        console.log(data)
    }
  return (
    <div className='p-20 text-center'>
        <h1 className='text-5xl'>Register</h1>
      <form onSubmit={handleSubmit(submitHandler)} className='bg-gray-200 md:w-170 shadow rounded-2xl m-auto p-10 mt-5'>
        <div className='flex w-full m-auto gap-3 justify-center items-center'>
            <h2 className='font-medium'>Select Role</h2>
            <div className=''>
                <input type="radio" {...register("role",{required:true})} value={"USER"} id="" />
                <label htmlFor="role">User</label>
            </div>
            <div>
                <input type="radio" {...register("role",{required:true})} name="role" value={"AUTHOR"} id="" />
                <label htmlFor="role">Author</label>
            </div>
            
        </div>
        {
                errors.role?.type === "required" && <p className='text-red-600'>Choosing role is required</p>
        }
        <div className='mt-2 w-full m-auto flex flex-col gap-3 justify-center  md:flex-row md:gap-1'>
            <input {...register("firstName",{required:true,minLength:3})} className='bg-gray-400 md:w-2/5 rounded-2xl px-2 md:p-2 text-center' type="text" placeholder='First Name' />
            <input className='bg-gray-400 md:w-2/5 rounded-2xl px-2 md:p-2 text-center' type="text" placeholder='Last Name' />
        </div>
        {
            errors.firstName?.type === "required" && <p className='text-red-600'>First name is required</p>
        }
        {
            errors.firstName?.type === "minLength" && <p className='text-red-600'>minimum length should be 3</p>
        }
        <div className='mt-2 flex flex-col gap-2 w-full  md:w-full m-auto justify-center '>
            <input {...register("email",{required:true})} className='bg-gray-400 w-full md:w-4/5 rounded-2xl md:p-2 m-auto px-2 text-center' type="email" placeholder='Email' />
            { 
                errors.email?.type === "required" && <p className='text-red-600'>email is required</p>
            }
            <input  {...register("password",{required:true,minLength:6,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/})} className='bg-gray-400 w-full md:w-4/5 rounded-2xl md:p-2 m-auto px-2 text-center' type="password" placeholder='Password' />
            {
                errors.password?.type === 'required' && <p className='text-red-600'>password is required</p>
            }
            {
                errors.password?.type === 'minLength' && <p className='text-red-600'>min length of password is 6</p>
            }
            {
                errors.password?.type === 'pattern' && <p className='text-red-600'>Password must contain uppercase, lowercase and number</p>
            }
            <input className='bg-gray-400 w-full md:w-4/5 rounded-2xl md:p-2 m-auto px-2 text-center' type="email" placeholder='Upload profile Image' />
        </div>

        <button className='bg-blue-400 px-3 py-1 mt-2 rounded-2xl font-medium cursor-pointer' type="submit">Register</button>

      </form>
    </div>
  )
}

export default Register
