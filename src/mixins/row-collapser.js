import debounce from '../utils/debounce';
export default {
  data() {
    return {
      collapseIndex: -1,
      resizeHandler: null,
      listNS: 'list',
      showMoreWidth: 23,
      margin: 0,
      collapseWidth: 0,
      showMoreLabelVisible: false
    };
  },
  computed: {
    isCollapsed() {
      return this.collapseIndex !== -1;
    },
    collapsedList() {
      return this.isCollapsed
        ? this[this.listNS].slice(this.collapseIndex)
        : [];
    },
    showMoreStyle() {
      return {
        left: this.collapseWidth + 'px',
        opacity: this.showMoreLabelVisible ? 1 : 0
      };
    }
  },
  methods: {
    handleCollapse(skipShowMore) {
      const list = this.$el.querySelector('.row-collapser__list');
      if (list) {
        const width = list.offsetWidth;
        const children = this.$el.querySelectorAll('.row-collapser__list .row-collapser__item');
        let collapseIndex = -1;
        children.forEach((child, index) => {
          const offsetWidth = child.offsetLeft + child.offsetWidth + this.margin;
          if (offsetWidth > width - this.showMoreWidth) {
            if (collapseIndex === -1) {
              collapseIndex = index;
            }
            child.style.visibility = 'hidden';
          } else {
            child.style.visibility = '';
            this.collapseWidth = offsetWidth;
          }
        });
        this.collapseIndex = collapseIndex;
        if (!skipShowMore) {
          this.showMoreLabelVisible = this.isCollapsed;
        }
      }
    }
  },
  mounted() {
    const handler = debounce(this.handleCollapse.bind(this));
    this.resizeHandler = handler;
    window.addEventListener('resize', handler);
    this.handleCollapse();
    this.$watch(this.listNS, () => {
      this.showMoreLabelVisible = false;
      this.handleCollapse(true);
      handler();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
};
