
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

function createCard(){
  
}