<style>
  .leaf {
    width: 20px;
    background: #ddd;
  }

  .folder {
    width: 20px;
    background: #888;
  }
</style>

<script>
  import Vue from 'vue';

  var data = [{
    label: 'bb',
    children: [{
      label: 'b1'
    }]
  }, {
    label: 'cc',
    children: [{
      label: 'cc1'
    }, {
      label: 'cc2'
    }]
  }];

  var regions = [{
    'name': 'region1'
  }, {
    'name': 'region2'
  }];

  var count = 1;

  var props = {
    label: 'name',
    children: 'zones',
    icon(data, node) {
      if (node.isLeaf) {
        return 'el-icon-close';
      }
      return 'el-icon-search';
    }
  };

  var defaultProps = {
    children: 'children',
    label: 'label'
  };

  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes(true));
      },

      loadNode(node, resolve) {
        console.log(node);
        if (node.level === -1) {
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
        }
        var hasChild = Math.random() > 0.5;
        if (node.level > 4) return resolve([]);

        setTimeout(function() {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + count++
            }, {
              name: 'zone' + count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    },

    data() {
      return {
        data,
        regions,
        defaultProps,
        props
      };
    }
  };
</script>

## Basic

<el-tree :data="data" :props="defaultProps"></el-tree>

## Have Checkbox

<el-tree :data="regions" :props="props" :load="loadNode" lazy show-checkbox></el-tree>
