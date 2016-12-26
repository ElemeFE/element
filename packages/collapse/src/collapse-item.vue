<template>
  <div class="el-collapse-item" :class="{'is-active': isActive}">
    <div class="el-collapse-item__header" @click="handleHeaderClick">
      <i class="el-collapse-item__header__arrow el-icon-arrow-right"></i>
      <slot name="title" :title="title">{{title}}</slot>
    </div>
    <div class="el-collapse-item__wrap" ref="content" :style="contentStyle">
      <div class="el-collapse-item__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import { once } from 'wind-dom';
  import Emitter from 'element-ui/src/mixins/emitter';

  function getTransitionendEvent(el) {
    let t;
    let transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  };

  export default {
    name: 'ElCollapseItem',

    componentName: 'ElCollapseItem',

    mixins: [Emitter],

    data() {
      return {
        contentStyle: {},
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
        value ? this.open() : this.close();
      }
    },

    methods: {
      open() {
        const contentElm = this.$refs.content;
        const contentStyle = this.contentStyle;

        contentStyle.display = 'block';
        this.$nextTick(_ => {
          contentStyle.height = this.contentHeight + 'px';
          once(contentElm, getTransitionendEvent(contentElm), () => {
            contentStyle.height = 'auto';
          });
        });
      },
      close() {
        const contentElm = this.$refs.content;
        const contentHeight = contentElm.clientHeight;
        const contentStyle = this.contentStyle;

        this.contentHeight = contentHeight;
        this.$set(this.contentStyle, 'height', contentHeight + 'px');

        this.$nextTick(_ => {
          contentStyle.height = '0';
          once(contentElm, getTransitionendEvent(contentElm), () => {
            this.$set(this.contentStyle, 'display', 'none');
          });
        });
      },
      init() {
        this.contentHeight = this.$refs.content.clientHeight;

        if (!this.isActive) {
          this.$set(this.contentStyle, 'height', '0');
          this.$set(this.contentStyle, 'display', 'none');
        }
      },
      handleHeaderClick() {
        this.dispatch('ElCollapse', 'item-click', this);
      }
    },

    mounted() {
      this.init();
    }
  };
</script>
