import ColorPicker from './src/main';

/* istanbul ignore next */
ColorPicker.install = function(Vue) {
  Vue.component(ColorPicker.name, ColorPicker);
};

export default ColorPicker;
