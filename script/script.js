// global variable
var userScore = 0;
var computerScore = 0;
var number_of_rounds = 0;

function play(userChoice) {
	number_of_rounds++;
	// computer choice
	var randomNumber = Math.floor(Math.random() *3)
	switch (randomNumber) {
		case 0:
			var computerChoice = "rock";
			break;
		case 1:
			var computerChoice = "paper";
			break;
		case 2:
			var computerChoice = "scissors";
			break;
	}

	// get winner
	var cus = `${computerChoice.split('')[0] + userChoice.split('')[0]}`
	if (cus == 'rr' ||cus == 'pp' || cus == 'ss') {var winner = "It was tie!"}
	else if (cus == 'rs' || cus == 'pr' || cus == 'sp') {var winner = "Computer Wins!";computerScore++}
	else if (cus == 'sr' || cus == 'rp' || cus == 'ps') {var winner = "User Wins!";userScore++}

	// debug logs
	console.log(`The user chose ${userChoice}\nThe computer chose ${computerChoice}`)
	console.log(computerChoice.split('')[0] + userChoice.split('')[0])
	console.log(winner)
	console.log(`User Score: ${userScore}\nComputer Score: ${computerScore}\nTotal rounds: ${number_of_rounds}`)
}
