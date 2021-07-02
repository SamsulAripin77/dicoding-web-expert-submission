import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import { createMenusDetailTemplate } from '../../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';


const Detail = {
  async render() {
    return `
        <div id="menus" class="menu">
        
        </div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailMenus(url.id);

    const menuContainer = document.querySelector('#menus');
    menuContainer.innerHTML = createMenusDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    })
  },
};

export default Detail;
