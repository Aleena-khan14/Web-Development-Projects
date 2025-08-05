let startBtn = document.querySelector("#start-btn");
let question = document.querySelector("#question");
let feedbackMsg = document.querySelector(".feedback");
let correctResult;
let paraEl = document.querySelector("#para-el");
let countdownEl = document.getElementById("countdown");

let gameOver = document.querySelector("#game-over");
let timer;
let timeLeft = 60;

//select all the button of  same class so using querySelectorAll(NodeList)
let selectBtn = document.querySelectorAll(".selectBtn");
selectBtn.forEach(btn => btn.disabled = true);

//to take random number
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// to display question
function askQuestion() {
  let number1 = getRandomNumber();
  let number2 = getRandomNumber();
  return `${number1} * ${number2}`;
}

//question generation logic
function showQuestion() {
    resetOptions(); 
  let mathQuestion = askQuestion();
  correctResult = eval(mathQuestion);
  // alert(mathQuestion)
  question.textContent = mathQuestion;
  console.log(correctResult);
  let array1 = [];
  array1.push(correctResult);
  let max = correctResult + 10;
  let min = correctResult - 10;

  //Generate 3 random incorrect option nad pushing them in the array
  while (array1.length < 4) {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(n);

    if (n > 0 && n !== correctResult && !array1.includes(n)) {
      array1.push(n);
    }
  }
  console.log("UnShuffled:", array1);
  //Shuffle the array
  let j = 0;
  for (let i = array1.length - 1; i >= 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    console.log(`Swapping i=${i}, j=${j} | ${array1[i]} <-> ${array1[j]}`);
    [array1[i], array1[j]] = [array1[j], array1[i]];
  }
  console.log("Shuffled:", array1);

  //Loop through buttons to push values
  //Selecting all 4 buttons using their class=>.selectBtn

  for (let i = 0; i < array1.length; i++) {
    selectBtn[i].textContent = array1[i];
  }
}

let count = 0;
selectBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Remove previous selection
   selectBtn.forEach(b => {
      b.classList.remove("selected");
      b.blur(); // Remove focus to prevent lingering styles
    });

    // Add selection to the clicked button
    btn.classList.add("selected");
    setTimeout(() => {
      e.target.classList.remove("selected");
    }, 200); 
    

    const selectedValue = parseInt(e.target.textContent);
    if (selectedValue === correctResult) {
      console.log("Correct Answer");
      feedbackMsg.classList.add("correct");
      feedbackMsg.textContent = "Correct!";
      count++;

      setTimeout(function () {
      feedbackMsg.classList.remove("correct", "wrong");
       feedbackMsg.textContent = "";
        resetOptions();
        showQuestion();
      }, 500);
      
    } 
    else {
      console.log("Wrong Answer");
      feedbackMsg.classList.add("wrong");
      feedbackMsg.textContent = "Wrong!";
      setTimeout(function () {
        feedbackMsg.classList.remove("correct", "wrong");
        feedbackMsg.textContent = "";
      }, 500);
    }

    //   console.log("Score is :"+count)
    paraEl.textContent = `Score:${count}`;
     selectBtn.forEach(b => b.blur());
  });
});

startBtn.addEventListener("click", function () {

  // }, 1000);
  if (startBtn.textContent === "Start Game") {
    showQuestion();
    startBtn.textContent = "Reset Game";
    startTimer();
    gameOver.style.display = "none";
    selectBtn.forEach((btn) => (btn.disabled = false));
  } else if (startBtn.textContent === "Reset Game") {
    resetGame();
  }
});

function resetGame() {
  question.textContent = "";
  selectBtn.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = true;
  });
  resetOptions(); // Add here too
  feedbackMsg.textContent = "";
  //   clearInterval(timer)
  startBtn.textContent = "Start Game";
  count = 0;
  paraEl.textContent = `Score:${count}`;
  clearInterval(timer);
  countdownEl.textContent="";
}

function startTimer() {
  timeLeft = 60; // Reset time
  countdownEl.style.display="block"
  countdownEl.textContent = `Time Remaining: ${timeLeft}s`;

  timer = setInterval(function () {
    timeLeft--;
    countdownEl.textContent = `Time Remaining: ${timeLeft}s`;

    if (timeLeft < 0) {
      clearInterval(timer);
      countdownEl.textContent = "Time's up!";

      gameOver.textContent = `Game Over!!!! 
                              \nYour score is ${count}`;
      gameOver.style.display = "block";
      startBtn.textContent = "Start Game";

      // Optionally: disable buttons when time is up
      selectBtn.forEach((btn) => (btn.disabled = true));
    }
  }, 1000);
}

function resetOptions() {
 
  selectBtn.forEach(btn => {
    btn.style.backgroundColor = '';
    btn.classList.remove('correct', 'wrong', 'selected');
   btn.blur();
  });
}
