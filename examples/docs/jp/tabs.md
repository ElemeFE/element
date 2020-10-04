## タブ

関連しているが異なるタイプに属するデータコレクションを分割します。

### 基本的な使い方

基本的で簡潔なタブです。

:::demo タブはカードの選択機能を提供します。デフォルトでは最初のタブがアクティブとして選択されており、`value`属性を設定することで任意のタブをアクティブにすることができます。

```html
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
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

### カードスタイル

カードのようなスタイルのタブ

:::demo `type` を `card` に設定すると、カードスタイルのタブを取得できます。

```html
<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
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

### ボーダーカード

ボーダーカードのタブです。

:::demo `type` を `border-card` に設定します。

```html
<el-tabs type="border-card">
  <el-tab-pane label="User">User</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
```

:::

### タブの位置

タブの位置を設定するには `tab-position` 属性を使います。

タブの位置を設定するには、`tab-position`属性を使用します。`tabPosition="left|right|top|bottom" `

```html
<template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>
```
:::

### カスタムタブ

名前付きスロットを使用して、タブラベルの内容をカスタマイズすることができます。

:::demo
```html
<el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> Route</span>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
```
:::

### タブを追加して閉じる

カードタイプのタブのみ、追加可能＆クローズ可能に対応しています。

:::demo
```html
<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
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

### カスタマイズした新規タブのトリガーボタン

:::demo
```html
<div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    add tab
  </el-button>
</div>
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
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
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
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
</script>
```
:::

### タブの属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model  | バインディング値、選択されたタブの名前  | string   |  —  |  name of first tab |
| type     | タブの種類 | string   | card/border-card  |     —    |
| closable  | タブが閉じられるかどうか | boolean   | — |  false  |
| addable  | タブの追加が可能かどうか   | boolean   | — |  false  |
| editable  | タブが追加可能で閉じられるかどうか | boolean   | — |  false  |
| tab-position  | タブの位置 | string   |  top/right/bottom/left  |  top |
| stretch  | タブの幅が自動的にコンテナに収まるかどうか | boolean   |  -  |  false |
| before-leave | フック関数を使ってタブを切り替える。`false` を返すか、`Promise` を返した後に拒否された場合は、タブの切り替えができないようにする。 | Function(activeName, oldActiveName) | — | — |

### タブイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| tab-click  | タブがクリックされたときにトリガーされます。 | clicked tab |
| tab-remove  | タブ削除ボタンがクリックされたときにトリガーされます。 | name of the removed tab |
| tab-add  |  タブ追加ボタンがクリックされたときにトリガーされます。  | — |
| edit  | タブ追加ボタンやタブ削除ボタンがクリックされたときにトリガーされます。 | (targetName, action) |

### タブペインの属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| label     | タブのタイトル   | string   | — |    —     |
| disabled | タブが無効になっているかどうか | boolean | — | false |
| name      | タブの名前に対応する識別子、タブペインのエイリアスを表す | string | — | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1' |
| closable  | タブが閉じられるかどうか | boolean   | — |  false  |
| lazy  | タブがレイジーにレンダリングされるかどうか   | boolean   | — |  false  |
