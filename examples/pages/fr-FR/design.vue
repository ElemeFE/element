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
    <h2>Principes de conception</h2>
    <el-row :gutter="14" class="cards">
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/consistency.png" alt="Consistency">
          <h4>Cohérence</h4>
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
          <h4>Efficacité</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/controllability.png" alt="Controllability">
          <h4>Controlabilité</h4>
          <span></span>
        </div>
      </el-col>
    </el-row>
    <h3>Cohérence</h3>
    <ul>
      <li><strong>Cohérence avec la vraie vie: </strong>en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs.</li>
      <li><strong>Cohérence au sein de l'interface: </strong>tout les élements doivent être cohérents entre eux et suivre les même règles, par exemple: le style global, les icônes, la position des élements, etc.</li>
    </ul>
    <h3>Feedback</h3>
    <ul>
      <li><strong>Retour d'expèrience: </strong>permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.</li>
      <li><strong>Retour visuel: </strong>reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.</li>
    </ul>
    <h3>Efficacité</h3>
    <ul>
      <li><strong>Simplifier le processus: </strong>garde chaque operation simple et intuitive.</li>
      <li><strong>Clair et défini: </strong>énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement.</li>
      <li><strong>Facile à identifier: </strong>l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.</li>
    </ul>
    <h3>Controllabilité</h3>
    <ul>
      <li><strong>Prise de décision: </strong>possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs</li>
      <li><strong>Contrôle des conséquences: </strong>les utilisateurs devraient pouvoir controller l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.</li>
    </ul>
  </div>
</template>
