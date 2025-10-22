let currentIndex = 1;
let direction = 1; // 1 for right, -1 for left
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-box');
const totalImages = 4;
const imageWidth = 128; // Approximate width of each image-box (120px image + 8px margin)

function updateTransform() {
    imageContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateTransform();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateTransform();
});

// Auto rotation every 3 seconds, alternating direction
setInterval(() => {
    currentIndex += direction;
    if (currentIndex >= totalImages - 1) {
        direction = -1;
    } else if (currentIndex <= 1) {
        direction = 1;
    }
    updateTransform();
}, 3000);
