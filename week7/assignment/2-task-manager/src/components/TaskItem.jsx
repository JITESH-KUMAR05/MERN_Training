import React from 'react'

const TaskItem = ({title,index,priority,completed,updateStatus}) => {
  return (
    <div className='bg-gray-400 w-76 rounded-2xl p-5 shadow-2xl shadow-gray-400 '>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-lg font-semibold'>priority: {priority}</p>
        
        <span className='flex gap-3'>Status: 
            {
            completed ? <p className='font-semibold'>Completed</p> : <p className='font-semibold' >ongoing</p>
            }
        </span>
        {
            completed ? "" : <button onClick={()=> updateStatus(index)} className='bg-blue-500 px-4 py-2 rounded-2xl my-2'>Mark As Complete</button>
        }
    </div>
  )
}

export default TaskItem
