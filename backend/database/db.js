import mongoose from "mongoose";

const connection = async()=>{
    const URL = "mongodb+srv://itstharun01:R7dAIqj0jACKTjOY@cluster0.7lfl1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err.message);
    }
    
}

export default connection;