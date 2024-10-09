const dial = document.querySelector('.dial');
const needle = document.querySelector('.needle');
const percentageText = document.querySelector('.percentage');

// Example using a slider:
const slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 100;
slider.value = 50;
dial.appendChild(slider);

slider.addEventListener('input', () => {
  const percentage = slider.value;
  const rotation = (percentage / 100) * 360 - 90; // Adjust rotation as needed
  needle.style.transform = `rotate(${rotation}deg)`;
  percentageText.textContent = `${percentage}% Chance of submission`;
});
