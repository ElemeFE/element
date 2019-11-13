<template>
  <label class="el-radio-img-button" :class="[
        {'is-vertical': vertical},
        {'is-horizontal': !vertical},
        { 'is-disabled': isDisabled },
        { 'is-focus': focus },
        { 'is-bordered': true },
        { 'is-checked': model === label }
      ]"
         :style="{ width: `${numberWidth}px`}"
         role="radio" :aria-checked="model === label"
         :aria-disabled="isDisabled"
         :tabindex="tabIndex"
         @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="el-radio-img-button__input" :class="{'is-disabled': isDisabled, 'is-checked': model === label}">
      <span class="el-radio-img-button__inner"></span>
      <input
        ref="radio"
        class="el-radio-img-button__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span>
      <template>
        <img class="el-radio-img-button__img" :src="imgUrl">
      </template>
    </span>
    <span class="el-radio-img-button__label" @keydown.stop>
      <span class="el-radio-img-button__word">
        <span class="el-radio-img-button__text" :title="text">{{text}}</span>
        <span class="el-radio-img-button__description" v-if="!vertical" :title="description">{{description}}</span>
      </span>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElRadioImgButton',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      },

      elFormItem: {
        default: ''
      }
    },

    componentName: 'ElRadio',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
      width: {
        type: [ String, Number ],
        default: 160
      },
      vertical: Boolean,
      text: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      imgUrl: String
    },

    data() {
      return {
        focus: false
      };
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.value;
        },
        set(val) {
          if (this.isGroup) {
            this.dispatch('ElRadioGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        }
      },
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      radioSize() {
        const temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
      },
      isDisabled() {
        return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.elForm || {}).disabled : this.disabled || (this.elForm || {}).disabled;
      },
      tabIndex() {
        return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
      },
      numberWidth() {
        const width = this.width;
        if (typeof width === 'number') {
          return width;
        }
        if (typeof width === 'string') {
          if (/^\d+(?:px)?$/.test(width)) {
            return parseInt(width, 10);
          } else {
            return width;
          }
        }
        return null;
      }
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('ElRadioGroup', 'handleChange', this.model);
        });
      }
    }
  };
</script>
