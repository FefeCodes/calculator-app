const display = document.getElementById("number");
const buttons = document.querySelectorAll(
  ".button, .button-operator, .button-operator-equals"
);

let currentInput = "0";

const operators = ["+", "-", "*", "/", "%"];

const updateDisplay = () => {
  display.value = currentInput;
};

const evaluateExpression = () => {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = "0";
  }
};

const hasDecimalInCurrentNumber = () => {
  const lastNumber = currentInput.split(/[\+\-\*\/\%]/).pop();
  return lastNumber.includes(".");
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const lastChar = currentInput.slice(-1);

    if (value === "AC") {
      currentInput = "0";
    } else if (value === "Del") {
      currentInput = currentInput.slice(0, -1) || "0";
    } else if (value === "=") {
      evaluateExpression();
    } else if (operators.includes(value)) {
      if (!operators.includes(lastChar)) {
        currentInput += value;
      }
    } else if (value === ".") {
      if (!hasDecimalInCurrentNumber()) {
        currentInput += value;
      }
    } else {
      if (currentInput === "0") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    updateDisplay();
  });
});

updateDisplay();