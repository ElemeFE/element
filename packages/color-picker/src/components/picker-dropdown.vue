<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <div
      class="el-color-dropdown"
      v-show="showPopper">
      <div class="el-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <div class="el-color-dropdown__btns">
        <a href="JavaScript:" class="el-color-dropdown__link-btn" @click="$emit('clear')">{{ t('el.colorpicker.clear') }}</a>
        <button class="el-color-dropdown__btn" @click="confirmValue">{{ t('el.colorpicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>
<style>
</style>
<script type="babel">
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Popper from 'element-ui/src/utils/vue-popper';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Locale from 'element-ui/src/mixins/locale';

  export default {
    name: 'el-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider
    },

    directives: { Clickoutside },

    props: {
      color: {
        required: true
      },
      showAlpha: {
        type: Boolean
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      }
    }
  }
</script>
