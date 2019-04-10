export default {
  functional: true,

  name: 'ElDivider',

  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator: function(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1;
      }
    },

    contentPosition: {
      type: String,
      default: 'center',
      validator: val => {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  },

  render: function(h, context) {
    let $slots = context.slots();
    return (
      <div class={['el-divider', `el-divider--${context.props.direction}`]}>
        {
          $slots.default && context.props.direction !== 'vertical'
            ? <div class={['el-divider__text', `is-${context.props.contentPosition}`]}>{$slots.default}</div>
            : []
        }
      </div>
    );
  }
};
