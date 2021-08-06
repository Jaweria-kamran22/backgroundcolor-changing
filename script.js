const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red", "yellow", "green", "blue", "orange"];

body.style.backgroundColor = "black";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
