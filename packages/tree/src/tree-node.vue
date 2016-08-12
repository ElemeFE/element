<template>
  <div class="el-tree-node"
     :class="{ expanded: childrenRendered && expanded }">
    <div class="el-tree-node__content" :style="{ 'padding-left': node.level * 16 + 'px' }"
         @click="handleExpandIconClick">
      <span class="el-tree-node__expand-icon"
        :class="{ 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded }"
        ></span>
      <el-checkbox v-if="showCheckbox" :indeterminate="node.indeterminate" v-model="node.checked" :true-label="true" :false-label="false" @on-change="handleCheckChange"></el-checkbox>
      <!--<span class="el-tree-node__icon {{ node.icon }} {{ node.loading ? 'el-icon-loading' : '' }}" v-if="node.icon"></span>-->
      <span class="el-tree-node__label">{{ node.label }}</span>
    </div>
    <collapse-transition>
      <div class="el-tree-node__children"
        v-if="childrenRendered"
        v-show="expanded">
        <el-tree-node v-for="child in node.children" :node="child"></el-tree-node>
      </div>
    </collapse-transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import CollapseTransition from './transition';

  export default {
    name: 'el-tree-node',

    props: {
      node: {
        default() {
          return {};
        }
      }
    },

    components: {
      CollapseTransition
    },

    data() {
      return {
        $tree: null,
        expanded: false,
        childrenRendered: false,
        showCheckbox: false
      };
    },

    methods: {
      handleExpandIconClick(event) {
        let target = event.target;
        if (target.tagName.toUpperCase() !== 'DIV' &&
                target.parentNode.nodeName.toUpperCase() !== 'DIV' ||
                target.nodeName.toUpperCase() === 'LABLE') return;
        if (this.expanded) {
          this.node.collapse();
          this.expanded = false;
        } else {
          this.node.expand(() => {
            this.expanded = true;
            this.childrenRendered = true;
          });
        }
      },

      handleCheckChange(checked) {
        this.node.setChecked(checked, true);
      }
    },

    created() {
      var parent = this.$parent;

      if (parent.$isTree) {
        this.$tree = parent;
      } else {
        this.$tree = parent.$tree;
      }

      const tree = this.$tree;

      if (!tree) {
        console.warn('Can not find node\'s tree.');
      }

      this.showCheckbox = tree.showCheckbox;
    }
  };
</script>
