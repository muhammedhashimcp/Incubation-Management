const express=require('express')
const dotenv= require('dotenv').config()
const port=process.env.PORT || 5000
const config = require('./config/config')
const { errorHandler }=require('./middleware/errorMiddleware')
const app=express()

const morgan = require("morgan")
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/incubation',require('./routes/incubationRoutes'))
app.use(errorHandler)
app.listen(port,()=>console.log(`Server started on port ${port}`))
