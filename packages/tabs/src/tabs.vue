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
        handler(val) {
          this.currentName = val;
        }
      },

      'currentName'() {
        this.calcBarStyle();
      }
    },

    methods: {
      handleTabRemove(tab, ev) {
        ev.stopPropagation();
        tab.$destroy(true);

        var index = this.tabs.indexOf(tab);

        if (index !== -1) {
          this.tabs.splice(index, 1);
        }

        if (tab.key === this.currentName) {
          let nextChild = this.tabs[index];
          let prevChild = this.tabs[index - 1];

          this.currentName = nextChild ? nextChild.key : prevChild ? prevChild.key : '-1';
        }
        this.$emit('tab-remove', tab);
      },
      handleTabClick(tab, event) {
        this.currentName = tab.key;
        this.$emit('tab-click', tab, event);
      },
      calcBarStyle(firstRendering) {
        if (this.type || !this.$refs.tabs) return {};
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

        if (!firstRendering) {
          style.transition = 'transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1)';
        }
        this.barStyle = style;
      }
    },
    mounted() {
      var fisrtKey = this.$children[0].key || '1';
      this.currentName = this.activeName || fisrtKey;
      this.$children.forEach(tab => this.tabs.push(tab));
      this.$nextTick(() => this.calcBarStyle(true));
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
        @remove="handleTabRemove"
        @click.native="handleTabClick(tab, $event)">
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
