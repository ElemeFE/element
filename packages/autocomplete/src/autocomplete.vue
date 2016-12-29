<template>
  <div class="el-autocomplete" v-clickoutside="handleBlur">
    <el-input
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :name="name"
      :size="size"
      @change="handleChange"
      @focus="handleFocus"
      @keydown.up.native="highlight(highlightedIndex - 1)"
      @keydown.down.native="highlight(highlightedIndex + 1)"
      @keydown.enter.stop.native="select(highlightedIndex)"
    >
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template> 
    </el-input>
    <el-autocomplete-suggestions
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

    components: {
      ElInput,
      ElAutocompleteSuggestions
    },

    directives: { Clickoutside },

    props: {
      popperClass: String,
      placeholder: String,
      disabled: Boolean,
      name: String,
      size: String,
      value: String,
      fetchSuggestions: Function,
      triggerOnFocus: {
        type: Boolean,
        default: true
      },
      customItem: String
    },
    data() {
      return {
        suggestions: [],
        suggestionVisible: false,
        loading: false,
        highlightedIndex: -1
      };
    },
    watch: {
      suggestionVisible(val) {
        this.broadcast('ElAutocompleteSuggestions', 'visible', [val, this.$el.offsetWidth]);
      }
    },
    methods: {
      handleChange(value) {
        this.$emit('input', value);
        this.showSuggestions(value);
      },
      handleFocus() {
        if (this.triggerOnFocus) {
          this.showSuggestions(this.value);
        }
      },
      handleBlur() {
        this.hideSuggestions();
      },
      select(index) {
        if (this.suggestions && this.suggestions[index]) {
          this.$emit('input', this.suggestions[index].value);
          this.$emit('select', this.suggestions[index]);
          this.$nextTick(() => {
            this.hideSuggestions();
          });
        }
      },
      hideSuggestions() {
        this.suggestionVisible = false;
        this.loading = false;
      },
      showSuggestions(value) {
        this.suggestionVisible = true;
        this.loading = true;
        this.fetchSuggestions(value, (suggestions) => {
          this.loading = false;
          if (Array.isArray(suggestions) && suggestions.length > 0) {
            this.suggestions = suggestions;
          } else {
            this.hideSuggestions();
          }
        });
      },
      highlight(index) {
        if (!this.suggestionVisible || this.loading) { return; }
        if (index < 0) {
          index = 0;
        } else if (index >= this.suggestions.length) {
          index = this.suggestions.length - 1;
        }
        var elSuggestions = this.$refs.suggestions.$el;

        var elSelect = elSuggestions.children[index];
        var scrollTop = elSuggestions.scrollTop;
        var offsetTop = elSelect.offsetTop;

        if (offsetTop + elSelect.scrollHeight > (scrollTop + elSuggestions.clientHeight)) {
          elSuggestions.scrollTop += elSelect.scrollHeight;
        }
        if (offsetTop < scrollTop) {
          elSuggestions.scrollTop -= elSelect.scrollHeight;
        }

        this.highlightedIndex = index;
      }
    },
    beforeDestroy() {
      this.$refs.suggestions.$destroy();
    }
  };
</script>
