<style>
  .tm-header, .tm-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .tm-aside {
    color: #333;
  }
  
  #common-layouts + .demo-container {
    .tm-header, .tm-footer {
      text-align: center;
    }
    
    .tm-aside {
      background-color: #D3DCE6;
      text-align: center;
      line-height: 200px;
    }
    
    .tm-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    & > .source > .tm-container {
      margin-bottom: 40px;
    
      &:nth-child(5) .tm-aside,
      &:nth-child(6) .tm-aside {
        line-height: 260px;
      }
    
     &:nth-child(7) .tm-aside {
       line-height: 320px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

## Container
Container components for scaffolding basic structure of the page:

`<tm-container>`: wrapper container. When nested with a `<tm-header>` or `<tm-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<tm-header>`: container for headers.

`<tm-aside>`: container for side sections (usually a side nav).

`<tm-main>`: container for main sections.

`<tm-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<tm-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<tm-container>`.
:::

### Common layouts

:::demo
```html
<tm-container>
  <tm-header>Header</tm-header>
  <tm-main>Main</tm-main>
</tm-container>

<tm-container>
  <tm-header>Header</tm-header>
  <tm-main>Main</tm-main>
  <tm-footer>Footer</tm-footer>
</tm-container>

<tm-container>
  <tm-aside width="200px">Aside</tm-aside>
  <tm-main>Main</tm-main>
</tm-container>

<tm-container>
  <tm-header>Header</tm-header>
  <tm-container>
    <tm-aside width="200px">Aside</tm-aside>
    <tm-main>Main</tm-main>
  </tm-container>
</tm-container>

<tm-container>
  <tm-header>Header</tm-header>
  <tm-container>
    <tm-aside width="200px">Aside</tm-aside>
    <tm-container>
      <tm-main>Main</tm-main>
      <tm-footer>Footer</tm-footer>
    </tm-container>
  </tm-container>
</tm-container>

<tm-container>
  <tm-aside width="200px">Aside</tm-aside>
  <tm-container>
    <tm-header>Header</tm-header>
    <tm-main>Main</tm-main>
  </tm-container>
</tm-container>

<tm-container>
  <tm-aside width="200px">Aside</tm-aside>
  <tm-container>
    <tm-header>Header</tm-header>
    <tm-main>Main</tm-main>
    <tm-footer>Footer</tm-footer>
  </tm-container>
</tm-container>

<style>
  .tm-header, .tm-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .tm-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .tm-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .tm-container {
    margin-bottom: 40px;
  }
  
  .tm-container:nth-child(5) .tm-aside,
  .tm-container:nth-child(6) .tm-aside {
    line-height: 260px;
  }
  
  .tm-container:nth-child(7) .tm-aside {
    line-height: 320px;
  }
</style>
```
:::

### Example

:::demo
```html
<tm-container style="height: 500px; border: 1px solid #eee">
  <tm-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <tm-menu :default-openeds="['1', '3']">
      <tm-submenu index="1">
        <template slot="title"><i class="tm-icon-message"></i>Navigator One</template>
        <tm-menu-item-group>
          <template slot="title">Group 1</template>
          <tm-menu-item index="1-1">Option 1</tm-menu-item>
          <tm-menu-item index="1-2">Option 2</tm-menu-item>
        </tm-menu-item-group>
        <tm-menu-item-group title="Group 2">
          <tm-menu-item index="1-3">Option 3</tm-menu-item>
        </tm-menu-item-group>
        <tm-submenu index="1-4">
          <template slot="title">Option4</template>
          <tm-menu-item index="1-4-1">Option 4-1</tm-menu-item>
        </tm-submenu>
      </tm-submenu>
      <tm-submenu index="2">
        <template slot="title"><i class="tm-icon-menu"></i>Navigator Two</template>
        <tm-menu-item-group>
          <template slot="title">Group 1</template>
          <tm-menu-item index="2-1">Option 1</tm-menu-item>
          <tm-menu-item index="2-2">Option 2</tm-menu-item>
        </tm-menu-item-group>
        <tm-menu-item-group title="Group 2">
          <tm-menu-item index="2-3">Option 3</tm-menu-item>
        </tm-menu-item-group>
        <tm-submenu index="2-4">
          <template slot="title">Option 4</template>
          <tm-menu-item index="2-4-1">Option 4-1</tm-menu-item>
        </tm-submenu>
      </tm-submenu>
      <tm-submenu index="3">
        <template slot="title"><i class="tm-icon-setting"></i>Navigator Three</template>
        <tm-menu-item-group>
          <template slot="title">Group 1</template>
          <tm-menu-item index="3-1">Option 1</tm-menu-item>
          <tm-menu-item index="3-2">Option 2</tm-menu-item>
        </tm-menu-item-group>
        <tm-menu-item-group title="Group 2">
          <tm-menu-item index="3-3">Option 3</tm-menu-item>
        </tm-menu-item-group>
        <tm-submenu index="3-4">
          <template slot="title">Option 4</template>
          <tm-menu-item index="3-4-1">Option 4-1</tm-menu-item>
        </tm-submenu>
      </tm-submenu>
    </tm-menu>
  </tm-aside>
  
  <tm-container>
    <tm-header style="text-align: right; font-size: 12px">
      <tm-dropdown>
        <i class="tm-icon-setting" style="margin-right: 15px"></i>
        <tm-dropdown-menu slot="dropdown">
          <tm-dropdown-item>View</tm-dropdown-item>
          <tm-dropdown-item>Add</tm-dropdown-item>
          <tm-dropdown-item>Delete</tm-dropdown-item>
        </tm-dropdown-menu>
      </tm-dropdown>
      <span>Tom</span>
    </tm-header>
    
    <tm-main>
      <tm-table :data="tableData">
        <tm-table-column prop="date" label="Date" width="140">
        </tm-table-column>
        <tm-table-column prop="name" label="Name" width="120">
        </tm-table-column>
        <tm-table-column prop="address" label="Address">
        </tm-table-column>
      </tm-table>
    </tm-main>
  </tm-container>
</tm-container>

<style>
  .tm-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .tm-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `tm-header` or `tm-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |