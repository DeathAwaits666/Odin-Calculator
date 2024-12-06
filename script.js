/*SOUNDS*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audio = new Audio("sounds/press.mp3");
    audio.play();
  });
});
