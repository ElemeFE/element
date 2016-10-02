/**
 * button
 * @module components/basic/menu
 * @desc 用于按钮组
 * @param {string} label - 名称
 */
export default {
  name: 'ElButtonGroup',

  functional: true,

  render(h, { slots, data }) {
    return (
      <div
        class="el-button-group"
        { ...data }
        { ...{ on: data.nativeOn } }>
        { slots().default }
      </div>
    );
  }
};
