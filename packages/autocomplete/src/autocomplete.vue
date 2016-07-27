<template>
  <div class="el-autocomplete">
    <el-input
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :name = 'name'
      @onchange="handleChange"
      @onfocus="handleFocus()"
      @onblur="handleBlur()"
      @keydown.up="highlight(highlightedIndex - 1)"
      @keydown.down="highlight(highlightedIndex + 1)"
      @keydown.enter="select(highlightedIndex)"
    ></el-input>
    <ul
      v-show="showSuggestions && !loading && suggestions.length > 0"
      class="el-autocomplete__suggestions"
      :class="[partial ? partial.name : '']"
      transition="md-fade-bottom"
      v-el:suggestions
    >
      <li :class="{'highlighted': highlightedIndex === $index}" @click="select($index)" v-for="item in suggestions">{{item.display}}</li>
    </ul>
    <div
      v-show="showSuggestions && loading"
      class="el-autocomplete__suggestions is-loading"
    >
      <i class="el-icon-loading"></i>
    </div>
  </div>
</template>
<script>
  import ElInput from 'packages/input/index.js';

  export default {
    name: 'ElAutocomplete',

    components: {
      ElInput
    },
    props: {
      placeholder: String,
      disabled: Boolean,
      name: String,
      suggestions: [Array, Object],
      value: String,
      showOnUpDown: Boolean,
      partial: Object
    },
    data() {
      return {
        showSuggestions: false,
        inputFocusing: false,
        loading: false,
        highlightedIndex: -1
      };
    },
    created() {
      if (this.partial) {
        this.$options.template = this.$options.template.replace(/(item\sin\ssuggestions">)(?:.|\s)*?(<)/, '$1' + this.partial.template + '$2');
      }
    },
    watch: {
      'suggestions'(val) {
        if (val && val.then) {
          this.loading = true;
          this.suggestions.then((res) => {
            this.loading = false;
            this.suggestions = res;
          });
        }
      }
    },
    methods: {
      handleChange(value) {
        this.value = value;
        this.showSuggestions = true;
      },
      handleFocus() {
        if (!this.showOnUpDown) {
          this.showSuggestions = true;
        }
      },
      handleBlur() {
        this.showSuggestions = false;
      },
      select(index) {
        if (this.suggestions && this.suggestions[index]) {
          this.value = this.suggestions[index].value;
          this.$nextTick(() => {
            this.showSuggestions = false;
          });
        }
      },
      getSuggestionElement(index) {
        if (!this.suggestions || !this.suggestions[index]) {
          return null;
        } else {
          return this.$els.suggestions.children[index];
        }
      },
      highlight(index) {
        if (index < 0) {
          index = 0;
        } else if (index >= this.suggestions.length) {
          index = this.suggestions.length - 1;
        }

        var elSelect = this.getSuggestionElement(index);
        var elSuggestions = this.$els.suggestions;
        var scrollTop = elSuggestions.scrollTop;
        var offsetTop = elSelect.offsetTop;

        if (offsetTop > (scrollTop + elSuggestions.clientHeight - 12)) {
          elSuggestions.scrollTop += elSelect.scrollHeight;
        }
        if (offsetTop < scrollTop - 12) {
          elSuggestions.scrollTop -= elSelect.scrollHeight;
        }

        this.highlightedIndex = index;

        if (this.showOnUpDown) {
          this.showSuggestions = true;
        }
      }
    }
  };
</script>
