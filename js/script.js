'use strict';
let argComputerMove, argMoveId, argPlayerMove, computerMove, randomNumber, playerMove
const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const buttonPaper = document.getElementById('button-paper');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName; 
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('ruch gracza to: ' + playerMove);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);}
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
function getMoveName(argMoveId) {console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {return 'kamień';
  } else if (argMoveId == 2) {return 'papier';
  } else if (argMoveId == 3) {return 'nożyce';
  } else {printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';  }
  
function displayResult(argPlayerMove, argComputerMove) 
  {console.log ('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {printMessage('Wygrywasz!');} 
  else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {printMessage('Wygrywasz!');}
  else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {printMessage('Wygrywasz!');} 
  else {printMessage('Przegrywasz'); }
  displayResult(playerMove, computerMove)}}