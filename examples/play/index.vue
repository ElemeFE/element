<template>
  <div style="margin: 20px;">
    <play-button></play-button>
  </div>
</template>

<script>
  import PlayButton from './components/button'

  export default {
    components: {
      PlayButton
    },
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
