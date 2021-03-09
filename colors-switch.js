const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    bodyRef: document.querySelector('body'),
    startBtnRef: document.querySelector('[data-action="start"]'),
    stopBtnRef: document.querySelector('[data-action="stop"]'),
}


refs.startBtnRef.addEventListener('click', onStartClick);
refs.stopBtnRef.addEventListener('click', onStopClick);

let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartClick() {
  refs.startBtnRef.disabled = true;
  interval = setInterval(() => {
    let showRandomColor = randomIntegerFromInterval(1, colors.length);
    refs.bodyRef.style.backgroundColor = colors[showRandomColor];
  }, 1000);
};

function onStopClick() {
  refs.startBtnRef.disabled = false;
  clearInterval(interval);
};
