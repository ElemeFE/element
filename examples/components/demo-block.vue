<template>
  <div
    class="demo-block"
    :class="[blockClass, { 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot></slot>
    <div class="demo-block-control" @click="isExpanded = !isExpanded">
      <i :class="iconClass"></i>
      <span v-show="hovering">{{ controlText }}</span>
    </div>
  </div>
</template>

<style>
  .demo-block {
    border: solid 1px #eaeefb;
    border-radius: 4px;
    transition: .2s;
  
    &.hover {
      box-shadow: 0 6px 18px 0 rgba(232, 237, 250, .5);
    }
  
    .source {
      padding: 24px;
    }
    
    .meta {
      background-color: #fbfcfd;
      border-top: solid 1px #eaeefb;
      clear: both;
      overflow: hidden;
      height: 0;
      transition: height .2s;
    }

    .description {
      padding: 18px 24px;
      width: 40%;
      box-sizing: border-box;
      border-left: solid 1px #eaeefb;
      float: right;
      font-size: 14px;
      line-height: 1.5;
      color: #5e6d82;
      
      p {
        margin: 0;
      }
      
      code {
        background-color: #f4faff;
        border: solid 1px #eaeefb;
        margin: 0 4px;
        padding: 0 4px;
        font-size: 12px;
      }
    }
    
    .highlight {
      width: 60%;
      border-right: solid 1px #eaeefb;

      pre {
        margin: 0;
      }
      
      code.hljs {
        padding: 18px 24px;
        margin: 0;
        line-height: 1.4;
        background-color: #fbfcfd;
        border: none;
        max-height: none;
        border-radius: 0;
      
        &::before {
          content: none;
        }
      }
    }
  
    .demo-block-control {
      border-top: solid 1px #eaeefb;
      height: 36px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      transition: .2s;

      i {
        font-size: 12px;
        line-height: 36px;
      }

      span {
        font-size: 14px;
        line-height: 36px;
      }
      
      &:hover {
        color: #20a0ff;
        background-color: rgba(32, 159, 255, .05);
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false
      };
    },

    computed: {
      blockClass() {
        return `demo-${ this.$router.currentRoute.path.split('/').pop() }`;
      },

      iconClass() {
        return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom';
      },

      controlText() {
        return this.isExpanded ? '隐藏代码' : '显示代码';
      },

      codeArea() {
        return this.$el.getElementsByClassName('meta')[0];
      },

      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return Math.max(this.$el.getElementsByClassName('description')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight);
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      }
    },

    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
      }
    },

    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    }
  };
</script>