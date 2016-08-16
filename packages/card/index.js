const Card = require('./src/main');

Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

module.exports = Card;
