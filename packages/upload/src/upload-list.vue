<template>
  <transition-group tag="ul" class="el-upload__files" name="list">
    <li
      v-for="file in files"
      :class="['el-upload__file', 'is-' + file.status]"
      :key="file"
      @click="$emit('clickFile', file)"
    >
      <a class="el-upload__file__name" @click="$emit('preview', file)">
        <i class="el-icon-document"></i>{{file.name}}
      </a>
      <i :class="{
        'el-upload__file__icon': true,
        'el-icon-circle-check': file.status === 'success',
        'el-icon-circle-cross': file.status === 'fail'
      }"></i>
      <span class="el-upload__btn-delete" @click="$emit('remove', file)" v-show="file.status === 'success'">{{ t('el.upload.delete') }}</span>
      <el-progress
        v-if="file.status === 'uploading'"
        :stroke-width="2"
        :percentage="parsePercentage(file.percentage)">
      </el-progress>
    </li>
  </transition-group>
</template>
<script>
  import Locale from 'element-ui/src/mixins/locale';
  import ElProgress from 'element-ui/packages/progress';

  export default {
    mixins: [Locale],

    components: { ElProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      }
    }
  };
</script>
