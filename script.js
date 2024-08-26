document.getElementById('breakButton').addEventListener('click', function() {
    // Play the song when the button is clicked
    var song = document.getElementById('janmashtamiSong');
    song.play();

    // Hide the Dahi Handi image and show the butter image
    document.getElementById('handi').classList.add('broken-handi');
    document.getElementById('butter').classList.remove('hidden');
    
    // Display the happy message
    document.getElementById('message').classList.remove('hidden');

    // Hide the break button and show the exit button
    document.getElementById('breakButton').classList.add('hidden');
    document.getElementById('exitButton').classList.remove('hidden');
});

// Add event listener for the Exit button
document.getElementById('exitButton').addEventListener('click', function() {
    // Stop the song
    var song = document.getElementById('janmashtamiSong');
    song.pause();
    song.currentTime = 0; // Reset the song to the beginning
    
    // Reload the page to go back to the starting state
    window.location.reload();
});