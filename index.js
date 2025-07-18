const display = document.getElementById("number");
const buttons = document.querySelectorAll(
  ".button, .button-operator, .button-operator-equals"
);

let currentInput = "";


// Update display
function updateDisplay() {
  display.value = currentInput;
}

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentInput = "";
    } else if (value === "Del") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString(); //
      } catch (error) {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    updateDisplay();
  });
});
