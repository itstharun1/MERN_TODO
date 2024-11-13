import express from 'express';
import { signUpUser,loginUser ,createTodo,allTodos,deleteTodo1,updateTodo,getUserProfile,updateUserProfile} from '../controller/usercontroller.js';

const router = express.Router();
router.post('/signup', signUpUser);
router.post('/login',loginUser)
router.post('/todo',createTodo)
router.post('/alltodos',allTodos)
router.delete('/delete/:id',deleteTodo1)
router.put('/update/:id',updateTodo)
router.post('/userdata',getUserProfile)
router.put('/updatep/:id',updateUserProfile)



export default router