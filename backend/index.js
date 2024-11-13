import express from 'express'
import connection from './database/db.js'
import router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()


app.use(cors())
app.use(express.json())

app.use(bodyParser.json())

app.use('/',router);

const PORT = 8000



connection();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
