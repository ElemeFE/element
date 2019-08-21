<template>
  <div :style="{ 
    height: `${height}px`,
      width: `${width}px`
      }"
    class="main"
    >
    <ul
      class="theme-card-list"
    >
      <li class="theme-card" v-for="item in userTheme" :key="item.name">
        <theme-card type="user" :config="item" @action="onAction" from="extension"></theme-card>
      </li>
      <li class="theme-card">
        <theme-card type="upload" :config="{name: 'upload'}" @action="onAction"></theme-card>
      </li>
    </ul>
    <el-dialog :visible.sync="copyDialogVisible" :modal-append-to-body="false">
      <el-form :model="copyForm" ref="copyForm" :rules="copyFormRule">
        <el-form-item label="主题名称" prop="name">
          <el-input v-model="copyForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeCopyForm">取消</el-button>
        <el-button type="primary" @click="copyToUser">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
ul, li {
  padding: 0;
  margin: 0;
}
.main {
  overflow: auto;
}
.theme-card-list {
  padding-bottom: 50px;
  width: 90%;
  margin: 0 auto;
}
.theme-card {
  display: inline-block;
  height: 140px;
  height: 15vw;
  width: 100%;
  max-height: 230px;
  flex: 0 0 24%;
  cursor: default;
  vertical-align: bottom;
}
</style>
<style>
.theme-card .theme-card-item {
  margin-top: 0;
}
.theme-card .theme-card-item.is-upload {
  height: 80%
}
</style>

<script>
import ThemeCard from '../../../components/theme/theme-card.vue';
import { loadUserThemeFromLocal, saveUserThemeToLocal } from './utils';

export default {
  props: {
    height: Number,
    width: Number
  },
  data() {
    return {
      userTheme: [],
      copyDialogVisible: false,
      copyForm: {},
      copyFormRule: {
        name: [{
          validator: this.validateCopyName,
          trigger: 'blur'
        }]
      }
    };
  },
  components: {
    ThemeCard
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      loadUserThemeFromLocal().then(result => {
        if (!result) return;
        this.userTheme = result;
      });
    },
    onAction(key, value) {
      switch (key) {
        case 'copy':
          this.openCopyForm(value.theme);
          break;
        case 'upload':
          this.openCopyForm(value);
          break;
        case 'delete':
          this.$confirm('确定要删除这个主题?', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.deleteUserThemeByName(value.name);
          }).catch(() => {});
          break;
        case 'rename':
          this.openRenameForm(value.name);
          break;
        default:
          this.$emit('action', key, value);
          return;
      }
    },
    openCopyForm(theme) {
      this.copyForm.theme = theme;
      this.copyDialogVisible = true;
    },
    openRenameForm(name) {
      this.copyForm.oldname = name;
      this.copyDialogVisible = true;
    },
    closeCopyForm() {
      this.copyDialogVisible = false;
      this.$nextTick(() => {
        this.copyForm = {};
      });
    },
    validateCopyName(rule, value, callback) {
      if (!value) {
        callback(new Error('主题名称是必填项'));
      } else if (this.filterUserThemeByName(value).length > 0) {
        callback(new Error('主题名称重复'));
      } else {
        callback();
      }
    },
    copyToUser() {
      this.$refs.copyForm.validate((valid) => {
        if (valid) {
          const { theme, name, oldname } = this.copyForm;
          if (theme) {
            // copy
            this.userTheme.push({
              update: Date.now(),
              name,
              theme
            });
          } else {
            // rename
            this.userTheme.forEach((config) => {
              if (config.name === oldname) {
                config.update = Date.now();
                config.name = name;
              }
            });
          }
          this.saveToLocal();
          this.closeCopyForm();
        }
      });
    },
    filterUserThemeByName(name, include = true) {
      return this.userTheme.filter((theme) => (include ? theme.name === name : theme.name !== name));
    },
    saveToLocal() {
      saveUserThemeToLocal(this.userTheme);
    },
    deleteUserThemeByName(name) {
      this.userTheme = this.filterUserThemeByName(name, false);
      this.saveToLocal();
    }
  }
};
</script>