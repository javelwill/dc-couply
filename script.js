const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', () => {
  nav.classList.add('nav-open')
})

closeBtn.addEventListener('click', () => {
  nav.classList.remove('nav-open')
})