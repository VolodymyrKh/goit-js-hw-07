function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorEl: document.querySelector('.change-color'),
  colorEl: document.querySelector('.color'),
};

refs.changeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.colorEl.textContent = color;
});
