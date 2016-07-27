<template>
  <div class="el-select" :class="{ 'is-multiple': multiple, 'is-small': size === 'small' }">
    <div class="el-select__tags" v-if="multiple" @click.stop="toggleMenu" v-el:tags :style="{ 'max-width': width - 36 + 'px' }">
      <el-tag
      v-for="item in selected"
      closable
      :hit="item.hitState"
      type="primary"
      @click="deleteTag($event, item)"
      close-transition>{{ item.label }}</el-tag>

      <input
        type="text"
        class="el-select__input"
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
        :style="{ width: inputLength + 'px' }"
        v-el:input>
    </div>
    <el-input
      v-el:reference
      :value.sync="selectedLabel"
      type="text"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :readonly="!filterable || multiple"
      @click="toggleMenu"
      @keyup="debouncedOnInputChange"
      @keydown.down.prevent="navigateOptions('next')"
      @keydown.up.prevent="navigateOptions('prev')"
      @keydown.enter.prevent="selectOption"
      @keydown.esc.prevent="visible = false"
      @keydown.tab="visible = false"
      @mouseenter="inputHovering = true"
      @mouseleave="inputHovering = false"
      :icon="showCloseIcon ? 'circle-close' : 'caret-top'"
      :style="{ 'width': width + 'px' }"
      v-element-clickoutside="visible = false">
    </el-input>
    <el-select-menu
      v-el:popper
      v-show="visible && nodataText !== false"
      transition="md-fade-bottom"
      :style="{ 'width': dropdownWidth ? dropdownWidth + 'px' : '100%' }">
      <ul class="el-select-dropdown__list" v-show="options.length > 0 && filteredOptionsCount > 0">
        <slot></slot>
      </ul>
      <p class="el-select-dropdown__nodata" v-if="nodataText">{{ nodataText }}</p>
    </el-select-menu>
  </div>
</template>

<script type="text/babel">
  import emitter from 'main/mixins/emitter';
  import ElInput from 'packages/input/index.js';
  import ElSelectMenu from 'packages/select-dropdown/index.js';
  import ElTag from 'packages/tag/index.js';
  import debounce from 'throttle-debounce/debounce';

  export default {
    mixins: [emitter],

    name: 'ElSelect',

    componentName: 'select',

    computed: {
      debounce() {
        return this.remote ? 300 : 0;
      },

      showCloseIcon() {
        let criteria = this.clearable && this.inputHovering && !this.multiple && this.options.indexOf(this.selected) > -1;
        let icon = this.$el.querySelector('.el-input__icon');
        if (icon) {
          if (criteria) {
            icon.addEventListener('click', this.deleteSelected);
            icon.classList.add('is-show-close');
          } else {
            icon.removeEventListener('click', this.deleteSelected);
            icon.classList.remove('is-show-close');
          }
        }
        return criteria;
      },

      nodataText() {
        if (this.loading) {
          return '加载中';
        } else {
          if (this.voidRemoteQuery) {
            this.voidRemoteQuery = false;
            return false;
          }
          if (this.filteredOptionsCount === 0) {
            return '无匹配数据';
          }
          if (this.options.length === 0) {
            return '无数据';
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

    directives: {
      ElementClickoutside: require('vue-clickoutside')
    },

    props: {
      name: String,
      width: Number,
      dropdownWidth: Number,
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
        default: '请选择'
      }
    },

    data() {
      return {
        options: [],
        selected: {},
        isSelect: true,
        inputLength: 20,
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
        inputHovering: false
      };
    },

    watch: {
      loading(val) {
        if (val) {
          this.options = [];
        }
      },

      value(val) {
        this.$emit('change', val);
        if (this.valueChangeBySelected) {
          this.valueChangeBySelected = false;
          return;
        }
        if (this.multiple && Object.prototype.toString.call(val) === '[object Array]') {
          this.$nextTick(() => {
            this.resetInputHeight();
          });
          this.selectedInit = true;
          this.selected = [];
          val.forEach(item => {
            let option = this.options.filter(option => option.value === item)[0];
            if (option) {
              this.$emit('addOptionToValue', option);
            }
          });
        }
        if (!this.multiple) {
          if (val === '') {
            this.selected = {};
            this.selectedLabel = '';
          }
          let option = this.options.filter(option => option.value === val)[0];
          if (option) {
            this.$emit('addOptionToValue', option);
          }
        }
        this.resetHoverIndex();
      },

      selected(val) {
        if (this.multiple) {
          if (this.selectedInit) {
            this.selectedInit = false;
            return;
          }
          this.valueChangeBySelected = true;
          this.value = val.map(item => item.value);
          if (this.selected.length > 0) {
            this.placeholder = '';
          } else {
            this.placeholder = this.cachedPlaceHolder;
          }
          this.$nextTick(() => {
            this.resetInputHeight();
          });
          if (this.filterable) {
            this.query = '';
            this.hoverIndex = -1;
            this.$els.input.focus();
            this.inputLength = 20;
          }
        } else {
          if (val.value) {
            this.value = val.value;
          }
        }
      },

      query(val) {
        if (this.multiple && this.filterable) {
          this.resetInputHeight();
        }
        if (this.remote && typeof this.remoteMethod === 'function') {
          this.hoverIndex = -1;
          if (!this.multiple) {
            this.selected = {};
          }
          this.remoteMethod(val);
          if (val === '') {
            this.options = [];
          }
        } else if (typeof this.filterMethod === 'function') {
          this.filterMethod(val);
        } else {
          this.filteredOptionsCount = this.optionsCount;
          this.broadcast('option', 'queryChange', val);
        }
      },

      visible(val) {
        if (!val) {
          this.$el.querySelector('.el-input__icon').classList.remove('is-reverse');
          this.broadcast('select-dropdown', 'destroyPopper');
          if (this.$els.input) {
            this.$els.input.blur();
          }
          this.resetHoverIndex();
          if (!this.multiple) {
            if (this.dropdownUl && this.selected.$el) {
              this.bottomOverflowBeforeHidden = this.selected.$el.getBoundingClientRect().bottom - this.$els.popper.getBoundingClientRect().bottom;
            }
            if (this.selected && this.selected.value) {
              this.selectedLabel = this.selected.label;
            }
            if (this.remote) {

            }
          }
        } else {
          if (this.remote) {
            this.voidRemoteQuery = true;
          }
          this.$el.querySelector('.el-input__icon').classList.add('is-reverse');
          this.broadcast('select-dropdown', 'updatePopper');
          if (this.filterable) {
            this.query = this.selectedLabel;
            if (this.multiple) {
              this.$els.input.focus();
            } else {
              this.broadcast('input', 'inputSelect');
            }
          }
          if (!this.dropdownUl) {
            let dropdownChildNodes = this.$els.popper.childNodes;
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

      addOptionToValue(option) {
        if (this.multiple) {
          if (this.selected.indexOf(option) === -1 && (this.remote ? this.value.indexOf(option.value) === -1 : true)) {
            this.selectedInit = false;
            this.selected.push(option);
            this.resetHoverIndex();
          }
        } else {
          this.selected = option;
          this.selectedLabel = option.label;
          this.hoverIndex = option.index;
        }
      },

      managePlaceholder() {
        if (this.placeholder !== '') {
          this.placeholder = this.$els.input.value ? '' : this.cachedPlaceHolder;
        }
      },

      resetInputState(e) {
        if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
        this.inputLength = this.$els.input.value.length * 12 + 20;
      },

      resetInputHeight() {
        this.$nextTick(() => {
          let inputChildNodes = this.$els.reference.childNodes;
          let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0];
          input.style.height = Math.max(this.$els.tags.clientHeight + 6, this.size === 'small' ? 28 : 36) + 'px';
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
          this.selectedLabel = option.label;
          this.visible = false;
        } else {
          let optionIndex = -1;
          this.selected.forEach((item, index) => {
            if (item === option || item.label === option.label) {
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
        if (!this.disabled) {
          this.visible = !this.visible;
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
            if (this.options[this.hoverIndex].disabled === true || !this.options[this.hoverIndex].queryPassed) {
              this.navigateOptions('next');
            }
          }
          if (direction === 'prev') {
            this.hoverIndex--;
            if (this.hoverIndex < 0) {
              this.hoverIndex = this.options.length - 1;
            }
            this.resetScrollTop();
            if (this.options[this.hoverIndex].disabled === true || !this.options[this.hoverIndex].queryPassed) {
              this.navigateOptions('prev');
            }
          }
        }
      },

      resetScrollTop() {
        let bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom - this.$els.popper.getBoundingClientRect().bottom;
        let topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top - this.$els.popper.getBoundingClientRect().top;
        if (bottomOverflowDistance > 0) {
          this.dropdownUl.scrollTop += bottomOverflowDistance;
        }
        if (topOverflowDistance < 0) {
          this.dropdownUl.scrollTop += topOverflowDistance;
        }
      },

      selectOption() {
        this.handleOptionSelect(this.options[this.hoverIndex]);
      },

      deleteSelected(event) {
        event.stopPropagation();
        this.selected = {};
        this.selectedLabel = '';
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
        if (this.filterable) {
          this.query = this.selectedLabel;
        }
      }
    },

    created() {
      this.cachedPlaceHolder = this.placeholder;
      if (this.multiple) {
        this.selectedInit = true;
        this.selected = [];
      }
      if (!this.width) {
        this.width = this.multiple ? 220 : 180;
      }
      this.debouncedOnInputChange = debounce(this.debounce, () => {
        this.onInputChange();
      });

      this.$on('addOptionToValue', this.addOptionToValue);
      this.$on('handleOptionClick', this.handleOptionSelect);
    }
  };
</script>
