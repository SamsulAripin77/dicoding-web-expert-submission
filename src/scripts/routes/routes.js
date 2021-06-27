import Menus from '../views/pages/menus';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Menus,
  '/menus': Menus,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
