<template>
  <transition name="el-sidebar-animate">
    <div
      v-show="staticPosition || value"
      ref="sidebarbackground"
      class="el-content-sidebar">
      <div
        v-if="!hiddenBackground"
        class="el-sidebar-background"></div>
      <div
        :class="[
          `el-sidebar-${color}`,
          {
            'el-sidebar-parent': parent != 'body',
            'el-sidebar-staticPosition': staticPosition,
            'el-sidebar-position-right': positionRight,
            'el-sidebar-reduce': reduce,
            'el-sidebar-reduceNotRebound': reduceNotRebound,
            'el-sidebar-reduceNotHoverExpand': reduceNotHoverExpand
          }
        ]"
        class="el-sidebar">

        <template v-if="$props.fullSlot">
          <div class="el-sidebar--full">
            <slot></slot>
          </div>
        </template>

        <template v-else>
          <header v-if="$slots.header">
            <slot name="header"></slot>
          </header>

          <div class="el-sidebar-items">
            <slot></slot>
          </div>

          <footer v-if="$slots.footer">
            <slot name="footer"></slot>
          </footer>
        </template>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ElSidebar',
  props: {
    value: {
      default: false
    },
    defaultIndex: {
      default: null,
      type: [String, Number]
    },
    color: {
      default: 'primary',
      type: String
    },
    parent: {
      default() {
        return null;
      },
      type: [String, HTMLElement]
    },
    spacer: {
      default: false,
      type: Boolean
    },
    staticPosition: {
      default: false,
      type: Boolean
    },
    positionRight: {
      default: false,
      type: Boolean
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    reduce: {
      default: false,
      type: Boolean
    },
    reduceNotRebound: {
      default: false,
      type: Boolean
    },
    reduceNotHoverExpand: {
      default: false,
      type: Boolean
    },
    hiddenBackground: {
      default: false,
      type: Boolean
    },
    fullSlot: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  watch: {
    value() {
      if (this.value && !this.clickNotClose) {
        this.addEventClick();
      }
    }
  },
  created() {
    this.currentIndex = this.defaultIndex;
  },
  mounted() {
    this.insertBody();
  },
  methods: {
    getActive() {
      return this.currentIndex;
    },
    setIndexActive(index) {
      this.currentIndex = index;
    },
    addEventClick() {
      window.addEventListener('click', this.closeSidebar);
    },
    closeSidebar(evt) {
      let parent = evt.target.closest('.el-sidebar');
      if (!parent) {
        this.$emit('input', false);
        window.removeEventListener('click', this.closeSidebar);
      }
    },
    insertBody() {
      if (this.parent) {
        let elx = this.$refs.sidebarbackground;
        let parentx = typeof this.parent === 'string' ? document.querySelector(this.parent) : this.parent;
        parentx.insertBefore(elx, parentx.firstChild);
      }
    }
  }
};
</script>
