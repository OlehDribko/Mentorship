const documentCub = document.querySelector(".cub-container");

function renderCub() {
  return `
        <div class="cub">
    </div>`;
}

function renderBtn() {
  return `<button class="startBtn" type="button">Pres Start</button>`;
}

documentCub.insertAdjacentHTML("beforeend", renderCub());
documentCub.insertAdjacentHTML("afterend", renderBtn());

const cub = document.querySelector(".cub");
const startGameBtn = document.querySelector(".startBtn");

let y = cub.offsetTop;
let x = cub.offsetLeft;

const maxX = documentCub.clientWidth - cub.offsetWidth;
const maxY = documentCub.clientHeight - cub.offsetHeight;

const STEP = 50;

document.body.onkeydown = (event) => {
  documentCub.clientHeight;

  console.log(event.key);
  if (event.key === "ArrowRight" && x < maxX) x += STEP;
  if (event.key === "ArrowLeft" && x > 0) x -= STEP;
  if (event.key === "ArrowDown" && y < maxY) y += STEP;

  cub.style.left = x + "px";
  cub.style.top = y + "px";
  event.preventDefault();
  console.log(`x:${x}, y:${y}`);
};

let intervalId = null;

startGameBtn.addEventListener("click", startGame);

function startGame() {
  if (intervalId) return;
  console.log(y);
  intervalId = setInterval(() => {
    if (y >= maxY - STEP) {
      clearInterval(intervalId);
      intervalId = null;
    }
    y += STEP;
    cub.style.top = y + "px";
  }, 1000);
}
