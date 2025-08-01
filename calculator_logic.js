/**
 * Adds two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The difference between a and b.
 */
function subtract(a, b) {
    return a - b;
}

// --- Demo Usage ---
console.log("--- Simple Calculator Demo ---");

const num1 = 20;
const num2 = 8;

// Perform addition
const sum = add(num1, num2);
console.log(`${num1} + ${num2} = ${sum}`); // Expected output: 20 + 8 = 28

// Perform subtraction
const difference = subtract(num1, num2);
console.log(`${num1} - ${num2} = ${difference}`); // Expected output: 20 - 8 = 12