// JavaScript for cursor movement
document.querySelector('.learning-anywhere-section').addEventListener('mousemove', (e) => {
    const imageContainer = document.querySelector('.image-container');
    const circle = document.querySelector('.blue-circle');
    const image = document.querySelector('.learning-image');

    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 10;
    const moveY = (y - rect.height / 2) / 10;

    // Adjust direction based on cursor position
    // Circle moves faster
    circle.style.transform = `translate(calc(-50% + ${moveX * 1.5}px), calc(-50% + ${moveY * 1.5}px))`;
    // Image moves slower
    image.style.transform = `translate(calc(-50% + ${moveX * 0.7}px), calc(-50% + ${moveY * 0.7}px))`;
});

// Reset to default when mouse leaves section
document.querySelector('.learning-anywhere-section').addEventListener('mouseleave', () => {
    const circle = document.querySelector('.blue-circle');
    const image = document.querySelector('.learning-image');

    circle.style.transform = 'translate(-50%, -50%)';
    image.style.transform = 'translate(-50%, -50%)';
});
