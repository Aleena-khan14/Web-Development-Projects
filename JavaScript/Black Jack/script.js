// // let firstCard = getRandomCard()
// // let secondCard = getRandomCard()
// let player={
//     name:"Susan",
//     chips:145
// }
// let cards = []
// let sum = 0
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// // document.getElementById("cards-el").innerText=firstCard+" , "+secondCard
// let messageEl = document.getElementById("message-el");
// let cardsEl = document.getElementById("cards-paragraph");
// let sumEl = document.querySelector("#sum-paragraph");
// // console.log(cards)

// //creating an object 

// let playerEl=document.querySelector("#player-el")
// playerEl.textContent=player.name+" :$ "+player.chips




// function getRandomCard()
// {
//     let randomNumber=Math.floor(Math.random()*13)+1
//     if (randomNumber===1)
//     {
//         return 11
//     }
//     else if (randomNumber>10)
//     {
//         return 10
//     }
//     else
//     {
//         return randomNumber
//     }
    
// }

// function startGame() {
//     isAlive=true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     sum=firstCard+secondCard
//     cards=[firstCard,secondCard]
//     renderGame();
// }



// function renderGame() {
//   console.log("Your game started");

//   sumEl.textContent = "Sum: " + sum
//   cardsEl.textContent = "Cards: " 
//   for (let i=0; i<cards.length;i++)
//         {
//            cardsEl.textContent+=cards[i]+" "
   
//         }
//   if (sum < 21) {
//     message = "Do you want to draw new card?"
//     isAlive=true
//   } else if (sum === 21) {
//     let hasBlackJack = false
//     message = "Congratulations, You have got blackjack"
//   } else if (sum > 21) {
//     isAlive = false;
//     message = "Sorry, You are out of the game"
//   }
//   // console.log(isAlive)
//   messageEl.textContent = message;
// }

// function newCard() {
//   if (isAlive===true && hasBlackJack===false)
  
//   {  
//   let card = getRandomCard()
//   sum += card;
//   cards.push(card)
//   renderGame();
//   }
//   else
//   {
//     console.log("no")
//   }
// }

// function clear()
// {
//     firstCard=0
//     secondCard=0
//     cards=[]
//     sum=0

// }


// // let airbubCasteListing=
// // {
// //    name:"Live like a king in my Castle",
// //    rent:190,
// //    accomodation:["4 guest","1 bedroom","2 beds","Private Half bath"],
// //    rating:4.95,
// //    isSuperHost:true

// // }

let hands = ["rock", "paper", "scissor"]
function getHand()
{
     let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}
console.log(getHand())
