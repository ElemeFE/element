## タイムライン

タイムラインを視覚的に表示します。

### 基本的な使い方

タイムラインは、昇順または降順で複数のアクティビティに分割することができます。タイムスタンプは他のコンポーネントと区別するための重要な機能です。ステップとの違いに注意してください。

:::demo
```html
<div class="block">
  <div class="radio">
    Order: 
    <el-radio-group v-model="reverse">
      <el-radio :label="true">descending</el-radio>
      <el-radio :label="false">ascending</el-radio>
    </el-radio-group>
  </div>

  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>

<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'Event start',
          timestamp: '2018-04-15'
        }, {
          content: 'Approved',
          timestamp: '2018-04-13'
        }, {
          content: 'Success',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
</script>
```
:::

### カスタムノード

サイズ、色、アイコンはノード内でカスタマイズ可能です。

:::demo
```html
<div class="block">
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>

<script>
  export default {
    data() {
      return {
        activities: [{
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Default node',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
</script>
```
:::

### カスタムタイムスタンプ

タイムスタンプは、コンテンツが大きい場合にコンテンツの上部に配置することができます。

:::demo
```html
<div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
```
:::

### タイムライン属性
| Attribute      | Description    | Type      | Accepted Values | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| reverse | ノードが昇順か降順かを指定、デフォルトは昇順です。 | boolean | — | false |

### タイムライン-アイテム属性
| Attribute      | Description    | Type      | Accepted Values | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| timestamp     | タイムスタンプコンテンツ | string  | - | — |
| hide-timestamp  | タイムスタンプを表示するかどうか | boolean | — | false |
| placement | タイムスタンプ位置 | string | top / bottom | bottom |
| type | ノード型 | string | primary / success / warning / danger / info | - |
| color | ノードの背景色 | string | hsl / hsv / hex / rgb | - |
| size | ノードサイズ | string | normal / large | normal |
| icon | アイコンクラス名 | string | — | - |

### タイムラインアイテムスロット
| name | Description |
|------|--------|
| — | タイムライン項目のカスタムコンテンツ |
| dot | カスタム定義ノード |
