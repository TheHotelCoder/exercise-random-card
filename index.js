// Random index generator.

let generateRandom = (i) => {
  return i[Math.floor(Math.random() * i.length)];
};

//Arrays to iterate for the number and symbol

let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let symbols = ["♣", "♦", "♥", "♠"];
let colors = ["red", "black"];

//Selecting a random index of each array.
let randomSymbol = generateRandom(symbols);
let randomNumber = generateRandom(numbers);
let randomColor = generateRandom(colors)

//Selecting the elements to affect
let getNumber = document.querySelector("#onlyNumber");
let getSymbolOne = document.querySelector("#cardId > div.CardSymbolOne.symbol > span")
let getSymbolTwo = document.querySelector("#cardId > div.CardSymbolTwo.symbol > span")

//Load
window.onload = function() {
    let createNumberNode = document.createTextNode(randomNumber);
    getNumber.appendChild(createNumberNode);
    getNumber.style.color = randomColor;
    let createSymbolNodeOne = document.createTextNode(randomSymbol);
    getSymbolOne.appendChild(createSymbolNodeOne);
    getSymbolOne.style.color = randomColor;
    let createSymbolNodeTwo = document.createTextNode(randomSymbol);
    getSymbolTwo.appendChild(createSymbolNodeTwo);
    getSymbolTwo.style.color = randomColor;
}