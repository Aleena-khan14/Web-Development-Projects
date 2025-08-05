let taskInput=document.querySelector("#finput")
console.log(taskInput)

let addBtn=document.querySelector("#add-btn")
console.log(addBtn)
let progressStats=document.querySelector(".progress-stats")
let progressFill=document.querySelector(".progress-fill")
let ulEl=document.querySelector("#ul-el")
console.log(localStorage.getItem("myList"))
 let taskObject={
                     text:taskInput.value,
                     completed:false
                    }   

let myList=JSON.parse(localStorage.getItem("myList")) || []
myList.forEach(function(taskObject) {
  renderTask(taskObject); // this shows it in the DOM
});
updateProgress()

ulEl.addEventListener("click",function(e)
    {
        //e is event on which it is clicked,targets give you the exact icon over here
        //closest() gives you parent (which over here is that specfic list) 
        //e.target.classList help you to add , find,remove class from element
        if(e.target.classList.contains("check-btn"))
        {
            console.log("Check button is her")
            // const taskItem= e.target.closest("li")
            // const taskText=taskItem.querySelector(".task-text")
            // const checkIcon=taskItem.querySelector(".check-btn")
            // // e.target.closest("li").querySelector(".task-text").classList.toggle("completed")
            //   taskText.classList.toggle("completed")
            //   checkIcon.classList.toggle("completed")
           
            let tasktext=e.target.closest("li").querySelector(".task-text").textContent
            let index=myList.findIndex(function(taskObject)
            {
                    return taskObject.text===tasktext
            })
            
            myList[index].completed=!myList[index].completed
            e.target.classList.toggle("completed");
e.target.closest("li").querySelector(".task-text").classList.toggle("completed");
            
            
            localStorage.setItem("myList",JSON.stringify(myList))
            updateProgress()

        }
        if(e.target.classList.contains("delete-btn"))
        {
            e.target.classList.add("active-delete")
            


            setTimeout(()=>{
            let tasktext=e.target.closest("li").querySelector(".task-text").textContent
             let index=myList.findIndex(function(taskObject)
            {
                    return taskObject.text===tasktext
            })
            myList.splice(index,1)
             localStorage.setItem("myList",JSON.stringify(myList))
            e.target.closest("li").remove()
            updateProgress()
        },200)
        }
    })

addBtn.addEventListener("click",function()
{
   
     let inputValue=taskInput.value.trim()
    //check if taskInput.value is empty or not
    if (inputValue==="") return
    
    //create an object
     let taskObject={
                     text:inputValue,
                     completed:false
                    }   
     //push it into array
      myList.push(taskObject)
      localStorage.setItem("myList",JSON.stringify(myList))
      renderTask(taskObject)
      updateProgress()
      taskInput.value=""
})


function renderTask(obj)
{
    //Create elements manually using createElement
    let li=document.createElement("li")
    let span=document.createElement("span")
    let checkIcon=document.createElement("i")
    let deleteIcon=document.createElement("i")
    
    li.className="list-items"
    span.className="task-text"
    span.textContent=obj.text

    checkIcon.className="fa-solid fa-square-check check-btn"
    deleteIcon.className="fa-solid fa-trash delete-btn "
    
    if (obj.completed)
    {
        
        checkIcon.classList.add("completed")
        span.classList.add("completed")
    }
    let leftGroup = document.createElement("div");
    leftGroup.appendChild(checkIcon);
    leftGroup.appendChild(span);
    
    li.appendChild(leftGroup)
   
    li.append(deleteIcon)

    ulEl.appendChild(li)
    updateProgress()
}


function updateProgress()
{

    let countTask=myList.length
    console.log(countTask)
    let countCompleted=myList.filter(function(taskObject)
    {
        return taskObject.completed===true
    }).length
     console.log(countCompleted)
    let percent=(countCompleted/countTask)*100
    progressFill.style.width=percent+"%"

     progressStats.textContent=`${countCompleted} / ${countTask}`
}
 