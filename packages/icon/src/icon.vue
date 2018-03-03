<template>
  <i :class="className" @click="onClick">
    <svg><use :xlink:href="iconHref"></use></svg>
  </i>
</template>

<script>
  // import Symbols from '../../theme-chalk/icons.js';
  // import airplaneIcon from '../../theme-chalk/src/icons/airplane.svg';
  // import spritePath from '../../../lib/svg/spritemap.svg';

  export default {
    name: 'TmIcon',

    props: {
      name: String,
      onClick: {
        type: Function,
        default: () => {}
      }
    },
    computed: {
      className() {
        // console.log(Symbols);
        // console.log(airplaneIcon);
        // console.log(spritePath);
        let className = 'tm-icon';
        if (this.name) {
          className += ' tm-icon--' + this.name;
        }
        return className;
      },
      iconHref() {
        // return spritePath + '#icon-' + this.name;
        return '#' + this.name;
      }
    }
  };
</script>
