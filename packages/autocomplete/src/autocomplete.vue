<template>
  <div class="el-autocomplete" v-clickoutside="handleBlur">
    <el-input
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      :name='name'
      @onchange="handleChange"
      @onfocus="handleFocus"
      @keydown.up.native="highlight(highlightedIndex - 1)"
      @keydown.down.native="highlight(highlightedIndex + 1)"
      @keydown.enter.native="select(highlightedIndex)"
    ></el-input>
    <transition name="md-fade-bottom">
      <ul
        v-show="suggestionVisible && !loading && suggestions.length > 0"
        class="el-autocomplete__suggestions"
        ref="suggestions"
      >
        <li
          v-if="!customItem"
          :class="{'highlighted': highlightedIndex === index}"
          @click="select(index)"
          v-for="(item, index) in suggestions">
          {{item.display}}
        </li>
        <component
          v-else
          :is="customItem"
          @click.native="select(index)"
          v-for="(item, index) in suggestions"
          :item="item"
          :index="index">
        </component>
      </ul>
    </transition>
    <transition name="md-fade-bottom">
      <div
        v-show="suggestionVisible && loading"
        class="el-autocomplete__suggestions is-loading"
      >
        <i class="el-icon-loading"></i>
      </div>
    </transition>
  </div>
</template>
<script>
  import ElInput from 'packages/input/index.js';
  import Vue from 'vue';
  import VueClickoutside from 'main/utils/clickoutside';
  Vue.use(VueClickoutside);

  export default {
    name: 'ElAutocomplete',

    components: {
      ElInput
    },
    props: {
      placeholder: String,
      disabled: Boolean,
      name: String,
      value: String,
      fetchSuggestions: Function,
      triggerOnfocus: {
        type: Boolean,
        default: true
      },
      customItem: String
    },
    data() {
      return {
        suggestions: [],
        suggestionVisible: false,
        inputFocusing: false,
        loading: false,
        highlightedIndex: -1
      };
    },
    methods: {
      handleChange(value) {
        this.$emit('input', value);
        this.showSuggestions(value);
      },
      handleFocus() {
        if (this.triggerOnfocus) {
          this.showSuggestions(this.value);
        }
      },
      handleBlur() {
        this.suggestionVisible = false;
      },
      select(index) {
        if (this.suggestions && this.suggestions[index]) {
          this.$emit('input', this.suggestions[index].value);
          this.$nextTick(() => {
            this.suggestionVisible = false;
          });
        }
      },
      showSuggestions(value) {
        this.suggestionVisible = true;
        this.loading = true;
        this.fetchSuggestions(value, (suggestions) => {
          this.loading = false;
          this.suggestions = suggestions;
        });
      },
      getSuggestionElement(index) {
        if (!this.suggestions || !this.suggestions[index]) {
          return null;
        } else {
          return this.$refs.suggestions.children[index];
        }
      },
      highlight(index) {
        if (index < 0) {
          index = 0;
        } else if (index >= this.suggestions.length) {
          index = this.suggestions.length - 1;
        }

        var elSelect = this.getSuggestionElement(index);
        var elSuggestions = this.$refs.suggestions;
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
          this.suggestionVisible = true;
        }
      }
    }
  };
</script>
