// const header = document.getElementsByTagName('header[0]');
const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('nav .menu-btn');
const closedMenu = document.querySelector('nav .closed-menu-btn')

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    navMenu.classList.add('open');
    closedMenu.style.display = 'block';
} 

