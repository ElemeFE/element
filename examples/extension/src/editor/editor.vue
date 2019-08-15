<template>
  <div class="ext-panel" :class="{moving : moving}" :style="{top: `${top}px`, left: `${left}px`}" ref="editor" >
    <img class="entrance touch-icon" src="./icon-entrance.png" v-show="!showSidebar" @click="toggleSidebar" />
    <img class="close touch-icon" src="./icon-close.png" v-show="showSidebar" @click="toggleSidebar" />
    <div class="editor" :style="{height: `${height}px`}" v-show="showSidebar">
      <el-tabs v-model="activeTab" @tab-click="onTabClick">
        <el-tab-pane label="Config" name="config">
          <theme-configurator
            :themeConfig="themeConfig"
            :previewConfig="previewConfig"
            :onUserConfigUpdate="onUserConfigUpdate"
            from="extension"
          ></theme-configurator>
        </el-tab-pane>
        <el-tab-pane label="Gallery" name="gallery">
          <gallery 
            ref='gallery'
            :height="height"
            :width="width - 7"
            @action="onGalleryAction"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import ThemeConfigurator from '../../../components/theme-configurator';
import themeLoader from '../../../components/theme/loader';
import gallery from './gallery';
import { loadUserThemeFromLocal, saveUserThemeToLocal } from './utils';
import bus from '../../../bus.js';
import {
  ACTION_APPLY_THEME
} from '../../../components/theme/constant.js';

let initX;
let initY;
let leftX = 0;
let topY = 25;
export default {
  mixins: [themeLoader],
  components: {
    ThemeConfigurator,
    gallery
  },
  data() {
    return {
      showSidebar: true,
      previewConfig: {},
      themeConfig: {},
      top: topY,
      left: leftX,
      height: window.innerHeight - 30 * 2,
      width: 0,
      moving: false,
      activeTab: 'config',
      themeName: '',
      userTheme: []
    };
  },
  mounted() {
    const editor = this.$refs.editor;
    this.width = editor.offsetWidth;
    leftX = window.innerWidth - 20 - this.width;
    this.left = leftX;
    editor.addEventListener('mousedown', e => {
      initX = e.clientX;
      initY = e.clientY;
      leftX = this.left;
      topY = this.top;
      document.addEventListener('mousemove', this.moveFunc);
    });
    document.addEventListener('mouseup', e => {
      document.removeEventListener('mousemove', this.moveFunc);
      setTimeout(() => {this.moving = false;}, 0);
    });
    // chrome.storage.local.remove('ELEMENT_THEME_USER_CONFIG');
    loadUserThemeFromLocal()
      .then((result) => {
        if (result) {
          this.activeTab = 'gallery';
          this.userTheme = result;
        }
      });
  },
  methods: {
    checkLocalThemeConfig() {}, // disable mixin auto loading
    toggleSidebar() {
      if (this.moving) return;
      this.showSidebar = !this.showSidebar;
      if (!this.showSidebar) {
        const windowWidth = window.innerWidth;
        if (this.left + this.width * 0.5 < windowWidth * 0.5) {
          this.left = 0;
        } else {
          this.left = windowWidth - 50;
        }
      } else {
        this.moveEditor(this.left, this.top);
      }
    },
    moveFunc(e) {
      e.preventDefault();
      const deltaX = initX - e.clientX;
      const deltaY = initY - e.clientY;
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        this.moving = true;
      }
      this.moveEditor(leftX - deltaX, topY - deltaY);
    },
    moveEditor(x, y) {
      const showSidebar = this.showSidebar;
      let nextTop = y;
      if (nextTop < 0) nextTop = 0;
      const maxTop = window.innerHeight - (showSidebar ? (this.height + 5) : 50);
      if (nextTop > maxTop) nextTop = maxTop;
      this.top = nextTop;
      let nextLeft = x;
      if (nextLeft < 0) nextLeft = 0;
      const maxLeft = window.innerWidth - (showSidebar ? (this.width + 5) : 50);
      if (nextLeft > maxLeft) nextLeft = maxLeft;
      this.left = nextLeft;
    },
    onGalleryAction(key, value) {
      switch (key) {
        case 'edit':
          this.themeName = value.name;
          this.themeConfig = JSON.parse(value.theme);
          bus.$emit(ACTION_APPLY_THEME, this.themeConfig);
          this.activeTab = 'config';
          break;
        default:
          return;
      }
    },
    onTabClick(e) {
      if (e && e.name === 'gallery') {
        this.$refs.gallery.init();
      }
    },
    onUserConfigUpdate(userConfig) {
      if (this.themeName) {
        this.userTheme.forEach((config) => {
          if (config.name === this.themeName) {
            config.update = Date.now();
            config.theme = JSON.stringify(userConfig);
          }
        });
      } else {
        this.themeName = `Theme-${Date.now()}`;
        this.userTheme.push({
          update: Date.now(),
          name: this.themeName,
          theme: JSON.stringify(userConfig)
        });
      }
      saveUserThemeToLocal(this.userTheme);
    }
  }
};
</script>
<style scoped>
.ext-panel {
  position: fixed;
  background: transparent;
  user-select: none;
  z-index: 100000;
}
.ext-panel.moving{
  cursor: move;
}
.ext-panel.moving .touch-icon{
  cursor: move;
}
.ext-panel .touch-icon{
  cursor: pointer;
}
.ext-panel .close {
  position: absolute;
  right: 0;
  top: 0;
  height: 20px;
  width: 20px;
  z-index: 100001;
}
.ext-panel .entrance {
  height: 50px;
  width: 50px;
}
.ext-panel .editor {
  overflow: hidden;
  background: #f5f7fa;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin: 5px 5px 0 0;
  min-width: 261px;
}
</style>
<style>
.ext-panel  .editor .el-tabs__content, .ext-panel  .editor .el-tabs--top, .ext-panel  .editor .el-tab-pane {
  height: 100%;
}
.ext-panel .el-tabs__nav-scroll >div {
  transform: translateX(60px)!important;
}
.ext-panel .editor-main {
  padding: 0 18px 70px;
}
</style>