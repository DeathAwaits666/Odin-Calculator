let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let currentInput = "";

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.textContent = value;

  if (value.lenght > 10) {
    display.style.fontSize = "1em";
  } else {
    display.style.fontSize = "3em";
  }
  display.textContent = value;
}

function handleNumberClick(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function handleOperatorClick(operator) {
  if (currentInput === "") {
    return;
  }
  if (firstNumber === "") {
    firstNumber = currentInput;
  } else {
    secondNumber = currentInput;
    firstNumber = operate(currentOperator, firstNumber, secondNumber);
    updateDisplay(firstNumber);
    secondNumber = "";
  }
  currentOperator = operator;
  updateDisplay(firstNumber + " " + currentOperator);
  currentInput = "";
}

function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return num1;
      }
      return num1 / num2;
    default:
  }
}

function handleEqualsClick() {
  if (firstNumber !== "" && currentInput !== "") {
    secondNumber = currentInput;
    let result = operate(currentOperator, firstNumber, secondNumber);
    updateDisplay(result);
    firstNumber = result;
    secondNumber = "";
    currentOperator = "";
    currentInput = "";
  }
}

function handleClearClick() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  currentInput = "";
  updateDisplay("0");
}

document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => handleNumberClick(button.textContent));
});

document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () =>
    handleOperatorClick(button.textContent)
  );
});

document.querySelector(".equals").addEventListener("click", handleEqualsClick);
document.querySelector(".clear").addEventListener("click", handleClearClick);

/*SOUNDS*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audio = new Audio("sounds/press.mp3");
    audio.play();
  });
});
