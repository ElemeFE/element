<style scoped>
  .headerWrapper {
    height: 80px;
  }
  .header {
    height: 80px;
    background-color: #20a0ff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    line-height: @height;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      a {
        color: #fff;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid #fff;
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
    .nav {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
      @utils-clearfix;
      padding: 0;
      margin: 0;
    }
    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 20px;

        &.active:before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background:#99d2fc;
        }
      }
    }
    /*.el-menu-item__bar {
      background-color: #99d2fc;
    }*/
  }
  .header-fixed {
    position: fixed;
    top: -80px;
    box-shadow: 0px 2px 8px 0px rgba(50,63,87,0.45);
  }
  .header-hangUp {
    top: 0;
  }
</style>
<template>
  <div class="headerWrapper">
    <header class="header"
    :style="headerStyle"
    :class="{
      'header-fixed': isFixed,
      'header-hangUp': hangUp
    }">
      <div class="container">
        <h1><router-link to="/">Element</router-link></h1>
        <ul class="nav">
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/guide/design"
              exact>指南
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/component/layout"
              exact>组件
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/resource"
              exact>资源
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: '',
        isFixed: false,
        headerStyle: {},
        hangUp: false
      };
    },
    watch: {
    },
    mounted() {
      function scroll(fn) {
        var beforeScrollTop = document.body.scrollTop;

        window.addEventListener('scroll', () => {
          const afterScrollTop = document.body.scrollTop;
          var delta = afterScrollTop - beforeScrollTop;

          if (delta === 0) return false;

          fn(delta > 0 ? 'down' : 'up');
          beforeScrollTop = afterScrollTop;
        }, false);
      }
      scroll((direction) => {
        const bounding = this.$el.getBoundingClientRect();
        if (bounding.bottom < 0) {
          this.isFixed = true;
          this.$nextTick(() => {
            this.headerStyle.transition = 'all .5s ease';
          });
        }
        if (bounding.top === 0) {
          this.isFixed = false;
          this.$nextTick(() => {
            this.headerStyle.transition = '';
          });
        }
        this.hangUp = direction === 'up';
      });
    }
  };
</script>
