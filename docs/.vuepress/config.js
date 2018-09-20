module.exports = {
  title: 'SIAGRI',
  description: 'Thema based on element ui',
  themeConfig: {
    nav: [
      {text: 'home', link: '/'},
      {text: 'componentes', link: '/components/', items: [        
        { text: 'Chinese', link: '/language/chinese' }
      ]}
    ],
    // sidebar: 'auto'
    sidebar: {
      '/components/': ['buttons']
    }
  }
}
