const express=require('express');
const connectDB = require('./config/connectDB');
const authRouter=require('./routes/authRouter')
const app=express()


app.use(express.json())
app.use('/api/auth',authRouter)
require('dotenv').config({path:'./config/.env'})
connectDB()









const PORT=5000;
app.listen(PORT,err=>err?console.error(err):console.log(`server is running on port ${PORT}`))