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
	if (cus == 'rr' ||cus == 'pp' || cus == 'ss') {
		var winner = "It was tie!";
	}

	else if (cus == 'rs' || cus == 'pr' || cus == 'sp') {
		var winner = `Computer Wins! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}!`;computerScore++;
	}

	else if (cus == 'sr' || cus == 'rp' || cus == 'ps') {
		var winner = `User  Wins! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;userScore++;
	}

	// output
	document.getElementById("us").innerHTML = '<a style="font-size:0.7rem;">User Score: </a><br>' + userScore;
	document.getElementById("cs").innerHTML = '<a style="font-size:0.7rem;">Computer Score: </a><br>' + computerScore;
	document.getElementById("tr").innerHTML = "Total Rounds: " + number_of_rounds;
	document.getElementById("more_results").innerHTML = winner;
}

function openInNewTab(href) {
	Object.assign(document.createElement('a'), {
	target: '_blank',
	href,
}).click();
}
