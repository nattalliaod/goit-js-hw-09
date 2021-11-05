const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}
const { body, startBtn, stopBtn } = refs;
let intervalId = null;
const INTERVAL_DELAY = 1000;

stopBtn.disabled = true;

startBtn.addEventListener('click', onStartChangeColorClick);
stopBtn.addEventListener('click', onStopBtnClick);

function setRandomColor () {
   body.style.backgroundColor = getRandomHexColor();
}

function onStartChangeColorClick() {
    intervalId = setInterval(setRandomColor, INTERVAL_DELAY);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function onStopBtnClick () {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;

    body.style.backgroundColor = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
