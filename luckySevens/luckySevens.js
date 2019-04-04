/*
	Name: Jacob Bensen
	Date Created: 4/3/19
	Most recent revision: 4/3/19
*/

var money
var result
var diceCount
var rollCount
var moneyList

function findMax(array, ){ //ignore for now.

}

//Rolls the specified number of dice with the specified number of sides once.
function rollDice(numDice, numSides){
	result = Math.floor(Math.random() * numSides) + 1;
	diceCount = 1
	while(diceCount < numDice){
		result += Math.floor(Math.random() * numSides) + 1;
		diceCount++
	}
	return result;
}

//Records money value into an array. To be called after each roll of the dice.
function recordMoney


//Plays the game Lucky Sevens.
function playGame(){
	rollCount = 0;
	while(money > 0){
		rollDice(2,6);
		rollCount ++;
		if(result == 7){
			money += 4;
		}else{
			money -=1;
		}
	}
}

