const myDocument = document.querySelector(".btn-container");
const documentBody = document.querySelector("body");
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

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
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
