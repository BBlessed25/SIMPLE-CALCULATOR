let currentOperation = null;

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultDiv = document.getElementById("result");

function setOperation(op) {
  currentOperation = op;
  calculate();
}

function calculate() {
  const val1 = num1.value.trim();
  const val2 = num2.value.trim();

  if (val1 === "" || val2 === "") {
    resultDiv.textContent = "Please enter both numbers.";
    return;
  }

  const a = parseFloat(val1);
  const b = parseFloat(val2);

  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Invalid input.";
    return;
  }

  if (currentOperation === "divide" && b === 0) {
    resultDiv.textContent = "Cannot divide by zero.";
    return;
  }

  let result;
  switch (currentOperation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
    default:
      resultDiv.textContent = "Please select an operation.";
      return;
  }

  resultDiv.textContent = `Result: ${result}`;
}

function resetCalc() {
  num1.value = "";
  num2.value = "";
  resultDiv.textContent = "Result: ";
  currentOperation = null;
}

// Auto-calculate on input
[num1, num2].forEach(input => {
  input.addEventListener("input", () => {
    if (currentOperation) {
      calculate();
    }
  });
});