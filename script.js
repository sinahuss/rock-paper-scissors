document.write('hello');

var input = 'Rock';

//Randomly choose between rock, paper, and scissors
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

//assuming that the choices are not the same
//true for player win, false for computer win
function determineWinner(player, computer) {
    return (player == 'Rock' && computer == 'Scissors' ||
            player == 'Scissors' && computer == 'Paper' ||
            player == 'Paper' && computer == 'Rock');
}

//plays one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    //let input = prompt('Choose between Rock, Paper, or Scissors');
    //playerSelection = input[0].toUpperCase() + input.slice(1).toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        return 'It\'s a tie.';
    } else {
        return determineWinner(playerSelection, computerSelection) ? 'Player win' : 'Computer win';
    }
}

function game(rounds) {
    for(i=0;i<rounds;i++) {
        console.log(playRound(input, getComputerChoice()));
    }
}

game(5);