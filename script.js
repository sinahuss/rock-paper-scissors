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
    console.log('Player: ' + playerSelection);
    console.log('Computer: ' + computerSelection);

    if (playerSelection == computerSelection) {
        return 'It\'s a tie.';
    } else {
        return determineWinner(playerSelection, computerSelection) ? 'Player win' : 'Computer win';
    }
}

function game(playerSelection, rounds) {
    for(let i = 0; i < rounds; i++) {
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id, 1)
    })
})