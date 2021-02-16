// top level container
let container = document.querySelector('#container');

// buttons
let buttons = document.querySelectorAll('.choices-btn');

// obj to keep count of who wins
let count = {
    'player': 0,
    'computer': 0,
}

// get the score board div
let scoreBoard = document.querySelector('.score-board');
let playerScoreCard = document.createElement('p');
let computerScoreCard = document.createElement('p');
let messageBoard = document.createElement('h6');

// function to generate random integer in range (inclusive)
const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// function to select "Rock", "Papers", or "Scissors" at random.
const computerPlay = () => {
    const choice = ['rock', 'paper', 'scissors'];
    const index = generateRandomNumber(0, 2);
    return choice[index];
};

// function takes two arguments "playerSelection" and "computerSelection"
// returns "Player" if player wins
// returns "Computer" if computer wins 
// returns "Draw" if its a draw
const playRound = (playerSelection, computerSelection) => {
    let winner;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // if both choose the same thing
    if (playerSelection === computerSelection) {
        return 'Draw';
    }

    // if choices are different
    switch (playerSelection) {
        case 'rock':
            winner = (computerSelection == 'paper') ? 'Computer' : 'Player';
            break;
        case 'paper':
            winner = (computerSelection == 'rock') ? 'Player' : 'Computer';
            break;
        case 'scissors':
            winner = (computerSelection == 'paper') ? 'Player' : 'Computer';
            break;
        default:
            break;
    }
    return winner;
};

// function to play five rounds and return the winner
// const game = () => {
//     // object to keep count
//     let winCount = {
//         player: 0,
//         computer: 0
//     };

//     const playerSelection = 'rock';
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = computerPlay();
//         let winner = playRound(playerSelection, computerSelection);
//         (winner == "Draw") ? {} : (winner == "Player") ? winCount['player'] += 1 : winCount['computer']+=1;
//     }
//     return (winCount['player'] > winCount['computer']) ? 'Player' : 'Computer';
// }


// // add Event listeners to buttons
// for (button in buttons) {
//     // console.log(button);
//     button.addEventListener('click', e => {
//         let winner = playRound(e.target.textContent, computerPlay());
//         (winner == 'Player') ? winCount['player']++ : winCount['Computer']++;
//         addScoreCard(container, scoreBoard, playerScoreCard, computerScoreCard);
//     });
// }


// add the scoreCard to the div
const addScoreCard = (container, board, playerCard, computerCard, messageBoard, message = '') => {
    // add the board to container
    container.appendChild(board);

    // add the score cards to board
    board.appendChild(playerCard);
    board.appendChild(computerCard);
    board.appendChild(messageBoard);
    playerCard.textContent = `Player wins: ${count['player']}`;
    computerCard.textContent = `Computer wins: ${count['computer']}`;
    messageBoard.textContent = message;
}

// function to generate winner flashing message
const flashMessage = (playerChoice, computerChoice, winner) => {
    if (winner == "Draw") {
        return "Nobody Won, its a draw!";
    }
    if (winner == 'Player') {
        return `${playerChoice} beats ${computerChoice}. Player won! `;
    }
    else {
        return `${computerChoice} beats ${playerChoice}. Computer won! `;
    }
}

// logic to play game and update score
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        let playerChoice = e.target.textContent;
        let computerChoice = computerPlay();
        let winner = playRound(playerChoice, computerChoice);
        let message = flashMessage(playerChoice, computerChoice, winner);
        (winner == "Draw") ? {} : winner == 'Player' ? count['player'] += 1 : count['computer'] += 1;
        addScoreCard(container, scoreBoard, playerScoreCard, computerScoreCard, messageBoard, message);
    });
}



addScoreCard(container, scoreBoard, playerScoreCard, computerScoreCard, messageBoard);
// console.log(game());


// exporting for the test module
// module.exports = { generateRandomNumber, computerPlay, playRound };