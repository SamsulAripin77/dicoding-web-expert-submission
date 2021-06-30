import CONFIG from '../globals/config';

const createMenusDetailTemplate = (menu) => `
    <h2 class="menu_name">${menu.name}</h2> 
    <p class="menu_deskription">${menu.description}</p>
    <span>${menu.city}</span>
    <small>${menu.rating}</small>
`

const createMenuItemTemplate = (menu) => `
<div class="card">
<a href="${`/#/detail/${menu.id}`}">
    <div class="img-container">
        <img src="${CONFIG.IMAGE_URL}/small/${menu.pictureId}" alt="Menu ${menu.name}" class="img-res lazyloaded">
        <span class="card-title">
            <p>${menu.name} - ${menu.city}</p>
        </span>
        <span class="card-rating">
            <i class="fa fa-star"></i>
            <span>${menu.rating}</span>
        </span>
    </div>
    <div class="card-content">
        <p class="card-content-title">Description</p>
        <p class="truncate">
            ${menu.description}
        </p>
    </div>
</a>
</div>
`

export { createMenuItemTemplate, createMenusDetailTemplate };