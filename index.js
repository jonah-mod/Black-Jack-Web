
let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = "";


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    renderGame();
}

function renderGame(){
    
    if (sum <= 20) {
        message ="Do you want to draw a new card? 🙂"
    }

    else if(sum === 21){
        message ="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    }

    else {
        message ="You're out of the game! 😭"
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${cards[0]},  ${cards[1]}`
    function consoleOutput(){    
        console.log(message);
        console.log(hasBlackJack);
        console.log(isAlive);
    }
}


function newCard(){
    console.log("Drawing a new card from the deck!");

    var card = 9;
    sum += card;
    renderGame();
}
