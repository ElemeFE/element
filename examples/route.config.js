import navConfig from './nav.config.json';
import langs from './i18n/route.json';

const registerRoute = (navConfig) => {
  let route = [];
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang];
    route.push({
      path: `/${ lang }/component`,
      redirect: `/${ lang }/component/installation`,
      component: require(`./pages/${ lang }/component.vue`),
      children: []
    });
    navs.forEach(nav => {
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index);
        });
      } else {
        addRoute(nav, lang, index);
      }
    });
  });
  function addRoute(page, lang, index) {
    const component = page.path === '/changelog'
      ? require(`./pages/${ lang }/changelog.vue`)
      : require(`./docs/${ lang }${page.path}.md`);
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

  return route;
};

let route = registerRoute(navConfig);

function generateMiscRoutes(lang) {
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
    name: 'home',
    component: require(`./pages/${ lang }/index.vue`)
  };

  return [guideRoute, resourceRoute, indexRoute];
};

langs.forEach(lang => {
  route = route.concat(generateMiscRoutes(lang.lang));
});

let userLanguage = localStorage.getItem('ELEMENT_LANGUAGE') || window.navigator.language;
let defaultPath = '/en-US';
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = '/zh-CN';
}

route = route.concat([{
  path: '/',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}]);

export default route;
