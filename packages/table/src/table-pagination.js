import ElPagination from 'element-ui/packages/pagination';
import objectAssign from 'element-ui/src/utils/merge';

export default {
  name: 'ElTablePagination',
  components: {
    ElPagination
  },
  props: {
    store: {
      required: true
    },
    layout: {
      required: true
    }
  },
  render() {
    const { pagination, _data, filteredData } = this.store.states;

    if (!pagination) {
      return null;
    }

    let existDataLength = 0;
    if (filteredData) {
      existDataLength = filteredData.length;
    } else if (_data) {
      existDataLength = _data.length;
    }
    const total = pagination.total || existDataLength;
    if (!(total > 0)) {
      return null;
    }
    const paginationData = {
      props: objectAssign({}, pagination, {
        total: total,
        currentPage: this.store.getMaxCurrentPage(total)
      }),
      on: {
        'size-change': this.onSizeChange,
        'current-change': this.onCurrentChange
      }
    };
    return (
      <el-pagination class="el-table__pagination" {...paginationData}>
      </el-pagination>
    );
  },
  methods: {
    onSizeChange(size) {
      this.store.commit('paginationSizeChange', size);
    },
    onCurrentChange(current) {
      this.store.commit('paginationCurrentChange', current);
    }
  }
};
