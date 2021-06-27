import RestaurantDbSource from "../../data/restaurant-source";

const Menus = {
  async render() {
    return `
            <h2>List Menu</h2>
        `;
  },

  async afterRender() {
    const menus = await RestaurantDbSource.listMenus();
    console.log(menus);
  },
};

export default Menus;
