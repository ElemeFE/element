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
        line-height: 32px;
        height: 32px;
        margin: 10px 0;
        padding: 0 0 0 10px;
        text-decoration: none;
        border-left: 2px solid transparent;
        display: block;

        &.active {
          color: #20a0ff;
          border-left-color: #20a0ff;
        }
      }
      .nav-item {
        a {
          font-size: 14px;
          padding-left: 20px;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
    .nav-group__title {
      color: #99a9bf;
      padding-left: 15px;
      line-height: 32px;
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
