import mongoose from "mongoose";

const Usersschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    address:{
        type:String,
    },



},
{
    timestamps:true
}
)

const Users = mongoose.model("users", Usersschema)
export default Users