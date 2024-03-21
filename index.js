const schema = require("./schema")
const conn = require("./conn")
const express = require("express")
const app = express()
app.use(express.json())
app.listen(3500, ()=>{
    console.log("server Enabled")
})
app.get("/courseEntry", (req,res)=>{
    res.sendFile(__dirname+"/index.html")

})

app.get("/getCourseContent.js", (req,res)=>{
    res.sendFile(__dirname+"/getCourseContent.js")
})
app.get("/TaskEntry", (req,res)=>{
    res.sendFile(__dirname+"/index1.html")

})
app.get("/getTaskContent.js", (req,res)=>{
    res.sendFile(__dirname+"/getTaskContent.js")
})
app.post("/newCourse", (req,res)=>{
    const course_mode = schema.course_model
    console.log(req.body)
    try{
    course_mode.create(req.body).then((data)=>console.log(data))
    res.send("data")
    }
    catch(e){
        console.log("error",e)
    }
})
app.post("/newTask", (req,res)=>{
    const task_mode = schema.task_model
    console.log(req.body)
    try{
    task_mode.create(req.body).then((data)=>{
        console.log(data)
        res.send(data)
    })
    }
    catch(e){
        console.log("error",e)
    }
})
app.get("/getAPI",async (req,res)=>{
    
    try{
        const course_mode = await schema.course_model
        const json_data = await course_mode.find()
        res.send(json_data)
    }
    catch(e){
        console.log("error",e)
        res.send(e)
    }
})
app.get("/courses/:courseId/tasks", async (req,res)=>{
    try{
        const task_mode = schema.task_model 
        const data = await task_mode.find({courseId:req.params.courseId})   
        res.send(data)
    }
    catch(e){
        console.log("error",e)
        res.send(e)
    }
})