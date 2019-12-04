import { createVue, triggerEvent, destroyVM } from '../util';

describe('Tooltip', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字">
        <button>click</button>
      </el-tooltip>`);

    vm.$nextTick(_ => {
      expect(vm.$refs.tooltip.popperVM.$el).to.have.property('textContent', '提示文字');
      done();
    });
  });

  it('custom popper class', done => {
    vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字" popper-class="custom-popper">
        <button>click</button>
      </el-tooltip>`);
    vm.$nextTick(_ => {
      expect(vm.$refs.tooltip.popperVM.$el.classList.contains('custom-popper')).to.true;
      done();
    });
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
    it('close popper', done => {
      triggerEvent(tooltip.$el, 'mouseleave');
      setTimeout(() => {
        expect(tooltip.showPopper).to.false;
        done();
      }, 300);
    });
  });

  it('light mode', done => {
    vm = createVue(`
      <el-tooltip ref="tooltip" content="abc" effect="light">
        <button>abc</button>
      </el-tooltip>
    `);
    vm.$nextTick(_ => {
      expect(vm.$refs.tooltip.popperVM.$el.classList.contains('is-light')).to.exist;
      done();
    });
  });
  it('hide after', done => {
    vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字" :hide-after="300">
        <button>click</button>
      </el-tooltip>`);
    const tooltip = vm.$refs.tooltip;
    vm.$nextTick(_ => {
      triggerEvent(tooltip.$el, 'mouseenter');
      setTimeout(() => {
        expect(tooltip.showPopper).to.be.true;
        setTimeout(() => {
          expect(tooltip.showPopper).to.be.false;
          done();
        }, 300);
      }, 100);
    });
  });
  it('remove focus', done => {
    vm = createVue(`
    <el-tooltip ref="tooltip" content="提示文字" :hide-after="300">
      <button>click</button>
    </el-tooltip>`);
    const tooltip = vm.$refs.tooltip;
    vm.$nextTick(_ => {
      triggerEvent(tooltip.$el, 'mouseenter');
      setTimeout(() => {
        tooltip.focusing = true;
        tooltip.$el.click();
        setTimeout(() => {
          expect(tooltip.showPopper).to.be.false;
          done();
        }, 300);
      }, 100);
    });
  });
  it('reference element focus', done => {
    vm = createVue(`
    <el-tooltip ref="tooltip" content="提示文字">
      <button>click</button>
    </el-tooltip>`);
    const tooltip = vm.$refs.tooltip;
    vm.$nextTick(_ => {
      triggerEvent(tooltip.$el, 'focus');
      setTimeout(() => {
        expect(tooltip.showPopper).to.be.true;
        expect(tooltip.focusing).to.be.true;
        triggerEvent(tooltip.$el, 'blur');
        setTimeout(() => {
          expect(tooltip.showPopper).to.be.false;
          expect(tooltip.focusing).to.be.false;
          done();
        }, 300);
      }, 100);
    });
  });
  it('custom tabindex', () => {
    vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字" :tabindex="-1">
        <button>click</button>
      </el-tooltip>
    `, true);
    expect(vm.$el.getAttribute('tabindex')).to.be.equal('-1');
  });
});
