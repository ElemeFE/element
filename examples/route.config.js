import navConfig from './nav.config.json';
import langs from './i18n/route.json';

const registerRoute = (config) => {
  let route = [];
  langs.forEach((lang, index) => {
    route.push({
      path: `/${ lang.lang }/component`,
      redirect: `/${ lang.lang }/component/installation`,
      component: require(`./pages/${ lang.lang }/component.vue`),
      children: []
    });
    config[lang.lang]
      .map(nav => {
        if (nav.groups) {
          nav.groups.map(group => {
            group.list.map(page => {
              addRoute(page, lang.lang, index);
            });
          });
        } else if (nav.children) {
          nav.children.map(page => {
            addRoute(page, lang.lang, index);
          });
        } else {
          addRoute(nav, lang.lang, index);
        }
      });
  });
  function addRoute(page, lang, index) {
    const component = page.path === '/changelog' ? require(`./pages/${ lang }/changelog.vue`) : require(`./docs/zh-cn${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      component: component.default || component
    };

    route[index].children.push(child);
  }

  return { route, navs: config };
};

const route = registerRoute(navConfig);

const generateMiscRoutes = lang => {
  let guideRoute = {
    path: `/${ lang }/guide`, // 指南
    redirect: `/${ lang }/guide/design`,
    component: require(`./pages/${ lang }/guide.vue`),
    children: [{
      path: 'design', // 设计原则
      meta: { lang },
      component: require(`./pages/${ lang }/design.vue`)
    }, {
      path: 'nav', // 导航
      meta: { lang },
      component: require(`./pages/${ lang }/nav.vue`)
    }]
  };

  let resourceRoute = {
    path: `/${ lang }/resource`, // 资源
    meta: { lang },
    component: require(`./pages/${ lang }/resource.vue`)
  };

  let indexRoute = {
    path: `/${ lang }`, // 首页
    meta: { lang },
    component: require(`./pages/${ lang }/index.vue`)
  };

  return [guideRoute, resourceRoute, indexRoute];
};

langs.forEach(lang => {
  route.route = route.route.concat(generateMiscRoutes(lang.lang));
});

route.route = route.route.concat([{
  path: '/',
  redirect: '/zh-cn'
}, {
  path: '*',
  redirect: '/zh-cn'
}]);

export const navs = route.navs;
export default route.route;
