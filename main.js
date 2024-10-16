// Attach event (click) listeners to each 'game box'

// Initialize the game //

// Check which gamemode we're playing

// Set win conditions

// Determine current player

// After each move, check win conditions and if not met, set other player as active

// Human vs human, implement easy ai, impossible ai

const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
    // prevent page refresh
    e.preventDefault();

    // initialize form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    document.querySelector('.modal-wrapper').setAttribute('hidden', true);
    initializeGame(data);
});

const initialzeVariables = (data) => {
    data.choice = +data.choice;
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    data.player1 = 'X';
    data.player2 = 'O';
    data.round = 0;
    data.currentPlayer = 'X';
    data.gameOver = false;
}

const initializeGame = (data) => {
    // Initialize game variables
    initialzeVariables(data);
    console.log(data);
    // Add event listeners to the gameboard

   
}