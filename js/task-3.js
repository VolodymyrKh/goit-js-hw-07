const refs = {
  inputName: document.querySelector('.js-name-input'),
  output: document.querySelector('.js-name-output'),
};

refs.inputName.addEventListener('input', () => {
  refs.output.textContent = refs.inputName.value.trim() || 'Anonymous';
});
