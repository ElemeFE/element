<template>
  <div class="el-pagination"></div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import Pager from './pager.vue';
  import ElSelect from 'packages/select/index.js';
  import ElOption from 'packages/option/index.js';

  var TEMPLATE_MAP = {
    prev: '<span is="prev"></span>',
    jumper: '<span is="jumper"></span>',
    pager: '<span is="pager" :current-page="currentPage" :page-count="pageCount" @current-change="handleCurrentChange"></span>',
    next: '<span is="next"></span>',
    sizes: '<span is="sizes"></span>',
    slot: '<slot></slot>',
    total: '<span is="total"></span>'
  };

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
        default: 'prev, pager, next, jumper, slot, ->, total'
      },

      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 40, 50, 100];
        }
      }
    },

    components: {
      ElSelect,
      ElOption,

      Prev: {
        template: `<button class="btn-prev" @click="$parent.prev()" :class="{ disabled: $parent.currentPage <= 1 }">
          <i class="el-icon el-icon-arrow-left"></i>
        </button>`
      },

      Next: {
        template: `<button class="btn-next" @click="$parent.next()" :class="{ disabled: $parent.currentPage === $parent.pageCount }">
          <i class="el-icon el-icon-arrow-right"></i>
        </button>`
      },

      Sizes: {
        template: `<span class="el-pagination__sizes">
          <el-select size="small" :value="$parent.pageSize" @change="handleChange" :width="110">
            <el-option v-for="item in $parent.pageSizes" :value="item" :label="item + ' 条/页'"></el-option>
          </el-select>
        </span>`,

        methods: {
          handleChange(val) {
            if (val !== this.$parent.pageSize) {
              this.$parent.pageSize = val = parseInt(val, 10);
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

          handleChange(event) {
            const target = event.target;
            if (target.value !== this.oldValue && Number(target.value) === this.$parent.currentPage) {
              this.$parent.$emit('current-change', this.$parent.currentPage);
            }

            this.oldValue = null;
          }
        },

        template: `<span class="el-pagination__jump">前往<input class="el-pagination__editor"
          type="number"
          :min="1"
          :max="pageCount"
          v-model="$parent.currentPage"
          @change="handleChange($event)"
          @focus="handleFocus($event)"
          style="width: 30px;"
          number
          lazy />页</span>`
      },

      Total: {
        template: '<span class="el-pagination__total">共 {{$parent.total}} 条</span>'
      },

      Pager
    },

    methods: {
      handleCurrentChange(val) {
        this.currentPage = this.getValidCurrentPage(val);
        this.$emit('current-change', this.currentPage);
      },

      prev() {
        const oldPage = this.currentPage;
        const newVal = this.currentPage - 1;
        this.currentPage = this.getValidCurrentPage(newVal);

        if (this.currentPage !== oldPage) {
          this.$emit('current-change', this.currentPage);
        }
      },

      next() {
        const oldPage = this.currentPage;
        const newVal = this.currentPage + 1;
        this.currentPage = this.getValidCurrentPage(newVal);

        if (this.currentPage !== oldPage) {
          this.$emit('current-change', this.currentPage);
        }
      },

      first() {
        const oldPage = this.currentPage;
        const newVal = 1;
        this.currentPage = this.getValidCurrentPage(newVal);

        if (this.currentPage !== oldPage) {
          this.$emit('current-change', this.currentPage);
        }
      },

      last() {
        const oldPage = this.currentPage;
        const newVal = this.pageCount;
        this.currentPage = this.getValidCurrentPage(newVal);

        if (this.currentPage !== oldPage) {
          this.$emit('current-change', this.currentPage);
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

    created() {
      this.$options._linkerCachable = false;
      let template = `<div class="el-pagination ${this.small ? 'el-pagination--small' : ''}" >`;
      const layout = this.$options.layout || this.layout || '';

      const components = layout.split(',').map((item) => item.trim());

      let haveRightWrapper = false;

      components.forEach((component) => {
        if (component === '->') {
          haveRightWrapper = true;
          template += '<div class="el-pagination__rightwrapper">';
        } else {
          if (!TEMPLATE_MAP[component]) {
            console.warn('layout component not resolved:' + component);
          }
          template += TEMPLATE_MAP[component] || '';
        }
      });

      if (haveRightWrapper) {
        template += '</div>';
      }
      template += '</div>';

      this.$options.template = template;
    },

    computed: {
      pageCount() {
        return Math.ceil(this.total / this.pageSize);
      },

      startRecordIndex() {
        const result = (this.currentPage - 1) * this.pageSize + 1;
        return result > 0 ? result : 0;
      },

      endRecordIndex() {
        const result = this.currentPage * this.pageSize;
        return result > this.total ? this.total : result;
      }
    },

    watch: {
      pageCount(newVal) {
        if (newVal > 0 && this.currentPage === 0) {
          this.currentPage = 1;
        } else if (this.currentPage > newVal) {
          this.currentPage = newVal;
        }
      },

      currentPage(newVal, oldVal) {
        newVal = parseInt(newVal, 10);

        if (isNaN(newVal)) {
          newVal = oldVal || 1;
        } else {
          newVal = this.getValidCurrentPage(newVal);
        }

        if (newVal !== undefined) {
          Vue.nextTick(() => {
            this.currentPage = newVal;
          });
        }
      }
    },

    ready() {
      this.currentPage = this.getValidCurrentPage(this.currentPage);
    }
  };
</script>
