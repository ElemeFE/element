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
    <h2><%= 1 ></h2>
    <el-row :gutter="14" class="cards">
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/consistency.png" alt="Consistency">
          <h4><%= 2 ></h4>
          <span><%= 3 ></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/feedback.png" alt="Feedback">
          <h4><%= 4 ></h4>
          <span><%= 5 ></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/efficiency.png" alt="Efficiency">
          <h4><%= 6 ></h4>
          <span><%= 7 ></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/controllability.png" alt="Controllability">
          <h4><%= 8 ></h4>
          <span><%= 9 ></span>
        </div>
      </el-col>
    </el-row>
    <h3><%= 10 ></h3>
    <ul>
      <li><strong><%= 11 ></strong><%= 12 ></li>
      <li><strong><%= 13 ></strong><%= 14 ></li>
    </ul>
    <h3><%= 15 ></h3>
    <ul>
      <li><strong><%= 16 ></strong><%= 17 ></li>
      <li><strong><%= 18 ></strong><%= 19 ></li>
    </ul>
    <h3><%= 20 ></h3>
    <ul>
      <li><strong><%= 21 ></strong><%= 22 ></li>
      <li><strong><%= 23 ></strong><%= 24 ></li>
      <li><strong><%= 25 ></strong><%= 26 ></li>
    </ul>
    <h3><%= 27 ></h3>
    <ul>
      <li><strong><%= 28 ></strong><%= 29 ></li>
      <li><strong><%= 30 ></strong><%= 31 ></li>
    </ul>
  </div>
</template>
