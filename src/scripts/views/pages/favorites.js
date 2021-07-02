import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";
import { createMenuItemTemplate } from "../../templates/template-creator";

const Favorites = {
  async render() {
    return `
        <div class="content">
          <h2 class="content_heading">Your favorite restaurant</h2>
          <div id="list-rest" class="menus">
        
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list-rest');
    restaurant.forEach((restaurant) => {
      console.log(restaurant);
      restaurantContainer.innerHTML += createMenuItemTemplate(restaurant)
    })
  },
};

export default Favorites;
