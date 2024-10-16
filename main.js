// First step, attach event (submit) listener to form to get user data

// Attach event (click) listeners to each 'game box'

// Initialize the game //

// Check which gamemode we're playing

// Set win conditions

// Determine current player

// After each move, check win conditions and if not met, set other player as active

// Human vs human, implement easy ai, impossible ai

const form = document.querySelector('#myForm');
// prevent page refresh
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // initialize form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    document.querySelector('.modal-wrapper').setAttribute('hidden', true);
    console.log(data)

});