import CONFIG from '../globals/config';

const createMenusDetailTemplate = (menu) => {
  const foods = menu.menus.foods.map((food) => `<li> ${food.name}</li>`);

  const drinks = menu.menus.drinks.map((drink) => `<li>${drink.name}</li>`);

  const reviews = menu.customerReviews.map((rev) => `<div class="detail-review-item">
                                                        <div class="review-header">
                                                            <p class="review-name">
                                                                <i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>
                                                                &nbsp; ${rev.name}</p>
                                                            <p class="review-date">${rev.date}</p>
                                                        </div>
                                                        <div class="review-body">
                                                            ${rev.review}
                                                        </div>
                                                    </div>`);

  return `
    <img class="menu_postar img-res lazyloaded" src="${CONFIG.IMAGE_URL}/small/${menu.pictureId}" alt="Menu ${menu.name}" >
    <div class="menu_info">
        <table id="list-menu">
                <tr>
                    <th>Menu Makanan</th>
                    <th>Menu Minuman</th>
                </tr>
                <tr>
                   <td>
                        <ul style="none">
                            ${foods.join('')}
                        </ul>
                   </td>
                   <td>
                        <ul style="none">
                            ${drinks.join('')}
                        </ul>
                    </td>
                </tr>
        </table>
    </div>
    <div class="menu_overview">
        <h2>Information</h2>
        <h4>Profile</h4>
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>${menu.name}</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>${menu.address}</td>
                </tr>
                <tr>
                    <td>Kota</td>
                    <td>:</td>
                    <td>${menu.city}</td>
                </tr>
                <tr>
                    <td>Rating</td>
                    <td>:</td>
                    <td>${menu.rating}</td>
                </tr>
            </table>
            <br>
            <p class="menu_deskription">${menu.description}</p>
    </div>
    <h3 class="title-review">Reviews</h3>
    <div class="detail-review grid-3">
        ${reviews.join('')}
    </div>
`;
};

const createMenuItemTemplate = (menu) => `
    <div class="card" >
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
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMenuItemTemplate,
  createMenusDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
