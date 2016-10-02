export default {
  name: 'ElButton',

  functional: true,

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },

  render(h, { props, slots, data }) {
    return (
      <button
        disabled={ props.disabled }
        type={ props.nativeType }
        class={[
          'el-button',
          props.type ? 'el-button-' + props.type : '',
          props.size ? 'el-button-' + props.size : '',
          {
            'is-disabled': props.disabled,
            'is-loading': props.loading,
            'is-plain': props.plain
          }
        ]}
        { ...data }
        { ...{ on: data.nativeOn } }>
        {
          [
            props.loading
              ? <i class="el-icon-loading"></i>
              : {},
            props.icon && !props.loading
              ? <i class={ 'el-icon-' + props.icon }></i>
              : {}
          ]
        }
        { slots().default }
      </button>
    );
  }
};
