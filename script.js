// Sweet messages
const loveMessages = [
    "My Heart Is For You Only One 💌",
    "Every moment with you feels su special ✨",
    "I love you forever 🍬",
];

// Display random message
document.getElementById("loveButton").addEventListener("click", () => {
    const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    document.getElementById("message").textContent = message;

    createHeartBurst();
});

// Create floating hearts continuously
setInterval(createFloatingHeart, 2000);

// Function for floating hearts
function createFloatingHeart() {
    const container = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "px";
    heart.style.fontSize = Math.random() * 50 + 30 + "px";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 40000);
}

// Burst of hearts when button is clicked
function createHeartBurst() {
}
