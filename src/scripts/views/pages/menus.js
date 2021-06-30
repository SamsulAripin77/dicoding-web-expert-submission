import RestaurantDbSource from "../../data/restaurant-source";
import { createMenuItemTemplate } from "../../templates/template-creator";

const Menus = {
  async render() {
    return `
    <section class="content">
    <h2 class="content__heading">List Menu</h2>
    <div id="list-rest" class="menus">

    </div>
  </section>
  `;
  },

  async afterRender() {
    const menus = await RestaurantDbSource.listMenus();
    console.log(menus);
    const menuContainer = document.querySelector('#list-rest');
    menus.forEach((menu) => {
      menuContainer.innerHTML += createMenuItemTemplate(menu);
    })
  },
};

export default Menus;
