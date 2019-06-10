import { arrayFind } from 'element-ui/src/utils/util';
import { getRowIdentity } from '../util';

export default {
  data() {
    return {
      states: {
        // 不可响应的，设置 currentRowKey 时，data 不一定存在，也许无法算出正确的 currentRow
        // 把该值缓存一下，当用户点击修改 currentRow 时，把该值重置为 null
        _currentRowKey: null,
        currentRow: null
      }
    };
  },

  methods: {
    setCurrentRowKey(key) {
      this.assertRowKey();
      this.states._currentRowKey = key;
      this.setCurrentRowByKey(key);
    },

    restoreCurrentRowKey() {
      this.states._currentRowKey = null;
    },

    setCurrentRowByKey(key) {
      const { states } = this;
      const { data = [], rowKey } = states;
      let currentRow = null;
      if (rowKey) {
        currentRow = arrayFind(data, item => getRowIdentity(item, rowKey) === key);
      }
      states.currentRow = currentRow;
    },

    updateCurrentRow(currentRow) {
      const { states, table } = this;
      const { rowKey, _currentRowKey } = states;
      // data 为 null 时，结构时的默认值会被忽略
      const data = states.data || [];
      const oldCurrentRow = states.currentRow;

      if (currentRow) {
        this.restoreCurrentRowKey();
        states.currentRow = currentRow;
        if (oldCurrentRow !== currentRow) {
          this.table.$emit('current-change', currentRow, oldCurrentRow);
        }
      } else {
        // 当 currentRow 不在 data 中时尝试更新数据
        if (data.indexOf(oldCurrentRow) === -1 && oldCurrentRow) {
          this.restoreCurrentRowKey();
          if (rowKey) {
            const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
            this.setCurrentRowByKey(currentRowKey);
          } else {
            states.currentRow = null;
          }
          if (states.currentRow !== oldCurrentRow) {
            table.$emit('current-change', null, oldCurrentRow);
          }
        } else if (_currentRowKey) {
          this.setCurrentRowByKey(_currentRowKey);
        }
      }
    }
  }
};
