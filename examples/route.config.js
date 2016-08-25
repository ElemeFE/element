import navConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [{
    path: '/component',
    component: require('./pages/component.vue'),
    children: []
  }];
  function addRoute(page) {
    const component = require(`./docs${page.path}.md`);

    route[0].children.push({
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    });
  }
  config
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute(page);
          });
        });
      }
      if (nav.children) {
        nav.children.map(page => {
          addRoute(page);
        });
      }
    });

  return { route, navs: config };
};

const route = registerRoute(navConfig);

let guideRoute = {
  path: '/guide',
  name: '指南',
  component: require('./pages/guide.vue'),
  children: [{
    path: 'design',
    name: '设计原则',
    component: require('./pages/design.vue')
  }, {
    path: 'nav',
    name: '导航',
    component: require('./pages/nav.vue')
  }]
};

let resourceRoute = {
  path: '/resource',
  name: '资源',
  component: require('./pages/resource.vue')
};

let indexRoute = {
  path: '/',
  name: '首页',
  component: require('./pages/index.vue')
};

let changeLogRoute = {
  path: '/changelog',
  component: require('./pages/changelog.vue')
};

route.route = route.route.concat([indexRoute, guideRoute, resourceRoute, changeLogRoute]);

route.route.push({
  path: '*',
  component: require('./docs/home.md')
});

export const navs = route.navs;
export default route.route;
