const hide_pw = document.querySelector('.fas.fa-eye-slash')
const show_pw = document.querySelector('.fas.fa-eye')
const eye_icon_box = document.querySelector('.eye_icon_box');
const input = document.querySelector('#myInput');
const login_box = document.querySelector('.wrapper');
const menu = document.querySelector('.menu');
const x = document.querySelector('.fas.fa-times');
const bars = document.querySelectorAll('.bar');

console.log(hide_pw);

eye_icon_box.addEventListener('click', function () {
  hide_pw.classList.toggle('active');
  show_pw.classList.toggle('active');
  if (input.type === 'password') {
    input.type = 'text';
    // console.log('testing')
  } else if (input.type === 'text') {
    input.type = 'password';
  }

  console.log(input);
});

menu.addEventListener('click', () => {
  login_box.classList.toggle('active');
  bars.forEach(bar => {
    bar.classList.toggle('active');
  })
  x.classList.toggle('active');
})
