<template>
  <div class="el-form-item" :class="{
    'is-error': error !== '',
    'is-validating': validating,
    'is-required': isRequired || required
  }">
    <label class="el-form-item__label" v-bind:style="labelStyle" v-if="label">
      {{label + form.labelSuffix}}
    </label>
    <div class="el-form-item__content" v-bind:style="contentStyle">
      <slot></slot>
      <transition name="md-fade-bottom">
        <div class="el-form-item__error" v-if="error !== ''">{{error}}</div>
      </transition>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator';
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElFormItem',

    componentName: 'form-item',

    mixins: [emitter],

    props: {
      label: String,
      labelWidth: String,
      prop: String,
      required: Boolean,
      rules: [Object, Array]
    },
    computed: {
      labelStyle() {
        var ret = {};
        var labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.width = labelWidth;
        }
        return ret;
      },
      contentStyle() {
        var ret = {};
        var labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.marginLeft = labelWidth;
        }
        return ret;
      },
      form() {
        var parent = this.$parent;
        while (parent.$options.componentName !== 'form') {
          parent = parent.$parent;
        }
        return parent;
      },
      fieldValue: {
        cache: false,
        get() {
          var model = this.form.model;
          if (!model || !this.prop) { return; }

          var temp = this.prop.split(':');

          return temp.length > 1
            ? model[temp[0]][temp[1]]
            : model[this.prop];
        }
      }
    },
    data() {
      return {
        valid: true,
        error: '',
        validateDisabled: false,
        validating: false,
        validator: {},
        isRequired: false,
        initialValue: null
      };
    },
    methods: {
      validate(trigger, cb) {
        var rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
          cb && cb();
          return true;
        }

        this.validating = true;

        var descriptor = {};
        descriptor[this.prop] = rules;

        var validator = new AsyncValidator(descriptor);
        var model = {};

        model[this.prop] = this.fieldValue;

        validator.validate(model, { firstFields: true }, (errors, fields) => {
          this.valid = !errors;
          this.error = errors ? errors[0].message : '';

          cb && cb(errors);
          this.validating = false;
        });
      },
      resetField() {
        this.valid = true;
        this.error = '';

        let model = this.form.model;
        let value = this.fieldValue;

        if (Array.isArray(value) && value.length > 0) {
          this.validateDisabled = true;
          model[this.prop] = [];
        } else if (value) {
          this.validateDisabled = true;
          model[this.prop] = this.initialValue;
        }
      },
      getRules() {
        var formRules = this.form.rules;
        var selfRuels = this.rules;

        formRules = formRules ? formRules[this.prop] : [];

        return [].concat(selfRuels || formRules || []);
      },
      getFilteredRule(trigger) {
        var rules = this.getRules();

        return rules.filter(rule => {
          return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
        });
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
      getInitialValue() {
        var value = this.form.model[this.prop];
        if (value === undefined) {
          return value;
        } else {
          return JSON.parse(JSON.stringify(value));
        }
      }
    },
    mounted() {
      if (this.prop) {
        this.dispatch('form', 'el.form.addField', [this]);

        this.initialValue = this.getInitialValue();

        let rules = this.getRules();

        if (rules.length) {
          rules.every(rule => {
            if (rule.required) {
              this.isRequired = true;
              return false;
            }
          });
          this.$on('el.form.blur', this.onFieldBlur);
          this.$on('el.form.change', this.onFieldChange);
        }
      }
    },
    beforeDestroy() {
      this.dispatch('form', 'el.form.removeField', [this]);
    }
  };
</script>
