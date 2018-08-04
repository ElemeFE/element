<style>
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
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
      margin: 0;
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

## Couleur
Element utilise un ensemble de palettes spécifiques afin de fournir un style consistant pour vos produits.

### Couleur principale

La couleur principale d'Element est un bleu clair et agréable.

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-blue">Bleu<div class="value">#409EFF</div></div>
  </el-col>
</el-row>

### Couleurs secondaires

En plus de la couleur principale, vous devrez sans doute utiliser d'autres couleurs pour différents cas de figures, par exemple un couleur de danger pour indiquer une opération dangereuse.

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-success">Succès<div class="value">#67C23A</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-warning">Avertissement<div class="value">#E6A23C</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-danger">Danger<div class="value">#F56C6C</div></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box bg-info">Information<div class="value">#909399</div></div>
  </el-col>
</el-row>

### Couleurs neutres

Les couleurs neutres sont les couleurs du fond, du texte et des bordures. Vous pouvez utiliser différentes couleurs neutres pour représenter une structure hiérarchique.

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-text-primary">Texte principal<div class="value">#303133</div></div>
      <div class="demo-color-box bg-text-regular">Texte normal<div class="value">#606266</div></div>
      <div class="demo-color-box bg-text-secondary">Texte secondaire<div class="value">#909399</div></div>
      <div class="demo-color-box bg-text-placeholder">Texte de placeholder<div class="value">#C0C4CC</div></div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-border-base">Bordure de base<div class="value">#DCDFE6</div></div>
      <div class="demo-color-box bg-border-light">Bordure claire<div class="value">#E4E7ED</div></div>
      <div class="demo-color-box bg-border-lighter">Bordure très claire<div class="value">#EBEEF5</div></div>
      <div class="demo-color-box bg-border-extra-light">Bordure extra claire<div class="value">#F2F6FC</div></div>
    </div>
  </el-col>
</el-row>
