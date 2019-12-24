<script>
import { Pane } from 'splitpanes';
Pane.props = {};
export default {
  name: 'ElPane',
  mixins: [ Pane ],
  props: {
    paneSize: {
      type: [Number, String],
      default: null
    },
    paneMax: {
      type: [Number, String],
      default: 100
    },
    paneMin: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    size: function() {
      return this.paneSize;
    },
    maxSize: function() {
      return this.paneMax;
    },
    minSize: function() {
      return this.paneMin;
    }
  }
};
</script>
