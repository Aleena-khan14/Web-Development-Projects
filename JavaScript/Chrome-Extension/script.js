
// Create two variables:
// myLeads -> should be assigned to an empty array
let myLeads=[]
//local Storage always takes string(automatically converts integers into string)
//The keys and the values stored with localStorage are in the UTF-16 string format. As with objects, integer keys are automatically converted to strings.
//how to sort an array in locaStorage
//first converts it into string using stringfy()
//if we want to convert string into object:use parse

// inputEl -> should be assigned to the text input field
const inputEl=document.querySelector("#text-el")
const ulEl=document.querySelector("#ul-el")
const inputBtn=document.querySelector("#input-btn")
const tabBtn=document.querySelector("#tab-btn")

//Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage
// Log out the variable
let leadsFromLocalStorage=JSON.parse(localStorage.getItem(("myLeads")))

console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(Leads)
{   
    let listItems=""
    for (let i =0; i<Leads.length;i++)
     {
        // Let's try a different method!
        //1st method
        // listItems+="<li> <a target='_blank'href=' "+myLeads[i]+" '>"+myLeads[i]+"</a></liv>"//expression too big to undetstand
        //use of template string:use `(backtick) instead of ''
        //instead of +concatenation, we use javascript expression in template string using ${}
           listItems += `
                <li>
                    <a target='_blank' href=' ${Leads[i]}'> 
                     ${Leads[i]}
                    </a>
                </li>
           `
        


        
      
        // // create element
        // const li =document.createElement("li")
        //    // set text content
        // li.textContent=myLeads[i]
        //  // append to ul
        // ulEl.append(li)
     }


     ulEl.innerHTML=listItems
}











inputBtn.addEventListener("click",function(){

     console.log("Button clicked from addevent listener")
     myLeads.push(inputEl.value)
     inputEl.value=""
     localStorage.setItem("myLeads",JSON.stringify(myLeads))
     

     render(myLeads)
     console.log( localStorage.getItem("myLeads") )
     
     
})





let deleteEl=document.querySelector("#delete-btn")
deleteEl.addEventListener("click",function(){
   
    console.log("double clicked!")
    localStorage.clear()
    myLeads=[]
    render(myLeads)

}
)



tabBtn.addEventListener("click",function(){
    //Grab the URL of the current tab!
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
        {
              myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads",JSON.stringify(myLeads))
            render(myLeads)
        })

    

})





// let containerEl=document.querySelector("#container")
// console.log(containerEl)

// containerEl.innerHTML="<button onclick='Buy()'>Buy</button>"
// function Buy()
// {
//     containerEl.innerHTML+="<p>Thank you for buying!</p>"
// }


// const recipient = "James"
// const sender="Aleena"
// const email = `Hey ${recipient}!\nHow is it going?\nCheers ${sender}`

// console.log(email)


