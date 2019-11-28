<template>
  <div class="el-form-item" :class="[{
      'el-form-item--feedback': elForm && elForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required,
      'is-no-asterisk': elForm && elForm.hideRequiredAsterisk
    },
    sizeClass ? 'el-form-item--' + sizeClass : ''
  ]">
    <label-wrap
      :is-auto-width="labelStyle && labelStyle.width === 'auto'"
      :update-all="form.labelWidth === 'auto'">
      <label :for="labelFor" class="el-form-item__label" :style="labelStyle" v-if="label || $slots.label">
        <slot name="label">{{label + form.labelSuffix}}</slot>
      </label>
    </label-wrap>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage">
          <div
            class="el-form-item__error"
            :class="{
              'el-form-item__error--inline': typeof inlineMessage === 'boolean'
                ? inlineMessage
                : (elForm && elForm.inlineMessage || false)
            }"
          >
            {{validateMessage}}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator';
  import emitter from 'element-ui/src/mixins/emitter';
  import objectAssign from 'element-ui/src/utils/merge';
  import { noop, getPropByPath } from 'element-ui/src/utils/util';
  import LabelWrap from './label-wrap';
  export default {
    name: 'ElFormItem',

    componentName: 'ElFormItem',

    mixins: [emitter],

    provide() {
      return {
        elFormItem: this
      };
    },

    inject: ['elForm'],

    props: {
      label: String,//标签文本
      labelWidth: String,//表单域标签的的宽度，例如 '50px'。支持 auto。
      // 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	
      // 传入 Form 组件的 model 中的字段
      prop: String,
      required: {//是否必填，如不设置，则会根据校验规则自动生成
        type: Boolean,
        default: undefined
      },
      // 表单验证规则	
      rules: [Object, Array],
      // 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
      error: String,
      validateStatus: String,
      for: String,
      // 以行内形式展示校验信息
      inlineMessage: {
        type: [String, Boolean],
        default: ''
      },
      // 是否显示校验错误信息
      showMessage: {
        type: Boolean,
        default: true
      },
      // 用于控制该表单域下组件的尺寸		medium / small / mini
      size: String
    },
    components: {
      // use this component to calculate auto width
      LabelWrap
    },
    watch: {
      error: {
        // TODO: immediate https://juejin.im/post/5ae91fa76fb9a07aa7677543 
        immediate: true,
        handler(value) {
          this.validateMessage = value;
          this.validateState = value ? 'error' : '';
        }
      },
      validateStatus(value) {
        this.validateState = value;
      }
    },
    computed: {
      labelFor() {
        return this.for || this.prop;
      },
      labelStyle() {
        const ret = {};
        if (this.form.labelPosition === 'top') return ret;
        const labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.width = labelWidth;
        }
        return ret;
      },
      contentStyle() {
        const ret = {};
        const label = this.label;
        if (this.form.labelPosition === 'top' || this.form.inline) return ret;
        if (!label && !this.labelWidth && this.isNested) return ret;
        const labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth === 'auto') {
          if (this.labelWidth === 'auto') {
            ret.marginLeft = this.computedLabelWidth;
          } else if (this.form.labelWidth === 'auto') {
            ret.marginLeft = this.elForm.autoLabelWidth;
          }
        } else {
          ret.marginLeft = labelWidth;
        }
        return ret;
      },
      // TODO1:获取最近的elform组件
      form() {
        let parent = this.$parent;
        let parentName = parent.$options.componentName;
        while (parentName !== 'ElForm') {
          if (parentName === 'ElFormItem') {
            this.isNested = true;
          }
          parent = parent.$parent;
          parentName = parent.$options.componentName;
        }
        return parent;
      },
      // 
      fieldValue() {
        const model = this.form.model;
        if (!model || !this.prop) { return; }

        let path = this.prop;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }

        return getPropByPath(model, path, true).v;
      },
      isRequired() {
        let rules = this.getRules();
        let isRequired = false;

        if (rules && rules.length) {
          rules.every(rule => {
            if (rule.required) {
              isRequired = true;
              return false;
            }
            return true;
          });
        }
        return isRequired;
      },
      _formSize() {
        return this.elForm.size;
      },
      elFormItemSize() {
        return this.size || this._formSize;
      },
      sizeClass() {
        return this.elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },
    data() {
      return {
        validateState: '',
        validateMessage: '',
        validateDisabled: false,
        validator: {},
        isNested: false,
        computedLabelWidth: ''
      };
    },
    methods: {
      validate(trigger, callback = noop) {
        this.validateDisabled = false;
        const rules = this.getFilteredRule(trigger);
        if ((!rules || rules.length === 0) && this.required === undefined) {
          callback();
          return true;
        }

        this.validateState = 'validating';

        const descriptor = {};
        if (rules && rules.length > 0) {
          rules.forEach(rule => {
            delete rule.trigger;
          });
        }
        descriptor[this.prop] = rules;

        const validator = new AsyncValidator(descriptor);
        const model = {};

        model[this.prop] = this.fieldValue;

        validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';

          callback(this.validateMessage, invalidFields);
          // TODO 不太理解这句$emit
          this.elForm && this.elForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
        });
      },
      clearValidate() {
        this.validateState = '';
        this.validateMessage = '';
        this.validateDisabled = false;
      },
      resetField() {
        this.validateState = '';
        this.validateMessage = '';

        let model = this.form.model;
        let value = this.fieldValue;
        let path = this.prop;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }

        let prop = getPropByPath(model, path, true);

        this.validateDisabled = true;
        if (Array.isArray(value)) {
          prop.o[prop.k] = [].concat(this.initialValue);
        } else {
          prop.o[prop.k] = this.initialValue;
        }

        // reset validateDisabled after onFieldChange triggered
        this.$nextTick(() => {
          this.validateDisabled = false;
        });

        this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
      },
      getRules() {
        // 由父组件el-form传递的素有的集合
        let formRules = this.form.rules;
        // 自身传递进来的，form-item属性
        const selfRules = this.rules;
        const requiredRule = this.required !== undefined ? { required: !!this.required } : [];

        const prop = getPropByPath(formRules, this.prop || '');
        formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : [];

        return [].concat(selfRules || formRules || []).concat(requiredRule);
      },

      //过滤必要监测参数trigger，trigger:['change','blur'],
      // 把符合trigger触发条件的监测重新放入对象中
      getFilteredRule(trigger) {
        const rules = this.getRules();
        // [].filter().map()
        return rules.filter(rule => {
          if (!rule.trigger || trigger === '') return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          } else {
            return rule.trigger === trigger;
          }
        }).map(rule => objectAssign({}, rule));
      },
      onFieldBlur() {
        this.validate('blur');
      },
      onFieldChange() {
        if (this.validateDisabled) {
          this.validateDisabled = false;
          return;
        }

        this.validate('change');
      },
      updateComputedLabelWidth(width) {
        this.computedLabelWidth = width ? `${width}px` : '';
      },
      addValidateEvents() {
        const rules = this.getRules();

        if (rules.length || this.required !== undefined) {
          // inputVue触发的事件监测
          this.$on('el.form.blur', this.onFieldBlur);
          this.$on('el.form.change', this.onFieldChange);
        }
      },
      removeValidateEvents() {
        this.$off();
      }
    },
    mounted() {
      if (this.prop) {
        this.dispatch('ElForm', 'el.form.addField', [this]);

        let initialValue = this.fieldValue;
        if (Array.isArray(initialValue)) {
          initialValue = [].concat(initialValue);
        }
        Object.defineProperty(this, 'initialValue', {
          value: initialValue
        });

        this.addValidateEvents();
      }
    },
    beforeDestroy() {
      this.dispatch('ElForm', 'el.form.removeField', [this]);
    }
  };
</script>
