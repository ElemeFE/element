import { createVue } from '../util';

describe('Tooltip', () => {
  it('create', () => {
    const vm = createVue(`
      <el-tooltip content="提示文字">
        <button>click</button>
      </el-tooltip>`);

    expect(vm.$el.querySelector('.el-tooltip__popper')).to.have.property('textContent', '提示文字');
  });

  describe('hover', () => {
    const vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字">
        <button>click</button>
      </el-tooltip>
    `);
    const tooltip = vm.$refs.tooltip;

    tooltip.handleShowPopper();
    it('popperElm is exist', () => expect(tooltip.popperElm).to.exist);
    it('showPopper is true', () => expect(tooltip.showPopper).to.true);
    it('close popper', () => {
      tooltip.handleClosePopper();
      expect(tooltip.showPopper).to.false;
    });
  });

  it('light mode', () => {
    const vm = createVue(`
      <el-tooltip content="abc" effect="light">
        <button>abc</button>
      </el-tooltip>
    `);
    expect(vm.$el.querySelector('.is-light')).to.exist;
  });
});
