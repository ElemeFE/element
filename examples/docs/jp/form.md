## フォーム

フォームは `input`, `radio`, `select`, `checkbox` などから構成されています。フォームを使うと、データを収集したり、検証したり、送信したりすることができます。

### 基本フォーム

これには、`input`, `select`, `radio`, `checkbox` などのあらゆる種類の入力項目が含まれます。

:::demo 各 `form` コンポーネントには、入力項目のコンテナとなる `form-item` フィールドが必要です。

```html
<el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Activity name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="form.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="Online activities" name="type"></el-checkbox>
      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
      <el-checkbox label="Offline activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Sponsor"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
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

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) は規制しているのは
> <i>フォーム内に1つの単一行テキスト入力フィールドしかない場合、ユーザエージェントは、そのフィールドでのEnterをフォームの送信要求として受け入れるべきである。</i>

この動作を防ぐには、`<el-form>` に `@submit.native.prevent` を追加します。
  :::

### インラインフォーム

縦のスペースが限られていて、比較的シンプルな形の場合は、一行にまとめることができます。

:::demo `inline` 属性を `true` に設定すると、フォームがインラインになります。

```html
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="Approved by">
    <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="formInline.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Query</el-button>
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

### アライメント

デザインに応じて、ラベル要素を揃える方法はいくつかあります。

:::demo `label-position` 属性はラベルの配置を決定します。`top`に設定すると、ラベルはフォームフィールドの一番上に配置されます。

```html
<el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">Left</el-radio-button>
  <el-radio-button label="right">Right</el-radio-button>
  <el-radio-button label="top">Top</el-radio-button>
</el-radio-group>
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
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

### バリデーション

フォームコンポーネントを使用すると、データを検証してエラーを発見したり修正したりすることができます。

:::demo `Form` コンポーネントに `rules` 属性を追加して検証ルールを渡し、`Form-Item`に `prop` 属性を検証が必要な特定のキーとして設定するだけです。詳細は [async-validator](https://github.com/yiminghe/async-validator) を参照してください。

```html
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Activity name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone" prop="region">
    <el-select v-model="ruleForm.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="Online activities" name="type"></el-checkbox>
      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
      <el-checkbox label="Offline activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="Sponsorship"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
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

### カスタムバリデーションルール


この例では、独自の検証ルールをカスタマイズして、2ファクタのパスワード検証を完了させる方法を示しています。

:::demo ここでは、検証結果をアイコンとして反映させるために `status-icon` を用いる。
```html
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Confirm" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Age" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
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
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
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

:::tip
カスタムバリデートコールバック関数を呼び出す必要があります。より高度な使い方は [async-validator](https://github.com/yiminghe/async-validator) を参照してください。
:::

### フォーム項目を動的に削除または追加

:::demo フォームコンポーネントにすべてのバリデーションルールを一度に渡すことに加えて、単一のフォームフィールドにバリデーションルールを動的に渡したり削除したりすることもできます。

```html
<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</el-button>
    <el-button @click="addDomain">New domain</el-button>
    <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
  </el-form-item>
</el-form>
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

### ナンバーの検証(Number Validate)

:::demo Number Validateでは、入力された `v-model` バインディングに `.number` という修飾子を追加する必要がありますが、これは文字列の値をVuejsが提供する数値に変換するために使われます。
```html
<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
    <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
  </el-form-item>
</el-form>
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
`el-form-item` が別の `el-form-item` に入れ子になっている場合、そのラベルの幅は `0` になります。必要であれば、その `el-form-item` に `label-width` を設定することもできる。
:::

### サイズコントロール

フォームのすべてのコンポーネントはそのフォームから `size` 属性を継承します。同様に、FormItem にも `size` 属性があります。

:::demo それでも、コンポーネントのサイズを From や FormIten から継承させたくない場合は、各コンポーネントの `size` を微調整することができます。
```html
<el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <el-form-item label="Activity name">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="sizeForm.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
      <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="Sponsor"></el-radio>
      <el-radio border label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>

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

### フォーム属性

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| model| フォームコンポーネントのデータ | object | — | — |
| rules | フォームのバリデーションルール | object | — | — |
| inline | フォームがインラインであるかどうか | boolean | — | false |
| label-position | ラベルの位置。’left'、’right’ もしくは`label-width`が設定されている場合は propも必要です。 | string | left / right / top | right |
| label-width    | ラベルの幅、例えば  '50px'。直接の子フォーム項目はすべてこの値を継承します。Width `auto` がサポートされています。        | string | — | — |
| label-suffix | ラベルの接尾辞 | string | — | — |
| hide-required-asterisk | 必須フィールドのラベルの横に赤いアスタリスク（星）を付けるかどうか | boolean | — | false |
| show-message  | エラーメッセージを表示するかどうか | boolean | — | true |
| inline-message  | エラーメッセージをフォーム項目とインラインで表示するかどうか。 | boolean | — | false |
| status-icon  | バリデーション結果を示すアイコンを表示するかどうか | boolean | — | false |
| validate-on-rule-change  | `rules` propが変更されたときにバリデーションをトリガするかどうか。 | boolean | — | true |
| size  | コンポーネントのサイズを制御する形式 | string | medium / small / mini | — |
| disabled | このフォームのすべてのコンポーネントを無効にするかどうかを指定します。true に設定されている場合、内部のコンポーネントの `disabled` プロップで上書きすることはできません。 | boolean | — | false |

### フォームメソッド

| Method | Description | Parameters |
| ---- | ---- | ---- |
| validate | バリデートはフォーム全体を検証します。パラメータとしてコールバックを受け取ります。バリデーションが通過したかどうかを示すブール値と、バリデーションに失敗したすべてのフィールドを含むオブジェクトです。コールバックが省略された場合はpromiseを返します。 | Function(callback: Function(boolean, object)) |
| validateField | フォーム項目を検証する | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields | すべてのフィールドをリセットし、検証結果を削除します。 | — |
| clearValidate | 特定のフィールドのバリデーションメッセージをクリアします。パラメータはprop名、または検証メッセージが削除されるフォーム項目のprop名の配列です。省略された場合、すべてのフィールドのバリデーションメッセージがクリアされます。 | Function(props: string \| array) |

### フォームイベント
| Event Name | Description | Parameters |
|----------- |------------ |----------- |
| validate   | フォーム項目バリデーション後にトリガされます。 | prop name of the form item being validated, whether validation is passed and the error message if not |

### フォームアイテム属性

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| prop | `model` のキーです。validateメソッドとresetFieldsメソッドを利用する際には、この属性が必須です。 | string | keys of model that passed to `form` |
| label | ラベル | string | — | — |
| label-width | ラベルの幅。Width `auto` がサポートされています。 | string | — | — |
| required | フィールドが必須かどうか、省略された場合はバリデーションルールによって決定されます。 | boolean |  — | false |
| rules | フォームのバリデーションルール | object | — | — |
| error | フィールドのエラーメッセージ、値を設定すると、フィールドはエラーを検証し、このメッセージをすぐに表示します。 | string | — | — |
| show-message  | エラーメッセージを表示するかどうか | boolean | — | true |
| inline-message  | インラインスタイルバリデートメッセージ | boolean | — | false |
| size  | フォームアイテムのコンポーネントのサイズを制御します。 | string | medium / small / mini | - |

### フォームアイテムスロット
| Name | Description |
|------|--------|
| — | フォームアイテムの内容 |
| label | ラベルの内容 |

### フォームアイテムのスコープスロット
|      Name     | Description |
|---------------|-------------|
|      error    | Custom content to display validation message. The scope parameter is { error } |

### フォームアイテムのメソッド

| Method | Description | Parameters |
| ---- | ---- | ---- |
| resetField | 現在のフィールドをリセットしてバリデーション結果を削除する | — |
| clearValidate | フィールドのバリデーションステータスを削除する | - |
