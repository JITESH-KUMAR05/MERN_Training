import React from 'react'

const TaskList = ({tasks}) => {
    if(tasks.length === 0){
        return (
            <div>
                <h2 className='text-3xl'>List of tasks</h2>
                <p className='text-red-600 text-3xl'>Empty</p>
            </div>
        )
    }
  return (
    <div>
      <h2>List of tasks</h2>
      {
        tasks.map((task,index) => {
            return(
                <div key={index}>
                    <h1 className='text-2xl' >{task.title}</h1>
                 </div>
            )
        })
      }
    </div>
  )
}

export default TaskList
