# 🎯 Math Quiz Game

A simple and fun multiplication quiz game built using **HTML**, **CSS**, and **JavaScript**. Users are presented with random multiplication questions, and they must choose the correct answer from four options within a countdown timer.

---

## 📌 Features

- Random multiplication questions
- Four answer choices per question
- Real-time feedback (Correct/Wrong)
- Countdown timer
- Score tracking
- Game Over screen
- Reset functionality

## 🚀 How I Built This – Step by Step

### 1. **Initial Setup**
- Created `index.html`, `style.css`, and `script.js` files.
- Added basic HTML layout including:
  - A heading
  - Question area
  - Four answer buttons
  - Start/Reset button
  - Score display
  - Countdown timer and Game Over message
-All css styling included


### 2. **Generating Random Questions**
- Wrote a `getRandomNumber()` function to generate numbers between 1 and 10.
- Created an `askQuestion()` function to return a string like `"4 * 5"`.
- Used `eval()` to compute the correct result and stored it in a variable.

### 3. **Handling Answer Options**
- Pushed the correct answer into an array.
- Generated 3 random, non-repeating incorrect answers within a +/-10 range.
- Shuffled the array using the Fisher-Yates algorithm.
- Populated each of the 4 buttons with the values from the shuffled array.
-Created `showQuestion()` function to show this functionality


### 4. **User Interaction**
- Used `querySelectorAll` to add event listeners to all option buttons.
- On button click:
  - Compared selected value to correct result
  - Showed feedback text ("Correct!" or "Wrong!")
  - Increased score if correct
  - Loaded the next question


### 5. **Score Tracking**
- Initialized a `count` variable for score
- Updated the score text in a paragraph with every correct attempt


### 6. **Start/Reset Functionality**
- Add the eventlistener to `Start Button` 
- The same button toggles between "Start Game" and "Reset Game"
- Created a `startTimer()` function to handle countdown from 60 seconds
- When timer reaches 0:
  - Stops the game
  - Disables all buttons
  - Shows final score in a "Game Over" message

- `resetGame()` clears the state and prepares for a new session

### 7. **Feedback and Final Touches**
- Styled correct and wrong answers using different CSS classes
- Used `setTimeout()` to briefly display feedback

