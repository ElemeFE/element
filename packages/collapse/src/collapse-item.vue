<template>
  <div class="el-collapse-item" :class="{'is-active': isActive}">
    <div class="el-collapse-item__header" @click="handleHeaderClick">
      <i class="el-collapse-item__header__arrow el-icon-arrow-right"></i>
      <slot name="title">{{title}}</slot>
    </div>
    <div class="el-collapse-item__wrap" ref="contentWrap">
      <div class="el-collapse-item__content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import { once } from 'element-ui/src/utils/dom';
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
        value ? this.open() : this.close();
      }
    },

    methods: {
      open() {
        const contentWrapElm = this.$refs.contentWrap;
        const contentHeight = this.contentHeight;

        contentWrapElm.style.display = 'block';
        contentWrapElm.style.height = '0';

        setTimeout(_ => {
          contentWrapElm.style.height = contentHeight + 'px';
          once(contentWrapElm, getTransitionendEvent(contentWrapElm), () => {
            if (!this.isActive) return;
            contentWrapElm.style.height = 'auto';
          });
        }, 10);
      },
      close() {
        const contentWrapElm = this.$refs.contentWrap;
        const contentElm = this.$refs.content;
        const contentHeight = contentElm.offsetHeight;

        this.contentHeight = contentHeight;
        contentWrapElm.style.height = contentHeight + 'px';

        setTimeout(_ => {
          contentWrapElm.style.height = '0';
          once(contentWrapElm, getTransitionendEvent(contentWrapElm), () => {
            if (this.isActive) return;
            contentWrapElm.style.display = 'none';
          });
        }, 10);
      },
      init() {
        if (!this.isActive) {
          let contentWrapElm = this.$refs.contentWrap;
          this.contentHeight = this.$refs.content.offsetHeight;
          contentWrapElm.style.height = '0';
          contentWrapElm.style.display = 'none';
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
