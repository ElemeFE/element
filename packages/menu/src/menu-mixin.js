module.exports = {
  computed: {
    indexPath() {
      var path = [this.index];
      var parent = this.$parent;
      while (parent.$options._componentTag !== 'el-menu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    rootMenu() {
      var parent = this.$parent;
      while (parent.$options._componentTag !== 'el-menu') {
        parent = parent.$parent;
      }
      return parent;
    }
  }
};
