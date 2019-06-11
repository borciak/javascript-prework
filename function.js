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
// tu b�d� wymienione pozosta�e zmienne guzik�w, np. buttonRock

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');
buttonPaper = document.getElementById('button-paper');

// tu b�d� kolejne linie kodu, w kt�rych do zmiennych b�d� przypisane elementy znalezione po id

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' zosta� klikni�ty");
var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywo�ano funkcj� getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamie�';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zak�adam, �e chodzi�o o "kamie�".');
    return 'kamie�';
  }
else if (argMoveId == 2) {
    return 'no�yce';
}
else if (argMoveId == 3) {
    return 'papier';
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywo�ano funkcj� displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamie�') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  else if (argPlayerMove == 'no�yce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  else if (argPlayerMove == 'kamie�' && argComputerMove == 'no�yce') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagra�em ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz sw�j ruch! 1: kamie�, 2: papier, 3: no�yce.');
console.log('wyb�r ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
    // tu znajdzie si� ca�a dotychczasowa zawarto�� pliku js/script.js
    // czyli efekt �wiczenia z poprzedniego submodu�u
    // z drobn� zmian� dot. zmiennej playerMove (wspomnieli�my o tym powy�ej)
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});

// tu b�d� kolejne powi�zania guzik�w z funkcj� buttonClicked
// (ka�da z innym argumentem)