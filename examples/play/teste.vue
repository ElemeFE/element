<template>
  <div class="teste">
    <a @click="toggle()">ABRIR</a>
    <el-drawer-container>
      <el-drawer ref="test" align="left"></el-drawer>
    </el-drawer-container>
  </div>
</template>
<script>
  import ElDrawerContainer from 'element-ui/packages/drawer-container'
  import ElDrawer from 'element-ui/packages/drawer'
  import ElButton from 'element-ui/packages/button'
	export default {
    components: {
      ElDrawerContainer,
      ElDrawer,
      ElButton
    },
		data () {
			return {}
    },
    methods: {
      toggle() {
        this.$refs.test.toggle();
      }
    }
	}
</script>
<style lang="scss">
  .teste {
    > a {
      background: white;
      padding: 20px;
    }
  }
</style>