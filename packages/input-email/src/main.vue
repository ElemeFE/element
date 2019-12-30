<template>
  <el-autocomplete
    class="el-input-email"
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    :placeholder="placeholder"
    :debounce="100"
    :fetch-suggestions="getSuggestions"
    :highlight-first-item="true"
    :hide-loading="true"
    @blur="handleBlur"
    @input="handleInput"
    @select="handleSelect"
  ></el-autocomplete>
</template>

<script>
import _emailList from './email-list.js';

const emailReg = /^[\w-]+@[\w-]+(\.[\w-]+)+$/;

export default {
  name: 'ElInputEmail',
  props: {
    /**
     * 邮箱列表
     */
    emailList: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 占位文本
     */
    placeholder: {
      type: String,
      default: '请输入邮箱'
    },
    /**
     * 输入邮箱
     */
    value: {
      type: String
    },
    /**
     * 自动填充
     */
    autoFill: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isValidEmail() {
      return emailReg.test(this.emailAddr);
    }
  },
  watch: {
    value(value) {
      this.emailAddr = value;
    }
  },
  data() {
    return {
      emailAddr: '',
      selectedIndex: 0,
      suggestionList: []
    };
  },
  methods: {
    getSuggestions(input, callback) {
      if (!this.emailAddr.length) {
        callback([]);
        return;
      }
      const suggestions = this.emailList.length ? this.emailList : _emailList;

      if (/@\w?/g.test(input)) {
        const right = input.split('@')[1];
        const reg = new RegExp(`@${right}`, 'g');

        this.suggestionList = suggestions
          .filter(item => item.startsWith(right))
          .map(item => {
            return {
              value: input.replace(reg, '') + '@' + item
            };
          });
      } else {
        this.suggestionList = suggestions.map(item => {
          return {
            value: input + '@' + item
          };
        });
      }
      callback(this.suggestionList);
    },
    handleInput() {
      this.selectedIndex = 0;
    },
    handleBlur() {
      this.emitEmailAddr();
    },
    handleSelect(item) {
      this.selectedIndex = this.suggestionList.findIndex(
        s => s.value === item.value
      );
    },
    emitEmailAddr() {
      if (this.isValidEmail) {
        this.$emit('input', this.emailAddr);
      } else if (this.emailAddr.length && this.suggestionList.length) {
        this.$emit('input', this.suggestionList[this.selectedIndex].value);
      } else {
        this.suggestionList.length = 0;
        this.emailAddr = this.autoFill ? 'anonymous@gmail.com' : this.emailAddr;
        this.$emit('input', this.emailAddr);
      }
    }
  }
};
</script>
