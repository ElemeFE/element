import DataMapper from './src/main';

/* istanbul ignore next */
DataMapper.install = function(Vue) {
  Vue.component(DataMapper.name, DataMapper);
};

export default DataMapper;
