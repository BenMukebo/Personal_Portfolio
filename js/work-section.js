const htmls = document.getElementsByTagName('html')[0];
const cardContainer = document.querySelector('.card-container');
const popupContainer = document.querySelector('main article');

// Array of data that is implemented in the pop-up window
const projects = [
  {
    id: 'project_1',
    images: {
      img: './images/Snapshoot-Portfolio-mobile1@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_1',
    heading: 'Keeping track of hundreds of components_1',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
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
    description: 'Project_1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
      img: './images/Snapshoot-Portfolio-mobile2@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 2 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_2',
    heading: 'Keeping track of hundreds of components_2',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
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
    description: 'Project_2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
      img: './images/Snapshoot-Portfolio-mobile@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 3 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_3',
    heading: 'Keeping track of hundreds of components_3',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
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
    description: 'Project_3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
      img: './images/Snapshoot-Portfolio-mobile4@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 4 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_4',
    heading: 'Keeping track of hundreds of components_4',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
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
    description: 'Project_4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
      img: './images/Snapshoot-Portfolio-mobile5@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 5 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_5',
    heading: 'Keeping track of hundreds of components_5',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
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
    description: 'Project_5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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
      img: './images/Snapshoot-Portfolio-mobile6@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 6 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory_6',
    heading: 'Keeping track of hundreds of components_6',
    languages: [
      'Ruby on Rails',
      'Css',
      'JavaScript',
      'html',
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
    description: 'Project_6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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

// Implementing the Flex card dynamically

function createCard(cardObject) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="img-card">
  <img src="${cardObject.images.img}" alt="${cardObject.images.altText}">
  </div>
  <h3>${cardObject.name}</h3>
  <ul class="program-lang d-flex">
  ${cardObject.languages.map((lang) => `<li>
   ${lang}</li>`).join('')}
 </ul>
  <button type="button" class="btn-card ${cardObject.id}">See Project</button>`;
  return li;
}

projects.forEach((project) => {
  const card = createCard(project);
  cardContainer.appendChild(card);
});

function createPopup(object) {
  const popupCard = document.createElement('div');
  popupCard.classList.add('card-popup');
  popupCard.id = object.id;
  popupCard.innerHTML = `
  <div class="project-img">
  <img class="card-img" src="${object.images.img}" alt="${object.images.altText}">
    <img class="hide-icon" src="./images/icons/Disabled.svg" alt="close icon">
  </div>
  <div class="article">
    <h3>${object.heading}</h3>
    <ul class="program-lang d-flex">
    ${object.languages.map((lang) => `<li class="btn tag_btn mobile-invisible"> 
                                        ${lang}
                                        </li>`).join('')}

    ${object.technologies.map((tech) => `<li class="btn tag_btn desktop-invisible"> 
                                        ${tech}
                                        </li>`).join('')}
    </ul>
    <p>${object.description}</p>
    <div class="btns-popup d-flex">
      <button type="button" class="btn-card d-flex flex-center"><span>See Live</span><img src="./images/icons/Icon-Export@2x.svg" alt=""></button>
      <button type="button" class="btn-card d-flex flex-center"><span>See Source</span><img src="./images/icons/Icon-GitHub-1.svg" alt=""></button>
    </div>
  </div>`;
  return popupCard;
}

projects.forEach((project) => {
  const popupCard = createPopup(project);
  popupContainer.appendChild(popupCard);
});

// Toggle PopUp window

const buttons = document.querySelectorAll('li.card .btn-card');
const closeButtons = document.querySelectorAll('.card-popup .hide-icon');

buttons.forEach((button) => {
  const currentModal = document.getElementById(button.classList[1]);
  button.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
    currentModal.classList.add('active');
    htmls.style.overflow = 'hidden';
  });
});

closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
  // const activePopup = document.querySelector('.card-popup.active');
    document.querySelector('.card-popup.active').classList.remove('active');
    popupContainer.style.display = 'none';
    htmls.style.overflow = 'auto';
  });
});
