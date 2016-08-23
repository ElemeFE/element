<style>
</style>
<template>
  <div class="side-nav">
    <ul>
      <li v-for="item in data">
        <a href="">{{item.name}}</a>
        
      </li>
    </ul>
    <template v-for="(nav, key) in navs">
      <a
        href="#"
        @click.prevent="navState.$set(key, !navState[key] || false)"
        class="pure-menu-heading app__menu__label"
        :class="{ 'unfold': !navState[key] }"
        v-text="nav.group"></a>
      <ul
        class="pure-menu-list"
        transition="slidedown"
        v-show="!navState[key]"
        :style="{
          maxHeight: nav.list.length * 44 + 'px'
        }">
        <li
          class="pure-menu-item app__menu__item"
          v-for="item in nav.list"
          v-if="!item.disabled">
          <router-link
            class="pure-menu-link app__menu__link"
            active-class="active"
            :to="'/component' + item.path"
            exact
            v-text="item.name"></router-link>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array
    },
    data() {
      return {
        highlights: [],
        navState: []
      };
    }
  };
</script>
