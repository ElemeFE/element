<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formInline: {
          user: '',
          region: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        formLabelWidth: '80px',
        options: [
        ],
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        dynamicValidateForm: {
          domains: [{
            key: Date.now(),
            value: ''
          }],
          email: ''
        },
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      onRuleFormSubmit() {
        console.log('onRuleFormSubmit');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>

<style>
  .demo-form.demo-en-US {
    .tm-select .tm-input {
      width: 360px;
    }
    .tm-form {
      width: 480px;
    }

    .line {
      text-align: center;
    }

    .tm-checkbox-group {
      width: 320px;
      margin: 0;
      padding: 0;
      list-style: none;

      &:after, &:before {
        content: ' ';
        display: table;
      }
      &:after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
      }

      .tm-checkbox {
        float: left;
        width: 160px;
        padding-right: 20px;
        margin: 0;
        padding: 0;

        + .tm-checkbox {
          margin-left: 0;
        }
      }
    }
    .demo-form-normal {
      width: 480px;
    }
    .demo-form-inline {
      width: auto;

      .tm-input {
        width: 150px;
      }
      > * {
        margin-right: 10px;
      }
    }
    .demo-ruleForm {
      width: 480px;

      .tm-select .tm-input {
        width: 360px;
      }
    }
    .demo-dynamic {
      width: 500px;

      .tm-input {
        margin-right: 10px;
        width: 270px;
        vertical-align: top;
      }
    }
    .fr {
      float: right;
    }
  }
</style>

## Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

### Basic form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

```html
<tm-form ref="form" :model="form" label-width="120px">
  <tm-form-item label="Activity name">
    <tm-input v-model="form.name"></tm-input>
  </tm-form-item>
  <tm-form-item label="Activity zone">
    <tm-select v-model="form.region" placeholder="please select your zone">
      <tm-option label="Zone one" value="shanghai"></tm-option>
      <tm-option label="Zone two" value="beijing"></tm-option>
    </tm-select>
  </tm-form-item>
  <tm-form-item label="Activity time">
    <tm-col :span="11">
      <tm-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></tm-date-picker>
    </tm-col>
    <tm-col class="line" :span="2">-</tm-col>
    <tm-col :span="11">
      <tm-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></tm-time-picker>
    </tm-col>
  </tm-form-item>
  <tm-form-item label="Instant delivery">
    <tm-switch v-model="form.delivery"></tm-switch>
  </tm-form-item>
  <tm-form-item label="Activity type">
    <tm-checkbox-group v-model="form.type">
      <tm-checkbox label="Online activities" name="type"></tm-checkbox>
      <tm-checkbox label="Promotion activities" name="type"></tm-checkbox>
      <tm-checkbox label="Offline activities" name="type"></tm-checkbox>
      <tm-checkbox label="Simple brand exposure" name="type"></tm-checkbox>
    </tm-checkbox-group>
  </tm-form-item>
  <tm-form-item label="Resources">
    <tm-radio-group v-model="form.resource">
      <tm-radio label="Sponsor"></tm-radio>
      <tm-radio label="Venue"></tm-radio>
    </tm-radio-group>
  </tm-form-item>
  <tm-form-item label="Activity form">
    <tm-input type="textarea" v-model="form.desc"></tm-input>
  </tm-form-item>
  <tm-form-item>
    <tm-button type="primary" @click="onSubmit">Create</tm-button>
    <tm-button>Cancel</tm-button>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that
> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.native.prevent` on `<tm-form>`.
  :::

### Inline form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `inline` attribute to `true` and the form will be inline.

```html
<tm-form :inline="true" :model="formInline" class="demo-form-inline">
  <tm-form-item label="Approved by">
    <tm-input v-model="formInline.user" placeholder="Approved by"></tm-input>
  </tm-form-item>
  <tm-form-item label="Activity zone">
    <tm-select v-model="formInline.region" placeholder="Activity zone">
      <tm-option label="Zone one" value="shanghai"></tm-option>
      <tm-option label="Zone two" value="beijing"></tm-option>
    </tm-select>
  </tm-form-item>
  <tm-form-item>
    <tm-button type="primary" @click="onSubmit">Query</tm-button>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

### Alignment

Depending on your design, there are several different ways to align your label element.

:::demo The `label-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

```html
<tm-radio-group v-model="labelPosition" size="small">
  <tm-radio-button label="left">Left</tm-radio-button>
  <tm-radio-button label="right">Right</tm-radio-button>
  <tm-radio-button label="top">Top</tm-radio-button>
</tm-radio-group>
<div style="margin: 20px;"></div>
<tm-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <tm-form-item label="Name">
    <tm-input v-model="formLabelAlign.name"></tm-input>
  </tm-form-item>
  <tm-form-item label="Activity zone">
    <tm-input v-model="formLabelAlign.region"></tm-input>
  </tm-form-item>
  <tm-form-item label="Activity form">
    <tm-input v-model="formLabelAlign.type"></tm-input>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

### Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `Form-Item` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

```html
<tm-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <tm-form-item label="Activity name" prop="name">
    <tm-input v-model="ruleForm.name"></tm-input>
  </tm-form-item>
  <tm-form-item label="Activity zone" prop="region">
    <tm-select v-model="ruleForm.region" placeholder="Activity zone">
      <tm-option label="Zone one" value="shanghai"></tm-option>
      <tm-option label="Zone two" value="beijing"></tm-option>
    </tm-select>
  </tm-form-item>
  <tm-form-item label="Activity time" required>
    <tm-col :span="11">
      <tm-form-item prop="date1">
        <tm-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></tm-date-picker>
      </tm-form-item>
    </tm-col>
    <tm-col class="line" :span="2">-</tm-col>
    <tm-col :span="11">
      <tm-form-item prop="date2">
        <tm-time-picker type="fixed-time" placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></tm-time-picker>
      </tm-form-item>
    </tm-col>
  </tm-form-item>
  <tm-form-item label="Instant delivery" prop="delivery">
    <tm-switch v-model="ruleForm.delivery"></tm-switch>
  </tm-form-item>
  <tm-form-item label="Activity type" prop="type">
    <tm-checkbox-group v-model="ruleForm.type">
      <tm-checkbox label="Online activities" name="type"></tm-checkbox>
      <tm-checkbox label="Promotion activities" name="type"></tm-checkbox>
      <tm-checkbox label="Offline activities" name="type"></tm-checkbox>
      <tm-checkbox label="Simple brand exposure" name="type"></tm-checkbox>
    </tm-checkbox-group>
  </tm-form-item>
  <tm-form-item label="Resources" prop="resource">
    <tm-radio-group v-model="ruleForm.resource">
      <tm-radio label="Sponsorship"></tm-radio>
      <tm-radio label="Venue"></tm-radio>
    </tm-radio-group>
  </tm-form-item>
  <tm-form-item label="Activity form" prop="desc">
    <tm-input type="textarea" v-model="ruleForm.desc"></tm-input>
  </tm-form-item>
  <tm-form-item>
    <tm-button type="primary" @click="submitForm('ruleForm')">Create</tm-button>
    <tm-button @click="resetForm('ruleForm')">Reset</tm-button>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

### Custom validation rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.
```html
<tm-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
  <tm-form-item label="Password" prop="pass">
    <tm-input type="password" v-model="ruleForm2.pass" auto-complete="off"></tm-input>
  </tm-form-item>
  <tm-form-item label="Confirm" prop="checkPass">
    <tm-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></tm-input>
  </tm-form-item>
  <tm-form-item label="Age" prop="age">
    <tm-input v-model.number="ruleForm2.age"></tm-input>
  </tm-form-item>
  <tm-form-item>
    <tm-button type="primary" @click="submitForm('ruleForm2')">Submit</tm-button>
    <tm-button @click="resetForm('ruleForm2')">Reset</tm-button>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

### Delete or add form items dynamically

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

```html
<tm-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <tm-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
    ]"
  >
    <tm-input v-model="dynamicValidateForm.email"></tm-input>
  </tm-form-item>
  <tm-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <tm-input v-model="domain.value"></tm-input><tm-button @click.prevent="removeDomain(domain)">Delete</tm-button>
  </tm-form-item>
  <tm-form-item>
    <tm-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</tm-button>
    <tm-button @click="addDomain">New domain</tm-button>
    <tm-button @click="resetForm('dynamicValidateForm')">Reset</tm-button>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>
```
:::

### Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vuejs.
```html
<tm-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <tm-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <tm-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></tm-input>
  </tm-form-item>
  <tm-form-item>
    <tm-button type="primary" @click="submitForm('numberValidateForm')">Submit</tm-button>
    <tm-button @click="resetForm('numberValidateForm')">Reset</tm-button>
  </tm-form-item>
</tm-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
When an `tm-form-item` is nested in another `tm-form-item`, its label width will be `0`. You can set `label-width` on that `tm-form-item` if needed.
:::

### Size control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormIten.
```html
<tm-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <tm-form-item label="Activity name">
    <tm-input v-model="sizeForm.name"></tm-input>
  </tm-form-item>
  <tm-form-item label="Activity zone">
    <tm-select v-model="sizeForm.region" placeholder="please select your zone">
      <tm-option label="Zone one" value="shanghai"></tm-option>
      <tm-option label="Zone two" value="beijing"></tm-option>
    </tm-select>
  </tm-form-item>
  <tm-form-item label="Activity time">
    <tm-col :span="11">
      <tm-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></tm-date-picker>
    </tm-col>
    <tm-col class="line" :span="2">-</tm-col>
    <tm-col :span="11">
      <tm-time-picker type="fixed-time" placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></tm-time-picker>
    </tm-col>
  </tm-form-item>
  <tm-form-item label="Activity type">
    <tm-checkbox-group v-model="sizeForm.type">
      <tm-checkbox-button label="Online activities" name="type"></tm-checkbox-button>
      <tm-checkbox-button label="Promotion activities" name="type"></tm-checkbox-button>
    </tm-checkbox-group>
  </tm-form-item>
  <tm-form-item label="Resources">
    <tm-radio-group v-model="sizeForm.resource" size="medium">
      <tm-radio border label="Sponsor"></tm-radio>
      <tm-radio border label="Venue"></tm-radio>
    </tm-radio-group>
  </tm-form-item>
  <tm-form-item size="large">
    <tm-button type="primary" @click="onSubmit">Create</tm-button>
    <tm-button>Cancel</tm-button>
  </tm-form-item>
</tm-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
```
:::

### Form Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| model| data of form component | object | — | — |
| rules | validation rules of form | object | — | — |
| inline | whether the form is inline | boolean | — | false |
| label-position | position of label | string | left / right / top | right |
| label-width | width of label, and all its direct child form items will inherit this value | string | — | — |
| label-suffix | suffix of the label | string | — | — |
| show-message  | whether to show the error message | boolean | — | true |
| inline-message  | whether to display the error message inline with the form item | boolean | — | false |
| status-icon  | whether to display an icon indicating the validation result | boolean | — | false |
| validate-on-rule-change  | whether to trigger validation when the `rules` prop is changed | boolean | — | true |
| size  | control the size of components in this form | string | medium / small / mini | — |
| disabled | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean | — | false |

### Form Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| validate | the method to validate the whole form. Returns a promise if callback is omitted | Function(callback: Function(boolean)) |
| validateField | the method to validate a certain form item | Function(prop: string, callback: Function(errorMessage: string)) |
| resetFields | reset all the fields and remove validation result | — |
| clearValidate | clear validation message for all fields | -

### Form-Item Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| prop | a key of `model`. In the use of validate and resetFields method, the attribute is required | string | keys of model that passed to `form` |
| label | label | string | — | — |
| label-width | width of label, e.g. '50px' | string | — | — |
| required | whether the field is required or not, will be determined by validation rules if omitted | string |  — | false |
| rules | validation rules of form | object | — | — |
| error | field error message, set its value and the field will validate error and show this message immediately | string | — | — |
| show-message  | whether to show the error message | boolean | — | true |
| inline-message  | inline style validate message | boolean | — | false |
| size  | control the size of components in this form-item | string | medium / small / mini | - |

### Form-Item Slot
| Name | Description |
|------|--------|
| — | content of Form Item |
| label | content of label |

### Form-Item Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| resetField | reset current field and remove validation result | — |
