<script>
import Loading from './loading';

export default {
  mixins: [Loading],
  data() {
    return {
      value: ''
    };
  },
  methods: {
    methodA() {
      return;
    }
  }
};
</script>