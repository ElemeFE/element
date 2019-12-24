<script>
import { Splitpanes } from 'splitpanes';
Splitpanes.props = {};
export default {
  name: 'ElSplitpanes',
  mixins: [ Splitpanes ],
  props: {
    isVertical: {
      type: Boolean,
      default: false
    },
    isExpansive: {
      type: Boolean,
      default: true
    },
    hasLeadingSplitter: {
      type: Boolean,
      default: false
    },
    hasDblclickExpansion: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    horizontal: function() {
      return this.isVertical;
    },
    pushOtherPanes: function() {
      return this.isExpansive;
    },
    dblClickSplitter: function() {
      return this.hasDblclickExpansion;
    },
    firstSplitter: function() {
      return this.isFirstSplitter;
    }
  }
};
</script>
