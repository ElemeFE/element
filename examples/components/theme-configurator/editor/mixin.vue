<style>
    .config {
      padding: 5px 0;
    }
    .config-label {
      color: #606266;;
      font-size: 14px;
      padding-bottom: 8px;
      position: relative;
    }
    .config-content {

    }
    .content-80 {
      box-sizing: border-box;
      display: inline-block;
      width: 80%;
    }
    .content-20 {
      box-sizing: border-box;
      display: inline-block;
      width: 20%;
      vertical-align: bottom;
    }
    .content-10 {
      box-sizing: border-box;
      display: inline-block;
      width: 10%;
      vertical-align: bottom;
    }
    .content-15 {
      box-sizing: border-box;
      display: inline-block;
      width: 15%;
      vertical-align: bottom;
    }
</style>
<script>
import { getStyleDisplayName } from '../utils/utils.js';
export default {
  props: {
    config: {
      type: Object
    },
    userConfig: {
      type: Object
    },
    golbalValue: {
      type: Object
    },
    componentName: {
      type: String
    }
  },
  computed: {
    mergedValue() {
      return this.userConfig[this.config.key] || this.config.value;
    },
    displayName() {
      return getStyleDisplayName(this.config, this.componentName);
    },
    displayKeyName() {
      if (this.config.name) {
        return this.config.key.replace('$--', '');
      }
      return this.config.key.replace(`$--${this.componentName}-`, '');
    },
    isGlobal() {
      return !this.config.value.startsWith('$');
    }
  },
  methods: {
    onChange(value) {
      this.$emit('onChange', {
        key: this.config.key,
        value
      });
    }
  }
};
</script>