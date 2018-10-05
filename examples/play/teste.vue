<template>
  <el-slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
    <nav id="menu">
      <div>Menu</div>
    </nav>
    <main id="panel">
      <header>
        <div>
          <button class="toggle-button">☰</button>
          Panel
        </div>
      </header>
    </main>
  </el-slideout>
</template>
<script>
	export default {
    data() {
      return {
        active: false
      }
    },
     methods: {
      open: function () {
        console.log('slideoutOpen')
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