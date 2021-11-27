const htmls = document.getElementsByTagName('html')[0];
const cardContainer = document.querySelector('.card-container');
const popupContainer = document.querySelector('main article');

// Array of data that is implemented in the pop-up window
const projects = [
  {
    id: 'project_1',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile1@2x.png',
      img: './images/Project_1.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 1 preview image',
    },
    name: 'CLOUDFLARE',
    heading: 'CLOUDFLARE MERKLE TOWN',
    languages: [
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Terminal',
      'Codepen',
    ],

    // button: 'See Project',
    description: 'Cloudflare has more than 50+ experienced designers and JS developers on board, we build custom digital products for forward - thinking enterprises and startups. With the main office based in Warsaw (Poland), we also operate in different locations, including the United States and the United Kingdom.',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://benmukebo.github.io/Capstone_Project_One/',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/BenMukebo/Capstone_Project_One',
      },
    ],
  },
  {
    id: 'project_2',
    images: {
      img: './images/Project_2.png',
      // img: './images/Snapshoot-Portfolio-mobile6@2x.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 3 preview image',
    },
    name: 'Leaderboard',
    heading: 'Leaderboard',
    languages: [
      'SCSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'ECMAScript 6',
      'Rest Apis',
      'Terminal',
      'Codepen',
    ],
    // button: 'See Project',
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://thirsty-montalcini-8d768c.netlify.app',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/BenMukebo/Leaderboard',
      },
    ],
  },
  {
    id: 'project_3',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile4@2x.png',
      // img: './images/Snapshoot-Portfolio-mobile@3x.png',
      img: './images/Project_3.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 4 preview image',
    },
    name: 'Math magicians',
    heading: 'Math magicians',
    languages: [
      'React',
      'Redux',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Terminal',
      'Jest Testing',
    ],
    // button: 'See Project',
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and Read a random math-related quote.',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://benmukebo-math-magicians.netlify.app',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/BenMukebo/Math-magicians',
      },
    ],
  },
  {
    id: 'project_4',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile2@2x.png',
      img: './images/Project_4.png',

      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 2 preview image',
    },
    name: 'ShapelyDemo',
    heading: 'ShapelyDemo',
    languages: [
      'SCSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Dom Manupulation',
      'Terminal',
      'Git',
    ],
    // button: 'See Project',
    description: '"Shapely" is a powerful and versatile one-page WordPress theme with pixel-perfect design and outstanding functionality. It is by far the most advanced free WordPress theme available today with loads of unmatched customization options.',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://benmukebo.github.io/ShapelyDemo/',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/BenMukebo/ShapelyDemo',

      },
    ],
  },
  {
    id: 'project_5',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile5@2x.png',
      // img: './images/Snapshoot-Portfolio-mobile2@2x.png',
      img: './images/Project_5.png',
      cancelPop: './images/icons/Disabled@2x.png',
      altText: 'project 5 preview image',
    },
    name: 'Covid_19_data',
    heading: 'Covid_19_data ',
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
    description: 'Covid 19 Data is a tracking site that provides the necessary information on covid 19 cases in any African country and their update',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://benmukebo-covid-19-data.herokuapp.com/',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/BenMukebo/covid-19-data',
      },
    ],
  },
  {
    id: 'project_6',
    images: {
      // img: './images/Snapshoot-Portfolio-mobile6@2x.png',
      img: './images/Snapshoot-Portfolio-mobile1@2x.png',
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
        liveDemo: '',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: '',
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
  <button type="button" class="btn-card ${cardObject.id}" id="${cardObject.id}">See Project</button>`;
  return li;
}

projects.forEach((project) => {
  const card = createCard(project);
  cardContainer.appendChild(card);
});

// Implementing the Popup Window dynamically

function createPopup(object) {
  const popupCard = document.createElement('div');
  popupCard.classList.add('card-popup');
  popupCard.id = object.id;
  popupCard.innerHTML = `
  <div class="fixed">
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
    <a href="${object.list[0].liveDemo}"><button type="button" class="btn-card d-flex flex-center"><span>${object.list[0].text}</span><img src="./images/icons/Icon-Export@2x.svg" alt=""></button></a>
    <a href="${object.list[1].codeSource}"><button type="button" class="btn-card d-flex flex-center"><span>${object.list[1].text2}</span><img src="./images/icons/Icon-GitHub-1.svg" alt=""></button></a>
    </div>
  </div>
  </div>`;
  return popupCard;
}

// Toggle PopUp window

const buttons = document.querySelectorAll('li.card .btn-card');
const four = document.querySelectorAll('.card-popup .program-lang li:nth-child(4)');

four.forEach((li) => {
  li.style.display = 'none';
});

projects.forEach((project) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (project.id === button.id) {
        const popupCard = createPopup(project);
        popupContainer.appendChild(popupCard);

        // Show the popup window

        document.querySelector('.card-popup').classList.add('active');
        popupContainer.style.visibility = 'visible';
        htmls.style.overflow = 'hidden';

        const popAnimation = popupContainer.querySelector('.card-popup');
        popAnimation.classList.add('inActive');
        setTimeout(() => {
          popAnimation.classList.remove('inActive');
        }, 1000);

        const closeBtn = document.querySelector('.card-popup .hide-icon');

        // Hide the popup window

        closeBtn.addEventListener('click', () => {
          const popAnimation = popupContainer.querySelector('.card-popup');
          popAnimation.classList.add('outActive');
          // console.log(popAnimation);
          setTimeout(() => {
            document.querySelector('.card-popup.active').classList.remove('active');
            popAnimation.classList.remove('outActive');
            popupContainer.style.visibility = 'hidden';
            htmls.style.overflow = 'auto';
          }, 1000);
          setTimeout(() => {
            popupContainer.innerHTML = '';
          }, 1000);
        });
      }
    });
  });
});