<template>
  <form :class="[
    type ? 'el-form-' + type : 'el-form',
    { 'is-label-left': labelAlign === 'left' }
  ]">
    <slot></slot>
  </form>
</template>
<script>
  import AsyncValidator from 'async-validator';

  export default {
    name: 'ElForm',

    componentName: 'form',

    props: {
      model: Object,
      rules: Object,
      type: String,
      labelAlign: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        fields: {},
        fieldLength: 0,
        validator: {}
      };
    },
    ready() {
      if (this.rules) {
        this.validator = new AsyncValidator(this.rules);
      }
    },
    events: {
      'el.form.addField'(field) {
        this.fields[field.prop] = field;
        this.fieldLength++;
      },
      'el.form.removeField'(field) {
        delete this.fields[field.prop];
        this.fieldLength--;
      }
    },
    methods: {
      resetForm() {
        for (let prop in this.fields) {
          let field = this.fields[prop];
          field.resetField();
        }
      },
      validate(callback) {
        var count = 0;
        var valid = true;

        for (let prop in this.fields) {
          let field = this.fields[prop];
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }

            if (++count === this.fieldLength) {
              callback(valid);
            }
          });
        }
      },
      validateField(prop, cb) {
        var field = this.fields[prop];
        if (!field) { throw new Error('must call validateField with valid prop string!'); }

        field.validate('', cb);
      }
    }
  };
</script>
