var playerScore = 0;
var computerScore = 0;
var tieGames = 0;

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
    if (player == 'Rock' && computer == 'Scissors' ||
        player == 'Scissors' && computer == 'Paper' ||
        player == 'Paper' && computer == 'Rock') {
            playerScore++;
            return true;
        }
    computerScore++;
    return false;
}

//plays one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    let ans = '';
    //let input = prompt('Choose between Rock, Paper, or Scissors');
    //playerSelection = input[0].toUpperCase() + input.slice(1).toLowerCase();
    ans += ('Player: ' + playerSelection + '<br>Computer: ' + computerSelection + '<br><br>');

    if (playerSelection == computerSelection) {
        tieGames++;
        ans += 'It\'s a tie.';
    } else {
        ans += determineWinner(playerSelection, computerSelection) ? 'You win this round' : 'Computer wins';
    }
    return ans;
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.innerHTML = playRound(button.textContent.trim(), getComputerChoice()) + 
                            '<br><br> Player Score: ' + playerScore +
                            '<br> Computer Score: ' + computerScore +
                            '<br> Tie Games: ' + tieGames;
        if (playerScore == 5 || computerScore == 5) {
            result.innerHTML = playerScore == 5 ? 'You win the game!' : 
                                'Computer wins the game';
            playerScore = 0;
            computerScore = 0;
            tieGames = 0;
        }
    })
})