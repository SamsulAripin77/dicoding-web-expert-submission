import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import json from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('#hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
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

createListItem(json);
