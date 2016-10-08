<style>
  .page-changelog {
    padding-bottom: 100px;

    .fr {
      float: right;
      padding: 0;
      a {
        display: block;
        padding: 10px 15px;
        color: #475669;
      }
      &:hover a {
        color: #20a0ff;
      }
    }
    h2 {
      margin-bottom: 40px;
    }
    .timeline {
      margin: 0 0 0 105px;
      padding-left: 25px;
      position: relative;
      color: #5e6d82;

      &:before {
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 10px;
        background-color: #eaeefa;
      }

      > li {
        list-style: none;
        position: relative;
        line-height: 1.8;

        &:not(:last-child) {
          margin-bottom: 50px;
        }

        &:first-child {
          margin-top: -10px;

          h3:before {
            left: -33px;
            top: 10px;
            width: 17px;
            height: @width;
            background-color: #20a0ff;
            border: 0;
          }          
        }
      }

      ul {
        padding-left: 0;
      }

      li li {
        font-size: 14px;
        list-style: none;
        padding-left: 0;

        &:before {
          content: '';
          circle: 4px #5e6d82;
          margin-right: 5px;
          display: inline-block;
          vertical-align: middle;
        }
      }

      h3 {
        margin: 0 0 10px;

        &:before {
          content: '';
          display: block;
          position: absolute;
          left: -31px;
          top: 13px;
          circle: 13px transparent;
          border: 2px solid #20a0ff;
          box-sizing: border-box;
          background-color: #fff;
        }
      }
      h4 {
        margin: 50px 0 10px;
      }
      p {
        margin: 0;
      }

      em {
        position: absolute;
        left: -127px;
        font-style: normal;
        top: 6px;
        font-size: 14px;
        color: #99a9bf;
      }
    }
  }
</style>
<template>
  <div class="page-changelog">
    <h2>
      <el-button class="fr">
        <a href="https://github.com/ElemeFE/element/releases" target="_blank">Github Releases</a>
      </el-button>
      更新日志
    </h2>
    <ul class="timeline" ref="timeline">
    </ul>
    <change-log ref="changeLog"></change-log>
  </div>
</template>
<script>
  import ChangeLog from '../../CHANGELOG.md';
  export default {
    components: {
      ChangeLog
    },
    data() {
      return {
        count: 3
      };
    },
    mounted() {
      var changeLog = this.$refs.changeLog;
      var changeLogNodes = changeLog.$el.children;
      var fragments = '<li>' + changeLogNodes[1].outerHTML;

      for (let len = changeLogNodes.length, i = 2; i < len; i++) {
        let node = changeLogNodes[i];
        fragments += node.tagName !== 'H3'
          ? changeLogNodes[i].outerHTML
          : `</li><li>${changeLogNodes[i].outerHTML}`;
      }
      this.$refs.timeline.innerHTML = `${fragments}</li>`;

      changeLog.$el.remove();
    }
  };
</script>
