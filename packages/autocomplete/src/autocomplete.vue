<template>
  <div class="el-autocomplete" v-clickoutside="close">
    <el-input
      ref="input"
      v-bind="$props"
      @compositionstart.native="handleComposition"
      @compositionupdate.native="handleComposition"
      @compositionend.native="handleComposition"
      @change="handleChange"
      @focus="handleFocus"
      @keydown.up.native.prevent="highlight(highlightedIndex - 1)"
      @keydown.down.native.prevent="highlight(highlightedIndex + 1)"
      @keydown.enter.native="handleKeyEnter"
      @keydown.native.tab="close"
    >
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </el-input>
    <el-autocomplete-suggestions
      :props="props"
      :class="[popperClass ? popperClass : '']"
      ref="suggestions"
      :suggestions="suggestions"
    >
    </el-autocomplete-suggestions>
  </div>
</template>
<script>
  import ElInput from 'element-ui/packages/input';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import ElAutocompleteSuggestions from './autocomplete-suggestions.vue';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElAutocomplete',

    mixins: [Emitter],

    componentName: 'ElAutocomplete',

    components: {
      ElInput,
      ElAutocompleteSuggestions
    },

    directives: { Clickoutside },

    props: {
      props: {
        type: Object,
        default() {
          return {
            label: 'value',
            value: 'value'
          };
        }
      },
      popperClass: String,
      placeholder: String,
      disabled: Boolean,
      name: String,
      size: String,
      value: String,
      autofocus: Boolean,
      fetchSuggestions: Function,
      triggerOnFocus: {
        type: Boolean,
        default: true
      },
      customItem: String,
      icon: String,
      onIconClick: Function,
      selectWhenUnmatched: {
        type: Boolean,
        default: false
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
      }
    },
    watch: {
      suggestionVisible(val) {
        this.broadcast('ElAutocompleteSuggestions', 'visible', [val, this.$refs.input.$refs.input.offsetWidth]);
      }
    },
    methods: {
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
        this.getData(value);
      },
      handleFocus() {
        this.activated = true;
        if (this.triggerOnFocus) {
          this.getData(this.value);
        }
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
        this.$emit('input', item[this.props.value]);
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
      }
    },
    mounted() {
      this.$on('item-click', item => {
        this.select(item);
      });
    },
    beforeDestroy() {
      this.$refs.suggestions.$destroy();
    }
  };
</script>
