import Menus from '../views/pages/menus';
import Detail from '../views/pages/detail';

const routes = {
  '/': Menus,
  '/detail/:id': Detail,
};

export default routes;
