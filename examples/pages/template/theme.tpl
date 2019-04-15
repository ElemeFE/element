<style lang="scss">
.page-theme {
  h2 {
    font-size: 28px;
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .theme-card {
    display: inline-block;
    height: 150px;
    height: 16vw;
    flex: 0 0 24%;
    cursor: default;
    vertical-align: bottom;
  }
  .theme-section {
    margin-bottom: 20px;
  }
}
</style>
<template>
  <div class="page-container page-theme">
    <section class="theme-section">
      <h2>官方主题</h2>
      <ul>
        <li class="theme-card" v-for="item in officialTheme" :key="item.name">
          <theme-card 
            type="official" 
            :config="item"
            @action="onAction"
          ></theme-card>
        </li>
      </ul>
    </section>
    <section class="theme-section">
      <h2>我的主题 ({{userThemeCount}}/{{maxUserTheme}})</h2>
      <ul>
        <li class="theme-card" v-if="showUserUpload">
          <theme-card 
            type="upload" 
            :config="{name: 'upload'}"
            @action="onAction"
          ></theme-card>
        </li>
        <li class="theme-card" v-for="item in displayUserTheme" :key="item.name">
          <theme-card 
            type="user"
            :config="item"
            @action="onAction"
          ></theme-card>
        </li>
      </ul>
    </section>
    <el-dialog :visible.sync="copyDialogVisible">
      <el-form :model="copyForm" ref="copyForm" :rules="copyFormRule">
        <el-form-item label="主题名称" required prop="name">
          <el-input v-model="copyForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeCopyForm">取 消</el-button>
        <el-button type="primary" @click="copyToUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ThemeCard from '../../components/theme/theme-card.vue';
import ThemeList from '../../components/theme/theme-list.js';
import { saveUserThemeToLocal, loadUserThemeToLocal } from '../../components/theme/localstorage';

const maxUserTheme = 8;

export default {
  components: {
    ThemeCard
  },
  mounted() {
    this.userTheme = loadUserThemeToLocal();
    if (!Array.isArray(this.userTheme)) {
      this.userTheme = [];
    }
  },
  data() {
    return {
      officialTheme: this.padEmpeyTheme(ThemeList),
      userTheme: [],
      maxUserTheme,
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
  computed: {
    userThemeCount() {
      return this.userTheme.length;
    },
    showUserUpload() {
      return this.userThemeCount < maxUserTheme;
    },
    displayUserTheme() {
      return this.padEmpeyTheme(this.userTheme, this.showUserUpload ? 1 : 0);
    }
  },
  methods: {
    validateCopyName(rule, value, callback) {
      if (!value) {
        callback(new Error('Name is required'));
      } else if (this.filterUserThemeByName(value).length > 0) {
        callback(new Error('Already has same name'));
      } else {
        callback();
      }
    },
    filterUserThemeByName(name, include = true) {
      return this.userTheme.filter((theme) => (include ? theme.name === name : theme.name !== name));
    },
    padEmpeyTheme(theme, add = 0) {
      if (!theme.length) return [];
      const pad = 4 - ((theme.length + add) % 4);
      if (pad < 4) return theme.concat(Array(pad).fill({}));
      return theme;
    },
    onAction(name, item) {
      switch (name) {
        case 'copy':
          this.openCopyForm(item.theme);
          break;
        case 'upload':
          this.openCopyForm(item);
          break;
        case 'delete':
          this.deleteUserThemeByName(item.name);
          break;
        default:
          return;
      }
    },
    deleteUserThemeByName(name) {
      this.userTheme = this.filterUserThemeByName(name, false);
      this.saveToLocal();
    },
    openCopyForm(theme) {
      if (this.userTheme.length >= 8) {
        this.$message.error('Max user theme 8');
        return;
      }
      this.copyForm.theme = theme;
      this.copyDialogVisible = true;
    },
    closeCopyForm() {
      this.copyDialogVisible = false;
      this.$nextTick(() => {
        this.copyForm = {};
      });
    },
    copyToUser() {
      this.$refs.copyForm.validate((valid) => {
        if (valid) {
          const { theme, name } = this.copyForm;
          this.userTheme.push({
            update: Date.now(),
            name,
            theme
          });
          this.saveToLocal();
          this.closeCopyForm();
        }
      });
    },
    saveToLocal() {
      saveUserThemeToLocal(this.userTheme);
    }
  }
};
</script>
