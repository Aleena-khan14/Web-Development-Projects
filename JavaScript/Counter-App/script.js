// intialize the count as 0
let count=0
let var1=document.getElementById("count-el")
let saveEL=document.getElementById("save-el")
console.log(saveEL)
// listen for clicks on the increment button
function increment()
{
    count=count+1
    var1.innerHTML=count
    // console.log(count)
}
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// function decrement()
// {
//     count=count-1
//     var1.innerHTML=count
//     console.log(count)
// }

function save()
{
    let combineString=count+" - "
    saveEL.innerHTML+=combineString
    var1.textContent=0
    count=0
    console.log(count)

    
}


// let myGreetings=greeting+fullname
// console.log(myGreetings)

// let welcomeEl=document.getElementById("welcome-el")
// let fullname="Aleena Khan"
// let greeting="Hi, my name is "
// welcomeEl.innerHTML=greeting+fullname
// welcomeEl.innerHTML+="👋"