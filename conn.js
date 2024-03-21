

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/student_tasks").then(()=>console.log("connceted"))
.catch(()=>console.log("Not Connected"))


module.exports = mongoose