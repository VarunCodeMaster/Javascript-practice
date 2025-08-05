let shouldResetDisplay = false;

const display = document.getElementById("type");

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const specialButtons = document.querySelectorAll("[data-action]");

numberButtons.forEach((button) => {
  //NodeList of all elements
  button.addEventListener("click", () => {
    const value = button.dataset.number === "dot" ? "." : button.dataset.number;

    if (shouldResetDisplay) {
      display.value = value === "." ? "0." : value;
      shouldResetDisplay = false;
      return;
    }

    if (value === ".") {
      const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
      if (lastNumber.includes(".")) {
        return;
      }
    }

    if (shouldResetDisplay) {
      display.value = value;
      shouldResetDisplay = false;
    } else {
      display.value += value;
    }
  });
});

operatorButtons.forEach((button) => {
  const equalButton = document.querySelector('[data-operator="equal"]');

  equalButton.addEventListener("click", () => {
    try {
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
      shouldResetDisplay = true;
    } catch (error) {
      display.value = "Error";
      shouldResetDisplay = true;
    }
  });
  button.addEventListener("click", () => {
    const operator = button.dataset.operator;

    let symbol;
    switch (operator) {
      case "plus":
        symbol = "+";
        break;
      case "minus":
        symbol = "-";
        break;
      case "divide":
        symbol = "/";
        break;
      case "multiplication":
        symbol = "*";
        break;
      case "equal":
        return;
    }

    display.value += symbol;
  });
});

specialButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    switch (action) {
      case "clear":
        display.value = "";
        break;

      case "plus-minus":
        if (display.value) {
          const current = parseFloat(display.value);
          display.value = -current;
        }
        break;

      case "percentage":
        if (display.value) {
          const current = parseFloat(display.value);
          display.value = current / 100;
        }
        break;
    }
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  animateKeyPress(key);

  display.classList.add("pulse");
  setTimeout(() => display.classList.remove("pulse"), 300);

  if (!isNaN(key) || key === ".") {
    const clickValue = key === "." ? "." : key;

    const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
    if (clickValue === "." && lastNumber.includes(".")) return;

    if (shouldResetDisplay) {
      display.value = clickValue === "." ? "0." : clickValue;
      shouldResetDisplay = false;
    } else {
      display.value += clickValue;
    }
  }

  if (["+", "-", "*", "/"].includes(key)) {
    display.value += key;
  }

  if (key === "Enter") {
    try {
      display.value = eval(display.value);
      shouldResetDisplay = true;
    } catch {
      display.value = "Error";
      shouldResetDisplay = true;
    }
  }

  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (key === "Escape") {
    display.value = "";
  }

  function animateKeyPress(key) {
    // Map for dot and operators
    const keyMap = {
      "*": "multiplication",
      "/": "divide",
      "+": "plus",
      "-": "minus",
      "=": "equal",
      Enter: "equal",
      ".": "dot",
    };

    // Try to find a number button
    let button;
    if (!isNaN(key)) {
      button = document.querySelector(`[data-number="${key}"]`);
    } else if (keyMap[key]) {
      const selector =
        key === "."
          ? `[data-number="dot"]`
          : `[data-operator="${keyMap[key]}"]`;
      button = document.querySelector(selector);
    } else if (key === "Escape") {
      button = document.querySelector('[data-action="clear"]');
    } else if (key === "%") {
      button = document.querySelector('[data-action="percentage"]');
    }

    // If found, apply pressed animation
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => button.classList.remove("pressed"), 150);
    }
  }
});
