<script>
  export default {
    data() {
      return {
        activeName: 'second',
        activeName2: 'first',
        editableTabsValue: '2',
        editableTabsValue2: '2',
        navTabsValue: '2',
        navTabs: [{
          title: 'СПИСОК КЛИЕНТОВ',
          name: '1',
          content: 'СПИСОК КЛИЕНТОВ',
          closable: false
        }, {
          title: 'Клиент 1',
          name: '2',
          content: 'Клиент 1',
          closable: true
        }],
        tabIndex: 2,
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        tabPosition: 'top'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      },
      addNavTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.navTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.navTabsValue = newTabName;
      },
      removeNavTab(targetName) {
        let tabs = this.navTabs;
        let activeName = this.navTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
    
        this.navTabsValue = activeName;
        this.navTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

## Tabs

Divide data collections which are related yet belong to different types.

### Basic usage

Basic and concise tabs.

:::demo Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the `value` attribute.

```html
<template>
  <tm-tabs v-model="activeName" @tab-click="handleClick">
    <tm-tab-pane label="User" name="first">User</tm-tab-pane>
    <tm-tab-pane label="Config" name="second">Config</tm-tab-pane>
    <tm-tab-pane label="Role" name="third">Role</tm-tab-pane>
    <tm-tab-pane label="Task" name="fourth">Task</tm-tab-pane>
  </tm-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Flow usage

Flow tabs.

:::demo Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the `value` attribute. Use `icon` attribute to set the icon name

```html
<template>
  <div style="padding: 20px; background-color: #f4f5f9;">
    <tm-tabs type="flow" v-model="activeName" @tab-click="handleClick">
      <tm-tab-pane label="User" name="first" icon="airplane">User</tm-tab-pane>
      <tm-tab-pane icon="airplane" label="Config Config Config Config Config Config Config Config Config Config Config Config Config Config Config " name="second" closable>Config</tm-tab-pane>
      <tm-tab-pane label="Role Role" name="third">Role</tm-tab-pane>
      <tm-tab-pane name="fourth" icon="airplane" closable></tm-tab-pane>
    </tm-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Nav Tabs usage

Nav Tabs.

:::demo

```html
<template>
  <tm-tabs type="nav" v-model="navTabsValue" @tab-remove="removeNavTab">
    <tm-tab-pane v-for="(item, index) in navTabs"
                 :key="item.name"
                 :label="item.title"
                 :name="item.name"
                 :closable="item.closable">{{ item.content }}</tm-tab-pane>
  </tm-tabs>
</template>
<script>
  export default {
    data() {
      return {
        navTabsValue: '2',
        navTabs: [{
          title: 'СПИСОК КЛИЕНТОВ',
          name: '1',
          content: 'СПИСОК КЛИЕНТОВ',
          closable: false
        }, {
          title: 'Клиент 1',
          name: '2',
          content: 'Клиент 1',
          closable: true
        }],
        tabIndex: 2
      };
    },
    methods: {
      addNavTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.navTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.navTabsValue = newTabName;
      },
      removeNavTab(targetName) {
        let tabs = this.navTabs;
        let activeName = this.navTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
      
        this.navTabsValue = activeName;
        this.navTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  };
</script>
```
:::

### Card Style

Tabs styled as cards.

:::demo Set `type` to `card` can get a card-styled tab.

```html
<template>
  <tm-tabs type="card" @tab-click="handleClick">
    <tm-tab-pane label="User">User</tm-tab-pane>
    <tm-tab-pane label="Config">Config</tm-tab-pane>
    <tm-tab-pane label="Role">Role</tm-tab-pane>
    <tm-tab-pane label="Task">Task</tm-tab-pane>
  </tm-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Border card

Border card tabs.

:::demo Set `type` to `border-card`.

```html
<tm-tabs type="border-card">
  <tm-tab-pane label="User">User</tm-tab-pane>
  <tm-tab-pane label="Config">Config</tm-tab-pane>
  <tm-tab-pane label="Role">Role</tm-tab-pane>
  <tm-tab-pane label="Task">Task</tm-tab-pane>
</tm-tabs>
```

:::

### Tab position

You can use `tab-position` attribute to set the tab's position.

:::demo You can choose from four directions: `tabPosition="left|right|top|bottom"`

```html
<template>
  <tm-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <tm-radio-button label="top">top</tm-radio-button>
    <tm-radio-button label="right">right</tm-radio-button>
    <tm-radio-button label="bottom">bottom</tm-radio-button>
    <tm-radio-button label="left">left</tm-radio-button>
  </tm-radio-group>

  <tm-tabs :tab-position="tabPosition" style="height: 200px;">
    <tm-tab-pane label="User">User</tm-tab-pane>
    <tm-tab-pane label="Config">Config</tm-tab-pane>
    <tm-tab-pane label="Role">Role</tm-tab-pane>
    <tm-tab-pane label="Task">Task</tm-tab-pane>
  </tm-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    }
  };
</script>
```
:::

### Custom Tab

You can use named slot to customize the tab label content.

:::demo
```html
<tm-tabs type="border-card">
  <tm-tab-pane>
    <span slot="label"><i class="tm-icon--date"></i> Route</span>
    Route
  </tm-tab-pane>
  <tm-tab-pane label="Config">Config</tm-tab-pane>
  <tm-tab-pane label="Role">Role</tm-tab-pane>
  <tm-tab-pane label="Task">Task</tm-tab-pane>
</tm-tabs>
```
:::

### Add & close tab

Only card type Tabs support addable & closeable.

:::demo
```html
<tm-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <tm-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </tm-tab-pane>
</tm-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
```
:::

### Customized trigger button of new tab

:::demo
```html
<div style="margin-bottom: 20px;">
  <tm-button
    size="small"
    @click="addTab(editableTabsValue2)"
  >
    add tab
  </tm-button>
</div>
<tm-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
  <tm-tab-pane
    v-for="(item, index) in editableTabs2"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </tm-tab-pane>
</tm-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
```
:::

### Tabs Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| type     | type of Tab | string   | card/border-card  |     —    |
| closable  | whether Tab is closable | boolean   | — |  false  |
| addable  | whether Tab is addable   | boolean   | — |  false  |
| editable  | whether Tab is addable and closable | boolean   | — |  false  |
| value  | name of the selected tab  | string   |  —  |  name of first tab |
| tab-position  | position of tabs | string   |  top/right/bottom/left  |  top |
| list-class  | class name of the tabs list  | string   |  —  |
| list-item-class  | class name of the tabs list items | string   |  —  |

### Tabs Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| tab-click  | triggers when a tab is clicked | clicked tab |
| tab-remove  | triggers when tab-remove button is clicked | name of the removed tab |
| tab-add  | triggers when tab-add button is clicked  | — |
| edit  | triggers when tab-add button or tab-remove is clicked | (targetName, action) |

### Tab-pane Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| label     | title of the tab   | string   | — |    —     |
| disabled | whether Tab is disabled | boolean | — | false |
| name      | identifier corresponding to the activeName of Tabs, representing the alias of the tab-pane | string | — | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1' |
| closable  | whether Tab is closable | boolean   | — |  false  |
