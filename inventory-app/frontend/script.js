const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');
const nav = document.querySelectorAll('.nav');

openMenu.addEventListener('click', () => {
  menu.classList.add('open');
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
})