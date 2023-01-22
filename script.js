let runningTotal = 0;
let buffer = "0"; //what's indicated on the screen
let previousOperator; //what was clicked
const screen = document.querySelector(".screen");
alert("Hello! I Will Add more options to this Project soon!!");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}
function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;

    case "=":
      if (previousOperator === null) {
        return;
      }
      removeOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;

    case "⬅":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "√":
      runningTotal = Math.sqrt(buffer);

      buffer = runningTotal;
      break;

    case "sin":
      runningTotal = Math.sin(buffer);

      buffer = runningTotal;
      break;
    case "cos":
      runningTotal = Math.cos(buffer);

      buffer = runningTotal;
      break;
    case "tan":
      runningTotal = Math.tan(buffer);

      buffer = runningTotal;
      break;
    case "ln":
      runningTotal = Math.log(buffer);

      buffer = runningTotal;
      break;

    case "X²":
      runningTotal = Math.pow(buffer, 2);

      buffer = runningTotal;
      break;
    case "X³":
      runningTotal = Math.pow(buffer, 3);

      buffer = runningTotal;
      break;

    case "π":
      runningTotal = Math.PI;

      buffer = +runningTotal;
      break;

    case "+":
    case ",":
    case "-":
    case "*":
    case "/":
    case "%":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    removeOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function removeOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "*") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
