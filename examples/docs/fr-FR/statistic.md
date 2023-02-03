## Statistic  

Used to highlight a certain number or group of numbers, such as showing a numerical value, such as a dollar amount, ranking, etc.

Countdown mode


### Basic usage
The component provides a thousandth place display, but you can use rate to set the 10,000th place, and so on
:::demo
```html
<template>
  <div >
      <el-row :gutter="20">
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" :value="value2" :title="title"></el-statistic>
          </div>
        </el-col>
            <el-col :span="6">
          <div>
            <el-statistic  title="Gender Distribution">
              <template slot="formatter">
                  456/2
              </template>

            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-statistic group-separator="," :precision="2" decimal-separator="." :value="value1" :title="title">
              <template slot="prefix">
                <i class="el-icon-s-flag" style="color: red"></i>
              </template>
              <template slot="suffix">
                <i class="el-icon-s-flag" style="color: blue"></i>
              </template>
            </el-statistic>
          </div>
    
    </el-col>
    <el-col :span="6">
      <div>
        <el-statistic :value="like ? 521 : 520" title="Feedback">
          <template slot="suffix">
            <span @click="like = !like" class="like">
              <i class="el-icon-star-on" style="color:red" v-show="!!like"></i>
              <i class="el-icon-star-off"  v-show="!like"></i>
            </span> </template>
        </el-statistic>
      </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      like: true,
      value1: 4154.564,
      value2: 2222,
      title: "Growth this year",
      input: "Hello Element UI!",
    };
  },
};
</script>
<style lang="scss" >
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>
```
:::


### 倒计时
:::warning
Suspend is tentative, it ** just pauses the countdown, not the time, because value points to a future time node **

If you need to add time to the original, please note that the overall time (the amount of time added and the original time) must be a ** future ** time node, otherwise it is still the end of the countdown
:::
:::demo Providing a future time via 'value' will enable the countdown function
```html
<template>
  <div >
    <el-row :gutter="20">
  <el-col :span="14">
     <div style="width: 100%; display: inline-block; ">
      <el-statistic :value="deadline2"  time-indices title="商品降价">
        <template slot="suffix">
          The rush is about to begin
        </template>
      </el-statistic>
    </div>
    <div style="width: 100%; display: inline-block; margin-top: 50px; ">
      <el-statistic @finish="hilarity" :value="deadline3"   time-indices title="The Value of Time">
        <template slot="suffix">
          <el-button type="primary " size="small" @click="add">add 10 second</el-button>
        </template>
      </el-statistic>
    </div>
  
  </el-col>
  <el-col :span="10">
        <el-card  shadow="hover"  style="width: 100%;">
  <div slot="header" class="clearfix">
    <span>文嘉《明日歌》</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="clickFn">暂停</el-button>
  </div>
  <div style="font-size: 18px;text-align: center; " >明日复明日</div>
  <div style="font-size: 18px;text-align: center;" >明日何其多</div>

  <div style="font-size: 18px;text-align: center;" >我生待明日</div>

  <div style="font-size: 18px;text-align: center;" >万事成蹉跎</div>
<div style="margin-top: 40px;"></div>
  <el-statistic ref="statistic" @finish="hilarity" format="HH:mm:ss" :value="deadline4" title="Distance to Tomorrow:" time-indices > </el-statistic>
</el-card>
  </el-col>
</el-row>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      format:'HH小时:mm:ss:SSS',
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2,
      deadline2: Date.now() + 1000 * 60 * 60 * 8,
      deadline3: Date.now() + 1000 *  60 *30,
        deadline4: Date.now() + (new Date().setHours(23,59,59)-Date.now()) ,
    };
  },
  methods: {
    hilarity() {
      this.$notify({
          title: 'Prompt',
          message: "Time is up, do you know that an inch of gold can't buy an inch of time?",
          duration: 0
        });
    },
        clickFn(){
       this.$refs.statistic.suspend( this.stop)
         this.stop=!this.stop
    },
    add(){
      this.deadline3= this.deadline3+ 1000 * 10
    }
  }
};
</script>
<style lang="scss" >
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>
```
:::




### Statistic Attributes

| Attribute          | Description            | Type            | Accepted Values                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value            | Numerical content                 | string \| number    | -          | -       |
| decimal-separator | Setting the decimal point            | string                  | -      | .       |
| formatter        | Custom numerical presentation| v-slot \|({value}) => VNode | -   | -      |
| group-separator   | Sets the thousandth identifier              | string           | -             | ,       |
| precision        | numerical precision      | number                | -        | 0      |
| prefix           | Sets the prefix of a number          | string \| v-slot | -             | -       |
| suffix           |Sets the suffix of a number          | string \| v-slot     | -         | -       |
| title            | 	Numeric titles               | string \| v-slot   | -           | -       |
| value-style       | Styles numeric values          | style             | -            | -       |
| rate       | Set the ratio          | number             | -            | 1000       |


### Statistic Slots
| Name | Description |
|------|--------|
| prefix | Numeric prefix |
| suffix | Suffixes for numeric values |
| formatter | Numerical content |
| title | Numeric titles |


### Statistic.Countdown  Attributes

| Attribute          | Description            | Type            | Options                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| time-indices       | Whether to enable the countdown function     | boolean     | true\|false                        | false      |
| value         | Required value, enter the bound value   | string  | — | — |
| format         | Formatting the countdown display   | string  | — | 'HH:mm:ss' |
### Statistic.Countdown Events
| Method | Description | Parameters |
|---------|--------|---------|
| change | Enable in the 'countdown' function | (value:  Date) |
| finish | Launched after the 'countdown' is complete | (value: boolean) |

### Statistic Methods
| Method | Description | Parameters |CallBack|
| ---- | ---- | ---- |---- |
| suspend | Pause the countdown|(value:boolean) |(value:  Date) |


