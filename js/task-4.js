const refs = {
  loginForm: document.querySelector('.js-login-form'),
};

const onloginFormSubmit = event => {
  event.preventDefault();

  const formData = {
    [refs.loginForm.elements.email.name]: refs.loginForm.elements.email.value,
    [refs.loginForm.elements.password.name]:
      refs.loginForm.elements.password.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('Усі поля мають бути заповнені!');

    return;
  }

  console.dir(formData);

  refs.loginForm.reset();
};

refs.loginForm.addEventListener('submit', onloginFormSubmit);
