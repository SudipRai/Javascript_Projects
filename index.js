
// Counter APP

let count=0;
let countEl=document.getElementById('count-el')
function increment(){
    count=count+1
    countEl.innerText=count
}


let result=document.getElementById('result')
function save(){
    let countStr=count+" -";
    result.innerText+=countStr;
    countEl.innerText=0;
    count=0
}







// BlackJack App


let hasblackJack=false;
let isAlive=false;
let message=""
let cards=[]
let sum=0
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
    name:"Per",
    chips:145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name + ": $" + player.chips

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard;
    renderGame()
    
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for(let x in cards){
        cardsEl.textContent+=cards[x] +" "
    }
    sumEl.textContent='sum: '+sum;
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="you have got blackjack"
        hasblackJack=true;
    }
    else{
        message="You are out of game"
        isAlive=false;
    }
    messageEl.textContent=message
}

function newCard(){
    if (isAlive===true && hasblackJack===false){
    let card=getRandomCard();
    cards.push(card)
    sum+=card
    renderGame()
    }
}





function getRandomCard(){
    let randomnumber=Math.floor(Math.random()*13)+1
    if(randomnumber>10){
        return 10
    }
    else if(randomnumber===1){
        return 11
    }
    else{
        return randomnumber
    }

}