flatpickr("#dateofBirth", {
   maxDate: "today",
   dateFormat: "Y-m-d",
    allowInput: true,
    defaultDate: null,

});






let calculateAgeEl=document.querySelector("#calculate-age")
let ageparaEl=document.querySelector("#age-para")

calculateAgeEl.addEventListener("click",function()
{
     let birthdateInput = document.querySelector("#dateofBirth").value
    //  let birthdateEl = birthdateInput.value
     if (!birthdateInput) {
      ageparaEl.textContent = "Please select your birth date."
        return;
    }
    const birthdateEl = new Date(birthdateInput);
    const today=new Date()

    if (birthdateEl > today) {
        ageparaEl.textContent = "You aren't born yet!";
        return;
  }
   
    let ageYears=today.getFullYear()-birthdateEl.getFullYear()
    let previousMonthDays=new Date(today.getFullYear(),today.getMonth(),0).getDate()
    let ageMonth=today.getMonth() - birthdateEl.getMonth();
    let ageDays= today.getDate() - birthdateEl.getDate();
   


    

    
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