## form

Form component consists of `input`, `radio`, `select`, `checkbox` and other controls. With form component, you can collect, verify and submit the data.

### basic form

It includes all kinds of input controls, such as `input`, `select`, `radio` and `checkbox`.

In each `form` component, you need a `form-item` field to be the container of your input control.

:::demo

```html
<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit">
  <el-form-item label="activity name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="activity zone">
    <el-select v-model="form.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Please select a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="Please select a date" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery">
    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Nature of activity">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="Gourmet/restaurant online activities" name="type"></el-checkbox>
      <el-checkbox label="Promote activities" name="type"></el-checkbox>
      <el-checkbox label="Off-line theme activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Special resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Online brand sponsorship"></el-radio>
      <el-radio label="Off-line venue for free"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Form of activity">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">Create</el-button>
    <el-button @click.native.prevent>Cancel</el-button>
  </el-form-item>
</el-form>
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

### inline-form

`type` attribute will control the type of your form, and if it equals to `iniline` and `inline = true'`, the form will change into a inline-form.

:::demo

```html
<el-form :inline="true" :model="formInline" @submit.prevent="onSubmit" class="demo-form-inline">
  <el-form-item>
    <el-input v-model="formInline.user" placeholder="Approver"></el-input>
  </el-form-item><el-form-item>
    <el-select v-model="formInline.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item><el-form-item>
    <el-button type="primary">Query</el-button>
  </el-form-item>
</el-form>
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

### alignment

Depending on your design and web page, there are diffent ways to align your label element.

the `label-position` attribute decides the alignment, the default way is `right justified`.

#### top

:::demo

```javascript
<el-form label-position="top" :model="formStacked" class="demo-form-stacked">
  <el-form-item label="Name">
    <el-input v-model="formStacked.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formStacked.region"></el-input>
  </el-form-item>
  <el-form-item label="Form of activity">
    <el-input v-model="formStacked.type"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formStacked: {
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

#### right

The default value  is `right`

:::demo

```javascript
<el-form :model="formAlignRight" label-width="80px">
  <el-form-item label="Activity name">
    <el-input v-model="formAlignRight.name"></el-input>
  </el-form-item>
  <el-form-item label="Promote area">
    <el-input v-model="formAlignRight.region"></el-input>
  </el-form-item>
  <el-form-item label="Form of activity">
    <el-input v-model="formAlignRight.type"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formAlignRight: {
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

#### left

:::demo

```javascript
<el-form :model="formAlignLeft" label-position="left" @submit.prevent="onSubmit" label-width="80px">
  <el-form-item label="Activity name">
    <el-input v-model="formAlignLeft.name"></el-input>
  </el-form-item>
  <el-form-item label="Promote area">
    <el-input v-model="formAlignLeft.region"></el-input>
  </el-form-item>
  <el-form-item label="Form of activity">
    <el-input v-model="formAlignLeft.type"></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        formAlignLeft: {
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

### validator

Form component allows you to verify your data, and help you to find some errors, you just need to add `rule` attribute for `form` component and pass agreed validation rules, and set `prop` attribute of `form item` to validate specificed rule. See more infomation at [async-validator](https://github.com/yiminghe/async-validator).

:::demo

```javascript
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="Activity name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="Please select a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="Please select a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery">
    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Nature of activity" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="Gourmet/restaurant online activities" name="type"></el-checkbox>
      <el-checkbox label="Promote activities" name="type"></el-checkbox>
      <el-checkbox label="Off-line theme activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Special resources" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="Online brand sponsorship"></el-radio>
      <el-radio label="Off-line venue for free"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Form of activity" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click.native.prevent="handleSubmit">Create</el-button>
    <el-button @click.native.prevent="handleReset">Reset</el-button>
  </el-form-item>
</el-form>
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
            { required: true, message: 'Please input Activity name', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please select a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please select a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one Nature of activity', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select an resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input Form of activity', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```
:::

### Custom validation rules

This case will show you how to customize your own validation rules and complete the twice verification of the password.

:::demo

```javascript
<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="Confirm password" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="Age" prop="age">
    <el-input v-model="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click.native.prevent="handleSubmit2">Submit</el-button>
    <el-button @click.native.prevent="handleReset2">Reset</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        var age = parseInt(value, 10);

        setTimeout(() => {
          if (!Number.isInteger(age)) {
            callback(new Error('Please input digits'));
          } else{
            if (age < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          } 
        }, 1000);
      };
      var validaePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validaePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Enter the password twice inconsistency!'));
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
            { required: true, message: 'Please input the password', trigger: 'blur' },
            { validator: validaePass }
          ],
          checkPass: [
            { required: true, message: 'Please input the password again', trigger: 'blur' },
            { validator: validaePass2 }
          ],
          age: [
            { required: true, message: 'Please input the age', trigger: 'blur' },
            { validator: checkAge, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```

### Delete or add form items dynamically

In addition to passing all validation rules at first time on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

:::demo

```javascript
<el-form :model="dynamicForm" :rules="dynamicRule" ref="dynamicForm" label-width="100px" class="demo-dynamic">
  <el-form-item prop="email" label="email">
    <el-input v-model="dynamicForm.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in dynamicForm.domains"
    :label="'domain' + index"
    :key="domain.key"
    :prop="'domains:' + index"
    :rules="{
      type: 'object', required: true,
      fields: {
        value: { required: true, message: 'domain can not be null', trigger: 'blur' }
      }
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.native.prevent="removeDomain(domain)">Delete</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click.native.prevent="handleSubmit3">Submit</el-button>
    <el-button @click.native.prevent="addDomain">New domain</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        dynamicForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        },
        dynamicRule: {
          email: [
            { required: true, message: 'Please input you email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      handleSubmit3(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      removeDomain(item) {
        var index = this.dynamicForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicForm.domains.push({
          key: this.dynamicForm.domains.length,
          value: ''
        });
      }
    }
  }
</script>
```
::: 

### Form Attributes

Attributes | Description | Type | Options | Default 
----| ----| ---- | ---- | ---- 
model| data of form component | object | --- | ---
rules | validation rules of form | object | --- | ---
type | type of form | string | horizontal, stacked, inline | horizontal
label-align | Horizontal alignment position of label | string | left, right, top | right
label-width | the width of form label, and all form-item will inherit from this value| string | --- | ---
label-shffix | suffix of the label | string | --- | ---

### Form methods

Method | Description
---- | ----
validate(cb) | the method to validate all form 
validateField(prop, cb) | the method to validate some form items 
resetFields | reset all the form and all text field to null, and remove validation result 

### Form-Item Attributes

Attributes | Description | Type | Options | Default 
----| ----| ---- | ---- | ---- 
prop |model field of form-item | string | model field which pass to form component
label | label | string | --- | ---
label-width | the width of label | string | --- | ---
required | whether it is required or not | string |  --- | false




