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
      defaultActiveName: String,
      activeName: String,
      closable: false,
      tabWidth: 0
    },

    data() {
      return {
        tabs: [],
        children: null,
        activeTab: null,
        currentName: 0,
        barStyle: ''
      };
    },

    watch: {
      activeName: {
        immediate: true,
        handler(val) {
          this.currentName = val || 0;
        }
      },

      'currentName'() {
        this.calcBarStyle();
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

        if (tab.key === this.currentName) {
          let deleteIndex = this.$children.indexOf(tab);
          let nextChild = this.$children[deleteIndex + 1];
          let prevChild = this.$children[deleteIndex - 1];

          this.currentName = nextChild ? nextChild.key : prevChild ? prevChild.key : '-1';
        }
        this.$emit('tab.remove', tab);
      },
      handleTabClick(tab) {
        this.currentName = tab.key;
        this.$emit('tab.click', tab);
      },
      calcBarStyle() {
        if (this.type) return {};
        var style = {};
        var offset = 0;
        var tabWidth = 0;

        this.tabs.every((tab, index) => {
          let $el = this.$refs.tabs[index].$el;
          if (tab.key !== this.currentName) {
            offset += $el.clientWidth;
            return true;
          } else {
            tabWidth = $el.clientWidth;
            return false;
          }
        });

        style.width = tabWidth + 'px';
        style.transform = `translateX(${offset}px)`;

        this.barStyle = style;
      }
    },

    mounted() {
      if (!this.currentName) {
        this.currentName = this.defaultActiveName || this.$children[0].key;
      }
      this.$children.forEach(tab => this.tabs.push(tab));
      this.$nextTick(() => this.calcBarStyle());
    }
  };
</script>

<template>
  <div class="el-tabs" :class="[type ? 'el-tabs--' + type : '']">
    <div class="el-tabs__header">
      <el-tab
        v-for="tab in tabs"
        ref="tabs"
        :tab="tab"
        :closable="closable"
        @onremove="removeTab"
        @click.native="handleTabClick(tab)">
      </el-tab>
      <div
        class="el-tabs__active-bar"
        :style="barStyle"
        v-if="!this.type && tabs.length > 0">
      </div>
    </div>

    <div class="el-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>
