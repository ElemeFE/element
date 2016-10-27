<template>
  <form class="el-form" :class="[
    labelPosition ? 'el-form--label-' + labelPosition : '',
    { 'el-form--inline': inline }
  ]">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'ElForm',

    componentName: 'form',

    props: {
      model: Object,
      rules: Object,
      labelPosition: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean
    },
    data() {
      return {
        fields: {},
        fieldLength: 0
      };
    },
    created() {
      this.$on('el.form.addField', (field) => {
        this.fields[field.prop] = field;
        this.fieldLength++;
      });
      /* istanbul ignore next */
      this.$on('el.form.removeField', (field) => {
        delete this.fields[field.prop];
        this.fieldLength--;
      });
    },
    methods: {
      resetFields() {
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
