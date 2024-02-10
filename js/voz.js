function changeColor() {
    // Array of different colors
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    // Get a random index
    var randomIndex = Math.floor(Math.random() * colors.length);
    // Set the color of the text to a random color
    document.getElementById('vozText').style.color = colors[randomIndex];
}

// Function to reset the color of the text to white
function resetColor() {
    document.getElementById('vozText').style.color = 'white';
}