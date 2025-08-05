// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let calculation=document.getElementById("sum-el")
// function add()
// {
//     let result=num1+num2
//    calculation.textContent+="Sum: "+result
    
// }
// function subtract()
// {
//     let result=num1-num2
//      calculation.textContent="Subtract: "+result
    
// }
// function multiply()
// {
//     let result=num1*num2
//      calculation.textContent="Multiply: "+result
    
// }
// function divide()
// {
//     let result=num1/num2
//      calculation.textContent="Divide: "+result
    
// }



let divEl=document.querySelector("#container")
const imgs = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

function renderImages()

{  
    let imagesDOM=""
        for (let i=0;i<imgs.length;i++)
        {
          imagesDOM+=`<img alt="Employee in company" class="team-img" src="${imgs[i]}">`
        }
    
        divEl.innerHTML=imagesDOM
}
renderImages()