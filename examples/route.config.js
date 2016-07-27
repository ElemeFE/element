import navConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = {};
  config.map(nav => nav.list.map(page => {
    try {
      route[page.path] = page.path !== '/changelog' ? {
        component: require(`./docs${page.path}.md`),
        title: page.title || page.name,
        description: page.description
      } : {
        component: require('../CHANGELOG.md'),
        title: page.title || page.name,
        description: page.description
      };
    } catch (e) {
      console.error(e);
      page.disabled = true;
    }
  }));

  return { route, navs: config };
};

const route = registerRoute(navConfig);

export const navs = route.navs;
export default function configRouter(router) {
  router.map(Object.assign({
    '*': {
      component: require('./docs/home.md')
    }
  }, route.route));

  router.beforeEach(transition => {
    document.title = transition.to.title || document.title;
    transition.to.router.app.$broadcast('element.example.reload');
    transition.next();
  });
};
