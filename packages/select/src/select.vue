<template>
  <div
    class="el-select"
    v-clickoutside="handleClose"
    :class="{ 'is-multiple': multiple, 'is-small': size === 'small' }">
    <div class="el-select__tags" v-if="multiple" @click.stop="toggleMenu" ref="tags" :style="{ 'max-width': inputWidth - 32 + 'px' }">
      <transition-group @after-leave="resetInputHeight">
        <el-tag
          v-for="item in selected"
          :key="item"
          closable
          :hit="item.hitState"
          type="primary"
          @click.native="deleteTag($event, item)"
          close-transition>{{ item.currentLabel }}</el-tag>
      </transition-group>
      <input
        type="text"
        class="el-select__input"
        @focus="visible = true"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        v-model="query"
        :debounce="remote ? 300 : 0"
        v-if="filterable"
        :style="{ width: inputLength + 'px', 'max-width': inputWidth - 42 + 'px' }"
        ref="input">
    </div>
    <el-input
      ref="reference"
      v-model="selectedLabel"
      type="text"
      :placeholder="currentPlaceholder"
      :name="name"
      :disabled="disabled"
      :readonly="!filterable || multiple"
      @click.native="toggleMenu"
      @keyup.native="debouncedOnInputChange"
      @keydown.native.down.prevent="navigateOptions('next')"
      @keydown.native.up.prevent="navigateOptions('prev')"
      @keydown.native.enter.prevent="selectOption"
      @keydown.native.esc.prevent="visible = false"
      @keydown.native.tab="visible = false"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
      :icon="iconClass">
    </el-input>
    <transition name="md-fade-bottom" @after-leave="doDestroy">
      <el-select-menu
        ref="popper"
        v-show="visible && emptyText !== false">
        <ul class="el-select-dropdown__list" v-show="options.length > 0 && filteredOptionsCount > 0 && !loading">
          <slot></slot>
        </ul>
        <p class="el-select-dropdown__empty" v-if="emptyText">{{ emptyText }}</p>
      </el-select-menu>
    </transition>
  </div>
</template>

<script type="text/babel">
  import Emitter from 'element-ui/src/mixins/emitter';
  import Locale from 'element-ui/src/mixins/locale';
  import ElInput from 'element-ui/packages/input';
  import ElSelectMenu from './select-dropdown.vue';
  import ElTag from 'element-ui/packages/tag';
  import debounce from 'throttle-debounce/debounce';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import { addClass, removeClass, hasClass } from 'wind-dom/src/class';
  import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';
  import { $t } from 'element-ui/src/locale';

  export default {
    mixins: [Emitter, Locale],

    name: 'ElSelect',

    componentName: 'select',

    computed: {
      iconClass() {
        return this.showCloseIcon ? 'circle-close' : (this.remote && this.filterable ? '' : 'caret-top');
      },

      debounce() {
        return this.remote ? 300 : 0;
      },

      showCloseIcon() {
        let criteria = this.clearable && this.inputHovering && !this.multiple && this.options.indexOf(this.selected) > -1;
        if (!this.$el) return false;

        let icon = this.$el.querySelector('.el-input__icon');
        if (icon) {
          if (criteria) {
            icon.addEventListener('click', this.deleteSelected);
            addClass(icon, 'is-show-close');
          } else {
            icon.removeEventListener('click', this.deleteSelected);
            removeClass(icon, 'is-show-close');
          }
        }
        return criteria;
      },

      emptyText() {
        if (this.loading) {
          return this.$t('el.select.loading');
        } else {
          if (this.voidRemoteQuery) {
            this.voidRemoteQuery = false;
            return false;
          }
          if (this.filterable && this.filteredOptionsCount === 0) {
            return this.$t('el.select.noMatch');
          }
          if (this.options.length === 0) {
            return this.$t('el.select.noData');
          }
        }
        return null;
      }
    },

    components: {
      ElInput,
      ElSelectMenu,
      ElTag
    },

    directives: { Clickoutside },

    props: {
      name: String,
      value: {},
      size: String,
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      loading: Boolean,
      remote: Boolean,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      placeholder: {
        type: String,
        default: $t('el.select.placeholder')
      }
    },

    data() {
      return {
        options: [],
        selected: {},
        isSelect: true,
        inputLength: 20,
        inputWidth: 0,
        valueChangeBySelected: false,
        cachedPlaceHolder: '',
        optionsCount: 0,
        filteredOptionsCount: 0,
        dropdownUl: null,
        visible: false,
        selectedLabel: '',
        selectInit: false,
        hoverIndex: -1,
        query: '',
        voidRemoteQuery: false,
        bottomOverflowBeforeHidden: 0,
        optionsAllDisabled: false,
        inputHovering: false,
        currentPlaceholder: ''
      };
    },

    watch: {
      placeholder(val) {
        this.currentPlaceholder = val;
      },

      value(val) {
        if (this.valueChangeBySelected) {
          this.valueChangeBySelected = false;
          return;
        }
        this.$nextTick(() => {
          if (this.multiple && Array.isArray(val)) {
            this.$nextTick(() => {
              this.resetInputHeight();
            });
            this.selectedInit = true;
            this.selected = [];
            this.currentPlaceholder = this.cachedPlaceHolder;
            val.forEach(item => {
              let option = this.options.filter(option => option.value === item)[0];
              if (option) {
                this.$emit('addOptionToValue', option);
              }
            });
          }
          if (!this.multiple) {
            let option = this.options.filter(option => option.value === val)[0];
            if (option) {
              this.$emit('addOptionToValue', option);
            } else {
              this.selected = {};
              this.selectedLabel = '';
            }
          }
          this.resetHoverIndex();
        });
      },

      selected(val) {
        if (this.multiple) {
          if (this.selected.length > 0) {
            this.currentPlaceholder = '';
          } else {
            this.currentPlaceholder = this.cachedPlaceHolder;
          }
          if (this.selectedInit) {
            this.selectedInit = false;
            return;
          }
          this.valueChangeBySelected = true;
          const result = val.map(item => item.value);

          this.$emit('input', result);
          this.$emit('change', result);
          this.$nextTick(() => {
            this.resetInputHeight();
          });
          if (this.filterable) {
            this.query = '';
            this.hoverIndex = -1;
            this.$refs.input.focus();
            this.inputLength = 20;
          }
        } else {
          this.valueChangeBySelected = true;
          this.$emit('input', val.value);
          this.$emit('change', val.value);
        }
      },

      query(val) {
        this.$nextTick(() => {
          this.broadcast('select-dropdown', 'updatePopper');
        });
        if (this.multiple && this.filterable) {
          this.resetInputHeight();
        }
        if (this.remote && typeof this.remoteMethod === 'function') {
          this.hoverIndex = -1;
          if (!this.multiple) {
            this.selected = {};
          }
          this.remoteMethod(val);
          this.voidRemoteQuery = val === '';
        } else if (typeof this.filterMethod === 'function') {
          this.filterMethod(val);
        } else {
          this.filteredOptionsCount = this.optionsCount;
          this.broadcast('option', 'queryChange', val);
        }
      },

      visible(val) {
        if (!val) {
          this.$refs.reference.$el.querySelector('input').blur();
          if (this.$el.querySelector('.el-input__icon')) {
            removeClass(this.$el.querySelector('.el-input__icon'), 'is-reverse');
          }
          this.broadcast('select-dropdown', 'destroyPopper');
          if (this.$refs.input) {
            this.$refs.input.blur();
          }
          this.resetHoverIndex();
          if (!this.multiple) {
            if (this.dropdownUl && this.selected.$el) {
              this.bottomOverflowBeforeHidden = this.selected.$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
            }
            if (this.selected && this.selected.value) {
              this.selectedLabel = this.selected.currentLabel;
            }
          }
        } else {
          let icon = this.$el.querySelector('.el-input__icon');
          if (icon && !hasClass(icon, 'el-icon-circle-close')) {
            addClass(this.$el.querySelector('.el-input__icon'), 'is-reverse');
          }
          this.broadcast('select-dropdown', 'updatePopper');
          if (this.filterable) {
            this.query = this.selectedLabel;
            if (this.multiple) {
              this.$refs.input.focus();
            } else {
              this.broadcast('input', 'inputSelect');
            }
          }
          if (!this.dropdownUl) {
            let dropdownChildNodes = this.$refs.popper.$el.childNodes;
            this.dropdownUl = [].filter.call(dropdownChildNodes, item => item.tagName === 'UL')[0];
          }
          if (!this.multiple && this.dropdownUl) {
            if (this.bottomOverflowBeforeHidden > 0) {
              this.dropdownUl.scrollTop += this.bottomOverflowBeforeHidden;
            }
          }
        }
      },

      options(val) {
        this.optionsAllDisabled = val.length === val.filter(item => item.disabled === true).length;
      }
    },

    methods: {
      doDestroy() {
        this.$refs.popper.doDestroy();
      },

      handleClose() {
        this.visible = false;
      },

      toggleLastOptionHitState(hit) {
        if (!Array.isArray(this.selected)) return;
        const option = this.selected[this.selected.length - 1];
        if (!option) return;

        if (hit === true || hit === false) {
          option.hitState = hit;
          return hit;
        }

        option.hitState = !option.hitState;
        return option.hitState;
      },

      deletePrevTag(e) {
        if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
          this.selected.pop();
        }
      },

      addOptionToValue(option, init) {
        if (this.multiple) {
          if (this.selected.indexOf(option) === -1 && (this.remote ? this.value.indexOf(option.value) === -1 : true)) {
            this.selectedInit = !!init;
            this.selected.push(option);
            this.resetHoverIndex();
          }
        } else {
          this.selected = option;
          this.selectedLabel = option.currentLabel;
          this.hoverIndex = option.index;
        }
      },

      managePlaceholder() {
        if (this.currentPlaceholder !== '') {
          this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
        }
      },

      resetInputState(e) {
        if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
        this.inputLength = this.$refs.input.value.length * 15 + 20;
      },

      resetInputHeight() {
        this.$nextTick(() => {
          let inputChildNodes = this.$refs.reference.$el.childNodes;
          let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0];
          input.style.height = Math.max(this.$refs.tags.clientHeight + 6, this.size === 'small' ? 28 : 36) + 'px';
          this.broadcast('select-dropdown', 'updatePopper');
        });
      },

      resetHoverIndex() {
        setTimeout(() => {
          if (!this.multiple) {
            this.hoverIndex = this.options.indexOf(this.selected);
          } else {
            if (this.selected.length > 0) {
              this.hoverIndex = Math.min.apply(null, this.selected.map(item => this.options.indexOf(item)));
            } else {
              this.hoverIndex = -1;
            }
          }
        }, 300);
      },

      handleOptionSelect(option) {
        if (!this.multiple) {
          this.selected = option;
          this.selectedLabel = option.currentLabel;
          this.visible = false;
        } else {
          let optionIndex = -1;
          this.selected.forEach((item, index) => {
            if (item === option || item.currentLabel === option.currentLabel) {
              optionIndex = index;
            }
          });
          if (optionIndex > -1) {
            this.selected.splice(optionIndex, 1);
          } else {
            this.selected.push(option);
          }
        }
      },

      toggleMenu() {
        if (this.filterable && this.query === '' && this.visible) {
          return;
        }
        if (!this.disabled) {
          this.visible = !this.visible;
          if (this.remote && this.visible) {
            this.selectedLabel = '';
          }
        }
      },

      navigateOptions(direction) {
        if (!this.visible) {
          this.visible = true;
          return;
        }
        if (!this.optionsAllDisabled) {
          if (direction === 'next') {
            this.hoverIndex++;
            if (this.hoverIndex === this.options.length) {
              this.hoverIndex = 0;
            }
            this.resetScrollTop();
            if (this.options[this.hoverIndex].disabled === true ||
              this.options[this.hoverIndex].groupDisabled === true ||
              !this.options[this.hoverIndex].queryPassed) {
              this.navigateOptions('next');
            }
          }
          if (direction === 'prev') {
            this.hoverIndex--;
            if (this.hoverIndex < 0) {
              this.hoverIndex = this.options.length - 1;
            }
            this.resetScrollTop();
            if (this.options[this.hoverIndex].disabled === true ||
              this.options[this.hoverIndex].groupDisabled === true ||
              !this.options[this.hoverIndex].queryPassed) {
              this.navigateOptions('prev');
            }
          }
        }
      },

      resetScrollTop() {
        let bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
        let topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top - this.$refs.popper.$el.getBoundingClientRect().top;
        if (bottomOverflowDistance > 0) {
          this.dropdownUl.scrollTop += bottomOverflowDistance;
        }
        if (topOverflowDistance < 0) {
          this.dropdownUl.scrollTop += topOverflowDistance;
        }
      },

      selectOption() {
        if (this.options[this.hoverIndex]) {
          this.handleOptionSelect(this.options[this.hoverIndex]);
        }
      },

      deleteSelected(event) {
        event.stopPropagation();
        this.selected = {};
        this.selectedLabel = '';
        this.$emit('input', '');
        this.$emit('change', '');
        this.visible = false;
      },

      deleteTag(event, tag) {
        if (event.target.tagName === 'I') {
          let index = this.selected.indexOf(tag);
          if (index > -1) {
            this.selected.splice(index, 1);
          }
          event.stopPropagation();
        }
      },

      onInputChange() {
        if (this.filterable && this.selectedLabel !== this.value) {
          this.query = this.selectedLabel;
        }
      },

      onOptionDestroy(option) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        let index = this.options.indexOf(option);
        if (index > -1) {
          this.options.splice(index, 1);
        }
        this.broadcast('option', 'resetIndex');
      },

      resetInputWidth() {
        this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
      }
    },

    created() {
      this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
      if (this.multiple) {
        this.selectedInit = true;
        this.selected = [];
      }
      if (this.remote) {
        this.voidRemoteQuery = true;
      }

      this.debouncedOnInputChange = debounce(this.debounce, () => {
        this.onInputChange();
      });

      this.$on('addOptionToValue', this.addOptionToValue);
      this.$on('handleOptionClick', this.handleOptionSelect);
      this.$on('onOptionDestroy', this.onOptionDestroy);
    },

    mounted() {
      addResizeListener(this.$el, this.resetInputWidth);
      if (this.remote && this.multiple && Array.isArray(this.value)) {
        this.selected = this.options.reduce((prev, curr) => {
          return this.value.indexOf(curr.value) > -1 ? prev.concat(curr) : prev;
        }, []);
        this.$nextTick(() => {
          this.resetInputHeight();
        });
      }
      this.$nextTick(() => {
        if (this.$refs.reference.$el) {
          this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
        }
      });
    },

    destroyed() {
      if (this.resetInputWidth) removeResizeListener(this.$el, this.resetInputWidth);
    }
  };
</script>
