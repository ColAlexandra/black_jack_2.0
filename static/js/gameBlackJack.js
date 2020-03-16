let playerCardsTable = [];
let croupierCardsTable = [];
let playerResult = 0;
let croupierResult = 0;

// return balance in int
function getBalance() {
    return parseInt(document.querySelector('.count-balance').outerText)
}

function getDivTransparent() {
    return document.querySelector('.transparent')
}

function getPlayButton() {
    return document.querySelector('.play')
}

//create all needed buttons after click play
function createButtonAfterPlay() {
    const buttonHit = document.createElement('button');
    buttonHit.classList.add('buttonHit');
    buttonHit.id = 'buttonHit';
    buttonHit.textContent = 'HIT';
    const buttonStand = document.createElement('button');
    buttonStand.classList.add('buttonStand');
    buttonStand.id = 'buttonStand';
    buttonStand.textContent= 'STAND';
    const buttonResetBalance = document.createElement('button');
    buttonResetBalance.classList.add('buttonResetBalance');
    buttonResetBalance.textContent = 'Reset balance';
    getDivTransparent().appendChild(buttonHit);
    getDivTransparent().appendChild(buttonStand);
    // @ todo add eventListener to button reset balance
    getDivTransparent().appendChild(buttonResetBalance);
}

//create 2 areas results for points of player and croupier
function createResultsArea() {
    const playerResult = document.createElement('div');
    playerResult.classList.add('playerResult');
    playerResult.innerHTML = `0`;
    const croupierResult = document.createElement('div');
    croupierResult.classList.add('croupierResult');
    croupierResult.innerHTML = `0`;
    getDivTransparent().appendChild(playerResult);
    getDivTransparent().appendChild(croupierResult);
}

function getPlayerResultArea() {
    return document.querySelector('.playerResult')
}

function getCroupierResultArea() {
    return document.querySelector('.croupierResult')
}

// get the rate input form starting page
function rateInput() {
    return (document.querySelector('#rate')).value;
}

// create rate area needed after click play
function createRateArea(){
    const rate = document.createElement('div');
    rate.classList.add('rateArea');
    rate.innerHTML= `${rateInput()}`;
    getDivTransparent().appendChild(rate)
}

// create 2 cards area for croupier and for player
function createCardArea() {
    let numberOfCard = 1;
    for (numberOfCard; numberOfCard < 3; ) {
        const cardArea = document.createElement('div');
        cardArea.classList.add(`card-number-${numberOfCard++}`);
        cardArea.textContent = '';
        getDivTransparent().appendChild(cardArea)
    }
}

// create template to remove any HTML element
function removeElement(element) {
    element.parentNode.removeChild(element);
}

function removeElementsAfterPlay() {
    removeElement(document.getElementsByClassName('play')[0]);
    removeElement(document.getElementsByClassName('choose-rate')[0]);
}

//list of card's url
function createListOfCardsUrl() {
    return ["/static/img/cards/AH.png", "/static/img/cards/AD.png", "/static/img/cards/AC.png",
        "/static/img/cards/AS.png", "/static/img/cards/2H.png", "/static/img/cards/2D.png", "/static/img/cards/2C.png",
        "/static/img/cards/2S.png", "/static/img/cards/3H.png", "/static/img/cards/3D.png", "/static/img/cards/3C.png",
        "/static/img/cards/3S.png", "/static/img/cards/4H.png", "/static/img/cards/4D.png", "/static/img/cards/4C.png",
        "/static/img/cards/4S.png", "/static/img/cards/5H.png", "/static/img/cards/5D.png", "/static/img/cards/5C.png",
        "/static/img/cards/5S.png", "/static/img/cards/6H.png", "/static/img/cards/6D.png", "/static/img/cards/6C.png",
        "/static/img/cards/6S.png", "/static/img/cards/7H.png", "/static/img/cards/7D.png", "/static/img/cards/7C.png",
        "/static/img/cards/7S.png", "/static/img/cards/8H.png", "/static/img/cards/8D.png", "/static/img/cards/8C.png",
        "/static/img/cards/8S.png", "/static/img/cards/9H.png", "/static/img/cards/9D.png", "/static/img/cards/9C.png",
        "/static/img/cards/9S.png", "/static/img/cards/10H.png", "/static/img/cards/10D.png", "/static/img/cards/10C.png",
        "/static/img/cards/10S.png", "/static/img/cards/JH.png", "/static/img/cards/JD.png", "/static/img/cards/JC.png",
        "/static/img/cards/JS.png", "/static/img/cards/QH.png", "/static/img/cards/QD.png", "/static/img/cards/QC.png",
        "/static/img/cards/QS.png", "/static/img/cards/KH.png", "/static/img/cards/KD.png", "/static/img/cards/KC.png",
        "/static/img/cards/KS.png", "/static/img/cards/red_back.png"];


}

//class with constructor for every single card
class CreateNewCard {
    constructor (url, value) {
        this.url = url;
        this.value = value;

    }
}

//create list of cards basing on class CreateNewCard and list of url
function createListOfCards() {
    const cards = createListOfCardsUrl();
    let listOfCards = [];
    for (let i = 0; i < 4; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 11))
    }

    for (let i = 4; i < 8; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 2))
    }

    for (let i = 8; i < 12; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 3))
    }

    for (let i = 12; i < 16; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 4))
    }

    for (let i = 16; i < 20; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 5))
    }

    for (let i = 20; i < 24; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 6))
    }

    for (let i = 24; i < 28; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 7))
    }

    for (let i = 28; i < 32; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 8))
    }

    for (let i = 32; i < 36; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 9))
    }

    for (let i = 36; i < 52; i++) {
        listOfCards.push(new CreateNewCard(cards[i], 10))
    }

    listOfCards.push(new CreateNewCard(cards[52], 0))

    return listOfCards;
}

//return shuffled card's list
function shuffleCards() {
    let listOfCards = createListOfCards();
    let shuffledListOfCards = [];
    shuffledListOfCards.push(listOfCards.splice(52,1)[0]);
    let listOfCardsLength = listOfCards.length;
    for (let i = 0; i < listOfCardsLength; i++) {
        shuffledListOfCards.push(listOfCards.splice
        (Math.floor(Math.random()*listOfCards.length),1)[0])
    }
    return shuffledListOfCards
}

// functions executed after click play
function actionAfterClickPlay() {
    // @todo checkin rate (alert if none or too high)
    createButtonAfterPlay();
    createResultsArea();
    createRateArea();
    createCardArea();
    gameAfterPlay();
    removeElementsAfterPlay();

}

function countCurrentBalance() {
    let currentBalance  = getBalance() - rateInput();
    let balanceDiv = document.querySelector(".count-balance");
    balanceDiv.innerHTML = `${currentBalance}`
}

//add cards to player list
function addCardsToPlayer(shuffledCards, numberOfCards) {
    for (let i = 0 ; i < numberOfCards; i++) {
        playerCardsTable.push(shuffledCards[i])
        shuffledCards.splice(i, 1)
    }
}

function addPlayerCardsToPlayerArea(shuffleCards, numberOfCards) {
    addCardsToPlayer(shuffleCards, numberOfCards);
    const divAreaPlayer = document.querySelector('.card-number-2');
    let tags = '';
    for (let i = 0; i < playerCardsTable.length; i++) {
        tags = tags + `<img src="${playerCardsTable[i].url}">`
    }
    divAreaPlayer.innerHTML= tags;
}

//add cards after push hit button
function addCardsToPlayerAfterHit(shuffledCards) {
    addCardsToPlayer(shuffledCards, 1);
    addPlayerCardsToPlayerArea();

}

function addCardsToCroupier(shuffledCards, numberOfCards) {
    for (let i = 0 ; i < numberOfCards; i++) {
        croupierCardsTable.push(shuffledCards[i])
        shuffledCards.splice(i, 1)
    }
}

function addCardsToCroupierAfterStand (shuffledCards) {
    document.getElementById('buttonHit').disabled = true;
    croupierCardsTable.splice(0,1);
    addCroupierCardsToCroupierArea(shuffledCards, 1);
    countResultCroupier();
    checkIfBlackJack(croupierCardsTable, 'Croupier');
    while (croupierResult <= 17) {
        addCroupierCardsToCroupierArea(shuffledCards, 1);
        countResultCroupier();
        changeAsValue(croupierResult, croupierCardsTable);
    }
    setTimeout(function(){endOfRound();}, 1000);
}

//change value of AS form 11 to 1 if result > 21
function changeAsValue(result, table) {
    if (result > 21) {
        for ( let i = 0; i < table.length; i++) {
            if (table[i].value == 11) {
                table[i].value = 1;
                countResultCroupier();
                countResultPlayer();
            }
        }
    }
}

function addCroupierCardsToCroupierArea(shuffledCards, numberOfCards) {
    addCardsToCroupier(shuffledCards, numberOfCards);
    const divAreaCroupier = document.querySelector('.card-number-1');
    let tags = '';
    for (let i = 0; i < croupierCardsTable.length; i++) {
        tags = tags + `<img src="${croupierCardsTable[i].url}">`
    }
    divAreaCroupier.innerHTML= tags;
}

// count the value of player cards and add to player result area
function countResultPlayer () {
    playerResult = 0;
    for (let i = 0; i < playerCardsTable.length; i++) {
        playerResult += playerCardsTable[i].value
    }
    getPlayerResultArea().innerHTML = `${playerResult}`;
}

// count the value of croupier cards and add to croupier result area
function countResultCroupier () {
    croupierResult = 0;
    for (let i = 0; i < croupierCardsTable.length; i++) {
        croupierResult += croupierCardsTable[i].value
    }
    getCroupierResultArea().innerHTML = `${croupierResult}`;
}

// check if there's black jack, return the alert and end of round
function checkIfBlackJack(tableOfCards, userData) {
    for (let i = 0; i < tableOfCards.length; i++) {
        if (tableOfCards[i].url != "/static/img/cards/10H.png" && tableOfCards[i].url != "/static/img/cards/10D.png"&&
            tableOfCards[i].url != "/static/img/cards/10C.png" && tableOfCards[i].url != "/static/img/cards/10S.png" &&
            tableOfCards[i].value == 10 && tableOfCards[i + 1].value == 11 ||
            tableOfCards[i].value == 11 && tableOfCards[i + 1] ==10) {
            let resultRate = getBalance() + (2.5 * parseInt(document.querySelector('.rateArea').outerText));
            document.querySelector('.count-balance').innerHTML = `${resultRate}`;
            setTimeout(function (){alert(`${userData} has Black Jack`)}, 500);
            setTimeout(function () {startNewGame();}, 500);
        }else{
            return false
        }
    }

}

//functions invoking after push hit
function afterPushHit(shuffleCards) {
    addCardsToPlayerAfterHit(shuffleCards);
    countResultPlayer();
    changeAsValue(playerResult, playerCardsTable);
    checkIfBlackJack(playerCardsTable, 'Player');
    if (playerResult > 21) {
        setTimeout(function(){endOfRound();}, 1000);
    }
}

// get button hit and add addEventListener method
function getButtonHit(shuffleCards) {
    const buttonHit = document.querySelector('.buttonHit');
    buttonHit.addEventListener('click', function () {afterPushHit(shuffleCards)})
}

// get button stand and add addEventListener method
function getButtonStand(shuffleCards) {
    const buttonStand = document.querySelector('.buttonStand');
    buttonStand.addEventListener('click', function() {addCardsToCroupierAfterStand(shuffleCards)})

}

//check the conditions of round's win, count the balance after
// game and put it in html element, show alert, start new round
function endOfRound() {
    if (playerResult === croupierResult) {
        let resultRate = getBalance() + parseInt(document.querySelector('.rateArea').outerText);
        document.querySelector('.count-balance').innerHTML = `${resultRate}`;
        alert('Draw');
        setTimeout(function () {startNewGame();}, 1500);

    }
    else if (playerResult > croupierResult && playerResult <= 21) {
        let resultRate = getBalance() + (2 * parseInt(document.querySelector('.rateArea').outerText));
        document.querySelector('.count-balance').innerHTML = `${resultRate}`;
        alert('Player won!');
        setTimeout(function () {startNewGame();}, 1500);

    }
    else if (playerResult > 21){
        alert('Croupier won!');
        setTimeout(function () {startNewGame();}, 1500);

    }
    else if (croupierResult > 21){
        let resultRate = getBalance() + (2 * parseInt(document.querySelector('.rateArea').outerText));
        document.querySelector('.count-balance').innerHTML = `${resultRate}`;
        alert('Player won!');
        setTimeout(function () {startNewGame();}, 1500);
    }else{
        alert('Croupier won!');
        setTimeout(function () {startNewGame();}, 1500);

    }

}

function createElementsForNewGame() {
    const rateInputArea = document.createElement('div');
    rateInputArea.id = 'choose-rate';
    const labelInputArea = document.createElement('label');
    labelInputArea.for = 'rate';
    labelInputArea.classList.add('rate');
    labelInputArea.innerHTML = `<input type="number" name = "rate" value="{{ rate }}" id="rate" required>`;
    const divRate = document.createElement('div');
    divRate.classList.add('choose-rate');
    const buttonPlay = document.createElement('button');
    buttonPlay.classList.add('play');
    buttonPlay.textContent = 'Play';
    const divTransparent = document.querySelector('.transparent');
    divTransparent.appendChild(divRate);
    divRate.appendChild(labelInputArea);
    labelInputArea.appendChild(rateInputArea);
    divTransparent.appendChild(buttonPlay);


}

//reset elements content from the previous game
function removeElementsContent() {
    playerResult = 0;
    croupierResult = 0;
    playerCardsTable = [];
    croupierCardsTable = [];
}

function removeElementsFromEndedGame() {
    removeElement(document.querySelector('.buttonHit'));
    removeElement(document.querySelector('.buttonStand'));
    removeElement(document.querySelector('.card-number-1'));
    removeElement(document.querySelector('.card-number-2'));
    removeElement(document.querySelector('.playerResult'));
    removeElement(document.querySelector('.croupierResult'));
    removeElement(document.querySelector('.rateArea'));
    removeElement(document.querySelector('.buttonResetBalance'))
}

//check if game balance is over 0, and if it is start new game
function gameOver() {
    removeElementsContent();
    removeElementsFromEndedGame();
    createElementsForNewGame();
    let balance = 500;
    document.querySelector('.count-balance').innerHTML = `${balance}`;
    clickPlay();

}

//execute the functions starting new game
function startNewGame(){
    if (getBalance() <= 0) {
        alert('Game over!');
        gameOver();
    }
    removeElementsContent();
    removeElementsFromEndedGame();
    createElementsForNewGame();
    clickPlay();

}

//method addEventListener for play button
function clickPlay() {
    getPlayButton().addEventListener('click', function(){actionAfterClickPlay()});
}

//functions execute after click play
function gameAfterPlay() {
    countCurrentBalance();
    let shuffledCards = shuffleCards();
    addCroupierCardsToCroupierArea(shuffledCards, 2);
    addPlayerCardsToPlayerArea(shuffledCards,2);
    checkIfBlackJack(playerCardsTable, 'Player');
    countResultPlayer();
    getButtonHit(shuffledCards);
    getButtonStand(shuffledCards);

}

// initialization function
function startGame() {
    clickPlay();
}

startGame();