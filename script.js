function updateCountdown() {
    const targetDate = new Date('May 30, 2025 17:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    // Time calculations for days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Update the content of the p tag
    const countdownElement = document.getElementById("count-down-timer");
    if (timeDifference > 0) {
        countdownElement.innerHTML = `${days} days, ${hours} hours, and ${minutes} minutes`;
    } else {
        countdownElement.innerHTML = "The date has passed!";
    }
}

setInterval(updateCountdown, 10000);

window.onload = updateCountdown;
