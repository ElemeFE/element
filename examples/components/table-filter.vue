<template>
  <div class="table-filter" v-show="visible">haha</div>
</template>

<style scoped>
  .table-filter {
    position: absolute 0 100px * *;
    background-color: #fff;
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        visible: true
      };
    },

    events: {
      toggleFilterPopup(visibleFilter) {
        this.visible = visibleFilter === 'tag';
      }
    },

    mounted() {
      console.log('popup ready');
    }
  };
</script>