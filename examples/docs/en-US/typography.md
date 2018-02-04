<style>
  .demo-typo-box {
    height: 200px;
    width: 200px;
    position: relative;
    border: 1px solid #eaeefb;
    font-size: 40px;
    color: #1f2d3d;
    text-align: center;
    line-height: 162px;
    padding-bottom: 36px;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 17px;
    border-radius: 4px;

    .name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-top: 1px solid #eaeefb;
      font-size: 14px;
      color: #8492a6;
      line-height: 35px;
      text-align: left;
      text-indent: 10px;
      font-family: 'Helvetica Neue';
    }
  }
  .demo-typo-size {
    .h1 {
      font-size: 28px;
      letter-spacing: -0.4px;
      line-height: 30px;
      font-weight: bold;
    }
    .h2 {
      font-size: 22px;
      letter-spacing: -0.3px;
      line-height: 24px;
      font-weight: bold;
    }
    .h3 {
      font-size: 17px;
      letter-spacing: -0.2px;
      font-weight: bold;
    }
    .h4 {
      font-size: 15px;
      letter-spacing: -0.1px;
      font-weight: bold;
    }
    .text-regular {
      font-size: 17px;
      letter-spacing: -0.2px;
      line-height: 20px;
      margin: 10px 0 0;
    }
    .text-secondary {
      font-size: 14px;
      letter-spacing: -0.2px;
      margin: 8px 0 0;
    }
    .text-note {
      font-size: 11px;
      letter-spacing: -0.1px;
      line-height: 12px;
      margin: 4px 0 0;
    }
    .color-dark-light {
      color: #99a9bf;
    }
  }
  .typo-Roboto {
    font-family: 'Roboto';
  }
  .typo-Helvetica {
    font-family: 'Helvetica';
  }
  .typo-Arial {
    font-family: 'Arial';
  }
</style>

## Typography

We create a font convention to ensure the best presentation across different platforms.

### English / Numberic Font

<div class="demo-typo-box typo-Roboto">
  RGag
  <div class="name">Roboto</div>
</div>
<div class="demo-typo-box typo-Helvetica">
  RGag
  <div class="name">Helvetica</div>
</div>
<div class="demo-typo-box typo-Arial">
  RGag
  <div class="name">Arial</div>
</div>

### Font-family

```css
font-family: "Roboto",Helvetica,Arial,sans-serif;
```

### Font Convention

<table class="demo-typo-size">
  <tbody>
    <tr>
      <td class="h1">Заголовок первого уровня</td>
      <td class="h1">Build with TM-Ui</td>
      <td class="color-dark-light">@fontH1Product { font-size: 28px; line-height: 30px; font-weight: bold; letter-spacing: -0.4px; }</td>
    </tr>
    <tr>
      <td class="h2">Заголовок второго уровня</td>
      <td class="h2">Build with TM-Ui</td>
      <td class="color-dark-light">@fontH2Product { font-size: 22px; line-height: 24px; font-weight: bold; letter-spacing: -0.3px; }</td>
    </tr>
    <tr>
      <td class="h3">Заголовок третьего уровня</td>
      <td class="h3">Build with TM-Ui</td>
      <td class="color-dark-light">@fontH3Product { font-size: 17px; line-height: 20px; font-weight: bold; letter-spacing: -0.2px; }</td>
    </tr>
    <tr>
      <td class="h4">Заголовок четвертого уровня</td>
      <td class="h4">Build with TM-Ui</td>
      <td class="color-dark-light">@fontH4Product { font-size: 15px; line-height: 18px; font-weight: bold; letter-spacing: -0.1px; }</td>
    </tr>
    <tr>
      <td class="text-regular">Шрифт для основного текста</td>
      <td class="text-regular">Build with TM-Ui</td>
      <td class="color-dark-light">@fontBodyProduct { font-size: 17px; line-height: 20px; font-weight: regular; letter-spacing: -0.2px; margin: 10px 0 0; }</td>
    </tr>
    <tr>
      <td class="text-secondary">Шрифт для вторичного текста</td>
      <td class="text-secondary">Build with TM-Ui</td>
      <td class="color-dark-light">@fontSecondaryProduct { font-size: 14px; line-height: 16px; font-weight: regular; letter-spacing: -0.2px; margin: 8px 0 0; }</td>
    </tr>
    <tr>
      <td class="text-note">Шрифт для сносок</td>
      <td class="text-note">Build with TM-Ui</td>
      <td class="color-dark-light">@fontNoteProduct { font-size: 11px; line-height: 12px; font-weight: regular; letter-spacing: -0.1; margin: 4px 0 0; }</td>
    </tr>
  </tbody>
</table>

