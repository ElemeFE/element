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
    <h2>Disciplinas de diseño</h2>
    <el-row :gutter="14" class="cards">
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/consistency.png" alt="Consistency">
          <h4>Consistencia</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/feedback.png" alt="Feedback">
          <h4>Comentarios</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/efficiency.png" alt="Efficiency">
          <h4>Eficiencia</h4>
          <span></span>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="card">
          <img src="~examples/assets/images/controllability.png" alt="Controllability">
          <h4>Control</h4>
          <span></span>
        </div>
      </el-col>
    </el-row>
    <h3>Consistencia</h3>
    <ul>
      <li><strong>Consistente con la vida real: </strong>en línea con el proceso y la vida real, y cumple con los idiomas y hábitos a los que los usuarios están acostumbrados.</li>
      <li><strong>Consistente dentro de la interfaz: </strong>todos los elementos deben ser consistentes, como: estilo de diseño, iconos y texto, posición de los elementos, etc.</li>
    </ul>
    <h3>Comentarios</h3>
    <ul>
      <li><strong>Comentarios sobre la operación: </strong>Permite a los usuarios percibir claramente las operaciones mediante actualizaciones de estilo y efectos interactivos.</li>
      <li><strong>Comentarios visuales: </strong>Refleja el estado actual al actualizar o reorganizar los elementos de la página.</li>
    </ul>
    <h3>Eficiencia</h3>
    <ul>
      <li><strong>Simplifica el proceso: </strong>Mantiene el proceso operativo simple e intuitivo.</li>
      <li><strong>Bien definido y claro: </strong>Expresa las intenciones claramente para que los usuarios puedan comprender y tomar decisiones rápidamente.</li>
      <li><strong>Fácil de identificar: </strong>La interfaz debe ser sencilla, lo que permitirá a los usuarios a identificar y liberarlos de la memorización y recuerdos.</li>
    </ul>
    <h3>Control</h3>
    <ul>
      <li><strong>Toma de decisiones: </strong>Brindar consejos sobres las operaciones es aceptable, pero no tomar desiciones para los usuarios.</li>
      <li><strong>Consecuencias controladas: </strong>Los usuarios deben tener la libertad de operar, incluida la cancelación, el aborto o la terminación de las operaciones actuales.</li>
    </ul>
  </div>
</template>
