let playerCardsTable = [];
let croupierCardsTable = [];
let playerResult = 0;
let croupierResult = 0;

function getBalance() {
    return parseInt(document.querySelector('.count-balance').outerText)
}

function getDivTransparent() {
    return document.querySelector('.transparent')
}

function getPlayButton() {
    return document.querySelector('.play')
}

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
    getDivTransparent().appendChild(buttonResetBalance);
}

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

function rateInput() {
    return (document.querySelector('#rate')).value;
}

function createRateArea(){
    const rate = document.createElement('div');
    rate.classList.add('rateArea');
    rate.innerHTML= `${rateInput()}`;
    getDivTransparent().appendChild(rate)
}

function createCardArea() {
    let numberOfCard = 1;
    for (numberOfCard; numberOfCard < 3; ) {
        const cardArea = document.createElement('div');
        cardArea.classList.add(`card-number-${numberOfCard++}`);
        cardArea.textContent = '';
        getDivTransparent().appendChild(cardArea)
    }
}

function removeElement(element) {
    element.parentNode.removeChild(element);
}

function removeElementsAfterPlay() {
    const buttonPlay = document.getElementsByClassName('play')[0];
    removeElement(buttonPlay);
    const labelRate = document.getElementsByClassName('rate')[0];
    removeElement(labelRate);
}

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

class CreateNewCard {
    constructor (url, value) {
        this.url = url;
        this.value = value;

    }
}

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

function actionAfterClickPlay() {
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

function addCardsToPlayerAfterHit(shuffledCards) {
    addCardsToPlayer(shuffledCards, 1);
    addPlayerCardsToPlayerArea();

}

function addCardsToCroupier(shuffledCards) {
    croupierCardsTable.push(shuffledCards[0]);
    croupierCardsTable.push(shuffledCards[1]);
    shuffledCards.splice(0,1);
    shuffledCards.splice(1,1)
}

function addCardsToCroupierAfterStand (shuffledCards) {
    document.getElementById('buttonHit').disabled = true;
    croupierCardsTable.splice(0,1);
    croupierCardsTable.push(shuffledCards.splice(0,1));
    addCroupierCardsToCroupierArea();
    let resultCroupier = countResultCroupier();
    checkIfBlackJack(croupierCardsTable, 'Croupier');
    while (resultCroupier <= 17) {
        croupierCardsTable.push(shuffledCards.splice(0,1));
        addCroupierCardsToCroupierArea();
        countResultCroupier();
        getCroupierResultArea().innerHTML = `${croupierResult}`
    }
    endOfRound()
}

function addCroupierCardsToCroupierArea(shuffledCards) {
    addCardsToCroupier(shuffledCards)
    const divAreaCroupier = document.querySelector('.card-number-1');
    let tags = '';
    for (let i = 0; i < croupierCardsTable.length; i++) {
        tags = tags + `<img src="${croupierCardsTable[i].url}">`
    }
    divAreaCroupier.innerHTML= tags;
}

function countResultPlayer () {
    for (let i = 0; i < playerCardsTable.length; i++) {
        playerResult += playerCardsTable[i].value
    }
}

function countResultCroupier () {
    for (let i = 0; i < croupierCardsTable.length; i++) {
        croupierResult += croupierCardsTable[i].value
    }
}

function checkIfBlackJack(tableOfCards, userData) {
    for (let i = 0; i < 3; i++) {
        if (tableOfCards[i].value == 10 && tableOfCards[i].value == 11
        && tableOfCards[i].url != "/static/img/cards/10H.png" && tableOfCards[i].url != "/static/img/cards/10D.png"
        && tableOfCards[i].url != "/static/img/cards/10C.png" && tableOfCards[i].url != "/static/img/cards/10S.png") {
            endOfRound(userData)
        }else{
            return false
        }
    }

}

function afterPushHit(shuffleCards) {
    addCardsToPlayerAfterHit(shuffleCards);
    countResultPlayer();
    getPlayerResultArea().innerHTML = `${playerResult}`;
}

function getButtonHit(shuffleCards) {
    const buttonHit = document.querySelector('.buttonHit');
    buttonHit.addEventListener('click', function () {afterPushHit(shuffleCards)})
}

function getButtonStand(shuffleCards) {
    const buttonStand = document.querySelector('.buttonStand');
    buttonStand.addEventListener('click', function() {addCardsToCroupierAfterStand(shuffleCards)})

}

function endOfRound() {
    if (countResultPlayer() === countResultCroupier()) {
        alert('Draw');
        startNewGame()
    }
    else if (countResultPlayer() > countResultCroupier()) {
        alert('Player won!');
        startNewGame()
    }else if (countResultPlayer() > 21){
        alert('Croupier won!');
        startNewGame()
    }else{
        alert('Croupier won!');
        startNewGame()
    }

}

function createElementsForNewGame() {
    const rateInputArea = document.createElement('div');
    rateInputArea.id = 'choose-rate';
    const labelInputArea = document.createElement('label');
    labelInputArea.for = 'rate';
    labelInputArea.classList.add('rate');
    labelInputArea.innerHTML = `<input type="number" name = "rate" value="{{ rate }}" id="rate" required>`;
    const buttonPlay = document.createElement('button');
    buttonPlay.classList.add('play')
}

function removeElementsFromEndedGame() {

}

function startNewGame(){
    window.onload = function () {

        createElementsForNewGame()
    }
}

function clickPlay() {
    getPlayButton().addEventListener('click', function(){actionAfterClickPlay()});
}

function gameAfterPlay() {
    countCurrentBalance();
    let shuffledCards = shuffleCards();
    addCroupierCardsToCroupierArea(shuffledCards);
    addPlayerCardsToPlayerArea(shuffledCards,2);
    checkIfBlackJack(playerCardsTable, 'Player');
    countResultPlayer();
    getPlayerResultArea().innerHTML = `${playerResult}`;
    getButtonHit(shuffledCards);
    getButtonStand(shuffledCards);

}

function startGame() {
    clickPlay();
}

startGame();