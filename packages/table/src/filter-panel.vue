<template>
  <transition name="el-zoom-in-top">
    <div class="el-table-filter" 
      v-if="isInputField" 
      v-clickoutside="handleOutsideClick"
      v-show="showPopper">
      <div class="el-table-filter__content">
          <el-input 
            :placeholder="inputFieldOptions.placeholder" 
            :clearable="!!inputFieldOptions.clearable"
            @clear="handleReset"
            v-model="filterValue" 
            ref="input">
          </el-input>
      </div>
    </div>
    <div
      class="el-table-filter"
      v-else-if="isCheckbox && multiple"
      v-clickoutside="handleOutsideClick"
      v-show="showPopper">
      <div class="el-table-filter__content">
        <el-scrollbar wrap-class="el-table-filter__wrap">
          <el-checkbox-group class="el-table-filter__checkbox-group" v-model="filteredValue">
            <el-checkbox
              v-for="filter in filters"
              :key="filter.value"
              :label="filter.value">{{ filter.text }}</el-checkbox>
          </el-checkbox-group>
        </el-scrollbar>
      </div>
      <div class="el-table-filter__bottom">
        <button @click="handleConfirm"
          :class="{ 'is-disabled': filteredValue.length === 0 }"
          :disabled="filteredValue.length === 0">{{ t('el.table.confirmFilter') }}</button>
        <button @click="handleReset">{{ t('el.table.resetFilter') }}</button>
      </div>
    </div>
    <div
      class="el-table-filter"
      v-else
      v-clickoutside="handleOutsideClick"
      v-show="showPopper">
      <ul class="el-table-filter__list">
        <li class="el-table-filter__list-item"
            :class="{ 'is-active': filterValue === undefined || filterValue === null }"
            @click="handleSelect(null)">{{ t('el.table.clearFilter') }}</li>
        <li class="el-table-filter__list-item"
            v-for="filter in filters"
            :label="filter.value"
            :key="filter.value"
            :class="{ 'is-active': isActive(filter) }"
            @click="handleSelect(filter.value)" >{{ filter.text }}</li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popper from 'element-ui/src/utils/vue-popper';
  import { PopupManager } from 'element-ui/src/utils/popup';
  import Locale from 'element-ui/src/mixins/locale';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Dropdown from './dropdown';
  import ElCheckbox from 'element-ui/packages/checkbox';
  import ElCheckboxGroup from 'element-ui/packages/checkbox-group';
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import ElInput from 'element-ui/packages/input';

  import debounce from 'throttle-debounce/debounce';

  export default {
    name: 'ElTableFilterPanel',

    mixins: [Popper, Locale],

    directives: {
      Clickoutside
    },

    components: {
      ElCheckbox,
      ElCheckboxGroup,
      ElScrollbar,
      ElInput
    },

    props: {
      placement: {
        type: String,
        default: 'bottom-end'
      }
    },

    methods: {
      isActive(filter) {
        return filter.value === this.filterValue;
      },

      handleOutsideClick() {
        setTimeout(() => {
          this.showPopper = false;
        }, 16);
      },

      handleConfirm(closePanel = true) {
        this.confirmFilter(this.filteredValue);
        if (closePanel) {
          this.handleOutsideClick();
        }
      },

      handleReset(closePanel = true) {
        this.filteredValue = [];
        this.confirmFilter(this.filteredValue);
        if (closePanel) {
          this.handleOutsideClick();
        }
      },

      handleSelect(filterValue) {
        this.filterValue = filterValue;

        if ((typeof filterValue !== 'undefined') && (filterValue !== null)) {
          this.confirmFilter(this.filteredValue);
        } else {
          this.confirmFilter([]);
        }

        this.handleOutsideClick();
      },

      confirmFilter(filteredValue) {
        this.table.store.commit('filterChange', {
          column: this.column,
          values: filteredValue
        });
        this.table.store.updateAllSelected();
      },

      handleInputEvent() {
        const event = 'input';
        const delay = this.inputFieldOptions.delay || 500;
        const handleFunc = debounce(delay, (val) => this.handleConfirm(val));

        this.$refs.input.$on(event, () => {
          if (this.filterValue === '') {
            return this.handleReset(false);
          }
          handleFunc(false);
        });
      }
    },

    data() {
      return {
        table: null,
        cell: null,
        column: null
      };
    },

    computed: {
      filters() {
        return this.column && this.column.filters;
      },

      filterValue: {
        get() {
          return (this.column.filteredValue || [])[0];
        },
        set(value) {
          if (this.filteredValue) {
            if ((typeof value !== 'undefined') && (value !== null)) {
              this.filteredValue.splice(0, 1, value);
            } else {
              this.filteredValue.splice(0, 1);
            }
          }
        }
      },

      filteredValue: {
        get() {
          if (this.column) {
            return this.column.filteredValue || [];
          }
          return [];
        },
        set(value) {
          if (this.column) {
            this.column.filteredValue = value;
          }
        }
      },

      multiple() {
        if (this.column) {
          return this.column.filterMultiple;
        }
        return true;
      },

      isCheckbox() {
        return this.column && this.column.filterType === 'checkbox';
      },

      isInputField() {
        return this.column && this.column.filterType === 'input';
      },

      inputFieldOptions() {
        return this.column.filterTypeOptions;
      }
    },

    mounted() {
      this.popperElm = this.$el;
      this.referenceElm = this.cell;
      this.table.bodyWrapper.addEventListener('scroll', () => {
        this.updatePopper();
      });

      this.$watch('showPopper', (value) => {
        if (this.column) this.column.filterOpened = value;
        if (value) {
          Dropdown.open(this);
        } else {
          Dropdown.close(this);
        }
      });

      /**
       * if filter is input field then
       * change filter on passed event
       */
      if (this.isInputField) {
        this.handleInputEvent();
      }
    },
    watch: {
      showPopper(val) {
        if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex) {
          this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
        }
      }
    }
  };
</script>
