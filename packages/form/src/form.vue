<template>
  <form class="el-form" :class="[
    labelPosition ? 'el-form--label-' + labelPosition : '',
    { 'el-form--inline': inline }
  ]" @submit="handleSubmit($event)">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'ElForm',

    componentName: 'ElForm',

    props: {
      model: Object,
      rules: Object,
      labelPosition: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      },
      // 表单提交是否重载页面
      isPrevent: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      rules() {
        this.validate();
      }
    },
    data() {
      return {
        fields: []
      };
    },
    created() {
      this.$on('el.form.addField', (field) => {
        if (field) {
          this.fields.push(field);
        }
      });
      /* istanbul ignore next */
      this.$on('el.form.removeField', (field) => {
        if (field.prop) {
          this.fields.splice(this.fields.indexOf(field), 1);
        }
      });
    },
    methods: {
      resetFields() {
        this.fields.forEach(field => {
          field.resetField();
        });
      },
      validate(callback) {
        let valid = true;
        let count = 0;
        // 如果需要验证的fields为空，调用验证时立刻返回callback
        if (this.fields.length === 0 && callback) {
          callback(true);
        }
        this.fields.forEach((field, index) => {
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }
            if (typeof callback === 'function' && ++count === this.fields.length) {
              callback(valid);
            }
          });
        });
      },
      validateField(prop, cb) {
        var field = this.fields.filter(field => field.prop === prop)[0];
        if (!field) { throw new Error('must call validateField with valid prop string!'); }

        field.validate('', cb);
      },
      handleSubmit(event) {
        // 定义了校验规则的场合
        if (this.rules) {
          // 使用定义的校验规则进行校验
          this.validate((valid) => {
            // 校验成功的场合
            if (valid) {
              // 触发submit事件
              this.$emit('submit');
            }
          });
        }
        if (this.isPrevent) {
          event.preventDefault();
        }
      }
    }
  };
</script>
