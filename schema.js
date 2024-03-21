

const mongoose = require("./conn")
const course_schema = new mongoose.Schema(
    {
        id: Number,
        courseName: String,
        instructor: String,
        startDate: String,
        endDate: String,
        description: String
    }
)
const course_model = mongoose.model("courses_infos",course_schema)
const task_schema = new mongoose.Schema(
    {
        taskId: Number,
      courseId: Number,
      taskName: String,
      description: String,
      dueDate: String,
      status: String
    }
)
const task_model = mongoose.model("tasks", task_schema)

module.exports={course_model, task_model}