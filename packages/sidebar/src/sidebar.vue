<script>
  import TmIcon from 'tmconsulting-ui/packages/icon';
  import TmSidebarItemModel from './TmSidebarItemModel';
  import Emitter from 'tmconsulting-ui/src/mixins/emitter';

  export default {

    components: { TmIcon },

    name: 'TmSidebar',

    componentName: 'TmSidebar',

    mixins: [Emitter],

    props: {
      list: Array,
      selected: TmSidebarItemModel,
      mode: {
        default: 'nav',
        type: String
      }
    },

    methods: {
      onClick(item) {
        this.currentItem = item;
        this.$emit('change', item);
      }
    },

    data() {
      return {
        currentItem: this.selected,
        currentList: this.list
      };
    },

    watch: {
      selected(value) {
        this.currentItem = value;
      },
      list(value) {
        this.currentList = value;
      }
    },

    computed: {
      className() {
        return `tm-sidebar--${this.mode}`;
      }
    }
  };
</script>
<template>
  <div class="tm-sidebar"
       :class="className">
    <div class="tm-sidebar__slot">
      <slot></slot>
    </div>
    <div class="tm-sidebar__list">
      <div class="tm-sidebar__item"
           :class="item === currentItem ? 'tm-sidebar__item--active' : ''"
           v-for="(item) in currentList"
           v-on:click="onClick(item)">
        <tm-icon class="tm-sidebar__icon"
                 v-if="item.icon"
                 :name="item.icon"></tm-icon>
        <div class="tm-sidebar__label">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>