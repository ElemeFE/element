<script>
  export default {
    
    data() {
      return {
        propData:{
            prn:'XF1812185518',
            data_interface:'http://192.168.2.20:30007/lcgl-prj/taskTrans/',
            JID:'06002D082EA1699Fef0bf82b-9060-4906-adba-7060da522666'
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
