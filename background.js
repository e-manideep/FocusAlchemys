// Get references to the start and stop buttons
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

// Add event listeners to the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer-display').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    remainingTime
  // Code to stop the Pomodoro timer
}
function startTimer() {
    let remainingTime = 20 * 60; // 25 minutes in seconds
    const progressBar = document.getElementById('progress');
    // Update the timer display every second
    const timerInterval = setInterval(() => {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
  
      // Display the remaining time in the format MM:SS
      document.getElementById('timer-display').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      
  
      remainingTime--;
      const progressPercent = (remainingTime / (25 * 60)) * 100; // Calculate the percentage of remaining time
      progressBar.style.width = `${progressPercent}%`;
  
      if (remainingTime < 0) {
        clearInterval(timerInterval);
        showBreakNotification();
      }
    }, 1000);
  }
  function showBreakNotification() {
  const breakDuration = parseInt(document.getElementById('break-duration-select').value, 10);
  const breakMessage = `Time for a ${breakDuration}-minute break! Take a short break and relax.`;
alert(breakMessage)
  document.getElementById('break-notification').textContent = breakMessage;
}
// Add event listener to the keydown event on the document
document.addEventListener('keydown', function(event) {
    // Check if Ctrl+D is pressed
    if (event.ctrlKey && event.key === 'd') {
      startTimer();
    }
  });
  // Add event listener to the keydown event on the document
document.addEventListener('keydown', function(event) {
    // Check if Ctrl+S is pressed
    if (event.ctrlKey && event.key === 's') {
      stopTimer();
    }
  });
  
