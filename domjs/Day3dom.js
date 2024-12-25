const sum = document.getElementById("sum");
const less = document.getElementById("less");
const num = document.getElementById("num");
const alert = document.querySelector("h5");

sum.addEventListener("click", function () {
  num.textContent = Number(num.textContent) + 1;
});

less.addEventListener("click", function () {
  if (num === 0) {
    alert.style.visibility = "visible";
    num.createElments
  }
  num.textContent = Number(num.textContent) - 1;
});

document.getElementById("box1");
