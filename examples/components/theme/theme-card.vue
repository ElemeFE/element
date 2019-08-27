<style lang="scss">
.theme-card-item {
  user-select: none;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  height: 90%;
  margin: 25px 0;
  box-shadow: 0 0 1px 0 #666;
  &.is-hidden {
    opacity: 0;
    height: 0;
  }
  .upload {
    cursor: pointer;
    background: #f5f7fa;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    .upload-action {
      width: 40%;
      margin: 0 auto;
      text-align: center;
      color: #606266;
      img {
        display: block;
        margin: 0 auto;
      }
      span {
        display: block;
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }
  .preview {
    position: relative;
    height: 70%;
    width: 100%;
    .line {
      height: 50%;
    }
    .line-2 {
      width: 50%;
      height: 100%;
      display: inline-block;
    }
    .line-4 {
      width: 25%;
      height: 100%;
      display: inline-block;
    }
    .action {
      transition: all .3s;
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .action-mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: 0.4;
      }
      .action-block {
        position: absolute;
        width: 50%;
        height: 50%;
        left: 25%;
        top: 25%;
      }
      .action-item {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        width: 30%;
        color: #eee;
        &:hover {
          color: #fff;
          .circle {
            border-color: #fff;
          }
        }
        .icon {
          height: 50%;
          font-size: 22px;
          text-align: center;
          display: flex;
          justify-content:center;
          align-items:center;
          img {
            width: 130%;
          }
        }
        .name {
          font-size: 12px;
          height: 50%;
          text-align: center;
          display: flex;
          justify-content:center;
          align-items:center;
          margin-top: 4px;
        }
      }
      .action-item-right {
        margin-left: 40%;
      }
    }
  }
  .info {
    height: 30%;
    line-height: 16px;
    display: flex;
    align-items: center;
    .info-center {
      width: 100%;
    }
    .title {
      font-weight: bold;
      font-size: 16px;
      color: #303133;
      padding: 0 12px;
      justify-content: space-between;
    }
    .right {
      float: right;
      font-weight: normal;
      font-size: 14px;
      color: #909399;
    }
    .more {
      font-size: 16px;
      cursor: pointer;
    }
    .description {
      padding: 0 12px;
      font-size: 14px;
      color: #606266;
      margin-top: 10px;
    }
  }
  &.is-upload {
    box-shadow: none;
    border: 1px dashed #DCDFE6;
  }
  &.is-upload:hover {
    box-shadow: none;
  }

  &:hover {
    box-shadow: 0 0 10px 0 #999;
    .action {
      opacity: 1;
    }
  }
}
</style>

<template>
  <section class="theme-card-item" :class="{'is-hidden': !config || !config.name, 'is-upload': isUpload}">
    <template v-if="isUpload">
      <div class="upload" @click="uploadClick">
        <div class="upload-action">
          <img src="../../assets/images/icon-upload.svg"/>
          <span>{{getActionDisplayName('upload-theme')}}</span>
        </div>
      </div>
      <input
        class="el-upload__input"
        type="file"
        ref="input"
        @change="uploadAction"
        accept="application/json"
      />
    </template>
    <template v-else>
      <div class="preview">
        <div class="line">
          <span class="line-2" :style="{background: mainColor}"></span>
          <span class="line-2" :style="{background: textPrimaryColor}"></span>
        </div>
        <div class="line">
          <span class="line-4" :style="{background: mainColor50}"></span>
          <span class="line-4" :style="{background: mainColor80}"></span>
          <span class="line-4" :style="{background: borderBaseColor}"></span>
          <span class="line-4" :style="{background: textSecondaryColor}"></span>
        </div>
        <div class="action">
          <div class="action-mask"></div>
          <div class="action-block">
            <div
              class="action-item"
              :class="index && 'action-item-right'"
              v-for="(item, index) in actionArray"
              :key="index"
              @click="iconClick(item.action)"
            >
              <div class="icon">
                <img :src="item.icon"/>
                <span class="circle"></span>
              </div>
              <div class="name">
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info-center">
          <div class="title">
            <span>{{config.name}}</span>
            <span class="right" v-if="isOfficial">by {{config.author}}</span>
            <span class="right more" v-else>
              <el-dropdown @command="actionClick">
                <i class="el-icon-more"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="rename">{{getActionDisplayName('rename-theme')}}</el-dropdown-item>
                  <el-dropdown-item command="copy">{{getActionDisplayName('copy-theme')}}</el-dropdown-item>
                  <el-dropdown-item
                      command="delete"
                      style="color: #F56C6C;"
                    >
                      {{getActionDisplayName('delete-theme')}}
                    </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </span>
          </div>
          <div class="description" v-if="isOfficial">{{getActionDisplayName(getDescriptionKey(config.name))}} </div>
          <div class="description" v-else>{{getActionDisplayName('last-modified')}} {{formatDate(config.update)}}</div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import bus from '../../bus';
import {
  DEFAULT_THEME_CONFIG,
  ACTION_DOWNLOAD_THEME
} from './constant.js';
import { savePreviewToLocal } from './localstorage';
import { tintColor } from '../../color.js';
import dateUtil from 'element-ui/src/utils/date';
import { getActionDisplayName } from '../theme-configurator/utils/utils';

export default {
  props: {
    config: Object,
    type: String,
    base: {
      type: String,
      default: ''
    },
    from: String
  },
  data() {
    return {
      deleteVisible: false
    };
  },
  methods: {
    getActionDisplayName(key) {
      return getActionDisplayName(key);
    },
    getDescriptionKey(name) {
      return name ? `description-${name.toLowerCase()}` : '';
    },
    formatDate(timestamp) {
      if (!timestamp) return '';
      return dateUtil.format(new Date(timestamp), 'yyyy-MM-dd HH:mm');
    },
    uploadClick() {
      this.$refs.input.value = null;
      this.$refs.input.click();
    },
    uploadAction(ev) {
      const files = ev.target.files;
      if (!files) return;
      var reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonString = e.target.result;
          const jsonObject = JSON.parse(jsonString);
          if (!jsonObject.global || !jsonObject.local) {
            return this.$message.error('JSON format error');
          }
          this.$emit('action', 'upload', jsonString);
        } catch (e) {
          this.$message.error('Upload error');
          console.error(e);
        }
      };
      reader.readAsText(files[0]);
    },
    actionClick(e) {
      this.$emit('action', e, this.config);
    },
    iconClick(e) {
      switch (e) {
        case 'preview':
        case 'edit':
          if (this.from) {
            this.$emit('action', e, this.config);
            return;
          }
          const { name, theme } = this.config;
          savePreviewToLocal({
            type: this.type,
            name,
            theme
          });
          this.$router.push({
            name: `theme-preview-${this.$route.meta.lang}`,
            params: {
              refer: 'theme'
            }
          });
          this.$nextTick(() => {
            window.scrollTo(0, 0);
          });
          break;
        case 'download':
          bus.$emit(ACTION_DOWNLOAD_THEME, this.theme, this.config.name);
          break;
        default:
          this.$emit('action', e, this.config);
          return;
      }
    },
    deleteUserTheme() {
      this.deleteVisible = false;
      this.$emit('action', 'delete', this.config);
    }
  },
  computed: {
    isUpload() {
      return this.type === 'upload';
    },
    theme() {
      if (this.config.theme) {
        return JSON.parse(this.config.theme);
      }
      return DEFAULT_THEME_CONFIG;
    },
    mainColor() {
      return this.theme.global['$--color-primary'] || '#1989FA';
    },
    mainColor50() {
      return tintColor(this.mainColor, 0.5);
    },
    mainColor80() {
      return tintColor(this.mainColor, 0.8);
    },
    textPrimaryColor() {
      return this.theme.global['$--color-text-primary'] || '#303133';
    },
    borderBaseColor() {
      return this.theme.global['$--border-color-base'] || '#DCDFE6';
    },
    textSecondaryColor() {
      return this.theme.global['$--color-text-secondary'] || '#909399';
    },
    isOfficial() {
      return this.type === 'official';
    },
    actionArray() {
      if (this.isOfficial) {
        return [
          {
            icon: require('../../assets/images/icon-check.png'),
            name: getActionDisplayName('theme-check'),
            action: 'preview'
          },
          {
            icon: require('../../assets/images/icon-copy.png'),
            name: getActionDisplayName('theme-copy'),
            action: 'copy'
          }
        ];
      }
      return [
        {
          icon: require('../../assets/images/icon-edit.png'),
          name: getActionDisplayName('theme-edit'),
          action: 'edit'
        },
        {
          icon: require('../../assets/images/icon-download.png'),
          name: getActionDisplayName('download-theme'),
          action: 'download'
        }
      ];
    }
  }
};
</script>