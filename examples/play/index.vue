<template>
  <div style="margin: 20px;">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      :formatter="(value) => value + 'input'"
      :parser="(value) => value.replace(/input/g, '')"
    ></el-input>
    <el-input
    type="textarea"
    placeholder="请输入内容"
    v-model="textarea"
    maxlength="30"
    :formatter="(value) => value + 'input'"
    show-word-limit
  ></el-input>
    <el-button type="primary" size="default" @click="formatterFn"
      >1212</el-button
    >

    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :modal="false"
      :close-on-click-modal="false"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "12",
      textarea:'0',
      dialogVisible: false,
    };
  },
  mounted() {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    formatterFn(value) {
      console.log(this.$el.querySelector("input"));
      let t = this.$el.querySelector("input");
      let evt = document.createEvent("HTMLEvents");
      evt.initEvent("input", true, true);
      
      t.value = "setValue";
      t.dispatchEvent(evt);
      //  value =  122
      // ('value', 'text');
      // return value + "1212";
    },
  },
};
</script>
