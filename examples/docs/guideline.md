<section class="guideline no-toc">
  <h2>选择合适的导航</h2>
  <p>选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适(方向不明确)，以下是「侧栏导航」和「顶部导航」的区别。</p>

  <h3>侧栏导航：</h3>
  <p>可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。</p>

  <table>
    <tbody>
      <tr>
        <td>一级类目</td>
        <td>
          <lightbox :visible.sync="showIndexDialog1">
            <img src="~examples/assets/images/guide1.png" alt="一级类目">
          </lightbox>
          <img @click="showIndexDialog1 = true" src="~examples/assets/images/guide1.png" alt="一级类目">
          <p>适用于结构简单的网站；只有一级页面时，不需要使用面包屑。</p>
        </td>
      </tr>
      <tr>
        <td>二级类目</td>
        <td>
          <lightbox :visible.sync="showIndexDialog2">
            <img src="~examples/assets/images/guide2.png" alt="二级类目">
          </lightbox>
          <img @click="showIndexDialog2 = true" src="~examples/assets/images/guide2.png" alt="二级类目">
          <p>侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。</p>
        </td>
      </tr>
      <tr>
        <td>三级类目</td>
        <td>
          <lightbox :visible.sync="showIndexDialog3">
            <img src="~examples/assets/images/guide3.png" alt="三级类目">
          </lightbox>
          <img @click="showIndexDialog3 = true" src="~examples/assets/images/guide3.png" alt="三级类目">
          <p>适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。</p>
        </td>
      </tr>
    </tbody>
  </table>

  <h3>顶部导航：</h3>
  <p>顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。</p>

  <table>
    <tbody>
      <tr>
        <td>一级类目</td>
        <td>
          <lightbox :visible.sync="showIndexDialog4">
            <img src="~examples/assets/images/guide4.png" alt="一级类目">
          </lightbox>
          <img @click="showIndexDialog4 = true" src="~examples/assets/images/guide4.png" alt="一级类目">
          <p>适用于导航较少，页面篇幅较长的网站；</p>
        </td>
      </tr>
    </tbody>
  </table>
</section>

<script>
  import Lightbox from 'examples/components/lightbox';

  module.exports = {
    name: 'guideline',

    components: {
      Lightbox
    },

    data() {
      return {
        showIndexDialog1: false,
        showIndexDialog2: false,
        showIndexDialog3: false,
        showIndexDialog4: false
      };
    }
  };
</script>

<style lang="css">
  .guideline {
    img {
      width: 500px;
      display: block;
      margin-bottom: 19px;
      box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    }

    table {
      background-color: #f8f8f8;
      width: 100%;

      p {
        margin: 0;
        width: 500px;
      }
    }

    td {
      padding: 36px;
    }

    tr {
      border-bottom: 1px solid #e4e4e4;

      &:last-child {
        border-bottom: 0;
      }
    }

    td:first-child {
      background-color: #f3f3f3;
      width: 21%;
      min-width: 100px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
  }
</style>