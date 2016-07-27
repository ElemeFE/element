<template>
  <div class="el-form-item" :class="{
    'is-error': error !== '',
    'is-validating': validating,
    'is-required': required
  }">
    <label class="el-form-item__label" v-bind:style="labelStyle" v-if="label">
      {{label + form.labelSuffix}}
    </label>
    <div class="el-form-item__content" v-bind:style="contentStyle">
      <slot></slot>
      <div class="el-form-item__error" v-if="error !== ''" transition="md-fade-bottom">{{error}}</div>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator';
  import emitter from 'main/mixins/emitter';

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
        while (parent.$el.tagName !== 'FORM') {
          parent = parent.$parent;
        }
        return parent;
      },
      fieldValue() {
        var model = this.form.model;
        if (!model) { return; }

        if (!model[this.prop]) {
          let temp = this.prop.split(':');
          return model[temp[0]][temp[1]];
        } else {
          return model[this.prop];
        }
      },
      fieldRule() {
        return this.rules || (this.form.rules ? this.form.rules[this.prop] : null);
      }
    },
    data() {
      return {
        valid: true,
        error: '',
        validateDisabled: false,
        validating: false,
        validator: {}
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

        validator.validate(model, { first: true, firstFields: true }, (errors, fields) => {
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
        let value = model[this.prop];

        if (Array.isArray(value) && value.length > 0) {
          this.validateDisabled = true;
          model[this.prop] = [];
        } else if (typeof value === 'string' && value !== '') {
          this.validateDisabled = true;
          model[this.prop] = '';
        } else if (typeof value === 'number') {
          this.validateDisabled = true;
          model[this.prop] = 0;
        }
      },
      getFilteredRule(trigger) {
        var rules = this.fieldRule;

        if (!rules) { return null; }
        if (!trigger) { return rules; }

        if (Array.isArray(rules)) {
          return rules.filter(rule => {
            return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
          });
        }

        if (rules.trigger && rules.trigger.indexOf(trigger) === -1) {
          return null;
        } else {
          return rules;
        }
      }
    },
    ready() {
      var rules = this.fieldRule;

      if (rules) {
        if (Array.isArray(rules)) {
          rules.every(rule => {
            if (rule.required) {
              this.required = true;
              return false;
            }
          });
        } else {
          this.required = !!this.rules.required;
        }
      }
      if (this.prop) {
        this.dispatch('form', 'el.form.addField', this);
      }
    },
    events: {
      'el.form.blur'(value) {
        this.validate('blur');
      },
      'el.form.change'(value, useTrigger = true) {
        if (this.validateDisabled) {
          this.validateDisabled = false;
          return;
        }

        var trigger = useTrigger ? 'change' : '';
        this.validate(trigger);
      }
    },
    beforeDestroy() {
      this.dispatch('form', 'el.form.removeField', this);
    }
  };
</script>
