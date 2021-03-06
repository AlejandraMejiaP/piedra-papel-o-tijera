"use strict";

/* Constante y variables */

const playButton = document.querySelector(".play__button");
const resetButton = document.querySelector(".reset__button ");
const option = document.querySelector(".select__move");
const maxGames = 10;
let messageText = document.querySelector(".message__text");
let countPlayer = document.querySelector(".player__count");
let countPc = document.querySelector(".pc__count");
let counterPlayer = 0;
let counterPc = 0;
let totalCount = 0;
let winner = "";


/* Función que genera un número aleatorio  para definir la jugada del pc*/
let pcMove = "";
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function generatePcMove() {
  pcMove = getRandomNumber(9);
  if (pcMove >= 0 && pcMove < 3) {
    pcMove = "Piedra";
  } else if (pcMove >= 3 && pcMove < 6) {
    pcMove = "Papel";
  } else if (pcMove >= 6 && pcMove <= 8) {
    pcMove = "Tijera";
  }
  console.log(`El pc ha usado ${pcMove}`);
}

/* Función que compara la jugada del pc con la de la usuaria*/
let userMove;
function fightMoves() {
  userMove = option.value;

  if (userMove === pcMove) {
    messageText.innerHTML = `Empate`;
  } else if (userMove === "Piedra") {
    if (pcMove === "Papel") {
      messageText.innerHTML = `Has perdido`;
      counterPc++;
    } else {
      messageText.innerHTML = `Has ganado`;
      counterPlayer++;
    }
  } else if (userMove === "Papel") {
    if (pcMove === "Tijera") {
      messageText.innerHTML = `Has perdido`;
      counterPc++;
    } else {
      messageText.innerHTML = `Has ganado`;
      counterPlayer++;
    }
  } else if (userMove === "Tijera") {
    if (pcMove === "Piedra") {
      messageText.innerHTML = `Has perdido`;
      counterPc++;
    } else {
      messageText.innerHTML = `Has ganado`;
      counterPlayer++;
    }
  }
  totalCount++;
  showScore();
  if(totalCount >= maxGames) {
    endGame();
  }
}

/* Función del contador de la jugadora*/
function showScore() {
  countPc.innerHTML = `Jugadora: ${counterPlayer} `;
  countPlayer.innerHTML = `Computadora: ${counterPc} `;
}

//Contador de  partidas
function endGame() {
  showWinner();
  resetButton.classList.toggle("hidden");
  playButton.classList.toggle("hidden");
}

function resetGame(event) {
  event.preventDefault();
  resetButton.classList.toggle("hidden");
  playButton.classList.toggle("hidden");
  counterPlayer = 0;
  counterPc = 0;
  totalCount = 0;
  messageText.innerHTML = `Let's go!`;
  showScore();
}

/* Función que declara a la ganadora*/
function showWinner() {
  
  if (counterPlayer > counterPc) {
    winner = "¡¡¡Has ganado, crack!!!";
  } else if (counterPlayer < counterPc) {
    winner = "Has perdido... ¿cúantas van ya?";
  } else {
    winner = `Habeis empatado`;
  }
  messageText.innerHTML = winner;
}

/* Eventos */
playButton.addEventListener("click", getRandomNumber);
playButton.addEventListener("click", generatePcMove);
playButton.addEventListener("click", fightMoves);
resetButton.addEventListener ("click", resetGame);
