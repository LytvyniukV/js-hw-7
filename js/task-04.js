

const form = document.querySelector('.login-form');

const response = {};

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (login === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    data.forEach((value, key) => {
      response[key] = value;
    });
    console.log(response);
    form.reset();
  }
});
