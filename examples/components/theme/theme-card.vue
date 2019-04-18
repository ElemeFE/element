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
  }
  .upload {
    cursor: pointer;
    background: #f5f7fa;
    height: 100%;
    width: 100%;
    .upload-action {
      width: 40%;
      margin: 0 auto;
      padding-top: 25%;
      text-align: center;
      color: #606266;
      font-size: 30px;
      span {
        display: block;
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
  .preview {
    position: relative;
    height: 65%;
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
          margin-top: 2px;
        }
      }
      .action-item-right {
        margin-left: 40%;
      }
    }
  }
  .info {
    padding: 10px 10px 0;
    line-height: 16px;
    .title {
      font-weight: bold;
      font-size: 16px;
      color: #303133;
    }
    .right {
      font-weight: normal;
      font-size: 14px;
      color: #909399;
      float: right;
    }
    .more {
      font-size: 16px;
      cursor: pointer;
    }
    .description {
      font-size: 14px;
      color: #606266;
      margin-top: 10px;
    }
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
  <section class="theme-card-item" :class="{'is-hidden': !config || !config.name}">
    <template v-if="type === 'upload'">
      <div class="upload" @click="uploadClick">
        <div class="upload-action">
          <i class="el-icon-upload2"></i>
          <span>点击上传主题</span>
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
        <span class="title">
          {{config.name}}
          <span class="right" v-if="isOfficial">by {{config.author}}</span>
          <span class="right more" v-else>
            <el-dropdown @command="actionClick">
              <i class="el-icon-more"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="rename">修改命名</el-dropdown-item>
                <el-dropdown-item command="copy">复制主题</el-dropdown-item>
                <el-popover placement="top" width="160" v-model="deleteVisible">
                  <p>这是一段内容这是一段内容确定删除吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="deleteVisible = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="deleteUserTheme">确定</el-button>
                  </div>
                  <el-dropdown-item 
                    command="delete" 
                    style="color: #F56C6C;"
                    slot="reference"
                  >
                    删除主题
                  </el-dropdown-item>
                </el-popover>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </span>
        <div class="description" v-if="isOfficial">{{config.description}}</div>
        <div class="description" v-else>最近修改 {{formatDate(config.update)}}</div>
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

export default {
  props: {
    config: Object,
    type: String,
    base: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      deleteVisible: false
    };
  },
  methods: {
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
          bus.$emit(ACTION_DOWNLOAD_THEME, this.theme);
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
            name: '查看',
            action: 'preview'
          },
          {
            icon: require('../../assets/images/icon-copy.png'),
            name: '复制',
            action: 'copy'
          }
        ];
      }
      return [
        {
          icon: require('../../assets/images/icon-edit.png'),
          name: '编辑',
          action: 'edit'
        },
        {
          icon: require('../../assets/images/icon-download.png'),
          name: '下载',
          action: 'download'
        }
      ];
    }
  }
};
</script>