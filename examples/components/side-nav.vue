<style>
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    border-right: 1px solid #eaeefa;

    li {
      list-style: none;
    }
    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }

    .nav-item {
      a {
        font-size:18px;
        color:#5e6d82;
        line-height: 42px;
        height: 42px;
        margin: 0;
        padding: 0 0 0 12px;
        text-decoration: none;
        display: block;
        position: relative;
        transition: all .3s;

        &.active {
          color: #20a0ff;

          &:after {
            content: '';
            width: 2px;
            background-color: #20a0ff;
            height: 32px;
            border-radius: 2px;
            left: 0;
            position: absolute;
            top: 5px;
          }
        }
      }
      .nav-item {
        a {
          display: block;
          height: 42px;
          line-height: 42px;
          font-size: 14px;
          padding-left: 22px;


          &:hover {
            color: #20a0ff;
          }
        }
      }
    }
    .nav-group__title {
      color: #99a9bf;
      padding-left: 15px;
      line-height: 34px;
    }
  }
</style>
<template>
  <div class="side-nav">
    <ul>
      <li class="nav-item" v-for="item in data">
        <a v-if="!item.path">{{item.name}}</a>
        <router-link
          v-else
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li class="nav-item" v-for="navItem in item.children">
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups">
            <div class="nav-group__title">{{group.groupName}}</div>
            <ul class="pure-menu-list">
              <li
                class="nav-item"
                v-for="navItem in group.list"
                v-if="!navItem.disabled">
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array,
      base: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        highlights: [],
        navState: []
      };
    }
  };
</script>
