const json1={}
function coursebtn(){
  const course = document.getElementById("course_name")
  const course_id = document.getElementById("course_id")
  const instructor1 = document.getElementById("instructor")
const start_date = document.getElementById("start_date")
const end_date= document.getElementById("end_date")
const description1 = document.getElementById("description")
    
    json1["id"] = course_id.value
    json1["courseName"]=course.value
    json1["instructor"]=instructor1.value
    json1["startDate"]=start_date.value
    json1["endDate"]=end_date.value
    json1["description"]=description1.value
    fetch("http://localhost:3500/newCourse", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(json1)
}).then((dat)=>dat.json()).then((data)=>console.log("dis",data))
}
console.log(json1)

