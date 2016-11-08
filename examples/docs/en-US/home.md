# Components Document

<script>
  import { addClass } from 'examples/dom/class.js';

  module.exports = {
    ready() {
      addClass(this.$el.parentNode, 'no-toc')
    }
  }
</script>