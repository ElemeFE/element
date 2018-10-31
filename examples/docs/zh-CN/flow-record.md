<script>
  export default {
    
    data() {
      return {
        propData:{
            prn:'C1810315124',
            data_interface:'http://192.168.2.225/lcgl-prj/taskTrans/',
            JID:'3fbdd423-7e9a-4e52-a525-7a3a7b5efc14'
        },
      }
        
    }
  }
</script>

## flow-record 流转记录

流转记录

## 基本用法

:::demo flow-record 组件。
```html
<template>
  <el-flow-record
    :data="propData"
  >
  </el-flow-record>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        propData:{
            prn:'F1810163263',
            data_interface:'http://192.168.2.225:30024/lcgl-prj/taskTrans/',
            JID:'4919b69a-ee5b-4532-971b-974281789064'
        },
      };
    },
  };
</script>

```
