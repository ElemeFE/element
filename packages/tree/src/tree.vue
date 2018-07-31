<script>
  import BasicTree from './basic/basic-tree';
  import { findNearestComponent } from './model/util';
  import { addClass, removeClass } from 'element-ui/src/utils/dom';

  export default {
    name: 'ElTree',

    mixins: [BasicTree],

    created() {
      let dragState = this.dragState;
      this.$on('tree-node-drag-start', (event, treeNode) => {
        if (typeof this.allowDrag === 'function' && !this.allowDrag(treeNode.node)) {
          event.preventDefault();
          return false;
        }
        event.dataTransfer.effectAllowed = 'move';

        // wrap in try catch to address IE's error when first param is 'text/plain'
        try {
          // setData is required for draggable to work in FireFox
          // the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
          event.dataTransfer.setData('text/plain', '');
        } catch (e) {}
        dragState.draggingNode = treeNode;
        this.$emit('node-drag-start', treeNode.node, event);
      });

      this.$on('tree-node-drag-over', (event, treeNode) => {
        const dropNode = findNearestComponent(event.target, 'ElTreeNode');
        const oldDropNode = dragState.dropNode;
        if (oldDropNode && oldDropNode !== dropNode) {
          removeClass(oldDropNode.$el, 'is-drop-inner');
        }
        const draggingNode = dragState.draggingNode;
        if (!draggingNode || !dropNode) return;

        let dropPrev = true;
        let dropInner = true;
        let dropNext = true;
        let userAllowDropInner = true;
        if (typeof this.allowDrop === 'function') {
          dropPrev = this.allowDrop(draggingNode.node, dropNode.node, 'prev');
          userAllowDropInner = dropInner = this.allowDrop(draggingNode.node, dropNode.node, 'inner');
          dropNext = this.allowDrop(draggingNode.node, dropNode.node, 'next');
        }
        event.dataTransfer.dropEffect = dropInner ? 'move' : 'none';
        if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
          if (oldDropNode) {
            this.$emit('node-drag-leave', draggingNode.node, oldDropNode.node, event);
          }
          this.$emit('node-drag-enter', draggingNode.node, dropNode.node, event);
        }

        if (dropPrev || dropInner || dropNext) {
          dragState.dropNode = dropNode;
        }

        if (dropNode.node.nextSibling === draggingNode.node) {
          dropNext = false;
        }
        if (dropNode.node.previousSibling === draggingNode.node) {
          dropPrev = false;
        }
        if (dropNode.node.contains(draggingNode.node, false)) {
          dropInner = false;
        }
        if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
          dropPrev = false;
          dropInner = false;
          dropNext = false;
        }

        const targetPosition = dropNode.$el.getBoundingClientRect();
        const treePosition = this.$el.getBoundingClientRect();

        let dropType;
        const prevPercent = dropPrev ? (dropInner ? 0.25 : (dropNext ? 0.45 : 1)) : -1;
        const nextPercent = dropNext ? (dropInner ? 0.75 : (dropPrev ? 0.55 : 0)) : 1;

        let indicatorTop = -9999;
        const distance = event.clientY - targetPosition.top;
        if (distance < targetPosition.height * prevPercent) {
          dropType = 'before';
        } else if (distance > targetPosition.height * nextPercent) {
          dropType = 'after';
        } else if (dropInner) {
          dropType = 'inner';
        } else {
          dropType = 'none';
        }

        const dropIndicator = this.$refs.dropIndicator;
        if (dropType === 'before') {
          indicatorTop = targetPosition.top - treePosition.top;
        } else if (dropType === 'after') {
          indicatorTop = targetPosition.bottom - treePosition.top;
        }
        dropIndicator.style.top = indicatorTop + 'px';
        dropIndicator.style.left = (targetPosition.right - treePosition.left) + 'px';

        if (dropType === 'inner') {
          addClass(dropNode.$el, 'is-drop-inner');
        } else {
          removeClass(dropNode.$el, 'is-drop-inner');
        }

        dragState.showDropIndicator = dropType === 'before' || dropType === 'after';
        dragState.allowDrop = dragState.showDropIndicator || userAllowDropInner;
        dragState.dropType = dropType;
        this.$emit('node-drag-over', draggingNode.node, dropNode.node, event);
      });

      this.$on('tree-node-drag-end', (event) => {
        const { draggingNode, dropType, dropNode } = dragState;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';

        if (draggingNode && dropNode) {
          const data = draggingNode.node.data;
          if (dropType === 'before') {
            draggingNode.node.remove();
            dropNode.node.parent.insertBefore({ data }, dropNode.node);
          } else if (dropType === 'after') {
            draggingNode.node.remove();
            dropNode.node.parent.insertAfter({ data }, dropNode.node);
          } else if (dropType === 'inner') {
            draggingNode.node.remove();
            dropNode.node.insertChild({ data });
          }
          removeClass(dropNode.$el, 'is-drop-inner');

          this.$emit('node-drag-end', draggingNode.node, dropNode.node, dropType, event);
          if (dropType !== 'none') {
            this.$emit('node-drop', draggingNode.node, dropNode.node, dropType, event);
          }
        }
        if (draggingNode && !dropNode) {
          this.$emit('node-drag-end', draggingNode.node, null, dropType, event);
        }

        dragState.showDropIndicator = false;
        dragState.draggingNode = null;
        dragState.dropNode = null;
        dragState.allowDrop = true;
      });
    }
  };
</script>
