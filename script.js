"use strict";

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const toggle = document.querySelector(".chckbox");
document.body.classList.add("default");

///////////Theme change ///////////
toggle.addEventListener("change", () => {
  switch (toggle.value) {
    case "0":
      document.body.classList.remove("dark");
      document.body.classList.remove("light");
      document.body.classList.add("default");
      break;
    case "1":
      document.body.classList.remove("default");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      break;
    case "2":
      document.body.classList.remove("dark");
      document.body.classList.remove("default");
      document.body.classList.add("light");
      break;
  }
});

///////////////calculator/////////////

let numbers = [];
let a = 0;
let b = 0;
let op = "";

//calc function//////////////////////////////

const calc = function (operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;

    default:
      break;
  }
};

const clear = function () {
  a = 0;
  b = 0;
  op = "";
  let len = numbers.length;
  for (let i = 0; i < len; i++) {
    console.log(numbers);
    numbers.pop();
  }
};

const reset = function () {
  clear();
  display.value = "";
};
buttons.forEach((btn, i) => {
  buttons[i].addEventListener("click", function () {
    let btns = buttons[i].textContent;
    const opr = ["+", "-", "*", "/"];

    //////////////////////////////////////////////

    // deletion//////////////////
    if (btns === "DEL") {
      numbers.pop();
      display.value = "";
      for (let i = 0; i < numbers.length; i++) {
        display.value += numbers[i];
      }
      return;
    }
    //////////////////

    //operators/////
    for (let i = 0; i < opr.length; i++) {
      if (opr[i] == btns) {
        if (op == "") {
          op = btns;
        } else {
          return;
        }

        a = parseFloat(display.value);

        display.value = " ";
        return;
      }
    }
    ///////////////////

    //EQUAL//////////////
    if (btns == "=") {
      b = parseFloat(display.value);
      display.value = calc(op);
      clear();
      return;
    }
    /////////////////////

    ///////RESET///////////
    if (btns == "RESET") {
      reset();
      return;
    }

    /////////////////

    //btns displaying////

    display.value += btns;
    numbers.push(parseFloat(btns));
    /////////////////////
  });
});
