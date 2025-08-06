
let displayWatch=document.getElementById("display-stopWatch")
let timerBtn=document.getElementById("timer-btn")
let restBtn=document.getElementById("reset-btn")
let lapBtn=document.getElementById("lap-btn")
let lapDisplay=document.getElementById("lap-display")
let elapsedTime=0
let timerId=null
let lapNumber=0

let isRunning=false

timerId=setInterval(()=>{
    // console.log(elaspedTime)
    
    elapsedTime+=10
    //  displayWatch.innerText = formatTime(elapsedTime)
},10)


function formatTime(elapsedTime){
    
    let minutes=String(Math.floor(elapsedTime/60000)).padStart(2, '0')    //1 min=60000
    let seconds=String(Math.floor((elapsedTime % 60000)/1000)).padStart(2, '0')
    let milliseconds=String(Math.floor((elapsedTime % 1000)/10)).padStart(2, '0')

    return `${minutes}:${seconds}:${milliseconds}`
}

function startTimer(){
    isRunning=true
    timerId=setInterval(()=>{
    // console.log(elaspedTime)
    
    elapsedTime+=10
     displayWatch.textContent = formatTime(elapsedTime)
     
},10)

}

function stopTimer()
{
    isRunning=false
    clearInterval(timerId)
}


// timerBtn.addEventListener("click",()=>{
//     // startTimer()
//     // startBtn.textContent="Stop"
//     if (timerBtn.textContent==="Start")
//     {
//         startTimer()
//         timerBtn.textContent="Stop"
//     }
//     else if (timerBtn.textContent==="Stop")
//     {
//         stopTimer()
//          timerBtn.textContent="Start"
//     }
// })

timerBtn.addEventListener("click",()=>{
    if(isRunning===false)
    {
        startTimer()
         timerBtn.textContent="⏸Stop"
    }
    else
    {
        stopTimer()
        timerBtn.textContent="◁ Start"
    }
})

restBtn.addEventListener("click",()=>{
     stopTimer()
      elapsedTime=0
     
     timerBtn.textContent="◁ Start"
     displayWatch.textContent="00:00:00"
     lapNumber=0
     lapDisplay.innerHTML=""

})

lapBtn.addEventListener("click",()=>{
    if(isRunning===true)
    { 
        lapNumber++
        let currentTimer=formatTime(elapsedTime)
        let li=document.createElement("li")
        li.classList.add("list-group-item")
        li.textContent=`Lap ${lapNumber}  :  ${currentTimer}`
        lapDisplay.appendChild(li)
        // lapDisplay.textContent+=`Lap ${lapNumber}:${currentTimer}` 


    }
})




