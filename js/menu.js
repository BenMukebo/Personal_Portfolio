const html = document.getElementsByTagName('html')[0];
const navMenu = document.querySelector('.nav-menu');
const showBtn = document.querySelector('nav .show-menu-btn');
const closedBtn = document.querySelector('nav .closed-menu-btn');
const navLinks = document.querySelectorAll('nav ul li');

function showMenu() {
  navMenu.classList.add('open');
  navMenu.classList.remove('hide');
  setTimeout(() => {
    closedBtn.style.display = 'block';
  }, 1000);
  html.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  navMenu.classList.add('hide');
  setTimeout(() => {
    closedBtn.style.display = 'none';
  }, 500);
  html.style.overflow = 'auto';
}

function directMenu() {
  navMenu.classList.remove('open');
  closedBtn.style.display = 'none';
  html.style.overflow = 'auto';
}

navLinks.forEach((link) => {
  link.addEventListener('click', directMenu);
});

showBtn.addEventListener('click', showMenu);
closedBtn.addEventListener('click', closeMenu);
