import Vue from 'vue';
import Pager from './pager.vue';
import ElSelect from 'packages/select/index.js';
import ElOption from 'packages/option/index.js';

export default {
  name: 'ElPagination',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: {
      type: Number,
      default: 0
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
    const layout = this.$options.layout || this.layout || '';
    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      jumper: <jumper></jumper>,
      pager: <pager currentPage={ this.internalCurrentPage } pageCount={ this.pageCount } on-currentchange={ this.handleCurrentChange }></pager>,
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
                { disabled: this.$parent.internalCurrentPage === this.$parent.pageCount }
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
          this.$parent.internalPageSize = this.$parent.pageSizes.indexOf(this.$parent.pageSize) > -1 ? this.$parent.pageSize : this.$parent.pageSizes[0];
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
                      label={ item + ' 条/页' }>
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
            this.$parent.$emit('sizechange', val);
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

        handleChange(event) {
          const target = event.target;
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(target.value);

          if (target.value !== this.oldValue && Number(target.value) === this.$parent.internalCurrentPage) {
            this.$parent.$emit('currentchange', this.$parent.internalCurrentPage);
          }

          this.oldValue = null;
        }
      },

      render(h) {
        return (
          <span class="el-pagination__jump">
            前往
            <input
              class="el-pagination__editor"
              type="number"
              min={ 1 }
              max={ this.pageCount }
              value={ this.$parent.internalCurrentPage }
              on-change={ this.handleChange }
              on-focus={ this.handleFocus }
              style={{ width: '30px' }}
              number
              lazy/>
            页
          </span>
        );
      }
    },

    Total: {
      render(h) {
        return (
          <span class="el-pagination__total">共 { this.$parent.total } 条</span>
        );
      }
    },

    Pager
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
      this.$emit('currentchange', this.internalCurrentPage);
    },

    prev() {
      const oldPage = this.internalCurrentPage;
      const newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);

      if (this.internalCurrentPage !== oldPage) {
        this.$emit('currentchange', this.internalCurrentPage);
      }
    },

    next() {
      const oldPage = this.internalCurrentPage;
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);

      if (this.internalCurrentPage !== oldPage) {
        this.$emit('currentchange', this.internalCurrentPage);
      }
    },

    first() {
      const oldPage = this.internalCurrentPage;
      const newVal = 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);

      if (this.internalCurrentPage !== oldPage) {
        this.$emit('currentchange', this.internalCurrentPage);
      }
    },

    last() {
      const oldPage = this.internalCurrentPage;
      const newVal = this.pageCount;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);

      if (this.internalCurrentPage !== oldPage) {
        this.$emit('currentchange', this.internalCurrentPage);
      }
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10);

      var resetValue;
      if (value < 1) {
        resetValue = this.pageCount > 0 ? 1 : 0;
      } else if (value > this.pageCount) {
        resetValue = this.pageCount;
      }

      if (resetValue === undefined && isNaN(value)) {
        value = this.pageCount > 0 ? 1 : 0;
      }

      return resetValue === undefined ? value : resetValue;
    }
  },

  computed: {
    pageCount() {
      return Math.ceil(this.total / this.internalPageSize);
    },

    startRecordIndex() {
      const result = (this.internalCurrentPage - 1) * this.internalPageSize + 1;
      return result > 0 ? result : 0;
    },

    endRecordIndex() {
      const result = this.internalCurrentPage * this.internalPageSize;
      return result > this.total ? this.total : result;
    }
  },

  watch: {
    pageCount(newVal) {
      if (newVal > 0 && this.internalCurrentPage === 0) {
        this.internalCurrentPage = 1;
      } else if (this.internalCurrentPage > newVal) {
        this.internalCurrentPage = newVal;
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

      if (isNaN(newVal)) {
        newVal = oldVal || 1;
      } else {
        newVal = this.getValidCurrentPage(newVal);
      }

      if (newVal !== undefined) {
        Vue.nextTick(() => {
          this.internalCurrentPage = newVal;
        });
      }
    }
  }
};
