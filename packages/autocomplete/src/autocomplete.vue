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
      @keydown.enter.native="select(highlightedIndex)"
    ></el-input>
    <transition name="md-fade-bottom">
      <ul
        v-if="suggestionVisible"
        class="el-autocomplete__suggestions"
        :class="{ 'is-loading': loading }"
        ref="suggestions"
      >
        <li v-if="loading"><i class="el-icon-loading"></i></li>
        <template v-for="(item, index) in suggestions" v-else>
          <li
            v-if="!customItem"
            :class="{'highlighted': highlightedIndex === index}"
            @click="select(index)"
          >
            {{item.value}}
          </li>
          <component
            v-else
            :class="{'highlighted': highlightedIndex === index}"
            @click="select(index)"
            :is="customItem"
            :item="item"
            :index="index">
          </component>
        </template>
      </ul>
    </transition>
  </div>
</template>
<script>
  import ElInput from 'element-ui/packages/input';
  import Clickoutside from 'element-ui/src/utils/clickoutside';

  export default {
    name: 'ElAutocomplete',

    components: {
      ElInput
    },
    directives: { Clickoutside },
    props: {
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
    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
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
        this.suggestions = [];
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

        var elSuggestions = this.$refs.suggestions;
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
    }
  };
</script>
