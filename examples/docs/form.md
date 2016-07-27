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
        },
        formInline: {
          user: '',
          region: ''
        },
        formStacked: {
          name: '',
          region: '',
          type: '',
          remark: ''
        },
        formAlignLeft: {
          name: '',
          region: '',
          type: '',
          remark: ''
        },
        ruleForm: {
          sex: '',
          user1: '',
          user2: '',
          age: '',
          region: [],
          desc: '',
          mail: ''
        },
        formNoLabel: {
          username: '',
          pass: '',
          rememberPss: false
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
          user1: [
            { required: true, min: 5, message: '用户名至少为 5 个字符', trigger: 'blur' }
          ],
          user2: [
            { required: true, min: 3, message: '用户名至少为 3 个字符', trigger: 'blur' }
          ],
          age: [
            { type: 'number', required: true, message: '请输入年龄', trigger: 'blur' },
            { type: 'number', min: 18, message: '输入必须为大于18的整数', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          sex: [
            { required: true, message: '请选择性别' }
          ],
          region: [
            { type: 'array', required: true, message: '请至少选择一个地区', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写个人简介', trigger: 'blur' }
          ]
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: this.validaePass }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: this.validaePass2 }
          ],
          age: [
            { required: true, message: '请填写年龄', trigger: 'blur' },
            { validator: this.checkAge, trigger: 'change' }
          ]
        },
        dynamicForm: {
          domains: [''],
          email: ''
        },
        dynamicRule: {
          domains: {
            type: '域名不能',
            required: true
          },
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate(valid => {
          if (valid) {
            alert('申请已提交');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit3(ev) {
        this.$refs.dynamicForm.validate(valid => {
          if (valid) {
            alert('申请已提交');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleReset() {
        this.$refs.ruleForm.resetForm();
      },
      handleReset2() {
        this.$refs.ruleForm2.resetForm();
      },
      checkAge(rule, value, callback) {
        var age = parseInt(value, 10);
        // debugger;
        setTimeout(() => {
          if (!Number.isInteger(age)) {
            callback(new Error('请输入数字值'));
          } else{
            if (age < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          } 
        }, 1000);
      },
      validaePass(rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      },
      validaePass2(rule, value, callback) {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      },
      handleValidate(prop, errorMsg) {
        console.log(prop, errorMsg);
      },
      onSubmit() {
        console.log('submit!');
      },
      onRuleFormSubmit() {
        console.log('onRuleFormSubmit');
      }
    }
  }
</script>

<style>
  .demo-form {
    .el-input,
    .el-textarea {
      width: 360px;
    }

    .line {
      text-align: center;
    }

    .el-checkbox-group {
      width: 320px;
      margin: 0;
      padding: 0;
      list-style: none;

      &:after,&:before {
        content: ' ';
        display: table;
      }
      &:after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
      }

      .el-checkbox {
        float: left;
        width: 160px;
        padding-right: 20px;
        margin: 0;
        padding: 0;

        + .el-checkbox {
          margin-left: 0;
        }
      }
    }

    .el-date-picker + .el-date-picker {
      margin-left: 10px;
    }
  }
  .demo-form-normal {
    width: 440px;
  }
  .demo-form-inline {
    .el-input {
      width: 150px;
    }
    > * {
      margin-right: 10px;
    }
  }
  .demo-ruleForm {
    width: 440px;

    .el-input,
    .el-textarea {
      width: auto;
    }
  }
  .demo-dynamic {
    .el-input {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .fr {
    float: right;
  }
</style>

## 基础使用

Form 组件是一个具有校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

<div class="demo-box demo-form demo-form-normal">
  <el-form v-ref:form @submit.prevent="onSubmit" label-width="80px">
    <el-form-item label="活动名称">
      <el-input :value.sync="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select :value.sync="form.region" :width="360" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="配送时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="蜂鸟配送">
      <el-switch on-text="" off-text="" :value="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group :value.sync="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio :value.sync="form.resource" label="线上品牌商赞助"></el-radio>
      <el-radio :value.sync="form.resource" label="线下场地免费"></el-radio>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" :value.sync="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">立即创建</el-button>
      <el-button @click.prevent>取消</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form v-ref:form @submit.prevent="onSubmit" label-width="80px">
    <el-form-item label="活动名称">
      <el-input :value.sync="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select :value.sync="form.region" :width="360" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="配送时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="蜂鸟配送">
      <el-switch on-text="" off-text="" :value="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group :value.sync="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio :value.sync="form.resource" label="线上品牌商赞助"></el-radio>
      <el-radio :value.sync="form.resource" label="线下场地免费"></el-radio>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" :value.sync="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">立即创建</el-button>
      <el-button @click.prevent>取消</el-button>
    </el-form-item>
  </el-form>
</template>
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

## Inline Form

<div class="demo-box demo-form demo-form-inline">
  <el-form type="inline" :model="formInline" @submit.prevent="onSubmit">
    <el-form-item>
      <el-input :value.sync="formInline.user" placeholder="审批人"></el-input>
    </el-form-item><el-form-item>
      <el-select :value.sync="formInline.region" :width="150" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item><el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form type="inline" :model="formInline" @submit.prevent="onSubmit">
    <el-form-item>
      <el-input :value.sync="formInline.user" placeholder="审批人"></el-input>
    </el-form-item><el-form-item>
      <el-select :value.sync="formInline.region" :width="150" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item><el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>
</template>
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

## Stacked Form

<div class="demo-box demo-form demo-form-stacked">
  <el-form type="stacked" :model="formStacked" @submit.prevent="onSubmit">
    <el-form-item label="名称">
      <el-input :value.sync="formStacked.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select :value.sync="formStacked.region" :width="360" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动展开形式">
      <el-input :value.sync="formStacked.type"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input :value.sync="formStacked.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">立即创建</el-button>
      <el-button @click.prevent>取消</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form type="stacked" :model="formStacked" @submit.prevent="onSubmit">
    <el-form-item label="名称">
      <el-input :value.sync="formStacked.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select :value.sync="formStacked.region" :width="360" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动展开形式">
      <el-input :value.sync="formStacked.type"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input :value.sync="formStacked.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">立即创建</el-button>
      <el-button @click.prevent>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        formStacked: {
          name: '',
          region: '',
          type: '',
          remark: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

## 标签左对齐

<div class="demo-box demo-form">
  <el-form :model="formAlignLeft" label-align="left" @submit.prevent="onSubmit" label-width="80px">
    <el-form-item label="名称">
      <el-input :value.sync="formAlignLeft.name"></el-input>
    </el-form-item>
    <el-form-item label="推广地">
      <el-select :value.sync="formAlignLeft.region" :width="360" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input :value.sync="formAlignLeft.type"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form :model="formAlignLeft" label-align="left" @submit.prevent="onSubmit" label-width="80px">
    <el-form-item label="名称">
      <el-input :value.sync="formAlignLeft.name"></el-input>
    </el-form-item>
    <el-form-item label="推广地">
      <el-select :value.sync="formAlignLeft.region" :width="360" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input :value.sync="formAlignLeft.type"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item>
  </el-form>
</template>
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
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

## 无标签

<div class="demo-box demo-form">
  <el-form :model="formNoLabel" @submit.prevent="onSubmit" style="width: 360px;">
    <el-form-item>
      <el-input :value.sync="formNoLabel.username" placeholder="手机号码/电子邮箱"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input :value.sync="formNoLabel.pass" placeholder="账户密码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="fr">登录</el-button>
      <el-checkbox :value.sync="formNoLabel.rememberPss" label="记住密码"></el-checkbox>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form :model="formNoLabel" @submit.prevent="onSubmit" style="width: 360px;">
    <el-form-item>
      <el-input :value.sync="formNoLabel.username" placeholder="手机号码/电子邮箱"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input :value.sync="formNoLabel.pass" placeholder="账户密码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="fr">登录</el-button>
      <el-checkbox :value.sync="formNoLabel.rememberPss" label="记住密码"></el-checkbox>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        formNoLabel: {
          username: '',
          pass: '',
          rememberPss: false
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```

## 表单验证

<div class="demo-box demo-form demo-ruleForm">
  <el-form :model="ruleForm" :rules="rules" v-ref:rule-form label-width="80px">
    <el-form-item label="用户名" :required="true">
      <el-col :span="11">
        <el-form-item prop="user1">
          <el-input :value.sync="ruleForm.user1" placeholder="First Name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="2"><div class="line">-</div></el-col>
      <el-col :span="11">
        <el-form-item prop="user2">
          <el-input :value.sync="ruleForm.user2" placeholder="Last Name"></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input :value.sync="ruleForm.age" :number="true"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="mail">
      <el-input :value.sync="ruleForm.mail"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group :value.sync="ruleForm.sex">
        <el-radio label="男" name="sex"></el-radio>
        <el-radio label="女" name="sex"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="简介" prop="desc">
      <el-input type="textarea" :value.sync="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="地区" prop="region" placeholder="请选择地区">
      <el-checkbox-group :value.sync="ruleForm.region">
        <el-checkbox label="BeiJing" name="region"></el-checkbox>
        <el-checkbox label="ShangHai" name="region"></el-checkbox>
        <el-checkbox label="ShenZhen" name="region"></el-checkbox>
        <el-checkbox label="GuangZhou" name="region"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="handleSubmit">提交</el-button>
      <el-button @click.prevent="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form :model="ruleForm" :rules="rules" v-ref:rule-form label-width="80px">
    <el-form-item label="用户名" :required="true">
      <el-col :span="11">
        <el-form-item prop="user1">
          <el-input :value.sync="ruleForm.user1" placeholder="First Name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="2"><div class="line">-</div></el-col>
      <el-col :span="11">
        <el-form-item prop="user2">
          <el-input :value.sync="ruleForm.user2" placeholder="Last Name"></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input :value.sync="ruleForm.age" :number="true"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="mail">
      <el-input :value.sync="ruleForm.mail"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group :value.sync="ruleForm.sex">
        <el-radio label="男" name="sex"></el-radio>
        <el-radio label="女" name="sex"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="简介" prop="desc">
      <el-input type="textarea" :value.sync="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="地区" prop="region" placeholder="请选择地区">
      <el-checkbox-group :value.sync="ruleForm.region">
        <el-checkbox label="BeiJing" name="region"></el-checkbox>
        <el-checkbox label="ShangHai" name="region"></el-checkbox>
        <el-checkbox label="ShenZhen" name="region"></el-checkbox>
        <el-checkbox label="GuangZhou" name="region"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="handleSubmit">提交</el-button>
      <el-button @click.prevent="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          sex: '',
          user1: '',
          user2: '',
          age: '',
          region: [],
          desc: '',
          mail: ''
        },
        rules: {
          user1: [
            { required: true, min: 5, message: '用户名至少为 5 个字符', trigger: 'blur' }
          ],
          user2: [
            { required: true, min: 3, message: '用户名至少为 3 个字符', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          sex: [
            { required: true, message: '请选择性别' }
          ],
          region: [
            { type: 'array', required: true, message: '请至少选择一个地区', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写个人简介', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
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

## 自定义校验规则

<div class="demo-box demo-form demo-ruleForm">
  <el-form :model="ruleForm2" :rules="rules2" v-ref:rule-form2 label-width="80px">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" :value.sync="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" :value.sync="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input :value.sync="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="handleSubmit2">提交</el-button>
      <el-button @click.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form :model="ruleForm2" :rules="rules2" v-ref:rule-form2 label-width="80px">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" :value.sync="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" :value.sync="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input :value.sync="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="handleSubmit2">提交</el-button>
      <el-button @click.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: this.validaePass }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: this.validaePass2 }
          ],
          age: [
            { required: true, message: '请填写年龄', trigger: 'blur' },
            { validator: this.checkAge, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
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

## 动态增减表单项

<div class="demo-box demo-form demo-dynamic">
  <el-form :model="dynamicForm" :rules="dynamicRule" v-ref:dynamic-form label-width="80px">
    <el-form-item prop="email" label="邮箱">
      <el-input :value.sync="dynamicForm.email"></el-input>
    </el-form-item>
    <el-form-item
      v-for="domain in dynamicForm.domains"
      :label="'域名' + $index"
      track-by="$index"
      :prop="'domains:' + $index"
      :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }">
      <el-input :value.sync="domain"></el-input><el-button @click="dynamicForm.domains.$remove(domain)">删除</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="handleSubmit3">提交</el-button>
      <el-button @click.prevent="dynamicForm.domains.push('')">新增域名</el-button>
    </el-form-item>
  </el-form>
</div>

```html
<template>
  <el-form :model="dynamicForm" :rules="dynamicRule" v-ref:dynamic-form label-width="80px">
    <el-form-item prop="email" label="邮箱">
      <el-input :value.sync="dynamicForm.email"></el-input>
    </el-form-item>
    <el-form-item
      v-for="domain in dynamicForm.domains"
      :label="'域名' + $index"
      track-by="$index"
      :prop="'domains:' + $index"
      :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }">
      <el-input :value.sync="domain"></el-input><el-button @click="dynamicForm.domains.$remove(domain)">删除</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.prevent="handleSubmit3">提交</el-button>
      <el-button @click.prevent="dynamicForm.domains.push('')">新增域名</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        dynamicForm: {
          domains: [''],
          email: ''
        },
        dynamicRule: {
          domains: {
            type: '域名不能',
            required: true
          },
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
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
      }
    }
  }
</script>
```

## el-form API
### 组件属性和事件

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                                  |        |
| rules    | 表单验证规则 | object |  |  |
| type | 表单类型 | string |  stacked, inline, horizontal | horizontal |
| label-align | 表单域标签的水平对齐位置 | string |  right,left            | right |
| label-width | 表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值 | string | |  |
| label-suffix | 表单域标签的后缀 | string | |  |

### el-form 实例属性和方法

| 方法名      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| validate(cb) | 对整个表单进行校验的方法, 校验结束后会调用传入的回调方法, cb(valid), valid 参数是校验 bool 值结果 | function |    |
| validateField(prop, cb) | 对部分表单字段进行校验的方法 |  |   |
| resetForm | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 |  |   |

## el-form-item API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域model字段 | string    | 传入父级 v-form 的 model 中的所有属性 |  |
| label | 标签文本 | string |   |  |
| label-width | 表单域标签的的宽度，例如 '50px' | string |              |  |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | bolean |  | false |
