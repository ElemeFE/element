## Color (Couleur)

Element utilise un ensemble spécifique de palettes pour les couleurs afin d'offrir une apparence cohérente pour les produits que vous créez.

### Couleurs principales

La couleur principale de l'élément est bleu lumineux.

<el-row :gutter="12">
  <el-col :span="8">
    <div class="demo-color-box bg-blue-light">Bleu clair (blue-light)<div class="value">#58B7FF</div></div>
  </el-col>
  <el-col :span="8">
    <div class="demo-color-box bg-blue">Bleu (blue)<div class="value">#20A0FF</div></div>
  </el-col>
  <el-col :span="8">
    <div class="demo-color-box bg-blue-dark">Bleu foncé (blue-dark)<div class="value">#1D8CE0</div></div>
  </el-col>
</el-row>

### Couleurs secondaires

Outre la couleur principale, vous devez utiliser différentes couleurs dans différents scénarios (par exemple, une couleur `danger` indique une opération dangereuse)

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box bg-info">Bleu (info)<div class="value">#20A0FF</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-success">Vert (success)<div class="value">#13CE66</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-warning">Jaune (Warning)<div class="value">#F7BA2A</div></div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box bg-danger">Rouge (danger)<div class="value">#FF4949</div></div>
  </el-col>
</el-row>

### Couleurs neutres

Les couleurs neutres sont pour le texte, le fond et les couleurs de bordure. Vous pouvez utiliser différentes couleurs neutres pour représenter la structure hiérarchique.

<el-row :gutter="12">
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-black">Noir (black)<div class="value">#1F2D3D</div></div>
      <div class="demo-color-box bg-black-light">Noir clair (black-light)<div class="value">#324057</div></div>
      <div class="demo-color-box bg-black-lighter">Noir très clair (black-lighter)<div class="value">#475669</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box bg-silver">Argent (silver)<div class="value">#8492A6</div></div>
      <div class="demo-color-box bg-silver-light">Argent clair (silver-light)<div class="value">#99A9BF</div></div>
      <div class="demo-color-box bg-silver-lighter">Argent très clair (silver-lighter)<div class="value">#C0CCDA</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group">
      <div class="demo-color-box color-gray bg-gray">Gris (gray)<div class="value">#D3DCE6</div></div>
      <div class="demo-color-box color-gray bg-gray-light">Gris clair (gray-light)<div class="value">#E5E9F2</div></div>
      <div class="demo-color-box color-gray bg-gray-lighter">Gris très clair (gray-lighter)<div class="value">#EFF2F7</div></div>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="demo-color-box-group" style="border: 1px solid #e0e6ed;border-radius: 4px;">
      <div class="demo-color-box color-gray bg-white-dark">Blanc foncé (white-dark)<div class="value">#F9FAFC</div></div>
      <div class="demo-color-box color-gray bg-white">Blanc (white)<div class="value">#FFFFFF</div></div>
    </div>
  </el-col>
</el-row>
