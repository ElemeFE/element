<script type="text/babel">
/**
 * 获取尺寸值
 * @param val
 */
export function getUnitVal(val) {
  if (val !== undefined) {
    if (typeof val === 'number') {
      val = `${val}px`;
    }
  }
  return val;
}
/**
 * 计算尺寸样式值(compute size)
 * @note 如果有必要，抽离进utils
 * @param styles
 * @param compName
 * @param val
 */
function genSize(styles = {}, compName, val) {
  if (val !== undefined) {
    val = getUnitVal(val);
    styles[`--${compName}-size`] = val;
  }
}

const compName = 'el-frame';

export default {
  name: 'ElFrame',

  props: {
    transition: {
      type: Boolean,
      default: false
    },
    fillHeader: {
      type: String,
      default: 'both'
    },
    fillFooter: {
      type: String,
      default: 'both'
    },
    headerSize: {
      type: [String, Number],
      default: 50
    },
    footerSize: {
      type: [String, Number],
      default: 50
    },
    leftSize: {
      type: [String, Number],
      default: 100
    },
    rightSize: {
      type: [String, Number],
      default: 100
    },
    headerIndex: {
      type: Number,
      default: 1
    },
    footerIndex: {
      type: Number,
      default: 1
    },
    leftIndex: {
      type: Number,
      default: 1
    },
    rightIndex: {
      type: Number,
      default: 1
    },
    headerFloat: {
      type: Boolean,
      default: false
    },
    footerFloat: {
      type: Boolean,
      default: false
    },
    leftFloat: {
      type: Boolean,
      default: false
    },
    rightFloat: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      firstRender: true,
      isHeader: false,
      isFooter: false,
      isLeft: false,
      isRight: false
    };
  },

  computed: {
    classes() {
      const {
        fillHeader, fillFooter, isHeader, isFooter, isLeft, isRight,
        headerFloat, footerFloat, leftFloat, rightFloat, transition, firstRender
      } = this;
      console.log(firstRender);
      return {
        'el-frame--with-header': isHeader,
        'el-frame--with-footer': isFooter,
        'el-frame--with-left': isLeft,
        'el-frame--with-right': isRight,
        'el-frame--float-header': headerFloat,
        'el-frame--float-footer': footerFloat,
        'el-frame--float-left': leftFloat,
        'el-frame--float-right': rightFloat,
        'el-frame--transition': !firstRender && transition,
        [`el-frame--fill-header-${fillHeader}`]: true,
        [`el-frame--fill-footer-${fillFooter}`]: true
      };
    },

    styles() {
      const {
        headerSize, footerSize, leftSize, rightSize
      } = this;

      const styles = {};

      genSize(styles, `${compName}-header`, headerSize);
      genSize(styles, `${compName}-footer`, footerSize);
      genSize(styles, `${compName}-left`, leftSize);
      genSize(styles, `${compName}-right`, rightSize);

      return styles;
    }
  },

  methods: {
    /**
	   * @return {undefined}
	   */
    RHeader(h) {
      const result = this.isHeader
        ? h('div', {staticClass: `${compName}-header`}, [this.$slots.header])
        : undefined;

      return this.transition
        ? h('transition', {props: {name: 'el-frame-transition-header'}}, [result])
        : result;
    },
    /**
	   * @return {undefined}
	   */
    RFooter(h) {
      const result = this.isFooter ? h('div', {staticClass: `${compName}-footer`}, [this.$slots.footer]) : undefined;
      return this.transition ? h('transition', {props: {name: 'el-frame-transition-footer'}}, [result]) : result;
    },
    /**
     * @return {undefined}
     */
    RLeft(h) {
      const result = this.isLeft ? h('div', {staticClass: `${compName}-left`}, [this.$slots.left]) : undefined;
      return this.transition ? h('transition', {props: {name: 'el-frame-transition-left'}}, [result]) : result;
    },
    /**
     * @return {undefined}
     */
    RRight(h) {
      const result = this.isRight ? h('div', {staticClass: `${compName}-right`}, [this.$slots.right]) : undefined;
      return this.transition ? h('transition', {props: {name: 'el-frame-transition-right'}}, [result]) : result;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.firstRender = false;
    });
  },

  render(h) {
    const {$slots, styles, classes, RHeader, RFooter, RLeft, RRight} = this;

    this.isHeader = $slots.header !== undefined;
    this.isFooter = $slots.footer !== undefined;
    this.isLeft = $slots.left !== undefined;
    this.isRight = $slots.right !== undefined;

    return h('div', {
      staticClass: compName,
      class: classes,
      style: styles
    }, [
      h('section', {
        staticClass: `${compName}-main`
      }, [
        $slots.default
      ]),
      RHeader(h),
      RLeft(h),
      RRight(h),
      RFooter(h)
    ]);
  }
};
</script>
