import {create} from "zustand"
import axios from "axios"

export const useAuth = create((set) => ({
    currentUser:null,
    loading:false,
    isAuthenticated:false,
    error:null,
    login: async(userCredWithRole) => {
        const {role,...userCredObj} = userCredWithRole;
        try{   

            // set loading to true
            set({loading:true,error:null})

            let res = await axios.post("http://localhost:4000/common-api/login",userCredObj, {withCredentials:true});
            // console.log(res);

            set({
                loading:false,
                error:null,
                isAuthenticated:true,
                currentUser:res.data.payload
            })
            

        }catch(err){
            console.log(err);
            set({
                loading:false,
                error:err.response?.data?.error || "Login failed",
                isAuthenticated:false,
                currentUser:null,
            })
        }
    },
    logout: async()=> {
        try {
            set({loading:true,error:null})
            // make api call
            let res = await axios.get("http://localhost:4000/common-api/logout",{withCredentials:true})
            // update the state
            set({currentUser:null,loading:false,isAuthenticated:false})
        } catch (err) {
            console.log(err);
            set({
                loading:false,
                error:err.response?.data?.error || "Login failed",
                isAuthenticated:false,
                currentUser:null,
            })
        }
    }
}))