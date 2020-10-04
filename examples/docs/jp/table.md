## テーブル

複数のデータを同じような形式で表示します。データを並べ替えたり、フィルタリングしたり、テーブルで比較したりすることができます。

### 基本テーブル

基本テーブルはデータを表示するためだけのものです。

:::demo オブジェクトの配列で `el-table` の属性 `data` を設定した後、`el-table-column` の `prop` (配列 `data` に含まれるオブジェクトのキーに対応) を用いてテーブルのカラムにデータを挿入し、属性 `label` を用いてカラム名を定義することができます。また、属性 `width` を用いて列の幅を定義することもできる。

```html
  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        }
      }
    }
  </script>
```
:::

### 縞模様のテーブル

縞模様のテーブルは、異なる行の区別を容易にします。

:::demo 属性 `stripe` は `Boolean` を受け入れる。`true` の場合、テーブルは縞模様になる。
```html
<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

### ボーダー付きテーブル

:::demo デフォルトでは、テーブルには垂直方向の境界線がありません。必要であれば、属性 `border` を `true` に設定することができる。

```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

### ステータスのあるテーブル

テーブルの内容を"成功、情報、警告、危険” などの状態に区別して強調できます。

:::demo 特定の行にカスタムクラスを追加するには、`el-table` の `row-class-name` を使います。そうすれば、カスタムクラスを使ってスタイルを設定することができます。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData:  [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

### ヘッダを固定したテーブル

行数が多い場合は固定ヘッダーを使用します。

:::demo `el-table` の `height` 属性を設定することで、他のコードを使わずにテーブルのヘッダを固定することができる。
```html
<template>
  <el-table
    :data="tableData"
    height="250"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
      }
    }
  }
</script>
```
:::

### 列が固定されているテーブル

カラムが多すぎる場合は、いくつかの列を固定することができます。

:::demo 属性 `fixed` は `el-table-column` で用いられる。 `true` の場合、列は左に固定される。また、'left' と 'right' の2つの文字列リテラルを受け取ることができ、どちらも対応する方向に固定されることを示す。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Zip"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick" type="text" size="small">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
</script>
```
:::

### 固定列とヘッダーを持つテーブル

テーブルに入れるデータ量が膨大な場合は、ヘッダーとカラムを同時に固定することができます。

:::demo  上記2つの例を組み合わせて、カラムとヘッダーを同時に固定します。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Zip"
      width="120">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### 固定ヘッダー（および列）を持つ流動的な高さのテーブル

データが動的に変更された場合、テーブルの高さを固定ではなく最大にして、必要に応じてスクロールバーを表示したい場合があります。

:::demo  `el-table`の属性 `max-height` を設定することで、テーブルのヘッダを固定することができる。テーブル本体は行の高さが最大の高さを超えた場合のみスクロールする。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Zip"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### グルーピングテーブルヘッド

データ構造が複雑な場合は、グループヘッダーを使用してデータ階層を表示することができます。

:::demo el-table-columnの中にel-table-columnを配置するだけで、グループヘッダーを実現することができます。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column label="Delivery Info">
      <el-table-column
        prop="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column label="Address Info">
        <el-table-column
          prop="state"
          label="State"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="City"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### シングル選択

1行選択に対応しています。

:::demo テーブルは1行選択をサポートしています。これを有効にするには、`highlight-current-row` 属性を追加します。行の選択が変更されると `current-change` というイベントがトリガされ、そのパラメータは変更後の行と変更前の行である `currentRow` と `oldCurrentRow` である。行のインデックスを表示したい場合は、新しい `el-table-column` を追加して `type` 属性を `index` に代入すると、1から始まるインデックスが表示されます。
```html
<template>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="Date"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address">
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
    <el-button @click="setCurrent()">Clear selection</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>
```
:::

### 複数選択

複数の行を選択することもできます。

:::demo 複数選択を有効にするのは簡単です: `el-table-column` に `type` を `selection` に設定して追加するだけです。複数選択とは別に、この例では `show-overflow-tooltip` を利用しています: デフォルトでは、内容が長すぎると複数行に分割されます。1行にまとめたい場合は、`show-overflow-tooltip` 属性を利用します。`true` を設定すると、セル上にカーソルを置いたときに追加内容がツールチップに表示されます。
```html
<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="Date"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">Toggle selection status of second and third rows</el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
```
:::

### 並び替え

データを素早く、見つけやすいまたは比較しやすいようにソート出来ます。

:::demo 特定のカラムに `sortable` 属性を設定し、そのカラムに基づいてデータをソートする。これは `Boolean` を受け付け、デフォルト値は `false` である。テーブル属性 `default-sort` を設定して、デフォルトのソート列と順序を決定する。独自のソートルールを適用するには、`sort-method` や `sort-by` を用いる。バックエンドからのリモートソートが必要な場合は、`sortable` を `custom` に設定し、テーブル上で `sort-change` イベントをリッスンします。イベントハンドラではソートカラムとソート順にアクセスできるので、APIからソートされたテーブルデータを取得することができます。この例では、特定のカラムの値を整形するために `formatter` という名前の別の属性を使います。これは2つのパラメータを持つ関数を受け入れます。 `row` と `column` の2つのパラメータを持つ関数を受け付ける。この関数は、`row` と `column` の2つのパラメータを持つ関数を受け付ける。
```html
<template>
  <el-table
    :data="tableData"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
```
:::

### フィルター

テーブルをフィルタリングして、目的のデータを見つけます。

:::demo `el-table-column` に `filters` と `filter-method` という属性を設定すると、この列をフィルタリング可能な状態にする。`filters` は配列であり、`filter-method` はどの行を表示するかを決定する関数である。パラメータは3つある。`value`, `row`, `column` の3つのパラメータを持つ。
```html
<template>
  <el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <el-table
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === 'Home' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>
```
:::

### カスタムカラムテンプレート

テーブルのカラムをカスタマイズして、他のコンポーネントと統合できるようにします。
:::demo 行、列、$index、ストア(テーブルの状態管理)は、[Scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots)でアクセスできます。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Date"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.name }}</p>
          <p>Addr: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```
:::

### カスタムヘッダー付きのテーブル

テーブルヘッダーをカスタマイズすることで、さらにカスタマイズできるようになります。
:::demo ヘッダー[scoped slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)でヘッダーの見え方をカスタマイズすることができます。
```html
<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>
```
:::

### 拡張可能な行

行の内容が長すぎて横スクロールバーを表示したくない場合は、拡張可能な行の機能を利用することができます。
:::demo type="expand "とscoped slotを追加して、拡張可能な行を有効にします。el-table-columnのテンプレートは拡張された行の内容としてレンダリングされ、カスタムカラムテンプレートで `Scoped slot` を使用している場合と同じ属性にアクセスできます。
```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>State: {{ props.row.state }}</p>
        <p>City: {{ props.row.city }}</p>
        <p>Address: {{ props.row.address }}</p>
        <p>Zip: {{ props.row.zip }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### ツリーデータとレイジーモード

:::demo 木構造データを表示することができる。行に `children` フィールドが含まれている場合、その行は入れ子データとして扱われる。入れ子になったデータを表示するには、`row-key` というプロップが必要である。テーブルの `lazy` プロパティを true に設定し、関数 `load` を実行する。行に `hasChildren` 属性を指定することで、どの行に子を含むかを判断することができます。`children`も `hasChildren`も、`tree-props`で設定することができる。

```html
<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all>
    <el-table-column
      prop="date"
      label="date"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      sortable
      width="180">
    </el-table-column>
  </el-table>

  <el-table
    :data="tableData1"
    style="width: 100%"
    row-key="id"
    border
    lazy
    :load="load"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }
          ])
        }, 1000)
      }
    },
  }
</script>
```
:::

### サマリー行

数字のテーブルの場合、各列の合計を表示するテーブルのフッターに追加行を追加することができます。
:::demo `show-summary` を `true` に設定することでサマリー行を追加することができる。デフォルトでは、サマリー行の最初のカラムは何も合計せずに常に 'Sum' を表示します (表示するテキストは `sum-text` で設定できます)。もちろん、独自の合計の振る舞いを定義することもできます。そのためには、`summary-method` に配列を返すメソッドを渡すと、配列の各要素がサマリー行の列に表示されます。この例の2番目の表に詳細なデモを示します。
```html
<template>
  <el-table
    :data="tableData"
    border
    show-summary
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="Amount 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="Amount 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="Amount 3">
    </el-table-column>
  </el-table>

  <el-table
    :data="tableData"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="amount1"
      label="Cost 1 ($)">
    </el-table-column>
    <el-table-column
      prop="amount2"
      label="Cost 2 ($)">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="Cost 3 ($)">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Cost';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
</script>
```
:::

### rowspanとcolspan

rowspan と colspan を設定すると、セルをマージすることができます。
:::demo `span-method` 属性を用いてrowspanとcolspanを設定する。これはメソッドを受け取り、現在の行 `row`、現在の列 `column`、現在の行インデックス `rowIndex`、現在の列インデックス `columnIndex` を含むオブジェクトをそのメソッドに渡します。このメソッドは2つの数値の配列を返す必要があり、1つ目の数値は `rowspan`、2つ目の数値は `colspan` です。また、`rowspan` と `colspan` のプロップを持つオブジェクトを返すこともできる。

```html
<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="Amount 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="Amount 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="Amount 3">
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="Amount 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="Amount 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="Amount 3">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
</script>
```
:::

### Custom index

`type=index` カラムで行のインデックスをカスタマイズすることができる。
:::demo 行のインデックスをカスタマイズするには、`el-table-column` の `type=index` で `index` 属性を用いる。これが数値に代入されている場合、すべてのインデックスはその数値のオフセットを持つことになる。また、各インデックス（`0`から始まる）をパラメータに持つメソッドも受け付けており、戻り値はインデックスとして表示される。

```html
<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
</script>
```
:::

### Table Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|----------------|----------------------|-----------|-----------------------|----------|
| data | Table data | array | — | — |
| height | Table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles | string/number | — | — |
| max-height | Table's max-height. The legal value is a number or the height in px. | string/number | — | — |
| stripe | whether Table is striped | boolean | — | false |
| border | whether Table has vertical border | boolean | — | false |
| size | size of Table | string | medium / small / mini | — |
| fit | whether width of column automatically fits its container | boolean | — | true |
| show-header | whether Table header is visible | boolean | — | true |
| highlight-current-row | whether current row is highlighted | boolean | — | false |
| current-row-key | key of current row, a set only prop | string,number | — | — |
| row-class-name | function that returns custom class names for a row, or a string assigning class names for every row | Function({row, rowIndex})/String | — | — |
| row-style | function that returns custom style for a row, or an object assigning custom style for every row | Function({row, rowIndex})/Object | — | — |
| cell-class-name | function that returns custom class names for a cell, or a string assigning class names for every cell | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | function that returns custom style for a cell, or an object assigning custom style for every cell | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | function that returns custom class names for a row in table header, or a string assigning class names for every row in table header | Function({row, rowIndex})/String | — | — |
| header-row-style | function that returns custom style for a row in table header, or an object assigning custom style for every row in table header | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used. | Function(row)/String | — | — |
| empty-text | Displayed text when data is empty. You can customize this area with `slot="empty"` | String | — | No Data |
| default-expand-all | whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data | Boolean | — | false |
| expand-row-keys | set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop | Array | — | |
| default-sort | set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order | Object | `order`: ascending, descending | if `prop` is set, and `order` is not set, then `order` is default to ascending |
| tooltip-effect | tooltip `effect` property | String | dark/light | | dark |
| show-summary | whether to display a summary row | Boolean | — | false |
| sum-text | displayed text for the first column of summary row | String | — | Sum |
| summary-method | custom summary method | Function({ columns, data }) | — | — |
| span-method | method that returns rowspan and colspan | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected. | Boolean | — | true |
| indent      | horizontal indentation of tree data | Number | — | 16 |
| lazy        | whether to lazy loading data           | Boolean| — | —  |
| load        | method for loading child row data, only works when `lazy` is true | Function(row, treeNode, resolve) | — | — |
| tree-props  | configuration for rendering nested data| Object | — | { hasChildren: 'hasChildren', children: 'children' } |

### Table Events
| Event Name | Description | Parameters |
| ---- | ---- | ---- |
| select | triggers when user clicks the checkbox in a row | selection, row |
| select-all | triggers when user clicks the checkbox in table header | selection |
| selection-change | triggers when selection changes | selection |
| cell-mouse-enter | triggers when hovering into a cell| row, column, cell, event |
| cell-mouse-leave | triggers when hovering out of a cell | row, column, cell, event |
| cell-click | triggers when clicking a cell | row, column, cell, event |
| cell-dblclick | triggers when double clicking a cell | row, column, cell, event |
| row-click | triggers when clicking a row | row, column, event |
| row-contextmenu | triggers when user right clicks on a row | row, column, event |
| row-dblclick | triggers when double clicking a row | row, column, event |
| header-click | triggers when clicking a column header | column, event |
| header-contextmenu | triggers when user right clicks on a column header | column, event |
| sort-change | triggers when Table's sorting changes | { column, prop, order } |
| filter-change | column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered | filters |
| current-change | triggers when current row changes | currentRow, oldCurrentRow |
| header-dragend | triggers after changing a column's width by dragging the column header's border | newWidth, oldWidth, column, event |
| expand-change | triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded) | row, (expandedRows \| expanded) |

### Table Methods
| Method | Description | Parameters |
|------|--------|-------|
| clearSelection | used in multiple selection Table, clear user selection | — |
| toggleRowSelection | used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected | row, selected |
| toggleAllSelection | used in multiple selection Table, toggle the selected state of all rows | - |
| toggleRowExpansion | used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed | row, expanded |
| setCurrentRow | used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection. | row |
| clearSort | clear sorting, restore data to the original order | — |
| clearFilter | clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters | columnKeys |
| doLayout | refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout | — |
| sort | sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order | prop: string, order: string |

### Table Slot
| Name | Description |
|------|--------|
| append | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. |

### Table-column Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon.  | string | selection/index/expand | — |
| index | customize indices for each row, works on columns with `type=index` | number, Function(index) | - | - |
| label | column label | string | — | — |
| column-key | column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered | string | string | — | — |
| prop |  field name. You can also use its alias: `property` | string | — | — |
| width | column width | string | — | — |
| min-width | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion | string | — | — |
| fixed | whether column is fixed at left/right. Will be fixed at left if `true` | string/boolean | true/left/right | — |
| render-header | render function for table header of this column | Function(h, { column, $index }) | — | — |
| sortable | whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table | boolean, string | true, false, custom | false |
| sort-method | sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort | Function(a, b) | — | — |
| sort-by | specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal | Function(row, index)/String/Array | — | — |
| sort-orders | the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array | array | the elements in the array need to be one of the following: `ascending`, `descending` and `null` (restores to the original order) | ['ascending', 'descending', null] |
| resizable | whether column width can be resized, works when `border` of `el-table` is `true` | boolean | — | false |
| formatter | function that formats cell content | Function(row, column, cellValue, index) | — | — |
| show-overflow-tooltip | whether to hide extra content and show them in a tooltip when hovering on the cell | boolean | — | false |
| align | alignment | string | left/center/right | left |
| header-align | alignment of the table header. If omitted, the value of the above `align` attribute will be applied | String | left/center/right | — |
| class-name | class name of cells in the column | string | — | — |
| label-class-name | class name of the label of this column | string | — | — |
| selectable | function that determines if a certain row can be selected, works when `type` is 'selection' | Function(row, index) | — | — |
| reserve-selection | whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work | boolean | — | false |
| filters | an array of data filtering options. For each element in this array, `text` and `value` are required | Array[{ text, value }] | — | — |
| filter-placement | placement for the filter dropdown | String | same as Tooltip's `placement` | — |
| filter-multiple | whether data filtering supports multiple options | Boolean | — | true |
| filter-method | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true` | Function(value, row, column) | — | — |
| filtered-value | filter value for selected data, might be useful when table header is rendered with `render-header` | Array | — | — |

### Table-column Scoped Slot
| Name | Description |
|------|--------|
| — | Custom content for table columns. The scope parameter is { row, column, $index } |
| header | Custom content for table header. The scope parameter is { column, $index } |
