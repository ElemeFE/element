<script>
import Row from 'element-ui/packages/row';
import Col from 'element-ui/packages/col';
import TextEllipsis from './text-ellipsis';

export default {
  name: 'ElDataMapper',
  components: {
    'el-row': Row,
    'el-col': Col,
    TextEllipsis
  },
  props: {
    // 数据
    data: {
      type: Object,
      default: () => {}
    },
    // 设置列
    // [{
    //   prop: 'prop',
    //   label: 'label'
    // }]
    columns: {
      type: Array,
      default: () => []
    },
    // 占位符
    placeholder: {
      type: String,
      default: ''
    },
    contentRows: {
      type: Number,
      default: 1
    },
    // 子元素的排列方向
    inline: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: [String, Number],
      default: ''
    },
    labelPosition: {
      type: String,
      default: 'right'
    }
  },
  render(h) {
    const contentRows = this.renderRow(h, this.columns);
    return h(
      'div',
      {
        class: 'el-data-mapper'
      },
      [contentRows]
    );
  },
  methods: {
    // 渲染contentRows
    renderRow(h, columns) {
      const cols = this.renderCol(h, columns);
      return h('el-row', cols);
    },
    // 渲染列
    renderCol(h, columns = []) {
      return columns.map((col, index) => {
        // 处理object path
        const isPath = col.prop.indexOf('.') >= 0;
        let propData = isPath
          ? col.prop.split('.').reduce((pre, next) => pre[next] || {}, this.data)
          : this.data[col.prop];

        // 处理内容
        typeof propData === 'object' && (propData = this.placeholder);
        const VALUE = col.formatter
          ? col.formatter(this.data, col, index)
          : propData || this.placeholder;

        const title = h(
          'div',
          {
            class: ['el-data-mapper-col-title', `el-data-mapper-col-title-${this.labelPosition}`],
            style: this.labelWidth !== undefined ? {
              width: (/^[0-9]$/).test(this.labelWidth) ? this.labelWidth + 'px' : this.labelWidth
            } : {}
          },
          [col.label && `${col.label}：`]
        );
        return h(
          'el-col',
          {
            class: {
              'el-data-mapper-col': this.inline,
              'el-data-mapper-col-vertical': !this.inline,
              'el-data-mapper-col-top': this.labelPosition === 'top'
            },
            props: this.inline ? {
              xs: 24,
              sm: 12,
              md: 12,
              lg: 8,
              xl: 8
            } : {}
          },
          [title, this.renderContent(h, VALUE)]
        );
      });
    },
    renderContent(h, content) {
      const textEllipsis = h('text-ellipsis', {
        props: {
          content,
          contentRows: this.contentRows
        }
      });
      return h(
        'div',
        {
          class: 'el-data-mapper-col-content'
        },
        [textEllipsis]
      );
    }
  }
};
</script>
