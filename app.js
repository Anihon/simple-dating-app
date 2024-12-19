// Get elements
const landingPage = document.getElementById('landing-page');
const questionPage = document.getElementById('question-page');
const getStartedButton = document.getElementById('get-started');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Show the question page when 'Get Started' is clicked
getStartedButton.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
});

// Handle Yes and No button clicks
yesButton.addEventListener('click', () => {
    alert('Great! Let’s find your match.');
});

noButton.addEventListener('click', () => {
    alert('No worries! Come back when you’re ready.');
});
