// --- Core Calculation Functions ---

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// --- DOM Interaction ---

// Wait for the DOM to be fully loaded to ensure elements are available
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements we need to interact with
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const addButton = document.getElementById('addButton');
    const subtractButton = document.getElementById('subtractButton');
    const resultDiv = document.getElementById('result');

    // Helper function to get and parse numbers from the input fields.
    // It defaults to 0 if an input is empty or not a valid number.
    function getNumbers() {
        const num1 = parseFloat(num1Input.value) || 0;
        const num2 = parseFloat(num2Input.value) || 0;
        return { num1, num2 };
    }

    // Listen for a click on the "Add" button
    addButton.addEventListener('click', () => {
        const { num1, num2 } = getNumbers();
        resultDiv.textContent = `Result: ${num1} + ${num2} = ${add(num1, num2)}`;
    });

    // Listen for a click on the "Subtract" button
    subtractButton.addEventListener('click', () => {
        const { num1, num2 } = getNumbers();
        resultDiv.textContent = `Result: ${num1} - ${num2} = ${subtract(num1, num2)}`;
    });
});