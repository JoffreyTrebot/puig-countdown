/**
 * Sets up a countdown timer to a specified date
 * @param {HTMLElement} element - The element to display the countdown
 * @param {Date} targetDate - The date to count down to
 */
export function setupCountdown(element, targetDate) {
  // Update the countdown every 1 second
  const countdownInterval = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the target date
    const distance = targetDate.getTime() - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    element.innerHTML = `
      <div class="countdown-container">
        <div class="countdown-item">
          <div class="countdown-value">${days}</div>
          <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-value">${hours}</div>
          <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-value">${minutes}</div>
          <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-value">${seconds}</div>
          <div class="countdown-label">Seconds</div>
        </div>
      </div>
    `;
    
    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
      clearInterval(countdownInterval);
      element.innerHTML = "<p>Countdown expired!</p>";
    }
  }, 1000);
} 