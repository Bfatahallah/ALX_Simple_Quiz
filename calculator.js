// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 === 0 ? Infinity : number1 / number2;
}

// Helper to get numeric inputs safely
function getInputs() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Event listeners

document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
