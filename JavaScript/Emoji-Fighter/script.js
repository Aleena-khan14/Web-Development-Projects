let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
   
    
    // When the user clicks on the "Pick Fighters" button, pick two random 
    
    function getFighter()
    {
     let randomIndex = Math.floor( Math.random() * fighters.length)
    return fighters[randomIndex]
     }
    let firstEmoji=getFighter()
    let secondEmoji=getFighter()

    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    stageEl.textContent=firstEmoji+" vs "+ secondEmoji
})