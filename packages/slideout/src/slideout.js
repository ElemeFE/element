const Slideout = require('slideout');

export default {
  name: 'ElSlideout',
  data() {
    return {
      slideout: null
    };
  },
  props: {
    panel: { default: '#panel' },
    menu: { default: '#menu' },
    padding: { default: 256 },
    tolerance: { default: 70 },
    touch: { default: true },
    easing: { default: 'ease' },
    side: { default: 'left' },
    duration: { default: 300 },
    toggleSelectors: {
      default: function() {
        return [];
      }
    }
  },
  mounted: function() {
    this.slideout = new Slideout({
      'panel': document.querySelector(this.panel),
      'menu': document.querySelector(this.menu),
      'padding': this.padding,
      'tolerance': this.tolerance,
      'touch': this.touch,
      'easing': this.easing,
      'side': this.side,
      'duration': this.duration
    });
    this.toggleSelectors.forEach(selector => {
      document.querySelector(selector).addEventListener('click', () => {
        this.slideout.toggle();
      });
    });
    const events = ['beforeclose', 'close', 'beforeopen', 'open', 'translatestart', 'translate', 'translateend'];
    events.forEach(event => {
      this.slideout.on(event, (data) => {
        this.$emit('on-' + event, data);
      });
      this.slideout.once(event, (data) => {
        this.$emit('once-' + event, data);
      });
    });
  },
  render: function(h) {
    return h(
      'div',
      this.$slots.default
    );
  }
};
