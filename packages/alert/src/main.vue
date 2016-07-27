<template>
  <div class="el-alert el-alert--{{ type }}" transition="el-alert-fade" v-show="visible">
    <i class="el-alert__icon {{ iconClass }} {{ isBigIcon }}" v-if="showIcon"></i>
    <div class="el-alert__content">
      <span class="el-alert__title {{ isBoldTitle }}" v-if="title">{{ title }}</span>
      <p class="el-alert__description" v-if="description">{{ description }}</p>
      <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
    </div>
  </div>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-circle-check',
    'warning': 'el-icon-warning',
    'error': 'el-icon-circle-cross'
  };
  export default {
    name: 'el-alert',

    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('onClose');
      }
    },

    computed: {
      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'el-icon-information';
      },

      isBigIcon() {
        return this.description ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description ? 'is-bold' : '';
      }
    }
  };
</script>
