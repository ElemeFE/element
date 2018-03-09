<script>
  import TmSidebarItemModel from 'tmconsulting-ui/packages/sidebar/src/TmSidebarItemModel';  

  export default {
    data() {
      return {
        list: [
          new TmSidebarItemModel('test1 test1 test1 test1', 'airplane'),
          new TmSidebarItemModel('test12', 'cross')
        ],
        list2: [
          new TmSidebarItemModel('test1 test1 test1 test1'),
          new TmSidebarItemModel('test12')
        ]
      }  
    }
  };
</script>
## Sidebar

### Nav mode

:::demo
```html
<tm-sidebar :list="list">Test Slot</tm-sidebar>
<script>
  export default {
    data() {
      return {
        list: [
          new TmSidebarItemModel('test1 test1 test1 test1', 'airplane'),
          new TmSidebarItemModel('test12', 'cross')
        ]
      }  
    }
  };
</script>
```
:::

### Inner mode

:::demo
```html
<tm-sidebar :list="list2" mode="inner">Test Slot</tm-sidebar>
<script>
  export default {
    data() {
      return {
        list2: [
          new TmSidebarItemModel('test1 test1 test1 test1'),
          new TmSidebarItemModel('test12')
        ]
      }  
    }
  };
</script>
```
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|----| ----| ---| ----| -----|
|list | list of menu items| TmSidebarItemModel[] | — | — |
|selected | initial selected value | TmSidebarItemModel | — | null |

### Events

| Event Name | Description | Parameters |
|----| ---- | -----|
|change | triggers when the value changes | value after change |
