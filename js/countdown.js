// Updated release date for GTA VI - May 26, 2026
const releaseDate = new Date("2026-05-26T00:00:00");
const countdownElement = document.getElementById("countdown");
const ctaButton = document.querySelector(".cta-button");

function updateCountdown() {
    const now = new Date();
    const timeDifference = releaseDate - now;
    
    // Calculate time units
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (timeDifference > 0) {
        // Display countdown with days as the main focus
        countdownElement.innerHTML = `
            <div class="time-unit">${days}</div>
            <div class="time-label">DAYS REMAINING</div>
            <div class="time-small">${hours}h ${minutes}m ${seconds}s</div>
        `;
    } else {
        countdownElement.innerHTML = `<div class="time-unit">GTA VI IS HERE!</div>`;
        ctaButton.textContent = "Play Now";
    }
}

// Open the trailer when clicking the button
if (ctaButton) {
    ctaButton.addEventListener("click", function() {
        window.open("https://www.youtube.com/watch?v=VQRLujxTm3c", "_blank");
    });
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call