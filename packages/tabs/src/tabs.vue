<script>
  import ElTab from './tab';

  module.exports = {
    name: 'el-tabs',

    components: {
      ElTab
    },

    props: {
      type: String,
      tabPosition: String,
      defaultActiveKey: {
        type: String
      },
      activeKey: {
        type: String
      },
      closable: false,
      tabWidth: 0
    },

    data() {
      return {
        tabs: [],
        children: null,
        activeTab: null
      };
    },

    computed: {
      barStyle: {
        cache: false,
        get() {
          if (this.type) return {};
          var style = {};
          var offset = 0;
          var tabWidth = 0;

          this.tabs.every((tab, index) => {
            let $el = this.$refs.tabs[index].$el;
            if (tab.key !== this.activeKey) {
              offset += $el.clientWidth;
              return true;
            } else {
              tabWidth = $el.clientWidth;
              return false;
            }
          });

          style.width = tabWidth + 'px';
          style.transform = `translateX(${offset}px)`;
          return style;
        }
      }
    },

    methods: {
      removeTab(tab, ev) {
        ev.stopPropagation();
        tab.$destroy(true);

        var index = this.tabs.indexOf(tab);

        if (index !== -1) {
          this.tabs.splice(index, 1);
        }

        if (tab.key === this.activeKey) {
          let deleteIndex = this.$children.indexOf(tab);
          let nextChild = this.$children[deleteIndex + 1];
          let prevChild = this.$children[deleteIndex - 1];

          this.activeKey = nextChild ? nextChild.key : prevChild ? prevChild.key : '-1';
        }
        this.$emit('tab.remove', tab);
      },
      handleTabClick(tab) {
        this.activeKey = tab.key;
        this.$emit('tab.click', tab);
      }
    },
    ready() {
      if (!this.activeKey) {
        this.activeKey = this.defaultActiveKey || this.$children[0].key;
      }
      this.$children.forEach(tab => {
        this.tabs.push(tab);
      });
    }
  };
</script>

<template>
  <div class="el-tabs" :class="[type ? 'el-tabs--' + type : '']">
    <div class="el-tabs__header">
      <el-tab
        v-for="tab in tabs"
        v-ref:tabs
        :tab="tab"
        :closable="closable"
        @onremove="removeTab"
        @click="handleTabClick(tab)"
      ></el-tab>
      <div class="el-tabs__active-bar" v-bind:style="barStyle" v-if="!this.type && tabs.length > 0"></div>
    </div>

    <div class="el-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>
