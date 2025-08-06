//Step 1: Variable Storage
let simonSequence=[]
let userSequence=[]
let isGameOver = false;
let isClickable = false;  // Controls whether user can click the boxes
//adding event listeners to each of boxes
let colouredBoxes=document.querySelectorAll(".color-box")
let startButton=document.getElementById("start-btn")




//Step 2: define colors and Generate Random colors
const colors=['red','green','blue','yellow']
 const randomColor= ()=>{
    return colors[Math.floor(Math.random()*colors.length)]
        }
        
let level



colouredBoxes.forEach((colorbox)=>{
    colorbox.addEventListener("click",()=>{
      
        console.log("Color is "+colorbox.id)
         if (isGameOver || !isClickable) return;
        const clickedColor = colorbox.id;
         let clickSound=new Audio("sounds/select-sound.mp3")
            clickSound.play();
        console.log("You clicked:", clickedColor);
       
        userSequence.push(clickedColor);

        const currentIndex = userSequence.length - 1;

        if (clickedColor === simonSequence[currentIndex]) {
        
        //comparison of userSequence with simonSequence
        //First check...if the latest index of both are equal
        
               if (userSequence.length === simonSequence.length)
                {
                    console.log("user has completed the current sequence correctly")
                     let leveUpSound=new Audio("sounds/level-up.mp3")
                     leveUpSound.play();
                    level++
                    document.getElementById("level-display").textContent = `🏆 Level ${level}`;
                   
                    userSequence=[]
                    simonSequence.push(randomColor())
                   // Disable click while flashing
                    isClickable = false;
                    flashFullSequence();

                }  
                else
                    {
                        console.log("Waiting for user to complete SEquence")

                    } 
         }
         else
         {
            console.log("Game over")
            isGameOver = true;
            let wrongSound=new Audio("sounds/fail.mp3")
            wrongSound.play();
            document.body.classList.add("game-over");
            setTimeout(() => {
                document.body.classList.remove("game-over");
            }, 200);
            document.getElementById("level-display").textContent = "Game Over!!!!!!😕 " 
         }
    
})
})
function flashFullSequence() {
  let base_delay = 600;
  for (let i = 0; i < simonSequence.length; i++) {
    setTimeout(() => {
      let color_shown = simonSequence[i];
      let box = document.getElementById(color_shown);
      box.classList.add("flash");
      setTimeout(() => {
        box.classList.remove("flash");
      }, 300);
    }, base_delay * i);
  }
  
  // Enable user clicks after sequence is done showing
  setTimeout(() => {
    isClickable = true;
  }, base_delay * simonSequence.length + 100); // wait till last flash ends
}



startButton.addEventListener("click",()=>{
     startButton.classList.add("pressed");
            setTimeout(() => {
        startButton.classList.remove("pressed");
      }, 150);
  startGame()

    })

function startGame() {
  level = 1;
  simonSequence = [];
  userSequence = [];
  isGameOver = false;
   isClickable = false; // Disable click during initial flash
  document.getElementById("level-display").textContent = `🏆 Level ${level}`;
  
  simonSequence.push(randomColor());
  flashFullSequence();

  console.log("Game started! Level:", level);
}

