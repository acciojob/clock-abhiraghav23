// Function to update the timer
function updateTimer() {
  const timerElement = document.getElementById("timer");

  // Get the current date and time
  const now = new Date();

  // Format the date
  const dateOptions = {day: "numeric", month: "numeric",year: "numeric",};
  const dateString = now.toLocaleDateString("en-US", dateOptions);

  // Format the time
  const timeString = now.toLocaleTimeString("en-US", { hour12: true });

  // Update the timer element
  timerElement.textContent = `${dateString}, ${timeString}`;
}

// Run the timer immediately and update every second
setInterval(updateTimer, 1000);
updateTimer();

