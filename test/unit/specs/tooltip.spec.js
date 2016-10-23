import { createVue, triggerEvent } from '../util';

describe('Tooltip', () => {
  it('create', () => {
    const vm = createVue(`
      <el-tooltip content="提示文字">
        <button>click</button>
      </el-tooltip>`);

    expect(vm.$el.querySelector('.el-tooltip__popper')).to.have.property('textContent', '提示文字');
  });

  describe('manual', () => {
    const vm = createVue({
      template: `
        <el-tooltip ref="tooltip" manual content="abc" v-model="show">
          <button>click</button>
        </el-tooltip>
      `,

      data() {
        return { show: false };
      }
    }, true);
    const tooltip = vm.$refs.tooltip;

    it('showPopper is false', () => {
      triggerEvent(tooltip.$el, 'mouseenter');
      expect(tooltip.showPopper).to.false;
    });
    it('show', done => {
      vm.show = true;
      vm.$nextTick(_ => {
        expect(tooltip.showPopper).to.true;
        done();
      });
    });
    it('still show when trigger mouseleave', () => {
      triggerEvent(tooltip.$el, 'mouseleave');
      expect(tooltip.showPopper).to.true;
    });
    it('hidden', done => {
      vm.show = false;
      vm.$nextTick(_ => {
        expect(tooltip.showPopper).to.false;
        done();
      });
    });
  });

  describe('hover', () => {
    const vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字">
        <button>click</button>
      </el-tooltip>
    `);
    const tooltip = vm.$refs.tooltip;

    triggerEvent(tooltip.$el, 'mouseenter');
    it('popperElm is exist', () => expect(tooltip.popperElm).to.exist);
    it('showPopper is true', () => expect(tooltip.showPopper).to.true);
    it('close popper', () => {
      triggerEvent(tooltip.$el, 'mouseleave');
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
