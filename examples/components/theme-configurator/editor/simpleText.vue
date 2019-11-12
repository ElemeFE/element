<template>
  <section class="config" :key="displayName">
    <div class="config-label">
      <el-tooltip :content="displayName" placement="top">
        <span>{{displayKeyName}}</span>
      </el-tooltip>
    </div>
    <div class="config-content">
      <theme-input 
        :val="value"
        size="medium"
        @change="onChange"
      ></theme-input>
    </div>
  </section>
</template>

<script>
import Input from './input';
import Mixin from './mixin';

export default {
  components: {
    themeInput: Input
  },
  data() {
    return {
      value: ''
    };
  },
  mixins: [Mixin],
  watch: {
    'mergedValue': {
      immediate: true,
      handler(value) {
        this.value = this.mergedValue;
      }
    }
  }
};
</script>