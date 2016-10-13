# el-date-picker


## Installation
```shell
npm i el-date-picker -S
```

## Usage

A:
```javascript
import Vue from 'vue'
import ElDatePicker from 'el-date-picker'

Vue.use(ElDatePicker)
```

B:
```javascript
import Vue from 'vue'
import { DatePicker, TimePicker, TimeSelect } from 'el-date-picker'

Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(TimeSelect.name, TimeSelect);
```

C:
```html
<script src="path/to/vue/dist/vue.js"></script>
<script src="path/to/el-date-picker/index.js"></script>
<script>
  Vue.use(ElDatePicker);
</script>
```

## License
MIT
