<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    
    & .value {
      font-size: 12px;
      opacity: 0.69;
      line-height: 24px;
    }
  }
  .demo-color-box-group {
    .demo-color-box {
      border-radius: 0;
    }
    .demo-color-box:first-child {
      border-radius: 4px 4px 0 0;
    }
    .demo-color-box:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  .bg-blue {
    background-color: #409EFF;
  }

  .bg-success {
    background-color: #13CE66;
  }
  .bg-warning {
    background-color: #f7ba2a;
  }
  .bg-danger {
    background-color: #ff4949;
  }
  .bg-info {
    background-color: #909399;
  }

  .bg-text-primary {
    background-color: #303133;
  }
  .bg-text-regular {
    background-color: #606266;
  }
  .bg-text-secondary {
    background-color: #909399;
  }
  .bg-text-placeholder {
    background-color: #c0c4cc;
  }

  .bg-border-base {
    background-color: #dcdfe6;
  }
  .bg-border-light {
    background-color: #e4e7ed;
  }
  .bg-border-lighter {
    background-color: #ebeef5;
  }
  .bg-border-extra-light {
    background-color: #f2f6fc;
  }

  [class*=" bg-border-"] {
    color: #303133;
  }
</style>

## Color
Element utiliza un conjunto de paletas para especificar colores, y así, proporcionar una apariencia y sensación coherente para los productos que construye.

### Color principal

El color principal de Element es el azul brillante y amigable.

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-blue">Azul<div class="value">#409EFF</div></div>
  </el-col>
</el-row>

### Color secundario

Además del color principal, se necesitan utilizar distintos colores para diferentes escenarios (por ejemplo, el color en tono rojo indica una operación peligrosa).

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-success">Éxito<div class="value">#67C23A</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-warning">Precaución<div class="value">#E6A23C</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-danger">Peligro<div class="value">#F56C6C</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-info">Info<div class="value">#909399</div></div>
  </el-col>
</el-row>

### Color neutro

Los colores neutrales son para texto, fondos y bordes. Puede usar diferentes colores neutrales para representar una estructura jeráquica.

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">Texto primario<div class="value">#303133</div></div>
      <div class="demo-color-box bg-text-regular">Texto regular<div class="value">#606266</div></div>
      <div class="demo-color-box bg-text-secondary">Texto secundario<div class="value">#909399</div></div>
      <div class="demo-color-box bg-text-placeholder">Texto de placeholder<div class="value">#C0C4CC</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">Borde base<div class="value">#DCDFE6</div></div>
      <div class="demo-color-box bg-border-light">Borde ligero<div class="value">#E4E7ED</div></div>
      <div class="demo-color-box bg-border-lighter">Borde claro<div class="value">#EBEEF5</div></div>
      <div class="demo-color-box bg-border-extra-light">Borde extra claro<div class="value">#F2F6FC</div></div>
    </div>
  </el-col>
</el-row>