<template>
  <transition-group
    tag="ul"
    :class="[
      'tm-upload-list',
      'tm-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="tm-list"
  >
    <li
      v-for="file in files"
      :class="['tm-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <img
        class="tm-upload-list__item-thumbnail"
        v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
        :src="file.url" alt=""
      >
      <a class="tm-upload-list__item-name" @click="handleClick(file)">
        <i class="tm-icon--document"></i>{{file.name}}
      </a>
      <label class="tm-upload-list__item-status-label">
        <i :class="{
          'tm-icon--upload-success': true,
          'tm-icon--circle-check': listType === 'text',
          'tm-icon--check': ['picture-card', 'picture'].indexOf(listType) > -1
        }"></i>
      </label>
      <tm-icon name="cross"
               v-if="!disabled"
               @click="onRemove.bind(file)"></tm-icon>

      <tm-progress
        v-if="file.status === 'uploading'"
        :type="listType === 'picture-card' ? 'circle' : 'line'"
        :stroke-width="listType === 'picture-card' ? 6 : 2"
        :percentage="parsePercentage(file.percentage)">
      </tm-progress>
      <span class="tm-upload-list__item-actions" v-if="listType === 'picture-card'">
        <span
          class="tm-upload-list__item-preview"
          v-if="handlePreview && listType === 'picture-card'"
          @click="handlePreview(file)"
        >
          <i class="tm-icon--zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="tm-upload-list__item-delete"
          @click="$emit('remove', file)"
        >
          <i class="tm-icon--delete"></i>
        </span>
      </span>
    </li>
  </transition-group>
</template>
<script>
  import Locale from 'tmconsulting-ui/src/mixins/locale';
  import TmProgress from 'tmconsulting-ui/packages/progress';
  import TmIcon from 'tmconsulting-ui/packages/icon';

  export default {
    mixins: [Locale],

    data() {
      return {
        focusing: false
      };
    },
    components: {
      TmIcon,
      TmProgress
    },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
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
      },
      onRemove(file) {
        this.$emit('remove', file);
      }
    }
  };
</script>
