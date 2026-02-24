import React from "react";
import {useForm} from "react-hook-form"
import {useState} from "react"

const Form = () => {

    const {register, handleSubmit, setError, formState: {errors}} = useForm();
    const [user, setuser] = useState([])
    const onSubmit = (data) =>{
        let dob = data.dob;
        // console.log(typeof(dob))
        let year = dob.substr(0,4)-'0';
        // console.log(typeof(year))
        if(year<2020){
            // console.log("cannot push this")
            setError("dob",{
                type:"manual",
                message:"the date not after 2020"
            })
            return;
        }
        let newUser = data;
        let modifiedUser = [...user];
        modifiedUser.push(newUser)
        setuser(modifiedUser)
    }
    const onSubmit2 = (data) =>{
        let dateObj = data.valueAsDate;
        console.log(dateObj)
    }
  return (
    
    <div className="w-full text-center">
      <h1>User Registration Form</h1>
      <form className="flex flex-col p-5 gap-3 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstname", {required:true, minLength:4,maxLength:6})} className="border-2 w-[60%] bg-lime-400 rounded-2xl" type="text" placeholder="Enter firstName" />
        {
            errors.firstname?.type === "required" && <p className="text-red-500">firstname is required</p>
        }
        {
            errors.firstname?.type === "minLength" && <p className="text-red-500">minimum length is 4</p>
        }
        {
            errors.firstname?.type === "maxLength" && <p className="text-red-500">maximum length is 6</p>
        }
        <input {...register("lastname",{required:true, minLength:4,maxLength:6})} className="border-2 w-[60%] bg-lime-400 rounded-2xl" type="text" placeholder="Enter LastName" />
        {
            errors.lastname?.type === "required" && <p className="text-red-500">firstname is required</p>
        }
        {
            errors.lastname?.type === "minLength" && <p className="text-red-500">minimum length is 4</p>
        }
        {
            errors.lastname?.type === "maxLength" && <p className="text-red-500">maximum length is 6</p>
        }
        <input {...register("email",{required:true})} className="border-2 w-[60%] bg-lime-400 rounded-2xl" type="email" placeholder="Enter Email" />
        {
            errors.email?.type === "required" && <p className="text-red-500">email is required</p>
        }
        <input {...register("dob",{required:true})} className="border-2 w-[60%] bg-lime-400 rounded-2xl" type="date" placeholder="Enter DOB" />
        {
            errors.dob?.type === "required" && <p className="text-red-500">dob is required</p>
        }
        {
            errors.dob?.type === "manual" && <p className="text-red-500">{errors.dob.message}</p>
        }
        <button className="bg-amber-400 w-[20%] py-3" type="submit">Add New User</button>
      </form>


      {/* <div>
        {
            user.map((obj) => {
                return(
                    <h1>firstname : {obj.firstname}, lastname: {obj.lastname}, email: {obj.email}, dob: {obj.dob} </h1>
                )
            })
        }
      </div> */}


      <table className="m-auto w-[80%] bg-pink-400 p-6">
        <thead className="">
            <tr className="">
                <th className="p-1">first name</th>
                <th className="p-1">last name</th>
                <th className="p-1">email</th>
                <th className="p-1">dob</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map((obj ,index) => {
                return(
                    <tr key={index} className="">
                        <td className="p-1">{obj.firstname}</td>
                        <td className="p-1">{obj.lastname}</td>
                        <td className="p-1">{obj.email}</td>
                        <td className="p-1">{obj.dob}</td>
                    </tr>
                )
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Form;
