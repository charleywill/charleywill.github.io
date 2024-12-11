const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let lives = 15;
let playClicks = 0;
let previewTime = 6000; // Initial preview time in milliseconds
let gameStarted = false; //has start button been clicked

//set score to zero every time
document.querySelector(".score").textContent = score;
document.querySelector(".lives").textContent = lives;

//pull card info from json file
fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

//loop through all the cards in cards[] array
function shuffleCards() {
  let currentIndex = cards.length;
  let randomIndex, temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); //pick random value that is not same as currentIndex
    currentIndex --; //decrement by 1 to get previous card
    temporaryValue = cards[currentIndex]; //preserve current
    cards[currentIndex] = cards[randomIndex]; //swap cards
    cards[randomIndex] = temporaryValue; //swap cards
  }
}

//idea from internet
//create variable card, create class named card, set name atrribute to name from json file, set img to image attribute from json file
//append new card to grid, add click event listener to card, call flipCard if any card is flipped
function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    cardElement.addEventListener("click", flipCard);
    gridContainer.appendChild(cardElement);
  }
}

function previewCards(time = previewTime) {
  const allCards = document.querySelectorAll(".card");
  if (playClicks === 0) {
    allCards.forEach((card) => card.classList.add("flipped"));
    setTimeout(() => {
      allCards.forEach((card) => card.classList.remove("flipped"));
      gameStarted = true;
    }, time);
  }
  playClicks++;
}


function flipCard() {
  if(!gameStarted) return;
  if (lockBoard) return; //give us time to compare both cards don't allow new interactions
  if (this === firstCard) return; //if they click the same card twice don't flip it twice
  this.classList.add("flipped"); //triggers CSS to flip card
  if (!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
   //update score display
  lockBoard = true; //prevent other cards from being clicked while comparing
  checkForMatch(); //check if they match
}

//compare name attributes of both cards
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards(); //if isMatch is true, call disableCards() to lock them in place; if isMatch is false, call unflipCards() to return cards to original side
}

//after correct guess ensure cards can't be flipped back over
function disableCards() {
  score++;
  document.querySelector(".score").textContent = score;
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
  if (score === 9 || score === 18 || score === 27) {
    setTimeout(win, 500); // Delay before showing win alert
  }
}


//after incorrect guess flip cards back over
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
  lives--;
  document.querySelector(".lives").textContent = lives;
  if(lives === 0){
    setTimeout(lose, 500);
  }
}

//reset firstCard and secondCard, ensure cards not locked
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function win() {
  if(score === 27)
  {
    alert(`You win! You won with ${lives} lives remaining!`);
    restart();
    return;
  }
  alert(`Level passed! Moving to the next level with Score: ${score}, Lives: ${lives}`);
  resetBoard();
  shuffleCards();
  gridContainer.innerHTML = "";
  generateCards();
  playClicks = 0; // Allow preview again
  previewTime = previewTime - 2000; // Reduce preview time, minimum of 1 second
  previewCards(previewTime); // Call preview with the new reduced time
}

function lose(){
  alert(`You lose! You ran out of lives! Try Again?`);
  restart();
}


function restart() {
  resetBoard(); //reset current cards
  shuffleCards(); //set new card locations
  score = 0;
  lives = 15;
  playClicks = 0;
  previewTime = 6000; // Reset preview time
  gameStarted = false;
  document.querySelector(".score").textContent = score;
  document.querySelector(".lives").textContent = lives;
  gridContainer.innerHTML = ""; //remove all cards from grid
  generateCards(); //create new cards
}





