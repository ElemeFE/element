<template>
  <div
    :class="{'el-sidebar-item-active':getActive}"
    class="el-sidebar-item"
    @click="setIndexActive">
    <router-link
      v-if="to"
      :to="to">
      {{ icon }}
      <slot></slot>
    </router-link>
    <a
      v-else
      :href="href">
        {{ icon }}
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  name: 'ElSidebarItem',
  props: {
    icon: {
      default: null,
      type: String
    },
    href: {
      default: '#',
      type: String
    },
    to: {
      default: null,
      type: String
    },
    index: {
      default: null,
      type: [String, Number]
    }
  },
  computed: {
    getActive() {
      return this.$parent.getActive() === this.index;
    }
  },
  methods: {
    setIndexActive() {
      this.$parent.setIndexActive(this.index);
      this.$emit('click');
    }
  }
};
</script>
