export default {
  name: 'ElIcon',

  functional: true,

  props: {
    name: String
  },

  render(h, { props, data }) {
    return (
      <i
        class={ 'el-icon' + props.name }
        { ...data }
        { ...{ on: data.nativeOn } }>
      </i>
    );
  }
};
