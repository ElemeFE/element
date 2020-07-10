import Footer from './src/main';

/* istanbul ignore next */
Footer.install = function(app) {
  app.component(Footer.name, Footer);
};

export default Footer;
