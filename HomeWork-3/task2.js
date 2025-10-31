const documentCub = document.querySelector(".cub-container");
const main = document.querySelector("main");
const button = document.createElement("button");

function getActive() {
  return document.querySelector(".active-cub");
}

const STEP = 50;
let intervalId = null;

function renderCub() {
  const div = document.createElement("div");

  div.classList.add("cub");

  documentCub.appendChild(div);

  return div;
}

function setActive(el) {
  const prev = getActive();
  if (prev) prev.classList.remove("active-cub");
  el.classList.add("active-cub");
}

function renderBtn() {
  button.classList.add("startBtn");
  button.textContent = "Pres Start";
  button.type = "button";
  main.append(button);
  return button;
}

renderBtn();

const startGameBtn = document.querySelector(".startBtn");

function getBounds(el) {
  const maxX = documentCub.clientWidth - el.offsetWidth;
  const maxY = documentCub.clientHeight - el.offsetHeight;
  return { maxX, maxY };
}
function getPositionCub(el) {
  const y = el.offsetTop;
  const x = el.offsetLeft;
  return { y, x };
}
function setPositionCub(el, x, y) {
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
}

const first = renderCub();

setActive(first);

setPositionCub(first, 0, 0);

document.body.onkeydown = (event) => {
  const el = getActive();
  if (!el) return;
  const { maxX, maxY } = getBounds(el);
  let { x, y } = getPositionCub(el);
  const atBottom = y >= maxY;

  if (event.key === "ArrowRight" && x < maxX && !atBottom) x += STEP;
  if (event.key === "ArrowLeft" && x > 0 && !atBottom) x -= STEP;
  if (event.key === "ArrowDown" && y < maxY) y += STEP;

  if (y >= maxY) {
    el.classList.add("fixed");
    el.classList.remove("active-cub");
    const next = renderCub();
    setPositionCub(next, 0, 0);
    setActive(next);
  }

  setPositionCub(el, x, y);

  event.preventDefault();
};

function stopGame() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function startGame() {
  intervalId = setInterval(() => {
    const el = getActive();
    if (!el) return;
    const { maxY } = getBounds(el);
    let { x, y } = getPositionCub(el);

    if (y >= maxY) {
      setPositionCub(el, x, maxY);
      el.classList.add("fixed");
      el.classList.remove("active-cub");
      const next = renderCub();

      setPositionCub(next, 0, 0);
      setActive(next);

      return;
    }

    y += STEP;
    setPositionCub(el, x, y);
  }, 1000);
}
startGameBtn.addEventListener("click", startGame);
// Попрацювати з структурою.
