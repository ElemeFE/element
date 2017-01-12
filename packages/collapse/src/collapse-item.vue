<template>
  <div class="el-collapse-item" :class="{'is-active': isActive}">
    <div class="el-collapse-item__header" @click="handleHeaderClick">
      <i class="el-collapse-item__header__arrow el-icon-arrow-right"></i>
      <slot name="title">{{title}}</slot>
    </div>
    <collapse-transition>
      <div class="el-collapse-item__wrap" v-show="isActive">
        <div class="el-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';
  import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

  export default {
    name: 'ElCollapseItem',

    componentName: 'ElCollapseItem',

    mixins: [Emitter],

    components: {
      CollapseTransition
    },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0
      };
    },

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      }
    },

    computed: {
      isActive() {
        return this.$parent.activeNames.indexOf(this.name) > -1;
      }
    },

    watch: {
      'isActive'(value) {
      }
    },

    methods: {
      handleHeaderClick() {
        this.dispatch('ElCollapse', 'item-click', this);
      }
    },

    mounted() {
    }
  };
</script>
