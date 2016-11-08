# 组件说明文档

<script>
  import { addClass } from 'examples/dom/class.js';

  module.exports = {
    ready() {
      addClass(this.$el.parentNode, 'no-toc')
    }
  }
</script>