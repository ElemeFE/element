<script>
import { isVNode } from 'element-ui/src/utils/types';
export default {
  props: {
    message: [Object, String]
  },
  render() {
    let message = this.message;
    if (isVNode(message)) {
      return message;
    } else {
      return (<span>message</span>);
    }
  }
};
</script>
