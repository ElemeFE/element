<template>
<div id="app">
  <el-tree 
    ref="tree"
    :expand-on-click-node="false"
    :props="props1"
    :load="loadNode1"
    draggable
    lazy="" show-checkbox>
  </el-tree>
  <div>
    <el-button @click="showNodeInfo">Show current node</el-button>
    <el-button @click="appendFolder">Appent folder to current</el-button>
    <el-button @click="appendFile">Appent file to current</el-button>
  </div>
  <div>
    <el-button @click="closeNode">Close current</el-button>
    <el-button @click="deleteNode">Delete current</el-button>
  </div>
  
  <div style="width:50%; display:inline-block;">
        <textarea  style="height:300px; width:100%;">
        {{data4}}
        </textarea>
  </div>  
</div></template>
<script>
  export default {
    data() {
      return {
        props1: {
          label: 'name',
          isLeaf: 'leaf'
        },
        fileIdx: 2,
        folderIdx: 0,
        data4: ''
      };
    },
    methods: {
    showNodeInfo() {
        const node = this.$refs.tree.store.getCurrentNode()
         if (node) {
           console.log(node)
           let childNodes = node.childNodes
           let data =  (node.data) ? node.data : null
           let NchildNodes =  []
           if (childNodes) {
            for (let i =0; i < childNodes.length; i++) {
              NchildNodes.push(childNodes[i].data.name)
            }
           }
           let parent = node.parent ? node.parent.label : null
           this.data4 = {
             node: {
              parent: parent,
              IsLeaf: node.isLeaf,
              loaded: node.loaded,
              childNodes: NchildNodes,
              data: data
             }
           }
         } else {
            this.data4 = 'No node selected!'
         }
      },
      appendFolder() {
         const parent = this.$refs.tree.store.getCurrentNode()
         if (parent) {
           ++this.folderIdx
           let name = 'folder' + this.folderIdx
           this.$refs.tree.append({ name: name }, parent )
         }
      },
      appendFile() {
         const parent = this.$refs.tree.store.getCurrentNode()
         if (parent) {
           ++this.fileIdx
           let name = 'file' + this.fileIdx
           this.$refs.tree.append({ name: name, leaf: true }, parent )
         }
      },
      closeNode() {
         const node = this.$refs.tree.store.getCurrentNode()
         if (node) {
           node.close()
         }
      },
      deleteNode() {
         const node = this.$refs.tree.store.getCurrentNode()
         if (node) {
           node.remove()
         }
      },
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'ROOT' }]);
        }
          setTimeout(() => {
          var data  
          if (node.level > 1) {
            if (node.label === 'folder0') 
              data = [{
                name: 'file2',
                leaf: true
              }];
            else
              data = []
          } else
            data = [{
              name: 'file0',
              leaf: true
            }, {
              name: 'file1',
              leaf: true
            }, {
              name: 'folder0'
            }];
          
          resolve(data);
        }, 1500);
      }
    }
  };
</script>
