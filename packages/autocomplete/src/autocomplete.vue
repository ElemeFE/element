<template>
  <div
    class="el-autocomplete"
    v-clickoutside="close"
    aria-haspopup="listbox"
    role="combobox"
    :aria-expanded="suggestionVisible"
    :aria-owns="id"
  >
    <el-input
      ref="input"
      v-bind="$props"
      @compositionstart.native="handleComposition"
      @compositionupdate.native="handleComposition"
      @compositionend.native="handleComposition"
      @input="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.up.native.prevent="highlight(highlightedIndex - 1)"
      @keydown.down.native.prevent="highlight(highlightedIndex + 1)"
      @keydown.enter.native="handleKeyEnter"
      @keydown.native.tab="close"
      :label="label"
    >
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </template>
    </el-input>
    <el-autocomplete-suggestions
      visible-arrow
      :class="[popperClass ? popperClass : '']"
      ref="suggestions"
      placement="bottom-start"
      :id="id">
      <li
        v-for="(item, index) in suggestions"
        :key="index"
        :class="{'highlighted': highlightedIndex === index}"
        @click="select(item)"
        :id="`${id}-item-${index}`"
        role="option"
        :aria-selected="highlightedIndex === index"
      >
        <slot :item="item">
          {{ item[valueKey] }}
        </slot>
      </li>
    </el-autocomplete-suggestions>
  </div>
</template>
<script>
  import debounce from 'throttle-debounce/debounce';
  import ElInput from 'element-ui/packages/input';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import ElAutocompleteSuggestions from './autocomplete-suggestions.vue';
  import Emitter from 'element-ui/src/mixins/emitter';
  import Migrating from 'element-ui/src/mixins/migrating';
  import { generateId } from 'element-ui/src/utils/util';
  import Focus from 'element-ui/src/mixins/focus';

  export default {
    name: 'ElAutocomplete',

    mixins: [Emitter, Focus('input'), Migrating],

    componentName: 'ElAutocomplete',

    components: {
      ElInput,
      ElAutocompleteSuggestions
    },

    directives: { Clickoutside },

    props: {
      valueKey: {
        type: String,
        default: 'value'
      },
      popperClass: String,
      placeholder: String,
      disabled: Boolean,
      name: String,
      size: String,
      value: String,
      maxlength: Number,
      minlength: Number,
      autofocus: Boolean,
      fetchSuggestions: Function,
      triggerOnFocus: {
        type: Boolean,
        default: true
      },
      customItem: String,
      selectWhenUnmatched: {
        type: Boolean,
        default: false
      },
      prefixIcon: String,
      suffixIcon: String,
      label: String,
      debounce: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        activated: false,
        isOnComposition: false,
        suggestions: [],
        loading: false,
        highlightedIndex: -1
      };
    },
    computed: {
      suggestionVisible() {
        const suggestions = this.suggestions;
        let isValidData = Array.isArray(suggestions) && suggestions.length > 0;
        return (isValidData || this.loading) && this.activated;
      },
      id() {
        return `el-autocomplete-${generateId()}`;
      }
    },
    watch: {
      suggestionVisible(val) {
        this.broadcast('ElAutocompleteSuggestions', 'visible', [val, this.$refs.input.$refs.input.offsetWidth]);
      }
    },
    methods: {
      getMigratingConfig() {
        return {
          props: {
            'custom-item': 'custom-item is removed, use scoped slot instead.',
            'props': 'props is removed, use value-key instead.'
          }
        };
      },
      getData(queryString) {
        this.loading = true;
        this.fetchSuggestions(queryString, (suggestions) => {
          this.loading = false;
          if (Array.isArray(suggestions)) {
            this.suggestions = suggestions;
          } else {
            console.error('autocomplete suggestions must be an array');
          }
        });
      },
      handleComposition(event) {
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          this.handleChange(event.target.value);
        } else {
          this.isOnComposition = true;
        }
      },
      handleChange(value) {
        this.$emit('input', value);
        if (this.isOnComposition || (!this.triggerOnFocus && !value)) {
          this.suggestions = [];
          return;
        }
        this.debouncedGetData(value);
      },
      handleFocus(event) {
        this.activated = true;
        this.$emit('focus', event);
        if (this.triggerOnFocus) {
          this.debouncedGetData(this.value);
        }
      },
      handleBlur(event) {
        this.$emit('blur', event);
      },
      close(e) {
        this.activated = false;
      },
      handleKeyEnter(e) {
        if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
          e.preventDefault();
          this.select(this.suggestions[this.highlightedIndex]);
        } else if (this.selectWhenUnmatched) {
          this.$emit('select', {value: this.value});
          this.$nextTick(_ => {
            this.suggestions = [];
            this.highlightedIndex = -1;
          });
        }
      },
      select(item) {
        this.$emit('input', item[this.valueKey]);
        this.$emit('select', item);
        this.$nextTick(_ => {
          this.suggestions = [];
          this.highlightedIndex = -1;
        });
      },
      highlight(index) {
        if (!this.suggestionVisible || this.loading) { return; }
        if (index < 0) {
          this.highlightedIndex = -1;
          return;
        }
        if (index >= this.suggestions.length) {
          index = this.suggestions.length - 1;
        }
        const suggestion = this.$refs.suggestions.$el.querySelector('.el-autocomplete-suggestion__wrap');
        const suggestionList = suggestion.querySelectorAll('.el-autocomplete-suggestion__list li');

        let highlightItem = suggestionList[index];
        let scrollTop = suggestion.scrollTop;
        let offsetTop = highlightItem.offsetTop;

        if (offsetTop + highlightItem.scrollHeight > (scrollTop + suggestion.clientHeight)) {
          suggestion.scrollTop += highlightItem.scrollHeight;
        }
        if (offsetTop < scrollTop) {
          suggestion.scrollTop -= highlightItem.scrollHeight;
        }
        this.highlightedIndex = index;
        this.$el.querySelector('.el-input__inner').setAttribute('aria-activedescendant', `${this.id}-item-${this.highlightedIndex}`);
      }
    },
    mounted() {
      this.debouncedGetData = debounce(this.debounce, (val) => {
        this.getData(val);
      });
      this.$on('item-click', item => {
        this.select(item);
      });
      let $input = this.$el.querySelector('.el-input__inner');
      $input.setAttribute('role', 'textbox');
      $input.setAttribute('aria-autocomplete', 'list');
      $input.setAttribute('aria-controls', 'id');
      $input.setAttribute('aria-activedescendant', `${this.id}-item-${this.highlightedIndex}`);
    },
    beforeDestroy() {
      this.$refs.suggestions.$destroy();
    }
  };
</script>
