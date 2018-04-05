<script>
  export default {
    data() {
      return {
        modelA: 'modelA',
        modelB: 'modelB'
      }  
    },
    methods: {
      searchPlaces (query, cb) {
        const mock = [
          {
            title: 'title1',
            description: 'description',
            icon: 'plane',
            code: 'code'
          },
          {
            title: 'title2',
            description: 'description',
            icon: 'plane',
            code: 'code'
          },
          {
            title: 'title3',
            description: 'description',
            icon: 'plane',
            code: 'code'
          },
          {
            title: 'title4',
            description: 'description',
            icon: 'plane',
            code: 'code'
          },
          {
            title: 'title5',
            description: 'description',
            icon: 'plane',
            code: 'code'
          }
        ]
        cb(mock)
      }
    }
  }  
</script>
## Value Switcher

### Basic Usage

:::demo
```html
<tm-form-group-item>
  <tm-value-switcher :fetch-suggestions="searchPlaces"></tm-value-switcher>
</tm-form-group-item>
<script>
  export default {
      data() {
        return {
          modelA: 'modelA',
          modelB: 'modelB'
        }  
      }
    }
</script>
```
:::
