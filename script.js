const passwords = document.querySelectorAll('.error');

const first = document.querySelector('#password');
const second = document.querySelector('#password_conf');
const errorMessage = document.querySelector('.error-message');

passwords.forEach((password) => {
  password.addEventListener('keyup', checkPassword => {
    if (first.value === second.value) {
      first.classList.remove("error");
      second.classList.remove("error");
      errorMessage.style.visibility = 'hidden';
    }
    else {
      first.classList.add("error");
      second.classList.add("error");
      errorMessage.style.visibility = 'visible';
    }
  })
})


// buttons.forEach((button) => {
//   button.addEventListener('click', function (e) { 
//     playerSelection = e.target.id;
//     midMsg.textContent = "";
//     tracker.style.visibility = "visible";
//     round.textContent = `Round: ${rounds + 1}`;
//     game();
//     });
// });



