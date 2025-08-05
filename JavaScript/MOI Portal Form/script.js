let formEl=document.querySelector("#form-id")
let submitBtn=document.querySelector("#submit-btn")
console.log(formEl)
console.log(submitBtn)

// function getLabel(id)
// {
//     return formEl.querySelector(`label[for="${id}"]`).textContent
// }

//arrow funtion to get labels
const getLabel = (id)=> formEl.querySelector(`label[for=${id}]`)?.textContent

//arrow function to get values
const getValue=(id)=> formEl.querySelector(`${id}`)?.value

//taking label values
let flightTypeLabel=getLabel("flightype")
let travelCapacityLabel=getLabel("travelCapacity")
let cargoCapacityLabel=getLabel("cargoCapacity")
let medicalEvacuationLabel=getLabel("medicalEvacuation")
let travelRankLabel=getLabel("travelRank")
let accomodationLabel=getLabel("accomodation")
let waitingTimeLabel=getLabel("waitingTime")
let internetSpeedLabel=getLabel("internetSpeed")
let statusLabel=getLabel("status")
let commentsLabel=getLabel("comments")
let destinationLabel=getLabel("destination")
let priorityLabel=getLabel("priority")

formEl.addEventListener("submit",function(e)
{
   e.preventDefault(); // Prevent page reload

   // taking values of all fields
    let destinationTypeValue = getValue("#destination")
    let flightTypeValue = getValue("#flightype")
    let travelCapacityValue =getValue("#travelCapacity")
    let cargoCapacityValue=getValue("#cargoCapacity")
    let medicalEvacuationValue=getValue("#medicalEvacuation")
    let travelRankValue=getValue("#travelRank")
    let accomodationValue=getValue("#accomodation")
    let waitingTimeValue=getValue("#waitingTime")
    let internetSpeedValue=getValue("#internetSpeed")
    let statusValue=getValue("#status")
    let commentsValue=getValue("#comments")
    // let priorityValue=formEl.querySelector('input[name=priority]:checked').value
     let priorityValue=getValue('input[name=priority]:checked')

    
    let message=`
    ${destinationLabel} ${destinationTypeValue}

    ${flightTypeLabel} ${flightTypeValue}

    ${travelCapacityLabel} ${travelCapacityValue}

    ${cargoCapacityLabel} ${cargoCapacityValue}

    ${flightTypeLabel} ${medicalEvacuationValue}

    ${travelRankLabel} ${travelRankValue}

    ${accomodationLabel} ${accomodationValue}

    ${waitingTimeLabel} ${waitingTimeValue}

    ${internetSpeedLabel} ${internetSpeedValue}

    ${statusLabel} ${statusValue}

    ${commentsLabel} ${commentsValue}

    ${priorityLabel} ${priorityValue}

    `
     alert(message)
     formEl.reset()
    // if (flightTypeValue && travelCapacityValue) {
    //     alert(message);
    // } else {
    //     alert("Please select both flight type and travel capacity!");
    // }
})