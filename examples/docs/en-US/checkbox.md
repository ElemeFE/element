<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  module.exports = {
    data() {
      return {
        checkList: ['selected and disabled','Option A'],
        // checkList2: ['Option A'],
        checked: true,
        checked1: false,
        checked2: true,
        isValid: 'valid',
        checkAll: false,
        cities: cityOptions,
        checkedCities: ['Shanghai', 'Beijing'],
        checkedCities1: ['Shanghai', 'Beijing'],
        isIndeterminate: true,
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Beijing'],
        checkboxGroup3: ['Guangzhou']
      };
    },
    methods: {
      handleChange(ev) {
        console.log(ev);
      },
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>

## Checkbox

A group of options for multiple choices.

### Basic usage

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `el-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `el-checkbox` tag will become the description following the button of the checkbox.

```html
<template>
  <!-- `checked` should be true or false -->
  <el-checkbox v-model="checked">Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### Disabled State

Disabled state for checkbox.

::: demo Set the `disabled` attribute.

```html
<template>
  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>
  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `el-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="disabled" disabled></el-checkbox>
    <el-checkbox label="selected and disabled" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
```
:::

### Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

:::demo

```html
<template>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
```
:::

### Minimum / Maximum items checked

The `min` and `max` properties can help you to limit the number of checked items.

:::demo

```html
<template>
  <el-checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities1: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
</script>
```
:::

### Button style

Checkbox with button styles.

:::demo You just need to change `<el-checkbox>` element into `<el-checkbox-button>` element. We also provide `size` attribute for these buttons: `large` and `small`.
```html
<template>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkboxGroup1">
    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
  </el-checkbox-group>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkboxGroup2" size="small">
    <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Shenzhen'" :key="city">{{city}}</el-checkbox-button>
  </el-checkbox-group>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkboxGroup3" size="large" fill="#324057" text-color="#a4aebd" :min="1" :max="3">
    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
  </el-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Beijing'],
        checkboxGroup3: ['Guangzhou'],
        cities: cityOptions
      };
    }
  }
</script>
```
:::

### Checkbox Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | value of the checkbox when used inside a `checkbox-group`   | string    |       —        |     —    |
| true-label | value of the checkbox if it's checked   | string, number    |       —        |     —    |
| false-label | value of the checkbox if it's not checked   | string, number    |      —         |     —    |
| name | native 'name' attribute | string    |      —         |     —    |
| disabled  | if the checkbox is disabled   | boolean   |  — | false   |
| checked  | if the checkbox is checked   | boolean   |  — | false   |
| indeterminate  | same as `indeterminate` in native checkbox | boolean   |  — | false   |

### Checkbox-group Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
|size | the size of checkbox buttons | string | large/small | —
|fill  | border and background color when button is active | string   | — | #20a0ff   |
|text-color | font color when button is active | string   | — | #ffffff   |
| min     | minimum number of checkbox checked   | number    |       —        |     —    |
| max     | maximum number of checkbox checked   | number    |       —        |     —    |

### Checkbox-group Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | Event object |

