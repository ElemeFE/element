import { createVue } from '../util';

describe('Tooltip', () => {
  it('create', () => {
    const vm = createVue(`
      <el-tooltip content="提示文字">
        <button>click</button>
      </el-tooltip>`);

    expect(vm.$el.querySelector('.el-tooltip__popper')).to.exist;
    expect(vm.$el.querySelector('.el-tooltip__popper').textContent).to.equal('提示文字');
  });

  it('hover', done => {
    const vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字">
        <button>click</button>
      </el-tooltip>
    `, true);
    const tooltip = vm.$refs.tooltip;

    // trigger mouseenter
    tooltip.handleShowPopper();

    expect(tooltip.popperElm).to.not.exist;
    setTimeout(_ => {
      expect(tooltip.popperElm).to.exist;
      expect(tooltip.popperElm.style.display).to.not.equal('none');

      // trigger mouseleave
      tooltip.handleClosePopper();

      setTimeout(_ => {
        expect(tooltip.popperElm.style.display).to.equal('none');
        done();
      }, 500);
    }, 150);
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
