const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('nav .menu-btn');
const closedBtn = document.querySelector('nav .closed-menu-btn')

menuBtn.addEventListener('click', showMenu);
closedBtn.addEventListener('click', closeMenu);

function showMenu(){
    navMenu.classList.add('open');
    closedBtn.style.display = 'block';
} 

function closeMenu(){
    navMenu.classList.remove('open');
    closedBtn.style.display = 'none';
}