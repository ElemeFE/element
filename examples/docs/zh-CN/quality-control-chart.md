<script>
  export default {
    
    data() {
      return {
        propData:{
            JID: '',
            echartsURL:'http://192.168.2.225/sbgl-prj/gzyq/runGzyq',
            prn: '259695700536',
            getEchartsDataParamBtnCode: "BTN_247335599528",
            getLineBaseParamBtnCode: "BTN_252753500664",
        },
      }
        
    }
  }
</script>

## Quality-control-chart 质控图

用于展示设备质量控制图

## 基本用法

:::demo Quality-control-chart 组件。
```html
<template>
  <el-quality-control-chart
    :data="propData"
  >
  </el-quality-control-chart>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        propData:{
            JID: '',
            echartsURL:'http://192.168.2.225/sbgl-prj/gzyq/runGzyq',
            prn: '257513837040',
            getEchartsDataParamBtnCode: "BTN_247335599528",
            getLineBaseParamBtnCode: "BTN_252753500664",
        },
      };
    },
  };
</script>

```
