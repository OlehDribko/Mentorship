const myDocument = document.querySelector(".btn-container");
const documentBody = document.querySelector("body");

//змінити на рендер через createElement.
const renderBtn = () => {
  return `
   
      <button class="btn-change"  type="button">
        Start Color Change
      </button>
      <button class="btnStop" type="button">Stop Color Change</button>
   
  `;
};

myDocument.insertAdjacentHTML("beforeend", renderBtn());

const stopChangeColorBtn = document.querySelector(".btnStop");
const onChangeBtn = document.querySelector(".btn-change");
let intervalId = null;

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function changeColor() {
  if (intervalId) return;

  intervalId = setInterval(
    () => (documentBody.style.backgroundColor = randomColor()),
    2000
  );
}

function stopChangeColor() {
  clearInterval(intervalId);
  intervalId = null;
}

onChangeBtn.addEventListener("click", changeColor);
stopChangeColorBtn.addEventListener("click", stopChangeColor);
