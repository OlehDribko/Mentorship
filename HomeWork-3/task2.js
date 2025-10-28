const documentCub = document.querySelector(".cub-container");
const main = document.querySelector("main");
const div = document.createElement("div");
const button = document.createElement("button");

const STEP = 50;
let intervalId = null;

function renderCub() {
  div.classList.add("cub");
  documentCub.appendChild(div);

  return div;
}
renderCub();
function renderBtn() {
  button.classList.add("startBtn");
  button.textContent = "Pres Start";
  button.type = "button";
  main.append(button);
  return button;
}
renderBtn();

function fixCub() {}
const cub = document.querySelector(".cub");
const startGameBtn = document.querySelector(".startBtn");

let y = cub.offsetTop;
let x = cub.offsetLeft;
// спробвати інкапсулювати.
function getBounds() {
  const maxX = documentCub.clientWidth - cub.offsetWidth;
  const maxY = documentCub.clientHeight - cub.offsetHeight;
  return { maxX, maxY };
}
function getPositionCub() {
  const y = cub.offsetTop;
  const x = cub.offsetLeft;
  return { y, x };
}
function setPositionCub(x, y) {
  cub.style.left = `${x}px`;
  cub.style.top = `${y}px`;
}

document.body.onkeydown = (event) => {
  const { maxX, maxY } = getBounds();
  let { x, y } = getPositionCub();
  const atBottom = y >= maxY;

  if (event.key === "ArrowRight" && x < maxX && !atBottom) x += STEP;
  if (event.key === "ArrowLeft" && x > 0 && !atBottom) x -= STEP;
  if (event.key === "ArrowDown" && y < maxY) y += STEP;

  setPositionCub(x, y);

  event.preventDefault();
};

function stopGame() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startGame() {
  if (intervalId) return;

  intervalId = setInterval(() => {
    const { maxY } = getBounds();
    let { x, y } = getPositionCub();
    if (y >= maxY) {
      y = maxY;
      cub.style.top = `${y}px`;
      stopGame();
      return;
    }
    y += STEP;
    setPositionCub(x, y);
  }, 1000);
}
startGameBtn.addEventListener("click", startGame);
// Попрацювати з структурою.
