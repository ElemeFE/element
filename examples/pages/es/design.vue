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
    <h2>Design Disciplines</h2>
    <el-row :gutter="14" class="cards">
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/consistency.png" alt="Consistency">
          <h4>Consistency</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/feedback.png" alt="Feedback">
          <h4>Feedback</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/efficiency.png" alt="Efficiency">
          <h4>Efficiency</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/controllability.png" alt="Controllability">
          <h4>Controllability</h4>
          <span></span>
        </div>
      </el-col>
    </el-row>
    <h3>Consistency</h3>
    <ul>
      <li><strong>Consistent with real life: </strong>in line with the process and logic of real life, and comply with languages and habits that the users are used to.</li>
      <li><strong>Consistent within interface: </strong>all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</li>
    </ul>
    <h3>Feedback</h3>
    <ul>
      <li><strong>Operation feedback: </strong>enable the users to clearly perceive their operations by style updates and interactive effects.</li>
      <li><strong>Visual feedback: </strong>reflect current state by updating or rearranging elements of the page.</li>
    </ul>
    <h3>Efficiency</h3>
    <ul>
      <li><strong>Simplify the process: </strong>keep operating process simple and intuitive.</li>
      <li><strong>Definite and clear: </strong>enunciate your intentions clearly so that the users can quickly understand and make decisions.</li>
      <li><strong>Easy to identify: </strong>the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</li>
    </ul>
    <h3>Controllability</h3>
    <ul>
      <li><strong>Decision making: </strong>giving advices about operations is acceptable, but do not make decisions for the users.</li>
      <li><strong>Controlled consequences: </strong>users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</li>
    </ul>
  </div>
</template>
