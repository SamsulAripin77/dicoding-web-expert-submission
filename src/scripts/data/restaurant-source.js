import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listMenus() {
    const response = await fetch(API_ENDPOINT.MENUS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailMenus(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
