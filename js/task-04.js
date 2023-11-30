class User {
  constructor(email, password){
    this.email = email;
    this.password = password;
  };
  setEmail(newEmail) {
    this.email = newEmail;
  };
  setPassword(newPassword) {
    this.password = newPassword;
  };
}

const newUser = new User;
 

const getUserData = () => {
  const registerForm = document.querySelector('.login-form');
  registerForm.addEventListener('submit', handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (login === '' || password === '') {
      alert('All form fields must be filled in');
    } else {
      newUser.setEmail(login);
      newUser.setPassword(password);
      console.log(newUser);
      form.reset();
    }
  }
};

getUserData();

