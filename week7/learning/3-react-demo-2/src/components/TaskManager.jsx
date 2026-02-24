import { useState } from "react";
import AddTasks from "./AddTasks"
import TaskCount from "./TaskCount"
import TaskList from "./TaskList"

const TaskManager = () => {

    const [tasks, settasks] = useState([]);

    // add new tasks
    const addNewTask = (task) =>{
        settasks([...tasks,task]);
    }

  return (
    <div>
      <h1 className="text-7xl">Task Manager</h1>

      <div className="flex justify-around ">
        <AddTasks addNewTask={addNewTask} />
        <TaskList tasks={tasks} />
        <TaskCount tasks={tasks} />
      </div>
    </div>
  )
}

export default TaskManager
