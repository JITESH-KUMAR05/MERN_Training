import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, updateStatus}) => {
    
  return (
    <div>
        <h1 className='text-center text-5xl p-3 m-2 font-extrabold'>All Tasks</h1>

        <div className='flex flex-wrap justify-center gap-4'>
            {
                tasks.map((task,index) => {
                    return (
                        <TaskItem key={index} title={task.title} index={index} priority={task.priority} completed={task.completed} updateStatus={updateStatus} />
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default TaskList
