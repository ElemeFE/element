<template>
  <div class="configurator-action">
      <div class="action-group">
        <i 
          @click="onUndo"
          class="el-icon-arrow-left"
          :class="{ 'active': userConfigHistory.length > 0 }"
        ></i>
        <i 
          @click="onRedo"
          class="el-icon-arrow-right"
          :class="{ 'active': userConfigRedoHistory.length > 0 }"
        ></i>
        <div class="button-group">
          <el-button 
            class="reset"
            type="primary" 
            round 
            size="mini"
            :disabled="isOfficial"
            @click="onReset"
          >
            Reset
          </el-button>
          <el-button 
            class="download"
            type="primary" 
            round 
            size="mini"
            :disabled="downloadDisabled"
            @click="onDownload"
          >
            Download
          </el-button>
        </div>
      </div>
      <el-select v-model="selectedComponent" class="selector">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="line"></div>
    </div>
</template>

<style lang="scss">
.configurator-action {
  padding: 10px 10px 0;
  .action-group {
    padding: 5px 0 15px;
    i {
      cursor: not-allowed;
      font-size: 18px;
      vertical-align: middle;
      &.active {
        cursor: pointer;
        color: #1989FA
      }
    }
    .button-group {
      float: right;
      .el-button {
        padding: 4px 6px;
        &.is-disabled {
          color: #C0C4CC;
          background-color: #fff;
          border-color: #EBEEF5;
        }
      }
      .reset {
        background: #E6F1FC;
        color: #1989FA;
        border-color: #A2CFFC;
      }
      .download {
        background: #1989FA;
        color: #FFF;
        border-color: #1989FA
      }
    }
  }
  .selector {
    width: 100%;;
  }
  .line {
    margin-top: 10px;
    width: 100%;
    height: 0;
    border: 1px solid #DCDFE6;
  }
}
</style>

<script>
export default {
  props: {
    selectOptions: Array,
    userConfigHistory: Array,
    userConfigRedoHistory: Array,
    isOfficial: Boolean,
    onUndo: Function,
    onRedo: Function
  },
  data() {
    return {
      selectedComponent: 'color',
      downloadDisabled: false
    };
  },
  watch: {
    selectedComponent: {
      handler(val) {
        this.$emit('select', val);
      }
    }
  },
  methods: {
    onReset() {
      this.$parent.onReset();
    },
    onDownload() {
      this.downloadDisabled = true;
      this.$parent.onDownload();
      setTimeout(() => {
        this.downloadDisabled = false;
      }, 2500);
    }
  }
};
</script>