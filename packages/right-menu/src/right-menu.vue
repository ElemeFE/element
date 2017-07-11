<template>
  <div id="right-click-menu" ref="right" :my-viewMenu="viewMenu" @click="closeMenu" tabindex="-1" v-if="viewMenu" @blur="closeMenu"
      :style="{top:top, left:left}">
    <slot name="rightmenu"></slot>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'ElRightMenu',

    componentName: 'ElRightMenu',
    data() {
      return {
        top: '0px',
        left: '0px',
        viewMenu: false
      };
    },
    methods: {
      setMenu: function(top, left) {

        let largestHeight = window.innerHeight - this.$refs.right.offsetHeight - 25;
        let largestWidth = window.innerWidth - this.$refs.right.offsetWidth - 25;

        if (top > largestHeight) top = largestHeight;
        if (left > largestWidth) left = largestWidth;

        this.top = top + 'px';
        this.left = left + 'px';
      },
      closeMenu: function() {
        this.viewMenu = false;
      },
      openMenu: function(e) {
        this.viewMenu = true;
        Vue.nextTick(function() {
          this.$refs.right.focus();
          this.setMenu(e.y, e.x);
        }.bind(this));
        e.preventDefault();
      }
    }
  };
</script>

<style>
  #right-click-menu {
    background: #FAFAFA;
    border: 1px solid #BDBDBD;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: fixed;
    width: 150px;
    z-index: 999999;
  }

  #right-click-menu li {
    border-bottom: 1px solid #E0E0E0;
    margin: 0;
    padding: 5px 25px;
  }

  #right-click-menu li:last-child {
    border-bottom: none;
  }

  #right-click-menu li:hover {
    background: #1E88E5;
    color: #FAFAFA;
  }
</style>