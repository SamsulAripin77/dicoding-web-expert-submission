import Urlpaser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import {createMenusDetailTemplate} from '../../templates/template-creator';



const Detail = {
  async render() {
    return `
        <div id="menus" class="menus"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveWithoutCombiner();
    const menu = await RestaurantDbSource.detailMenus(url.id);
    const menuContainer = document.querySelector('#menus');
    menuContainer.innerHTML = createMenusDetailTemplate(menu);
  },
};

export default Detail;
