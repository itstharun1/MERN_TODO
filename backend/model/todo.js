import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:String,
    },
    userId:{
        type:String,
    }
})

const Todo=mongoose.model('todo',todoSchema);
export default Todo