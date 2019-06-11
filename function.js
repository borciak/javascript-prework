function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var buttonTest;
var buttonRock
var buttonScissors
var buttonPaper
// tu bêd¹ wymienione pozosta³e zmienne guzików, np. buttonRock

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');
buttonPaper = document.getElementById('button-paper');

// tu bêd¹ kolejne linie kodu, w których do zmiennych bêd¹ przypisane elementy znalezione po id

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' zosta³ klikniêty");
var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywo³ano funkcjê getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamieñ';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zak³adam, ¿e chodzi³o o "kamieñ".');
    return 'kamieñ';
  }
else if (argMoveId == 2) {
    return 'no¿yce';
}
else if (argMoveId == 3) {
    return 'papier';
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywo³ano funkcjê displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamieñ') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  else if (argPlayerMove == 'no¿yce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  else if (argPlayerMove == 'kamieñ' && argComputerMove == 'no¿yce') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagra³em ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamieñ, 2: papier, 3: no¿yce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
    // tu znajdzie siê ca³a dotychczasowa zawartoœæ pliku js/script.js
    // czyli efekt æwiczenia z poprzedniego submodu³u
    // z drobn¹ zmian¹ dot. zmiennej playerMove (wspomnieliœmy o tym powy¿ej)
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});

// tu bêd¹ kolejne powi¹zania guzików z funkcj¹ buttonClicked
// (ka¿da z innym argumentem)