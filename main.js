const time = document.querySelector('.show_timer');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
  const elapsedTime = Date.now() - startTime + stopTime;

  const h = String(Math.floor(elapsedTime / 3600000));
  const m = String(Math.floor((elapsedTime / 60000) % 60));
  const s = String(Math.floor((elapsedTime / 1000) % 60));
  const ms = String(Math.floor(elapsedTime) % 10);

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutID = setTimeout(displayTime, 100);
};

// 初期時のボタンを制御
startButton.disabled = false;
stopButton.disabled = true;
resetButton.disabled = true;

startButton.addEventListener('click', ()=> {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;

  startTime = Date.now()
  displayTime();
}); 

stopButton.addEventListener('click', ()=> {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;

  clearTimeout(timeoutID);
  stopTime +=(Date.now() - startTime);
}); 

resetButton.addEventListener('click', ()=> {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;

  time.textContent = "0:0:0:0";
  stopTime = 0;
}); 

