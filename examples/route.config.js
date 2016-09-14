import navConfig from './nav.config.json';

const registerRoute = (config) => {
  let route = [{
    path: '/component',
    redirect: '/component/quickstart',
    component: require('./pages/component.vue'),
    children: []
  }];
  function addRoute(page) {
    const component = page.path === '/changelog' ? require('./pages/changelog.vue') : require(`./docs${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    };

    route[0].children.push(child);
  }
  config
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute(page);
          });
        });
      } else if (nav.children) {
        nav.children.map(page => {
          addRoute(page);
        });
      } else {
        addRoute(nav);
      }
    });

  return { route, navs: config };
};

const route = registerRoute(navConfig);

let guideRoute = {
  path: '/guide',
  name: '指南',
  redirect: '/guide/design',
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

route.route = route.route.concat([indexRoute, guideRoute, resourceRoute]);

route.route.push({
  path: '*',
  component: require('./docs/home.md')
});

export const navs = route.navs;
export default route.route;
