const passwords = document.querySelectorAll('.password-check');

const firstPw = document.querySelector('#password');
const secondPw = document.querySelector('#password_conf');
const errorMessage = document.querySelector('.error-message');

secondPw.addEventListener('keyup', checkPassword => {
  if (firstPw.value === secondPw.value) {
    firstPw.classList.remove("error");
    secondPw.classList.remove("error");
    errorMessage.style.visibility = 'hidden';
  } else {
    firstPw.classList.add("error");
    secondPw.classList.add("error");
    errorMessage.style.visibility = 'visible';
  }
})
