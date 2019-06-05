import { arrayFind } from 'element-ui/src/utils/util';
import { getRowIdentity } from '../util';

export default {
  data() {
    return {
      states: {
        current: null
      }
    };
  },

  methods: {
    setCurrentRowKey(key) {
      this.assertRowKey();

      const { states } = this;
      const { data = [], rowKey } = states;
      const currentRow = arrayFind(data, item => getRowIdentity(item, rowKey) === key);
      states.currentRow = currentRow ? currentRow : null;
    },

    updateCurrentRow() {
      const { states, table } = this;
      const { rowKey } = states;
      // data 为 null 时，结构时的默认值会被忽略
      const data = states.data || [];
      const oldCurrentRow = states.currentRow;

      // 当 currentRow 不在 data 中时尝试更新数据
      if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
        let newCurrentRow = null;
        if (rowKey) {
          newCurrentRow = arrayFind(data, item => {
            return getRowIdentity(item, rowKey) === getRowIdentity(oldCurrentRow, rowKey);
          });
        }
        states.currentRow = newCurrentRow;
        if (newCurrentRow !== oldCurrentRow) {
          table.$emit('current-change', null, oldCurrentRow);
        }
      }
    }
  }
};
