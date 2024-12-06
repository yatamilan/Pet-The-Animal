const petButton = document.getElementById('petButton');
const puppyImage = document.getElementById('puppyImage');
const barkSound = document.getElementById('barkSound');

petButton.addEventListener('click', () => {
    // Add the wiggle effect
    puppyImage.classList.add('wiggle');

    // Play the bark sound
    barkSound.play();

    // Remove wiggle effect after animation ends
    puppyImage.addEventListener('animationend', () => {
        puppyImage.classList.remove('wiggle');
    }, { once: true });
});
