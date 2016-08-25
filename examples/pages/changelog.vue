<style>
  .page-changelog {
    padding-bottom: 100px;

    .fr {
      float: right;
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

        &:not(:last-child) {
          margin-bottom: 50px;
        }

        &:first-child {
          margin-top: -10px;

          h3:before {
            left: -33px;
            top: 5px;
            width: 16px;
            height: @width;
            background-color: #81c8fa;
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
          top: 7px;
          circle: 13px transparent;
          border: 2px solid #2ca2fc;
          box-sizing: border-box;
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
        top: 4px;
        font-size: 14px;
        color: #99a9bf;
      }
    }
  }
</style>
<template>
  <div class="page-container page-changelog">
    <h2><el-button class="fr">Github Releases</el-button>更新日志</h2>
    <ul class="timeline" ref="timeline">
    </ul>
    <change-log ref="changeLog"></change-log>
    <!-- <ul class="timeline">
      <li>
        <h3>2.0.0</h3>
        <em>2016.06.29</em>
        <p>很高兴的通知各位,经过四个月时间的紧密开发,Element v1.0.0 终于发布了。从去年 5 月 7 日提交第一行代码以来, 经过整整一年的开发迭代,Element 受到社区的大量关注,使用的公司和产品持续增加,已经日趋成熟。这个版本我们重构了底层代码和站点,持续完善现有组件功能和优化细节,其中很多都来自社区的贡献,无法一一感谢,欢迎各位持续关注和鞭策。在升级过程中遇到任何问题,请及时反馈给我们。</p>
        <h4>新增</h4>
        <ul>
          <li>支持按需加载。可参考 element-init 的模版代码, 需要配合 babel-plugin-antd 插件和 style 配置进行使用。#900</li>
          <li>结全新单页站点，使用 React 和 antd 进行了彻底重构，加载更快，访问更流畅。</li>
        </ul>
        <h4>优化</h4>
        <ul>
          <li>支持按需加载。可参考 element-init 的模版代码, 需要配合 babel-plugin-antd 插件和 style 配置进行使用。#900</li>
          <li>结全新单页站点，使用 React 和 antd 进行了彻底重构，加载更快，访问更流畅。</li>
        </ul>
      </li>
      <li>
        <h3>1.6.1</h3>
        <em>2016.06.29</em>
        <ul>
          <li>支持按需加载。可参考 element-init 的模版代码, 需要配合 babel-plugin-antd 插件和 style 配置进行使用。#900</li>
          <li>结全新单页站点，使用 React 和 antd 进行了彻底重构，加载更快，访问更流畅。</li>
        </ul>
      </li>
    </ul> -->
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
