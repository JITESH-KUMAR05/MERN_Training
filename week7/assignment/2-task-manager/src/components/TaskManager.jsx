import React, { useState } from 'react'
import Form from './Form'
import TaskList from './TaskList'

const TaskManager = () => {
    const [tasks, setTasks] = useState([])
    const addTask = (obj) => {
        setTasks([...tasks,obj]);
    }
    
    const updateStatus = (id) => {
        setTasks(tasks.map((task,index) => {
            if(id===index){
                task.completed = !task.completed;
            }
            return task;
        }))
    }
  return (
    <div>
      <h1 className="text-4xl text-center text-violet-500">Task Manager</h1>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} updateStatus={updateStatus} />
    </div>
  )
}

export default TaskManager
