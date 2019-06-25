## Frame 骨架

用于构建一个视图，界面，应用的结构组件。

### 基本用法

:::demo frame 组件分为主体，头部，底部，左侧，右侧五个部分。

```html
<template>
<div class="demo">
    <el-frame class="demo-el-frame"
    style="height: 300px; width:100%"
    :fillHeader="fillHeader"
    :fillFooter="fillFooter"
    :transition="transition"
    :header-size="headerSize"
    :footer-size="footerSize"
    :left-size="leftSize"
    :right-size="rightSize">
      <div style="height: 100%;width: 100%;background-color: #E7E7E7"></div>
      <div v-if="showHeader" style="height:100%; background-color: #409EFF" class="demo-el-frame-header" slot="header"></div>
      <div v-if="showFooter" style="height:100%; background-color: #409EFF" class="demo-el-frame-footer" slot="footer"></div>
      <div v-if="showLeft" style="height:100%;width:100%; background-color: #919191" class="demo-el-frame-left" slot="left"></div>
      <div v-if="showRight" style="height:100%;width:100%; background-color: #919191" class="demo-el-frame-right" slot="right"></div>
    </el-frame>
    
    <div class="demo-handler" style="margin-top: 40px">
            <el-form ref="form" inline label-width="80px">
                <el-form-item label="头部填充">
                   <el-radio-group v-model="fillHeader" size="mini">
                     <el-radio-button label="both"></el-radio-button>
                     <el-radio-button label="none"></el-radio-button>
                     <el-radio-button label="left"></el-radio-button>
                     <el-radio-button label="right"></el-radio-button>
                   </el-radio-group>
                </el-form-item>
                <el-form-item label="底部填充">
                  <el-radio-group v-model="fillFooter" size="mini">
                    <el-radio-button label="both"></el-radio-button>
                    <el-radio-button label="none"></el-radio-button>
                    <el-radio-button label="left"></el-radio-button>
                    <el-radio-button label="right"></el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="过渡效果">
                  <el-switch v-model="transition"></el-switch>
                </el-form-item>
                <el-form-item label="切换头部">
                  <el-switch v-model="showHeader"></el-switch>
                </el-form-item>
                <el-form-item label="切换底部">
                  <el-switch v-model="showFooter"></el-switch>
                </el-form-item>
                <el-form-item label="切换左栏">
                  <el-switch v-model="showLeft"></el-switch>
                </el-form-item>
                <el-form-item label="切换右栏">
                  <el-switch v-model="showRight"></el-switch>
                </el-form-item>
            </el-form>
    </div>
  </div>
</template>

<script>
export default {
	data () {
		return {
			fillHeader: 'both',
                        fillFooter: 'both',
			showHeader: true,
			showFooter: true,
			showLeft: true,
			showRight: true,
                        headerSize: 50,
                        footerSize: 50,
                        leftSize: 100,
                        rightSize: 100,
                        transition: true
		}
	}
}
</script>

```
:::

### 常见布局

:::demo 常见布局

```html
<template>
  <div class="demo">
    <el-frame class="demo-el-frame demo-shadow"
    style="height: 500px; width:100%"
    :fillHeader="fillHeader"
    :fillFooter="fillFooter"
    :transition="transition"
    :header-size="headerSize"
    :footer-size="footerSize"
    :left-size="leftSize">
      <div style="padding: 20px;font-size:14px;color:gray;">
      一位形状古怪、愁容满面的瘦高骑上， 披挂着一副残缺不全的盔甲，骑着一匹 瘦骨磷峋、无精打采的驽马；他的身旁 是一位装束粗俗、机灵乐观的矮胖侍 从，骑着一头苍老矮小的灰色毛驴。这 一高一矮、一瘦一胖的主仆二人仗义行 侠，历经无数荒诞离奇之冒险。这就是 塞万提斯在《唐吉诃德》中写的。《唐 吉诃德》是文艺复兴时期的现实主义巨 作，它以深刻鲜明的人民性、性格突出 的人物形象、生动明快的语言和丰富多 变的艺术手法开创了近代小说的新篇 章。 16世纪，写作风格怪诞夸张的游侠小说 在西班牙极为盛行。一个名叫基罕诺的 高贵的绅士住在阿拉贡和卡斯蒂尔的中 间地带，他对那些荒谬无聊的书刊入了 迷，为买书而挥霍尽了钱财。他的脑子 里塞满了妖术、吵闹、搏斗、挑战，伤 害、迷药、怨言、爱慕。懊恼、巨人、 堡垒、被俘的姑娘、骁勇胆大的拯救和 各式各样的豪侠壮举，在他看来，这都 是确凿可靠的权威历史。每个旅店老板 都是大财主，每个骡夫皆是骑士。他决 定为了自己的荣誉和全世界而效力，他 必须成为游侠，周游环球，纠正谬误， 解救被俘的公主，最后赢得特拉庇昌达 的王位。 他把名字改为唐吉诃德，却被一个卑鄙 无耻的客店老板授予骑士称号。他把那 家客店看作是一座城堡，它筑有四个角 楼，还有银光闪闪的尖塔。为了把他的 钱包装得满满当当，他卖了一座宅子， 又典当了另一座，并从一个朋友处借来 大笔款子。当他那位讲求实际的管家和 他那位美丽的侄女、连同他的邻居、理 发师和助理牧师一起认为必须用烧掉他 的藏书的法子来整治他时，他这才被说 服了，让一个巫师拿走了他的书，可这 一来他比以前更疯狂了。他擦洗了他的 祖先的一顶破头盔，用一块纸板将帽舌 加以修补后，再包上薄铁片。就此穿戴 好之后，他骑上他的驽马出发了。那匹 马的肋骨突出，好像一艘船的框架，后 面跟随着一个叫作桑丘·潘沙的乡下 佬，是讲好了让他充当这位骑上的侍从 的。 他们雄赳赳地出发了。这位个子高高、 脸色枯槁、下巴突出的骑士，骑着一匹 瘦骨磷峋的小马，挥着长矛，挎着长 剑。他的眼睛神采奕奕，并且梦想着他 美丽的夫人——他把她叫作杜尔西内 娅。托勒索——那个又矮又胖、大腹便 便、腰身长长的仆人，携带着帆布行囊 和一个皮水壶，骑在一头小毛驴上。 在蒙铁尔郊原，屹立着许多大风车，唐 吉诃德把它们视为凶暴的巨人，准备对 它们发起战斗，尽管桑丘说风车偌大的 翅膀只是轮叶，他还是用踢马齿狠踢着 那匹驽马的瘦棱棱的肋腹，握着长矛， 冲入了那场遭遇战。风刮得很狂烈，骑 士和马顿时被掀倒在地上，他（它）们 一动不动地躺在那儿，像死了一般。他 的长矛摔得支离破碎。桑丘赶忙过去救 援他的主人，却发现他已不能动弹。不 过他过了一会儿又准备再继续前进了。 他们接下来的冒险是看到两个骑着类似 单峰骆驼一般高大的骡子的僧侣和一辆 马车走在一起，车里面坐着一位女士， 由几个骑马的人护送。唐吉诃德想象的 是这些冒险者俘虏了一位公主，随即用 最傲慢的口气吩咐他们释放她。然后不 作进一步磋商，他就向那两个僧侣冲了 上去，其中一个跑开了，另一个从骡子 上摔了下来。桑丘机灵地从驴子上溜下 来，开始抢劫那个倒霉的人。当他正公 然掠夺这些战利品时，队伍里的两个赶 驴人追赶上了他，一把一把地揪掉他的 胡子，打伤了他，使他不省人事。唐吉 诃德跟女士的一个卫兵进行了一场殊死 的搏斗，他给劈掉了半个头盔和一只耳 朵。这位骑士却毫不畏惧，步步紧逼， 去夺取胜利。但正当他将作最后一击 时，那位受惊的女士恳求他住手。他当 即答应了，条件是败阵的敌人应该亲自 到绝代佳人杜尔西内娅的面前来谢罪。 实际上，她并非别人，而是整个拉曼查 地区的一个最丰满的女人，她以善于腌 制猪肉而出名，而且对她这位热情的邻 人从来就不屑......
      </div>
      <div style="height:100%; background-color: #409EFF;display: flex;align-items: center" slot="header">
        <el-button @click="showLeft = !showLeft" style="margin-left: 10px" size="small" >切换左菜单</el-button>
        <el-button @click="leftSize = leftSize === 200 ? 100: 200" size="small" >左菜单尺寸</el-button>
          <el-button @click="showFooter = !showFooter" size="small" >切换底部</el-button>
      </div>
      <div v-if="showLeft" style="height:100%;width: 100%;overflow-y: auto;overflow-x: hidden" class="demo-shadow"  slot="left">
        <div style="padding:10px;cursor: pointer"  :key="item" v-for="item in 20">菜单{{item}}</div>
      </div>
      <div v-if="showFooter" slot="footer" style="height:100%; background-color: #409EFF;display: flex;align-items: center">

      </div>
    </el-frame>
  </div>
</template>

<script>
export default {
	data () {
		return {
			fillHeader: 'none',
                        fillFooter: 'both',
			showHeader: true,
			showFooter: true,
			showLeft: true,
			showRight: true,
                        headerSize: 45,
                        footerSize: 30,
                        leftSize: 200,
                        rightSize: 100,
                        transition: true
		}
	}
}
</script>

```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fillHeader | 头部布局类型 | string | 'left'/'right'/'both'/'none' | 'both' |
| fillFooter | 底部布局类型 | string | 'left'/'right'/'both'/'none' | 'both' |
| headerSize | 头部尺寸 | Size | - | 50 |
| footerSize | 底部尺寸 | Size | - | 50 |
| leftSize | 左翼尺寸 | Size | - | 100 |
| rightSize | 右翼尺寸 | Size | - | 100 |
| headerIndex | 头部层级 | number | - | 1 |
| footerIndex | 底部层级 | number | - | 1 |
| leftIndex | 左翼层级 | number | - | 1 |
| rightIndex | 右翼层级 | number | - | 1 |
| headerFloat | 头部悬浮 | boolean | - | false |
| footerFloat | 底部悬浮 | boolean | - | false |
| leftFloat | 左翼悬浮 | boolean | - | false |
| rightFloat | 右翼悬浮 | boolean | - | false |
| transition | 部件过渡效果  | boolean | - | false |
### Slots
| 插槽 名称 | 说明  |
|---------- |-------- |
|  | default| 默认插槽 |
| header | 头部 |
| footer | 底部 |
| left | 左翼 |
| right | 右翼 |
