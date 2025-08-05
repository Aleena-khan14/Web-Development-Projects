const generateBtn=document.getElementById("generate-btn")
const outputDisplay=document.getElementById("output")

const loader = document.getElementById("loader");

generateBtn.addEventListener("click", function() {
    // outputDisplay.textContent=`Updating Quote`
    generateBtn.disabled = true;
    getQuote()

    
})

async function getQuote() {
     loader.classList.remove("d-none");
     outputDisplay.textContent = "";

    try{
    const api_url = 'https://api.api-ninjas.com/v1/quotes'
    const response= await fetch(api_url,{
        method:'GET',
        headers:{
            'X-Api-Key': 'O8l6LR1JKF/lPr2wFxPQ6A==dvm153Nc110Pfzoi'
        }
    })
    if (!response.status)
    {
       throw new Error("Something wrong with API")
    }
    const data= await response.json()
    const [{quote,author,category}]=data
    console.log(quote)
    outputDisplay.textContent=`"${quote}" - ${author}`


    } catch(err)
    {
        console.log(err)
    }
    finally {
    loader.classList.add("d-none")
    generateBtn.disabled = false;
    }
    
}