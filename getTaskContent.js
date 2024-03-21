fetch("http://localhost:3500/getAPI").then((data)=>data.json()).then((d)=>{
    console.log(d)
    const div = document.getElementById("course_dropDown")
    d.forEach(e=> {
        p = document.createElement('option')
        const id = e.id
        const course_name = e.courseName
        p.textContent=course_name
        p.setAttribute("value",id)
        div.appendChild(p)
    });
})
const json1={}
function taskbtn(){
  const task_id = document.getElementById("task_id")
  const course_id = document.getElementById("course_dropDown")
  const task_name = document.getElementById("task_name")
const description = document.getElementById("description")
const due_date= document.getElementById("due_date")
const status = document.getElementById("status")
console.log(course_id.value)
    json1["taskId"] = task_id.value
    json1["courseId"]=course_id.value
    json1["taskName"]=task_name.value
    json1["description"]=description.value
    json1["dueDate"]=due_date.value
    json1["status"]=status.value
    fetch("http://localhost:3500/newTask", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(json1)
}).then((dat)=>dat.json()).then((data)=>console.log("dis",data))
}
console.log(json1)

