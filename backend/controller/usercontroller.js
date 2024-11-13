import User from "../model/user.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import Todo from "../model/todo.js";

export const signUpUser =async(request,response)=>{
    try{
        const {name,email,password}=request.body
        const userExist=await User.findOne({email})
        if(userExist){
            return response.status(400).json({message:"User already exist"})
            
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({
            name,
            email,
            password:hashedPassword
            })
            const SECRET_KEY = 'tharun'
                const token=jwt.sign({id:user._id},SECRET_KEY,{expiresIn:'1d'})
            
                const userId = (user._id);   
            const userSave=await user.save()
            response.status(201).json({message:"User created successfully",token,name,userId})
            console.log('user created')
            }
                catch(error){
                    response.status(500).json({message:error.message})
                    }


}

export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body
        const user = await User.findOne({ email})
        if (!user) {
            return response.status(400).json({ message: "Invalid email" })
            }
            const isValidPassword = await bcrypt.compare(password, user.password)
            if (!isValidPassword) {
                return response.status(400).json({ message: "Invalid  password" })
                }
                const SECRET_KEY = 'tharun'
                const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1d'
                    })
                    const name = (user.name);
                    const userId = (user._id);
                    response.status(200).json({ message: "Login successfully", token,name,userId })
                    console.log('login successful')
                    
                    }
                    catch (error) {
                        response.status(500).json({ message: error.message })
                        }
}



export const createTodo =async(request,response)=>{
                        try{
                            const { title,status1,userId}=request.body
                          
                           
                            const todo = new Todo({
                                title,
                                status1,
                                userId
                                })
                                const userSave=await todo.save()
                                response.status(201).json({message:"Todo created successfully",userId})
                                
                                console.log('todo created')
                                }
                                    catch(error){
                                        response.status(500).json({message:error.message})
                                        }
                    
                    
                    }


export const allTodos = async (request, response) => {
                        try {
                            const {userId}=request.body
                            const todo = await Todo.find({userId:userId})
                            response.status(200).json( todo )
                            
                           
                            }
                            catch (error) {
                                response.status(500).json({ message: error.message })
                                }
                            }


// delete item
export const deleteTodo1 = async (request, response) => {
    try {
        const { id } = request.params;
        const todo = await Todo.findByIdAndDelete(id)
        response.status(200).json({ message: "Todo deleted successfully" })
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
            }
//update item only title name with id
export const updateTodo = async (request, response) => {
    try {
        const { id } = request.params;
        const { title } = request.body;
        const todo = await Todo.findByIdAndUpdate(id, { title }, { new: true })
        response.status(200).json({ message: "Todo updated successfully" })
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
        

}
//get user profile data useing userId
export const getUserProfile = async (request, response) => {
    try {
        const { userId } = request.body;
        const user = await User.findById(userId)
        response.status(200).json(user)
    }
    catch (error) {
        response.status(500).json({ message: error.message })
        }
    }
//update user profile with name and email 
export const updateUserProfile = async (request, response) => {
    try {
        const { userId } = request.params;
        const { name, email } = request.body;
        const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true })
        response.status(200).json({ message: "User profile updated successfully" })
        }
        catch (error) {
            response.status(500).json({ message: error.message })
            }
        }
