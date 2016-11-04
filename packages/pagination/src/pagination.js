import Pager from './pager.vue';
import ElSelect from 'element-ui/packages/select';
import ElOption from 'element-ui/packages/option';
import Migrating from 'element-ui/src/mixins/migrating';
import { $t } from 'element-ui/src/locale';

export default {
  name: 'ElPagination',

  mixins: [Migrating],

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: Number,

    pageCount: Number,

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
    }
  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0
    };
  },

  render(h) {
    let template = <div class='el-pagination'></div>;
    const layout = this.layout || '';
    if (!layout) return;
    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      jumper: <jumper></jumper>,
      pager: <pager currentPage={ this.internalCurrentPage } pageCount={ this.internalPageCount } on-change={ this.handleCurrentChange }></pager>,
      next: <next></next>,
      sizes: <sizes></sizes>,
      slot: <slot></slot>,
      total: <total></total>
    };
    const components = layout.split(',').map((item) => item.trim());
    const rightWrapper = <div class="el-pagination__rightwrapper"></div>;
    let haveRightWrapper = false;

    if (this.small) {
      template.data.class += ' el-pagination--small';
    }

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
      template.children.push(rightWrapper);
    }

    return template;
  },

  components: {
    Prev: {
      render(h) {
        return (
          <button
            class={['btn-prev', { disabled: this.$parent.internalCurrentPage <= 1 }]}
            on-click={ this.$parent.prev }>
            <i class="el-icon el-icon-arrow-left"></i>
          </button>
        );
      }
    },

    Next: {
      render(h) {
        return (
          <button
            class={
              [
                'btn-next',
                { disabled: this.$parent.internalCurrentPage === this.$parent.internalPageCount || this.$parent.internalPageCount === 0 }
              ]
            }
            on-click={ this.$parent.next }>
            <i class="el-icon el-icon-arrow-right"></i>
          </button>
        );
      }
    },

    Sizes: {
      created() {
        if (Array.isArray(this.$parent.pageSizes)) {
          this.$parent.internalPageSize = this.$parent.pageSizes.indexOf(this.$parent.pageSize) > -1
            ? this.$parent.pageSize
            : this.$parent.pageSizes[0];
        }
      },

      render(h) {
        return (
          <span class="el-pagination__sizes">
            <el-select
              size="small"
              value={ this.$parent.internalPageSize }
              on-change={ this.handleChange }
              width={ 110 }>
              {
                this.$parent.pageSizes.map(item =>
                    <el-option
                      value={ item }
                      label={ item + ' ' + $t('el.pagination.pagesize') }>
                    </el-option>
                  )
              }
            </el-select>
          </span>
        );
      },

      components: {
        ElSelect,
        ElOption
      },

      methods: {
        handleChange(val) {
          if (val !== this.$parent.internalPageSize) {
            this.$parent.internalPageSize = val = parseInt(val, 10);
            this.$parent.$emit('size-change', val);
          }
        }
      }
    },

    Jumper: {
      data() {
        return {
          oldValue: null
        };
      },

      methods: {
        handleFocus(event) {
          this.oldValue = event.target.value;
        },

        handleChange({ target }) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(target.value);
          this.$parent.$emit('current-change', this.$parent.internalCurrentPage);
          this.oldValue = null;
        }
      },

      render(h) {
        return (
          <span class="el-pagination__jump">
            { $t('el.pagination.goto') }
            <input
              class="el-pagination__editor"
              type="number"
              min={ 1 }
              max={ this.internalPageCount }
              domProps-value={ this.$parent.internalCurrentPage }
              on-change={ this.handleChange }
              on-focus={ this.handleFocus }
              style={{ width: '30px' }}
              number/>
            { $t('el.pagination.pageClassifier') }
          </span>
        );
      }
    },

    Total: {
      render(h) {
        return (
          typeof this.$parent.total === 'number'
            ? <span class="el-pagination__total">{ $t('el.pagination.total', { total: this.$parent.total }) }</span>
            : ''
        );
      }
    },

    Pager
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {},
        events: {
          'currentchange': 'Pagination: currentchange has been renamed to current-change',
          'sizechange': 'Pagination: sizechange has been renamed to size-change'
        }
      };
    },

    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
      this.$emit('current-change', this.internalCurrentPage);
    },

    prev() {
      const oldPage = this.internalCurrentPage;
      const newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);

      if (this.internalCurrentPage !== oldPage) {
        this.$emit('current-change', this.internalCurrentPage);
      }
    },

    next() {
      const oldPage = this.internalCurrentPage;
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);

      if (this.internalCurrentPage !== oldPage) {
        this.$emit('current-change', this.internalCurrentPage);
      }
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
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.ceil(this.total / this.internalPageSize);
      } else if (typeof this.pageCount === 'number') {
        return this.pageCount;
      }
      return null;
    }
  },

  watch: {
    internalPageCount(newVal) {
      /* istanbul ignore if */
      if (newVal > 0 && this.internalCurrentPage === 0) {
        this.internalCurrentPage = 1;
        this.$emit('current-change', 1);
      } else if (this.internalCurrentPage > newVal) {
        this.internalCurrentPage = newVal;
        this.$emit('current-change', newVal);
      }
    },

    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val;
      }
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = val;
      }
    },

    internalCurrentPage(newVal, oldVal) {
      newVal = parseInt(newVal, 10);

      /* istanbul ignore if */
      if (isNaN(newVal)) {
        newVal = oldVal || 1;
      } else {
        newVal = this.getValidCurrentPage(newVal);
      }

      if (newVal !== undefined) {
        this.$nextTick(() => {
          this.internalCurrentPage = newVal;
        });
      }
    }
  }
};
