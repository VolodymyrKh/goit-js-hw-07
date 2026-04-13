function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('.js-box-number'),
  createBtnEl: document.querySelector('.js-create-btn'),
  destroyBtnEl: document.querySelector('.js-destroy-btn'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.append(div);
  }

  boxes.innerHTML = '';
  boxes.append(fragment);
}

function removeBoxes() {
  boxes.innerHTML = '';
}

refs.createBtnEl.addEventListener('click', () => {
  const amount = Number(refs.inputEl.value);

  if (amount < 1 || amount > 100) return;

  createBoxes(amount);
  refs.inputEl.value = '';
});

refs.destroyBtnEl.addEventListener('click', removeBoxes);
