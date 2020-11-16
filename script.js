'use strict';

const rollDice = document.querySelector('.roll');
const holdScore = document.querySelector('.hold');
const diceImage = document.querySelector('.dice');
const currentScore_0 = document.querySelector('.current-score-pl-0');
const currentScore_1 = document.querySelector('.current-score-pl-1');
const player_1 = document.querySelector('.player-1');
const player_2 = document.querySelector('.player-2');
const score_0 = document.querySelector('.score-0');
const score_1 = document.querySelector('.score-1');
const btnNew = document.querySelector('.new');
const messageWindow = document.querySelector('.show-msg');
const winMessage = document.querySelector('.win-msg');
const modalBtn = document.querySelector('.modal-btn');
const modeWindow = document.querySelector('.mode-window');
let randomNumber;
let currentScore = 0;
let active_player = 0;
let score = [0, 0];

const initiateGame = function () {
  active_player = 0;
  currentScore = 0;
  score = [0, 0];
  diceImage.classList.add('remove-dice');
  currentScore_0.textContent = 0;
  currentScore_1.textContent = 0;
  score_0.textContent = 0;
  score_1.textContent = 0;
  player_1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  player_2.style.backgroundColor = 'transparent';
  diceImage.classList.add('remove-dice');
  rollDice.disabled = false;
};

initiateGame();

const winning = function () {};

// To get dice number between 1 to 6
function dice() {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  return randomNumber;
}

rollDice.addEventListener('click', function () {
  if (active_player === 0) {
    player_1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    player_2.style.backgroundColor = 'transparent';
    diceImage.classList.remove('remove-dice');
    diceImage.src = `dice-${dice()}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      currentScore_0.textContent = currentScore;
    } else {
      currentScore = 0;
      currentScore_0.textContent = currentScore;
      active_player = 1;
      player_1.style.backgroundColor = 'transparent';
      player_2.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }
  } else {
    player_1.style.backgroundColor = 'transparent';
    player_2.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    diceImage.classList.remove('remove-dice');
    diceImage.src = `dice-${dice()}.png`;
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      currentScore_1.textContent = currentScore;
    } else {
      currentScore = 0;
      currentScore_1.textContent = currentScore;
      active_player = 0;
      player_1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      player_2.style.backgroundColor = 'transparent';
    }
  }
});

holdScore.addEventListener('click', function () {
  if (active_player === 0) {
    score[active_player] = score[active_player] + currentScore;
    score_0.textContent = score[active_player];
    if (Number(score[active_player]) < 100) {
      console.log(Number(score[active_player]));
      player_1.style.backgroundColor = 'transparent';
      player_2.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      active_player = 1;
      currentScore = 0;
      currentScore_0.textContent = currentScore;
    } else {
      player_1.style.backgroundColor = 'rgba(123, 239, 178, 1)';
      diceImage.classList.add('remove-dice');
      rollDice.disabled = true;
      currentScore_0.textContent = 0;
      winMessage.textContent = `Player ${active_player + 1} won the game !`;
      modeWindow.style.display = 'block';
      messageWindow.style.display = 'block';
    }
  } else {
    score[active_player] = score[active_player] + currentScore;
    score_1.textContent = score[active_player];
    if (Number(score[active_player]) < 100) {
      player_2.style.backgroundColor = 'transparent';
      player_1.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      active_player = 0;
      currentScore = 0;
      currentScore_1.textContent = currentScore;
    } else {
      player_2.style.backgroundColor = 'rgba(123, 239, 178, 1)';
      diceImage.classList.add('remove-dice');
      rollDice.disabled = true;
      currentScore_1.textContent = 0;
      winMessage.textContent = `Player ${active_player + 1} won the game !`;
      modeWindow.style.display = 'block';
      messageWindow.style.display = 'block';
    }
  }
});

btnNew.addEventListener('click', initiateGame);

modalBtn.addEventListener('click', function () {
  winMessage.textContent = ``;
  messageWindow.style.display = 'none';
  modeWindow.style.display = 'none';
  initiateGame();
});
