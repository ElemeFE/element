<style scoped>
  .cards {
    margin: 30px 0 70px;
  }
  .card {
    background: #fbfcfd;
    height: 204px;
    text-align: center;
    
    img {
      margin: 40px auto 25px;
      width: 80px;
      height: 80px;
    }
    h4 {
      font-size: 18px;
      color: #1f2d3d;
      font-weight: normal;
      margin: 0;
    }
    span {
      font-size: 14px;
      color: #99a9bf;
    }
  }
</style>
<template>
  <div>
    <h2>设计原则</h2>
    <el-row :gutter="14" class="cards">
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/consistency.png" alt="Consistency">
          <h4>一致</h4>
          <span>Consistency</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/feedback.png" alt="Feedback">
          <h4>反馈</h4>
          <span>Feedback</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/efficiency.png" alt="Efficiency">
          <h4>效率</h4>
          <span>Efficiency</span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/controllability.png" alt="Controllability">
          <h4>可控</h4>
          <span>Controllability</span>
        </div>
      </el-col>
    </el-row>
    <h3>一致性 Consistency</h3>
    <ul>
      <li><strong>与现实生活一致：</strong>与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
      <li><strong>在界面中一致：</strong>所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</li>
    </ul>
    <h3>反馈 Feedback</h3>
    <ul>
      <li><strong>控制反馈：</strong>通过界面样式和交互动效让用户可以清晰的感知自己的操作；</li>
      <li><strong>页面反馈：</strong>操作后，通过页面元素的变化清晰地展现当前状态。</li>
    </ul>
    <h3>效率 Efficiency</h3>
    <ul>
      <li><strong>简化流程：</strong>设计简洁直观的操作流程；</li>
      <li><strong>清晰明确：</strong>语言表达清晰且表意明确，让用户快速理解进而作出决策；</li>
      <li><strong>帮助用户识别：</strong>界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</li>
    </ul>
    <h3>可控 Controllability</h3>
    <ul>
      <li><strong>用户决策：</strong>根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</li>
      <li><strong>结果可控：</strong>用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</li>
    </ul>
  </div>
</template>
