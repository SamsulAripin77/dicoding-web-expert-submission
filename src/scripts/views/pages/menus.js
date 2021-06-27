import RestaurantDbSource from "../../data/restaurant-source";
import { createMenuItemTemplate } from "../../templates/template-creator";

const Menus = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">List Menu</h2>
    <div id="menus" class="menus">

    </div>
  </div>
        `;
  },

  async afterRender() {
    const menus = await RestaurantDbSource.listMenus();
    console.log(menus);
    const menuContainer = document.querySelector('#menus');
    menus.forEach((menu) =>{
        menuContainer.innerHTML += createMenuItemTemplate(menu);
    })
  },
};

export default Menus;
