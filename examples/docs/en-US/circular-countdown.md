<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
    computed: {
      startDate() {
        let d = new Date();
        d.setHours(d.getHours() - 12);
        return d;
      },
      endDate1() {
        let d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
      },
      endDate2() {
        let d = new Date();
        d.setHours(d.getHours() + 4);
        return d;
      },
      endDate3() {
        let d = new Date();
        d.setHours(d.getHours() + 1);
        return d;
      }
    }
  };
</script>
<style>
.demo-circular-countdown {
  overflow: hidden;
  .tm-circular-countdown {
    float: left;
    margin-right: 5px;
  }
}
</style>
## CircularCountdown

Circular countdown uses to show time left from date to date.

### Basic usage

:::demo Use

```html
<div class="demo-circular-countdown">
<tm-circular-countdown :start-date="startDate"
                       :end-date="endDate1"></tm-circular-countdown>
<tm-circular-countdown :start-date="startDate"
                      :end-date="endDate2"></tm-circular-countdown>
<tm-circular-countdown :start-date="startDate"
                      :end-date="endDate3"></tm-circular-countdown>
</div>
<script>
export default {
    data() {
      return {
      };
    },
    methods: {
    },
    computed: {
      startDate() {
        let d = new Date();
        d.setHours(d.getHours() - 12);
        return d;
      },
      endDate1() {
        let d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
      },
      endDate2() {
        let d = new Date();
        d.setHours(d.getHours() + 4);
        return d;
      },
      endDate3() {
        let d = new Date();
        d.setHours(d.getHours() + 1);
        return d;
      }
    }
  };
</script>
```
:::


### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| start-date     | start date (order date)   | Date    |   Date |     —    |
| end-date     | end date (order cancel date)   | Date    |   Date |     —    |
