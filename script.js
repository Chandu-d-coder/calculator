let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let str = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      str = "";
      display.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      display.value = str;
    } else if (e.target.innerHTML == "=") {
      if (e.target.innerHTML == "=" && display.value == "") {
        str = "";
        display.value = str;
      } else {
        str = eval(str);
        display.value = str;
      }
    } else if (
      (e.target.innerHTML == "%" && display.value == "") ||
      (e.target.innerHTML == "/" && display.value == "") ||
      (e.target.innerHTML == "*" && display.value == "") ||
      (e.target.innerHTML == "-" && display.value == "") ||
      (e.target.innerHTML == "+" && display.value == "") ||
      (e.target.innerHTML == "-" && display.value == "") ||
      (e.target.innerHTML == "00" && display.value == "")
    ) {
      str = "";
      display.value = str;
    } else {
      str += e.target.innerHTML;
      display.value = str;
    }
  });
});
