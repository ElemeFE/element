<script>
  export default {
    
    data() {
      return {
        propData:{
            uploadUrl:'http://192.168.4.48:30001/ks-prj/pic/fileUpload',
            prn:'282487465832',
            capture:true,
            scan:true,
            edit:true,
            showAttachments:false,
            delete:true,
            upload:true,
            allButtonDisabled:false,
            JID: '06002D08BF248524eb5f861a-4310-4807-9ef3-a1b0e9044684',
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
