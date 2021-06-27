import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import json from '../DATA.json';

import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

function createListItem(data) {
  const listContainer = document.querySelector('#list-rest');
  data.restaurants.forEach((element) => {
    listContainer.innerHTML += `
            <div class="card">
            <a href="#">
                <div class="img-container">
                    <img src="${element.pictureId}" alt="Menu ${element.name}" class="img-res lazyloaded">
                    <span class="card-title">
                        <p>${element.name} - ${element.city}</p>
                    </span>
                    <span class="card-rating">
                        <i class="fa fa-star"></i>
                        <span>${element.rating}</span>
                    </span>
                </div>
                <div class="card-content">
                    <p class="card-content-title">Description</p>
                    <p class="truncate">
                        ${element.description}
                    </p>
                </div>
            </a>
            </div>
        `;
  });
}

// createListItem(json);
