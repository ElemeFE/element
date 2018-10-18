<template>
    <ul>
        <!--<li ><a class="tab tab-gray"><img src="../images/icon-capture-gray.png"  />摄像</a></li>
                <li ><a class="tab tab-gray"><img src="../images/icon-scan-gray.png"  />扫描</a></li>-->
        <li><a class="tab tab-gray"><img src="../images/icon-upload-gray.png"/>上传</a></li>
        <li><a class="tab tab-gray"><img src="../images/icon-delete-gray.png"/>删除</a></li>
        <!--<li v-if="edit"><a class="tab" @click="update_dialog_visible = true"><img :src="list.updateIcon_"  />修改</a></li>-->

        <div class="clear"></div>
    </ul>
</template>

<script>
  export default {
    name: 'buttons-disabled'
  };
</script>

<style scoped>

</style>
