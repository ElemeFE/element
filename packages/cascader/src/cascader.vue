<script>
  import ElInput from 'packages/input/index.js';
  import ElDropdown from './dropdown.vue';

  /**
   * ElCascader
   * @module components/basic/cascader
   * @desc 级联下拉选择
   * @param {string} model - 绑定值
   * @param {string} [placeholder] - 占位内容
   */
  export default {
    name: 'ElCascader',

    props: {
      model: {
        required: true,
        type: String
      },
      placeholder: String
    },

    directives: {
      ElementClickoutside: require('main/utils/clickoutside').default
    },

    data() {
      return {
        show: false,
        data: [],
        menus: []
      };
    },

    compiled() {
      this.data.push(this.menus);
    },

    methods: {
      handleSelected(selected, index) {
        const nextIndex = index + 1;
        let removeIndex = nextIndex;

        if (selected.hasOwnProperty('submenu')) {
          this.data.$set(nextIndex, selected.submenu);
          removeIndex++;
        }

        this.data = this.data.slice(0, removeIndex);
      }
    },

    components: {
      ElInput,
      ElDropdown
    }
  };
</script>

<template>
  <div
    class="element-cascader"
    v-element-clickoutside="show = false">

    <el-input
      readonly
      :value.sync="model"
      @click="show = !show"
      :placeholder="placeholder">
    </el-input>

    <div
      v-show="show"
      class="element-cascader__dropdown">
      <div class="element-cascader__wrap">
        <el-dropdown
          class="element-cascader__menu"
          v-ref:dropdown
          :model.sync="model"
          :data="list"
          :index="$index"
          trigger="hover"
          v-for="list in data"
          @change="handleSelected">
        </el-dropdown>
      </div>
    </div>

    <slot></slot>
  </div>
</template>
