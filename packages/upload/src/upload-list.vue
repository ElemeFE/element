<template>
  <transition-group
    tag="ul"
    :class="['el-upload-list', 'el-upload-list--' + listType]"
    name="list"
  >
    <li
      v-for="file in files"
      :class="['el-upload-list__item', 'is-' + file.status]"
      :key="file"
    >
      <img
        class="el-upload-list__item-thumbnail"
        v-if="['picture-card', 'picture'].indexOf(listType) > -1 && file.status === 'success'"
        :src="file.url" alt=""
      >
      <a class="el-upload-list__item-name" @click="handleClick(file)">
        <i class="el-icon-document"></i>{{file.name}}
      </a>
      <label class="el-upload-list__item-status-label">
        <i v-if="file.status === 'success'"
          :class="{
            'el-icon-circle-check': listType === 'text',
            'el-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }">
        </i>
        <i class="el-icon-close" @click="$emit('remove', file)"></i>
      </label>
      <span class="el-upload-list__item-actions"
        v-if="
          listType === 'picture-card' &&
          file.status === 'success'
        "
      >
        <span
          v-if="
            handlePreview &&
            listType === 'picture-card'
          "
          @click="handlePreview(file)"
          class="el-upload-list__item-preview"
        >
          <i class="el-icon-view"></i>
        </span>
        <span
          class="el-upload-list__item-delete"
          @click="$emit('remove', file)"
        >
          <i class="el-icon-delete2"></i>
        </span>
      </span>
      <el-progress
        v-if="file.status === 'uploading'"
        :type="listType === 'picture-card' ? 'circle' : 'line'"
        :stroke-width="listType === 'picture-card' ? 6 : 2"
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
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>
