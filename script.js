const needle = document.getElementById('needle');
const percentageText = document.getElementById('percentage');

// Replace this with your logic to determine the percentage
const percentage = 20; // Example value

// Calculate the rotation angle based on the percentage
const rotation = 90 - (percentage / 100) * 360;

// Apply the rotation to the needle
needle.style.transform = `rotate(${rotation}deg)`;

// Update the text
percentageText.textContent = `${percentage}% chance of submission`;
