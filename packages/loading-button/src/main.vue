<template>
  <el-button 
    class="el-loading-button"
    v-on="$listeners"
    v-bind="$attrs"
    :loading="selfLoading"
    @click.stop.prevent="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script>
import ElButton from 'element-ui/packages/button';

export default {
  name: 'ElLoadingButton',

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    loading: Boolean,
    loadingClick: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      selfLoading: this.loading
    };
  },

  watch: {
    loading(val) {
      this.selfLoading = val;
    }
  },

  components: {
    ElButton
  },

  methods: {
    handleClick(evt) {
      this.selfLoading = true;
      window.Promise.resolve(this.loadingClick(evt))
        .catch(e => {})
        .finally(e => {
          this.selfLoading = false;
        });
    }
  }
};
</script>
