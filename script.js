const needle = document.getElementById('needle');
const confidenceRange = document.getElementById('confidenceRange');
const confidenceValue = document.getElementById('confidenceValue');

confidenceRange.addEventListener('input', (event) => {
    const value = event.target.value;
    confidenceValue.textContent = value;

    // Calculate the angle for the needle
    const degree = (value / 100) * 180; // Half circle (180 degrees)
    needle.style.transform = `rotate(${degree}deg)`;

    // Update the background of the dial
    document.getElementById('dial').style.setProperty('--confidence-degree', degree + 'deg');
});
