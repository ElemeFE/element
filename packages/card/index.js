import Card from './src/main';

/* istanbul ignore next */
Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
