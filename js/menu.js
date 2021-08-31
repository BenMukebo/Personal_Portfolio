const html = document.getElementsByTagName('html')[0];
const navMenu = document.querySelector('.nav-menu');
const showBtn = document.querySelector('nav .show-menu-btn');
const closedBtn = document.querySelector('nav .closed-menu-btn');
const navLinks = document.querySelectorAll('nav ul li');

function showMenu() {
  navMenu.classList.add('open');
  closedBtn.style.display = 'block';
  html.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  closedBtn.style.display = 'none';
  html.style.overflow = 'auto';
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

showBtn.addEventListener('click', showMenu);
closedBtn.addEventListener('click', closeMenu);

const cardContainer = document.querySelector('.card-container');
const mobileData = [// Array of data that is implemented in the pop-up window
  {
    id: 'project_1',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory',
    technologies: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'html',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'Keeping track of hundreds of components',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project_2',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory',
    technologies: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'html',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'Keeping track of hundreds of components',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project_3',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory',
    technologies: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'html',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'Keeping track of hundreds of components',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project_4',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory',
    technologies: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'html',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'Keeping track of hundreds of components',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project_5',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory',
    technologies: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'html',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'Keeping track of hundreds of components',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 'project_6',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory',
    technologies: [
      'Ruby on Rails',
      'Css',
      'Javascript',
      'html',
      'Github',
      'Bootstrap',
      'Terminal',
      'Codepen',
      'Codekit',
    ],
    heading: 'Keeping track of hundreds of components',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
      },
      {
        text: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
      },
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  }
];
