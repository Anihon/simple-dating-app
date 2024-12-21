// Track responses
const responses = {};

// Navigate through pages
document.querySelectorAll('.navigate-button').forEach(button => {
    button.addEventListener('click', () => {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));

        // Show the target page
        const nextPageId = button.getAttribute('data-next');
        document.getElementById(nextPageId).classList.remove('hidden');

        // Handle name input
        if (nextPageId === 'page-2') {
            const skipPressed = button.textContent.trim() === 'Skip';
            const nameInput = document.getElementById('name-input');
            const name = skipPressed ? 'there' : nameInput.value.trim() || 'there';
            document.getElementById('greeting').textContent = `Hi ${name},`;

            // If "Skip" is pressed, clear the name field to ensure it's not saved unintentionally
            if (skipPressed) {
                nameInput.value = '';
            }
        }

        // Save responses if button has data-response
        const response = button.getAttribute('data-response');
        if (response) {
            const pageId = button.closest('.page').id;
            if (pageId === 'page-2') {
                responses['Compliment Response'] = response;
            } else if (pageId === 'page-3') {
                responses['Single'] = response;
            }
        }

        // Show summary if on the summary page
        if (nextPageId === 'summary-page') {
            displaySummary();
        }
    });
});

// Display summary responses on the last page
function displaySummary() {
    const summaryList = document.getElementById('response-summary');
    summaryList.innerHTML = '';

    const complimentResponse = responses['Compliment Response'] || 'No response';
    const singleResponse = responses['Single'] || 'No response';

    // Add formatted responses
    const formattedResponses = [
        `Compliment: ${complimentResponse}`,
        `Single: ${singleResponse}`
    ];

    formattedResponses.forEach(response => {
        const listItem = document.createElement('li');
        listItem.textContent = response;
        summaryList.appendChild(listItem);
    });
}
