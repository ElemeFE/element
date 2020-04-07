import { createVue, triggerEvent, destroyVM, wait, waitImmediate } from '../util';

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
    const createVM = () => {
      vm = createVue({
        template: `
          <el-tooltip ref="tooltip" manual content="abc" v-model="show">
            <button>click</button>
          </el-tooltip>
        `,

        data() {
          return { show: false };
        }
      }, true);
    };

    it('showPopper is false', () => {
      createVM();
      const tooltip = vm.$refs.tooltip;
      triggerEvent(tooltip.$el, 'mouseenter');
      expect(tooltip.showPopper).to.false;
    });
    it('show', async() => {
      createVM();
      const tooltip = vm.$refs.tooltip;

      vm.show = true;
      await vm.$nextTick();
      expect(tooltip.showPopper).to.true;
    });
    it('still show when trigger mouseleave', async() => {
      createVM();
      const tooltip = vm.$refs.tooltip;
      vm.show = true;
      await vm.$nextTick();
      triggerEvent(tooltip.$el, 'mouseleave');
      expect(tooltip.showPopper).to.true;
    });
    it('hidden', async() => {
      createVM();
      const tooltip = vm.$refs.tooltip;
      vm.show = true;
      await vm.$nextTick();
      vm.show = false;
      await vm.$nextTick();
      expect(tooltip.showPopper).to.false;
    });
  });

  it('should show on hover', async() => {
    vm = createVue(`
      <el-tooltip ref="tooltip" content="提示文字">
        <button>click</button>
      </el-tooltip>
    `);
    const tooltip = vm.$refs.tooltip;

    triggerEvent(tooltip.$el, 'mouseenter');
    await waitImmediate();
    expect(tooltip.popperElm).to.exist;
    expect(tooltip.showPopper).to.true;
    triggerEvent(tooltip.$el, 'mouseleave');
    await wait(300);
    expect(tooltip.showPopper).to.false;
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
