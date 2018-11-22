<script>
  export default {
    
    data() {
      return {
        propData:{
            uploadUrl:'http://192.168.2.225:80/ks-prj/pic/fileUpload',
            prn:'C1811214444',
            capture:true,
            scan:true,
            edit:true,
            showAttachments:false,
            delete:true,
            upload:true,
            allButtonDisabled:false,
            JID: '4991CE4DF1EC2B71a6-baff-9b8d2ab95281',
            m_code: 'abc',
            abc: 'bbb'
        },
      }
        
    }
  }
</script>

## Attachment-Manage 附件管理

用于上传下载、预览附件

## 基本用法

:::demo attachment-manage 组件。
```html
<template>
  <el-attachment-manage
    :data="propData"
  >
  </el-attachment-manage>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        propData:{
            uploadUrl:'http://192.168.4.48:30001/ks-prj/pic/fileUpload',
            prn:'abcd',
            capture:true,
            scan:true,
            edit:true,
            showAttachments:false,
            delete:true,
            upload:true,
            allButtonDisabled:false,
            JID:'74f6e2ca-73f1-4f64-8a08-1f2d9d1728e2',
            m_code: 'abc',
            abc: 'bbb'
        },
      };
    },
  };
</script>

```
