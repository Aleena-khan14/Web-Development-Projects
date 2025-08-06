let birthdateEl=document.querySelector("label[for='dateofBirth'")
console.log(birthdateEl)

let calculateAgeEl=document.querySelector("#calculate-age")
let ageparaEl=document.querySelector("#age-para")
calculateAgeEl.addEventListener("click",function()
{
    let birthdateEl=document.querySelector("#dateofBirth").valueAsDate
    let today=new Date()
   
    let ageYears=today.getFullYear()-birthdateEl.getFullYear()
    let previousMonthDays=new Date(today.getFullYear(),today.getMonth(),0).getDate()
    let ageMonth=today.getMonth() - birthdateEl.getMonth();
    let ageDays= today.getDate() - birthdateEl.getDate();
   


     if (!birthdateEl) {
      ageparaEl.textContent = "Please select your birth date."
        return;
    }

    if (birthdateEl > today) {
        ageparaEl.textContent = "You aren't born yet!";
        return;
  }
    //check if your days
    if (ageDays<0)
    {
        ageMonth--
        ageDays=previousMonthDays - birthdateEl.getDate() + today.getDate();
    }
    
    if (ageMonth<0)
    {
        ageYears--
        ageMonth+=12
    }
    
    ageparaEl.textContent=`You are ${ageYears} years, ${ageMonth} months, ${ageDays} days old` 



   
    

})