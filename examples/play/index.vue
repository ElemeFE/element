<template>
  <div style="margin: 20px;">
    <!-- <play-button></play-button>
    <play-icon></play-icon>
    <play-link></play-link>
    <play-layout></play-layout>
    <play-containter></play-containter> -->
    <play-radio></play-radio>
  </div>
</template>

<script>
  import PlayButton from './components/button'
  import PlayIcon from './components/icon'
  import PlayLink from './components/link'
  import PlayContainter from './components/containter'
  import PlayLayout from './components/layout'
  import PlayRadio from './components/radio'

  export default {
    components: {
      PlayButton,
      PlayIcon,
      PlayLink,
      PlayContainter,
      PlayLayout,
      PlayRadio
    },
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
