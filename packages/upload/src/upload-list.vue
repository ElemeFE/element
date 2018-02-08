<template>
  <transition-group
    tag="ul"
    :class="[
      'el-upload-list',
      'el-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="el-list"
  >
    <li
      @dragenter.prevent
      @dragstart="dragStart"
      @dragover.prevent="dragOver"
      draggable="true"
      v-for="(file, index) in files"
      :class="['el-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="index"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <img
        class="el-upload-list__item-thumbnail"
        v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
        :src="file.url" alt=""
      >
      <a class="el-upload-list__item-name" @click="handleClick(file)">
        <i class="el-icon-document"></i>{{file.name}}
      </a>
      <label class="el-upload-list__item-status-label">
        <i :class="{
          'el-icon-upload-success': true,
          'el-icon-circle-check': listType === 'text',
          'el-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
        }"></i>
      </label>
      <i class="el-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
      <i class="el-icon-close-tip" v-if="!disabled">{{ t('el.upload.deleteTip') }}</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
      <el-progress
        v-if="file.status === 'uploading'"
        :type="listType === 'picture-card' ? 'circle' : 'line'"
        :stroke-width="listType === 'picture-card' ? 6 : 2"
        :percentage="parsePercentage(file.percentage)">
      </el-progress>
      <span class="el-upload-list__item-actions" v-if="listType === 'picture-card'">
        <span
          class="el-upload-list__item-preview"
          v-if="handlePreview && listType === 'picture-card'"
          @click="handlePreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="$emit('remove', file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </li>
  </transition-group>
</template>
<script>
  import Locale from 'element-ui/src/mixins/locale';
  import ElProgress from 'element-ui/packages/progress';
  import {insertAfter} from '../../../src/utils/dom.js';
  export default {
    mixins: [Locale],

    data() {
      return {
        focusing: false,
        startElem: null,
        overElem: null
      };
    },
    components: { ElProgress },

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
      dragOver(e) {
        let _this = e.target;
        let nodeName = _this.nodeName;
        // 获取放置元素
        if (nodeName === 'LI') {
          this.overElem = _this;
        } else {
          if (_this.parentNode.nodeName === 'LI') {
            this.overElem = _this.parentNode;
          } else {
            return;
          }
        }
        let startDom = this.startElem;
        let overDom = this.overElem;
        // 放自己身上 不行啦
        if (startDom === overDom) {
          return;
        }
        // 计算放置元素中间值
        let centerX = overDom.offsetLeft + overDom.offsetWidth * 0.5;
        // 放置到偏左边
        if (e.pageX < centerX) {
          if (overDom.previousSibling === startDom) {
            return;
          } else {
            overDom.parentNode.insertBefore(startDom, overDom);
          }
        } else { //  放置到偏右边
          if (overDom.nextSibling === startDom) {
            return;
          } else {
            insertAfter(startDom, overDom);
          }
        }
        return;
      },
      dragStart(e) {
        // 拖拽开始时，记录当前元素
        this.startElem = e.target;
        e.dataTransfer.setData('为了兼容火狐', 'for firefox');
      },
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>