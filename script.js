const dial = document.querySelector('.dial');
const percentageText = document.querySelector('.percentage');

const slider = document.createElement('input');
slider.type = 'range';
slider.min = 0;
slider.max = 100;
slider.value = 0;
document.body.appendChild(slider);

slider.addEventListener('input', () => {
    const percentage = slider.value;
    const rotation = (percentage / 100) * 180;
    dial.style.transform = `rotate(${rotation}deg)`;
    percentageText.textContent = `${percentage}%`;
});
