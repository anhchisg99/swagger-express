import express from 'express'
const app = express()
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import userRouter from './routes/userRouter.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const port = 3003

//mongoose
mongoose.connect('mongodb://localhost/api-docs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



const option = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:"Library API",
            version:"1.0.0",
            description:"A simple"
        },
        servers:[
            {
                url:"http://localhost:3003"
            }
        ],
    },
    apis:["./routes/*.js"]
}

const specs = swaggerJsDoc(option)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(specs))
app.get('/',(req,res)=>{
    res.send("success")
})
app.get('/test',(req,res)=>{
    res.send("success")
})
app.use('/users',userRouter)
app.listen(port,()=>{console.log(`listen in ${port}`)})