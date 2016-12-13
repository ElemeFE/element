<template>
  <div class="el-collapse-panel" :class="{'is-opened': opened}">
    <div class="el-collapse-panel__header" @click="opened = !opened">
      <i class="el-icon-caret-right"></i>{{title}}
    </div>
    <div class="el-collapse-panel__content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { once } from 'wind-dom';
  export default {
    name: 'ElCollapsePanel',

    componentName: 'ElCollapsePanel',

    data() {
      return {
        opened: false,
        contentHeight: 23
      };
    },

    props: {
      title: String
    },

    watch: {
      'opened'(newValue, oldValue) {
        if (newValue) {
          this.open();
        } else {
          this.hide();
        }
      }
    },

    methods: {
      open() {
        const contentElm = this.$refs.content;
        contentElm.style.height = this.contentHeight + 'px';
        once(contentElm, 'transitionend', () => {
          contentElm.style.height = 'auto';
        });
      },
      close() {
        const contentElm = this.$refs.content;
        this.contentHeight = contentElm.clientHeight;
        contentElm.style.height = 0;
        once(contentElm, 'transitionend', () => {
        });
      }
    },

    mounted() {
      this.contentHeight = this.$refs.content.clientHeight;
      this.$refs.content.style.display = 'none';
    }
  };
</script>
