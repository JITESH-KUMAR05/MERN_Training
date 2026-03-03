// create user schema with validations
import {Schema,model} from "mongoose"

const userSchema = new Schema({
    name:{
        type:String,
        minLength:[3,"name shold be of min 3 length"],
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email should be unique"]
    },
    phone:{
        type:Number
    },
    dateOfBirth:{
        type:Date,
        required:[true,"DOB is required"]
    },
    status:{ // for soft delete
        type:Boolean,
        default:true
    }

},{
    versionKey:false,
    timestamps:true,
    strict:"throw"
})


// create user model

export const UserModel = model("user",userSchema);
