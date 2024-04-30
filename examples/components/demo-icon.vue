<template>
  <div class="demo-icon">
    <div>
      <el-radio-group v-model="style" size="small">
        <el-radio-button v-for="city in styleList" :label="city">{{
          city
        }}</el-radio-button>
      </el-radio-group>
    </div>
    <ul class="icon-list">
      <li v-for="name in $icon" :key="name" class="f-click">
        <span @click="copyClick(name)">
          <i :class="'el-icon-' + name" :id="name"></i>
          <span class="icon-name">{{ "el-icon-" + name }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      iconName: '',
      style: 'fonts',
      styleList: ['fonts', 'button', 'name']
    };
  },
  methods: {
    copyClick(name) {
      let { style} = this;
      const h = this.$createElement;
      let text = {
        fonts: `<i class="el-icon-${name}"></i>`,
        button: `<el-button  icon="el-icon-${name}"></el-button>`,
        name: `el-icon-${name}`
      };
      this.$message({
        showClose: true,
        center: true,
        iconClass: 'el-icon-success',
        message: h('span', {class: 'f-cope'}, [
          h('code', { style: 'color: teal; padding: 4px;background: #fff;  margin-right: 4px;' }, text[style]),
          h('span', null, 'copied 🎉')
        ]),
        type: 'info'
      });
      navigator.clipboard.writeText(text[style]);
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border: solid 1px #eaeefb;
  border-radius: 4px;
}
.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;

  &::after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", SimSun, sans-serif;
    color: #99a9bf;
    transition: color 0.15s linear;
  }

  i {
    display: block;
    font-size: 32px;
    margin-bottom: 15px;
    color: #606266;
    transition: color 0.15s linear;
  }

  .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
  }

  &:hover {
    span,
    i {
      color: rgb(92, 182, 255);
    }
  }
}
.f-click {
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }

  // border: solid red 1px;
}
 .f-cope {
  font-size: 14px;
  //border: solid red 1px;
}
</style>
