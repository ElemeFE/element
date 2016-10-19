const Card = require('./src/main');

/* istanbul ignore next */
Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

module.exports = Card;
