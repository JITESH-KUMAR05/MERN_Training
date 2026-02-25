import React from 'react'
import {useForm} from "react-hook-form"

const Form = ({addTask}) => {
    let {register, handleSubmit, formState:{errors} }  = useForm();
    const onSubmit = (data) => {
        console.log(data)
        addTask(data)
    }
  return (
    <div className='bg-gray-300 w-[60%] m-auto p-5 mt-5 rounded-2xl md:flex md:flex-col'>
        <h1 className='text-center'>Add Task</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='p-4 flex  flex-col  items-center'>
            <div className='w-full flex flex-col items-center justify-center '>
                <input {...register("title",{required:true,minLength:3})} className='w-[50%] px-4 border-2 rounded-2xl py-2' type="text" placeholder='Enter the title' />
                {
                    errors.title?.type=="required" && <p className='text-red-600'>title is required</p>
                }
                {
                    errors.title?.type=="minLength" && <p className='text-red-600'>title should be of minLength 3</p>
                }
            </div>
            <div className='flex gap-5 mt-3 w-[50%]' >
                <h2 >Priority</h2>

                 <span><input type="radio" {...register("priority", {required:true})} value={"high"} id="" /> high </span>
                 <span><input type="radio" {...register("priority", {required:true})} value={"low"} id="" /> low</span>
                {
                    errors.priority?.type==="required" && <p className='text-red-600'>priority is required</p>
                }
            </div>
            <div className='flex gap-5 mt-3 w-[50%]' >
                
                 <span><input type="checkbox" {...register("completed")} id="" /> Completed</span>

            </div>
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}

export default Form
