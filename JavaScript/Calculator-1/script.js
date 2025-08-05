let displayEl=document.querySelector(".display-area")
console.log(displayEl)
let currentInput=""

let buttonsEl=document.querySelectorAll(".button-grid button")

buttonsEl.forEach((btn)=>{
   if (btn.textContent=== "+" )
   {
    btn.style.backgroundColor="green"
    btn.style.color="white"
   }
   if (btn.textContent=== "-")
    {
      btn.style.backgroundColor="rgb(175, 81, 112)"
      btn.style.color="white"
    }

    if (btn.textContent=== "×")
    {
      btn.style.backgroundColor="orange"
      btn.style.color="white"
    }

    if (btn.textContent=== "÷")
    {
      btn.style.backgroundColor="red"
      btn.style.color="white"
    }
    if (btn.textContent=== "C")
    {
      btn.style.backgroundColor="black"
      btn.style.color="white"
    }

   
      
})
console.log(buttonsEl)
buttonsEl.forEach(myFunction)
function myFunction(btn)
{
    btn.addEventListener("click",function(){
      console.log(btn.textContent)

       if(btn.textContent=== "C")
      {
        currentInput=""
        displayEl.textContent="0"
        return
      }


      if( btn.textContent=== "=")
      {
        console.log("Evaluating:", currentInput)
        let expression=currentInput.replace(/÷/g,"/").replace(/×/g,"*")
        let result=eval(expression)
        console.log(result)
        currentInput=result
        displayEl.textContent=result
        return
      }

      currentInput+=btn.textContent
      displayEl.textContent=currentInput

     

      
    })
}



