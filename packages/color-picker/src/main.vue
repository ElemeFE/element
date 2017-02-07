<template>
  <div class="el-color-picker" v-clickoutside="hide">
    <div class="el-color-picker__trigger" @click.stop="showPicker = !showPicker">
      <span class="el-color-picker__color" :class="{ 'is-alpha': showAlpha }">
        <span class="el-color-picker__color-inner"
          :style="{
            backgroundColor: value ? value : 'transparent'
          }"></span>
        <span class="el-color-picker__empty el-icon-close" v-if="!value"></span>
      </span>
      <span class="el-color-picker__icon el-icon-caret-bottom"></span>
    </div>
    <picker-dropdown
       ref="dropdown"
       class="el-color-picker__panel"
       v-model="showPicker"
       @pick="confirmValue"
       @clear="clearValue"
       :color="color"
       :show-alpha="showAlpha">
    </picker-dropdown>
  </div>
</template>

<style>
</style>

<script>
  import Color from './color';
  import PickerDropdown from './components/picker-dropdown.vue';
  import Clickoutside from 'element-ui/src/utils/clickoutside';

  export default {
    name: 'ElColorPicker',

    props: {
      value: {
        type: String
      },
      showAlpha: {
        type: Boolean
      },
      colorFormat: {
        type: String
      }
    },

    directives: { Clickoutside },

    watch: {
      value(val) {
        if (val && val !== this.color.value) {
          this.color.fromString(val);
        }
      }
    },

    methods: {
      confirmValue(value) {
        this.$emit('input', this.color.value);
        this.showPicker = false;
      },
      clearValue() {
        this.$emit('input', null);
        this.showPicker = false;
      },
      hide() {
        this.showPicker = false;
      }
    },

    mounted() {
      const value = this.value;
      if (value) {
        this.color.fromString(value);
      }
      this.popperElm = this.$refs.dropdown.$el;
    },

    data() {
      const color = new Color({
        enableAlpha: this.showAlpha,
        format: this.colorFormat
      });
      return {
        color,
        showPicker: false
      };
    },

    components: {
      PickerDropdown
    }
  };
</script>
