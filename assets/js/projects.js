import getDefaultCardHTML from './templates/defaultCard.js';
import getFirstCardHTML from './templates/firstCard.js';
import getPopupHTML from './templates/projectDetailPopup.js';

const PROJECTS = [
  {
    id: 0,
    name: 'Travellers Hub',
    description: 'Travellers Hub is a travel booking app where the user can register new accounts, log in and book a set of different trip packages, users can add packages and delete them too. It is built and connected by using two different repositories, including the back end (Rails) and the front end (React/Redux).',
    featuredImage: 'project-background-2.png',
    liveVersionLink: 'https://travelers-hub-front.onrender.com',
    sourceLink: 'https://github.com/yonas44/travelers_hub_back-end',
    tags: ['React.js', 'TailwindCSS', 'Rails'],
  },

  {
    id: 1,
    name: 'SpaceX-Hub',
    description: 'Simple React app using Redux to display a list of missions and rockets from an API and allow reservation',
    featuredImage: 'project-background-1.png',
    liveVersionLink: 'https://spacex-hub-tefm.onrender.com',
    sourceLink: 'https://github.com/adebsa2401/SpaceX-Hub',
    tags: ['HTML', 'CSS', 'React.js'],
  },

  {
    id: 2,
    name: 'WikiShow',
    description: 'Simple JavaScript app that allows the user to query TV shows from an API. He can even leave comments and likes on any show',
    featuredImage: 'project-background-3.png',
    liveVersionLink: 'https://adebsa2401.github.io/Microverse-Capstone-2/',
    sourceLink: 'https://github.com/adebsa2401/Microverse-Capstone-2',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 3,
    name: 'Bookstore',
    description: 'Simple React app that allows creating books. It uses Redux and a backend API to save and sync data across the application',
    featuredImage: 'project-background-4.png',
    liveVersionLink: 'https://adebsa2401.github.io/Bookstore/',
    sourceLink: 'https://github.com/adebsa2401/Bookstore',
    tags: ['HTML', 'CSS', 'React.js'],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  PROJECTS.forEach((project, index) => {
    const cardHTML = index === 0 ? getFirstCardHTML(project) : getDefaultCardHTML(project);
    const card = document.createElement('div');
    card.innerHTML = cardHTML.trim();

    if (index === 0) {
      document.getElementById('projects-list').prepend(card.firstChild);
    } else {
      document.getElementById('projects-grid').append(card.firstChild);
    }

    const popup = document.createElement('div');
    popup.innerHTML = getPopupHTML(project).trim();
    document.body.prepend(popup.firstChild);
  });

  Array.from(document.getElementsByClassName('project-card')).forEach((element) => {
    element.addEventListener('mouseover', () => {
      const id = element.querySelector('.project-detail-button').id.split('-').reverse()[0];
      const project = PROJECTS.find((project) => project.id === parseInt(id, 10));
      element.style.backgroundImage = `url("assets/images/${project.featuredImage}")`;
    });
  });

  Array.from(document.getElementsByClassName('project-card')).forEach((element) => {
    element.addEventListener('mouseout', () => {
      const id = element.querySelector('.project-detail-button').id.split('-').reverse()[0];
      const project = PROJECTS.find((project) => project.id === parseInt(id, 10));
      element.style.backgroundImage = `linear-gradient(179.35deg, #26262600 0.85%, #262626e6 84%), url("assets/images/${project.featuredImage}")`;
    });
  });

  Array.from(document.getElementsByClassName('project-detail-button')).forEach((element) => {
    element.addEventListener('click', (event) => {
      const id = event.target.id.split('-').reverse()[0];
      document.getElementById(`project-popup-${id}`).style.display = 'flex';
    });
  });

  Array.from(document.getElementsByClassName('close-project-popup-icon')).forEach((element) => {
    element.addEventListener('click', (event) => {
      event.target.closest('.project-popup').style.display = 'none';
    });
  });
});
