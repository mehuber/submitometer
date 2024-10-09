// Replace this with your actual logic to calculate the submission percentage
var submissionPercentage = 10; // Example value

// Update the progress bar and percentage display
var progressBarFill = document.querySelector('.progress-bar-fill');
var progressPercentage = document.querySelector('.progress-percentage');
progressBarFill.style.width = submissionPercentage + '%';
progressPercentage.textContent = submissionPercentage + '%';
