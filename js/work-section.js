
const cardContainer = document.querySelector('.card-container');

// Array of data that is implemented in the pop-up window
const projects = [
  {
    id: 'project_1',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory_1',
    heading: 'Keeping track of hundreds of components_1',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html'
      ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: `Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
  },
  {
    id: 'project_2',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory_2',
    heading: 'Keeping track of hundreds of components_2',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html'
      ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: `Project_2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
  },
  {
    id: 'project_3',
    images: {
      img: './images/Snapshoot-Portfolio@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory_3',
    heading: 'Keeping track of hundreds of components_3',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html'
      ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: `Project_3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
  },
  {
    id: 'project_4',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory_4',
    heading: 'Keeping track of hundreds of components_4',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html'
      ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: `Project_4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
  },
  {
    id: 'project_5',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory_5',
    heading: 'Keeping track of hundreds of components_5',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html'
      ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: `Project_5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
  },
  {
    id: 'project_6',
    images: {
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
    },
    name: 'Multi-Post Stories Gain+Glory_6',
    heading: 'Keeping track of hundreds of components_6',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html'
      ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: `Project_6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
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
  },
];


function createCard(cardObject) {
  let li = document.createElement('li');
  li.className= 'card d-flex';
  li.innerHTML = `<img src="${cardObject.images.img}" alt="">
  <h3>${cardObject.name}</h3>
  <ul class='program-lang d-flex'>
  ${cardObject.languages.map((lang) => `<li>
   ${lang}</li>`).join('')}
 </ul>
  <button type="button" class="btn-card">See Project</button>`;
  return li;
}

