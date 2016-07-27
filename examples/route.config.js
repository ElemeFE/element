import navConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [];
  config
    .map(nav =>
      nav.list.map(page => {
        if (page.path === '/changelog') return;
        const component = require(`./docs${page.path}.md`);

        route.push({
          path: page.path,
          title: page.title || page.name,
          description: page.description,
          component: component.default || component
        });
      })
    );

  return { route, navs: config };
};

const route = registerRoute(navConfig);

route.route.push({
  path: '/changelog',
  component: require('../CHANGELOG.md')
});

route.route.push({
  path: '*',
  component: require('./docs/home.md')
});

export const navs = route.navs;
export default route.route;
