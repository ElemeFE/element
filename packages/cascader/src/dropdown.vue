<script>
  import isEqual from 'object-equal';

  /**
   * dropdown
   * @module components/basic/dropdown
   * @desc 级联选择下拉菜单
   * @param {object[]} data - 基本数据
   * @param {string|string[]} [model] - 绑定值，需双向绑定
   * @param {number} [index] - 当前组件的索引
   * @param {string} [trigger=click] - 触发方式，可选'click', 'hover'
   * @param {boolean} [allow-arrow=false] - 是否显示箭头
   * @param {function} [change] - 选中后的回调函数
   */
  module.exports = {
    name: 'ElDropdown',

    props: {
      data: {
        default() {
          return [];
        },
        required: true
      },
      model: {
        default() {
          return [];
        },
        twoWay: true
      },
      index: Number,
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) > -1;
        }
      }
    },

    data() {
      return {
        cache: {}
      };
    },

    watch: {
      model(value) {
        if (!value) {
          this.cache = '';
        }
      }
    },

    methods: {
      handleSelected(trigger, data, pid, id) {
        let cache;

        if (trigger === 'click' && !data.hasOwnProperty('submenu')) {
          this.$parent.show = false;
        }

        if (data.disabled || trigger !== this.trigger) {
          return;
        }
        // 缓存结果
        cache = { pid: pid, id: id };
        if (isEqual(cache, this.cache)) {
          return;
        }
        this.cache = cache;

        // 返回结果，如果需要返回完整数据（每一层的数据）需要 model 为数组类型且父组件
        // 设置了 completed 属性
        if (this.$parent.completed) {
          if (!Array.isArray(this.model)) {
            this.model = [];
          }

          this.model.$set(pid, data.label);
          this.model = this.model.slice(0, pid + 1);
        } else {
          this.model = data.label;
        }

        this.$nextTick(() => this.$dispatch('change', data, pid));
      }
    }
  };
</script>

<template>
  <div class="element-dropdown">
    <ul class="element-dropdown__list">
      <li
        v-for="item in data"
        class="element-option element-option--arrow"
        :class="{
          'is-disabled': item.disabled,
          'is-selected': cache.pid === index && cache.id === $index,
          'is-last': !item.hasOwnProperty('submenu')
        }"
        @click="handleSelected('click', item, index, $index)"
        @mouseover="handleSelected('hover', item, index, $index)">
        <span v-text="item.label"></span>
      </li>
    </ul>
  </div>
</template>
