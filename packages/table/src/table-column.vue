<template>
  <div><slot></slot></div>
</template>

<script type="text/babel">
  import ElCheckbox from 'packages/checkbox/index.js';
  import ElTag from 'packages/tag/index.js';

  let columnIdSeed = 1;

  const defaults = {
    default: {
      direction: ''
    },
    selection: {
      width: 48,
      minWidth: 48,
      realWidth: 48,
      direction: ''
    },
    index: {
      width: 48,
      minWidth: 48,
      realWidth: 48,
      direction: ''
    },
    filter: {
      headerTemplate: 'filter header',
      direction: ''
    }
  };

  const forced = {
    selection: {
      // TODO :value.sync="$parent.$parent.selection"
      headerTemplate: '<div><el-checkbox @click="toggleAllSelection($event)" :value.sync="allSelected"></el-checkbox></div>',
      template: '<el-checkbox :value.sync="row.$selected"></el-checkbox>',
      sortable: false,
      resizable: false
    },
    index: {
      headerTemplate: '<div>#</div>',
      template: '{{ $parent.$index + 1 }}',
      sortable: false
    },
    filter: {
      headerTemplate: '<div>#</div>',
      template: '<el-tag type="primary" style="height: 16px; line-height: 16px; min-width: 40px; text-align: center">{{ row[column.property] }}</el-tag>',
      resizable: false
    }
  };

  const getDefaultColumn = function(type, options) {
    const column = {};

    Object.assign(column, defaults[type || 'default']);

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        const value = options[name];
        if (typeof value !== 'undefined') {
          column[name] = value;
        }
      }
    }

    return column;
  };

  import Vue from 'vue';

  export default {
    name: 'el-table-column',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      label: String,
      property: String,
      width: {},
      minWidth: {},
      template: String,
      sortable: {
        type: Boolean,
        default: false
      },
      resizable: {
        type: Boolean,
        default: true
      },
      formatter: Function
    },

    data() {
      return {
        isChildColumn: false,
        columns: []
      };
    },

    components: {
      ElCheckbox,
      ElTag
    },

    beforeCompile() {
      let columnId = this.columnId = (this.$parent.gridId || (this.$parent.columnId + '_')) + 'column_' + columnIdSeed++;

      let parent = this.$parent;
      if (!parent.gridId) {
        this.isChildColumn = true;
      }

      let type = this.type;

      let width = this.width;
      if (width !== undefined) {
        width = parseInt(width, 10);
        if (isNaN(width)) {
          width = null;
        }
      }

      let minWidth = this.minWidth;
      if (minWidth !== undefined) {
        minWidth = parseInt(minWidth, 10);
        if (isNaN(minWidth)) {
          minWidth = 80;
        }
      } else {
        minWidth = 80;
      }

      let options = this.$options;
      let tagName = options.el.tagName.toLowerCase();
      let isColumnGroup = false;
      let template = this.template;

      if (options._content) {
        let content = options._content.innerHTML;
        if (content.indexOf(`</${tagName}>`) === -1) {
          options._content = null;
          template = content;
        } else {
          template = null;
          isColumnGroup = true;
        }
      }

      let property = this.property;
      if ((!template || /^\s*$/.test(template)) && property) {
        template = `{{ $getPropertyText(row, '${property}', '${columnId}') }}`;
      }

      let column = getDefaultColumn(type, {
        id: columnId,
        label: this.label,
        property: this.property,
        type,
        template,
        minWidth,
        width,
        isColumnGroup,
        realWidth: width || minWidth,
        sortable: this.sortable,
        resizable: this.resizable,
        formatter: this.formatter
      });

      Object.assign(column, forced[type] || {});

      if (column.headerTemplate) {
        Vue.partial('headerTemplate:' + column.id, column.headerTemplate);
      }

      if (column.template) {
//        Vue.partial('template:' + column.id, `<div class="cell">${column.template}</div>`);
        Vue.partial('template:' + column.id, `<el-tooltip @created="handleCreate" :effect="effect" placement="top" :disabled="tooltipDisabled"><div class="cell">${column.template}</div><span slot="content">${column.template}</span></el-tooltip>`);
      }

      this.columnConfig = column;
    },

    detached() {
      if (!this.$parent) {
        return;
      }
      let columns = this.$parent.columns;
      if (columns) {
        let columnId = this.columnId;
        for (let i = 0, j = columns.length; i < j; i++) {
          let column = columns[i];

          if (column.id === columnId) {
            columns.splice(i, 1);
            break;
          }
        }
      }

      if (this.isChildColumn) {
        if (this.$parent.$parent.$ready) {
          this.$parent.$parent.debouncedReRender();
        }
      } else {
        if (this.$parent.$ready) {
          this.$parent.debouncedReRender();
        }
      }
    },

    watch: {
      label(newVal) {
        if (this.columnConfig) {
          this.columnConfig.label = newVal;
        }
      },

      property(newVal) {
        if (this.columnConfig) {
          this.columnConfig.property = newVal;
        }
      }
    },

    ready() {
      let parent = this.$parent;
      let columnConfig = this.columnConfig;
      let columnIndex;

      if (!this.isChildColumn) {
        columnIndex = [].indexOf.call(parent.$els.hiddenColumns.children, this.$el);
      } else {
        columnIndex = [].indexOf.call(parent.$el.children, this.$el);
      }

      parent.columns.splice(columnIndex, 0, columnConfig);

      if (this.isChildColumn) {
        parent.columnConfig.columns = parent.columns;

        if (parent.$parent.$ready) {
          parent.$parent.debouncedReRender();
        }
      } else {
        if (parent.$ready) {
          parent.debouncedReRender();
        }
      }
    }
  };
</script>
