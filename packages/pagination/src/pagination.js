import Pager from './pager.vue';
import ElSelect from 'element-ui/packages/select';
import ElOption from 'element-ui/packages/option';
import ElInput from 'element-ui/packages/input';
import { valueEquals } from 'element-ui/src/utils/util';
import { t } from 'element-ui/src/locale';

export default {
  name: 'ElPagination',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: Number,

    pageCount: Number,

    pagerCount: {
      type: Number,
      validator(value) {
        return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
      },
      default: 7
    },

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'prev, pager, next, jumper, ->, total'
    },

    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean
  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false,
      userInput: null
    };
  },

  render(h) {
    const layout = this.layout;
    if (!layout) return null;
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null;

    let template = <div class={['el-pagination', {
      'is-background': this.background,
      'el-pagination--small': this.small
    }] }></div>;
    const TEMPLATE_MAP = {
      prev: <prev />,
      jumper: <jumper />,
      pager: <pager
        currentPage={ this.internalCurrentPage }
        pageCount={ this.internalPageCount }
        pagerCount={ this.pagerCount }
        on-change={ this.handleCurrentChange }
        disabled={ this.disabled } />,
      next: <next />,
      sizes: <sizes />,
      slot: <slot>{ this.$slots.default || '' }</slot>,
      total: <total />
    };
    const components = layout.split(',').map((item) => item.trim());
    const rightWrapper = <div class="el-pagination__rightwrapper"></div>;
    let haveRightWrapper = false;

    template.children = template.children || [];
    rightWrapper.children = rightWrapper.children || [];
    components.forEach(compo => {
      if (compo === '->') {
        haveRightWrapper = true;
        return;
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo]);
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo]);
      }
    });

    if (haveRightWrapper) {
      template.children.unshift(rightWrapper);
    }

    return template;
  },

  components: {
    Prev: {
      functional: true,
      name: 'Prev',
      render(h, { parent }) {
        return (
          <button
            type="button"
            class="btn-prev"
            disabled={ parent.disabled || parent.internalCurrentPage <= 1 }
            on-click={ parent.prev }>
            {
              parent.prevText
                ? <span>{ parent.prevText }</span>
                : <i class="el-icon el-icon-arrow-left"></i>
            }
          </button>
        );
      }
    },

    Next: {
      functional: true,
      name: 'Next',
      render(h, { parent }) {
        return (
          <button
            type="button"
            class="btn-next"
            disabled={ parent.disabled || parent.internalCurrentPage === parent.internalPageCount || parent.internalPageCount === 0 }
            on-click={ parent.next }>
            {
              parent.nextText
                ? <span>{ parent.nextText }</span>
                : <i class="el-icon el-icon-arrow-right"></i>
            }
          </button>
        );
      }
    },

    Sizes: {
      functional: true,
      name: 'Sizes',
      render(h, { parent }) {
        return (
          <span class="el-pagination__sizes">
            <ElSelect
              value={ parent.internalPageSize }
              popperClass={ parent.popperClass || '' }
              size="mini"
              disabled={ parent.disabled }
              on-input={ val => {
                if (val !== parent.internalPageSize) {
                  val = ~~val;
                  parent.internalPageSize = val;
                  parent.userChangePageSize = true;
                  parent.$emit('update:pageSize', val);
                  parent.$emit('size-change', val);
                }
              } }>
              {
                parent.pageSizes.map(item =>
                  <ElOption
                    value={ item }
                    label={ item + t('el.pagination.pagesize') } />
                )
              }
            </ElSelect>
          </span>
        );
      }
    },

    Jumper: {
      functional: true,
      name: 'Jumper',
      render(h, { parent }) {
        return (
          <span class="el-pagination__jump">
            { t('el.pagination.goto') }
            <ElInput
              ref="jumper"
              staticClass="el-pagination__editor is-in-pagination"
              min={ 1 }
              max={ parent.internalPageCount }
              value={ parent.userInput !== null ? parent.userInput : parent.internalCurrentPage }
              type="number"
              disabled={ parent.disabled }
              onInput={ (value) => { parent.userInput = value; } }
              onChange={ (value) => {
                parent.internalCurrentPage = parent.getValidCurrentPage(value);
                parent.emitChange();
                parent.userInput = null;
              } } />
            { t('el.pagination.pageClassifier') }
          </span>
        );
      }
    },

    Total: {
      functional: true,
      name: 'Total',
      render(h, { parent }) {
        return (
          typeof parent.total === 'number'
            ? <span class="el-pagination__total">
              { t('el.pagination.total', { total: parent.total }) }
            </span>
            : null
        );
      }
    },

    Pager
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
      this.userChangePageSize = true;
      this.emitChange();
    },

    prev() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit('prev-click', this.internalCurrentPage);
      this.emitChange();
    },

    next() {
      if (this.disabled) return;
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
      this.$emit('next-click', this.internalCurrentPage);
      this.emitChange();
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10);

      const havePageCount = typeof this.internalPageCount === 'number';

      let resetValue;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    },

    emitChange() {
      this.$nextTick(() => {
        if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
          this.$emit('current-change', this.internalCurrentPage);
          this.lastEmittedPage = this.internalCurrentPage;
          this.userChangePageSize = false;
        }
      });
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.internalPageSize));
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount);
      }
      return null;
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val);
      }
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val;
      }
    },

    pageSizes: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!valueEquals(newVal, oldVal) && Array.isArray(newVal)) {
          this.internalPageSize = newVal.indexOf(this.pageSize) > -1
            ? this.pageSize
            : this.pageSizes[0];
        }
      }
    },

    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit('update:currentPage', newVal);
        this.lastEmittedPage = -1;
        this.userInput = null;
      }
    },

    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage;
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1;
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal;
        this.userChangePageSize && this.emitChange();
      }
      this.userChangePageSize = false;
    }
  }
};
