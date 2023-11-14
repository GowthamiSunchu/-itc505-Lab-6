document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');

    document.getElementById('rulesBtn').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Game Rules</h2>
            <p>Welcome to the Array Sorter Game! Enter a series of numbers separated by commas, and the game will sort them for you.</p>
        `;
    });

    document.getElementById('processBtn').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Game Process</h2>
            <input type="text" id="arrayInput" placeholder="Enter numbers separated by commas">
            <button id="sortButton">Sort</button>
            <p id="sortedArray"></p>
            <p id="error" style="color: red;"></p> 
        `;

        document.getElementById('sortButton').addEventListener('click', sortArray);
    });

    document.getElementById('addendumBtn').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Addendum</h2>
            <p>This section describes the problem solved by the JavaScript code, an overview of the solution, and any difficulties encountered during development.</p>
        `;
    });

    function sortArray() {
        const arrayInput = document.getElementById('arrayInput').value;
        const errorElement = document.getElementById('error');
        errorElement.textContent = ''; // Clear previous error message

        if (!arrayInput) {
            errorElement.textContent = 'Please enter some numbers.';
            return;
        }

        const numbers = arrayInput.split(',').map(num => {
            const parsed = parseFloat(num.trim());
            if (isNaN(parsed)) {
                errorElement.textContent = 'Please enter valid numbers.'; 
                throw new Error('Invalid input');
            }
            return parsed;
        });

        const sortedArray = numbers.sort((a, b) => a - b);
        document.getElementById('sortedArray').innerText = `Sorted Array: ${sortedArray.join(', ')}`;
    }
});
