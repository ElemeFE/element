<template>
  <div class="el-avatar"
    :class="[
      avatarSize ? 'el-avatar--' + avatarSize : '',
      {        
        'is-round': round        
      }
    ]">
    <span class="el-avatar--wrapper">
      <img src="https://expertfile.com/speakers/img/profileyourpeople_small.png" alt="">
    </span>
  </div>
</template>

<script>
  const AVATAR_SIZES = ['small', 'medium', 'large', 'extra-large'];

  export default {
    name: 'ElAvatar',
    props: {
      round: Boolean,
      size: {
        type: String,
        default () {
          return 'medium'
        }
      }
    },
    computed: {
      avatarSize() {
        return (AVATAR_SIZES.includes(this.size)) ? this.size : null
      }
    }
  };
</script>
