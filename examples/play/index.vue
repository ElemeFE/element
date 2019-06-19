<template>
  <div style="margin: 20px;">
    <el-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" :size="30">
      头像
    </el-avatar>
    <el-avatar style="color: #f56a00; background-color: #fde3cf;">
      U
    </el-avatar>
    <el-badge :value="12" class="item">
      <el-avatar src="https://zos." @error="handler">
      <span slot="default">
        {{ user }}
      </span>
      </el-avatar>
    </el-badge>
    <el-button @click="change">{{ user }}</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss',
        user: 'lucky'
      };
    },
    methods: {
      handler() {
        return true;
      },
      change() {
        const { user } = this;
        this.user = user === 'lucky' ? 'user' : 'lucky'
      }
    }
  };
</script>
