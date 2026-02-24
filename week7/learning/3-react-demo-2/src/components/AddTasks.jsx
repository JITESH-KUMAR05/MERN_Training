import React from "react";
import {useForm} from "react-hook-form"

const AddTasks = ({addNewTask}) => {
    // console.log(addNewTask)
    let {register, handleSubmit,formState:{errors}} = useForm();
    const submitHandler = (data) => {
        addNewTask(data)
    }
  return (
    <div>
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <input type="text" {...register("title", {required:true})} placeholder="title" className="border-2 " />
            {
                errors.title?.type === "required" && <p className="text-red-600">title is requrired</p>
            }
        </div>
        <button className="bg-amber-300 px-3 py-3 mt-3" type="submit">add task</button>
      </form>
    </div>
  );
};

export default AddTasks;
