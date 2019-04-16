export default {
  name: 'ElMarker',

  props: {
    mark: {
      type: String | Object
    }
  },
  render(h) {
    if (typeof this.mark === 'string') {
      return h('span', { class: 'el-slider__marks-text' }, [ this.mark ]);
    }

    if (typeof this.mark === 'object') {
      return h('div',
        {
          class: 'el-slider__marks-text',
          style: this.mark.style
        },
        [ this.mark.label ]
      );
    }
  }
};
