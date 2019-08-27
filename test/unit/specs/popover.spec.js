import { createVue, triggerEvent, createTest, destroyVM, wait } from '../util';
import Popover from 'packages/popover';

describe('Popover', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  describe('trigger', () => {
    const createVM = (trigger) => {
      return createVue(`
        <div>
          <el-popover
            ref="popover"
            trigger="${trigger}"
            content="content">
            <button slot="reference">trigger ${trigger}</button>
          </el-popover>
        </div>
      `, true);
    };

    it('click', () => {
      vm = createVM('click');
      const compo = vm.$refs.popover;

      vm.$el.querySelector('button').click();
      expect(compo.showPopper).to.true;
      document.body.click();
      expect(compo.showPopper).to.false;
    });

    it('hover', done => {
      vm = createVM('hover');
      const compo = vm.$refs.popover;
      const button = vm.$el.querySelector('button');

      triggerEvent(button, 'mouseenter');
      expect(compo.showPopper).to.true;
      triggerEvent(button, 'mouseleave');
      setTimeout(_ => {
        expect(compo.showPopper).to.false;
        done();
      }, 250); // 代码里是 200ms
    });

    it('manual', done => {
      vm = createVM('manual');
      const compo = vm.$refs.popover;
      const button = vm.$el.querySelector('button');

      triggerEvent(button, 'mouseenter');
      expect(compo.showPopper).to.false;
      triggerEvent(button, 'mouseleave');
      setTimeout(_ => {
        expect(compo.showPopper).to.false;
        done();
      }, 250); // 代码里是 200ms
    });

    it('focus input in children node', () => {
      vm = createVue(`
        <div>
          <el-popover
            ref="popover"
            trigger="focus"
            content="content">
            <div slot="reference">
              <input type="text" value="trigger focus" />
            </div>
          </el-popover>
        </div>
      `, true);
      const compo = vm.$refs.popover;
      const input = vm.$el.querySelector('input');

      input.focus();
      expect(compo.showPopper).to.true;
      input.blur();
      expect(compo.showPopper).to.false;
    });

    it('focus textarea in children node', () => {
      vm = createVue(`
        <div>
          <el-popover
            ref="popover"
            trigger="focus"
            content="content">
            <div slot="reference">
              <textarea></textarea>
            </div>
          </el-popover>
        </div>
      `, true);
      const compo = vm.$refs.popover;
      const textarea = vm.$el.querySelector('textarea');

      textarea.focus();
      expect(compo.showPopper).to.true;
      textarea.blur();
      expect(compo.showPopper).to.false;
    });

    it('focus input', () => {
      vm = createVue(`
        <div>
          <el-popover
            ref="popover"
            trigger="focus"
            content="content">
            <input type="text" slot="reference" value="trigger focus" />
          </el-popover>
        </div>
      `, true);
      const compo = vm.$refs.popover;
      const input = vm.$el.querySelector('input');

      input.focus();
      expect(compo.showPopper).to.true;
      input.blur();
      expect(compo.showPopper).to.false;
    });

    it('focus button', () => {
      vm = createVM('focus');
      const compo = vm.$refs.popover;
      const button = vm.$el.querySelector('button');

      triggerEvent(button, 'mousedown');
      expect(compo.showPopper).to.true;
      triggerEvent(button, 'mouseup');
      expect(compo.showPopper).to.false;
    });
  });

  describe('create by directive', () => {
    const vm = createVue({
      template: `
        <div>
          <el-popover
            ref="popover1"
            trigger="click"
            content="content">
          </el-popover>
          <button v-popover:popover1>create by directive</button>
        </div>
      `,

      directives: {
        Popover: Popover.directive
      }
    }, true);
    const compo = vm.$refs.popover1;

    it('render', () => {
      expect(vm.$el.querySelector('.el-popover')).to.have.deep.property('textContent').include('content');
    });

    it('triggering click', done => {
      vm.$el.querySelector('button').click();
      expect(compo.popperElm).to.not.exist;
      vm.$nextTick(_ => {
        const popperElm = compo.popperElm;
        expect(getComputedStyle(popperElm).display).to.not.equal('none');
        done();
      });
    });

    it('click outside', () => {
      document.body.click();
      expect(compo.showPopper).to.false;
    });
  });

  describe('create by slot', () => {
    const vm = createVue(`
      <div>
        <el-popover
          ref="popover"
          trigger="click"
          content="content">
          <button slot="reference">create by slot</button>
        </el-popover>
      </div>
    `, true);
    const compo = vm.$refs.popover;

    it('render', () => {
      expect(vm.$el.querySelector('.el-popover')).to.have.deep.property('textContent').include('content');
    });

    it('triggering click', done => {
      vm.$el.querySelector('button').click();
      expect(compo.popperElm).to.not.exist;
      vm.$nextTick(_ => {
        const popperElm = compo.popperElm;
        expect(getComputedStyle(popperElm).display).to.not.equal('none');
        done();
      });
    });

    it('click outside', () => {
      document.body.click();
      expect(compo.showPopper).to.false;
    });
  });

  it('show/hide events', done => {
    vm = createVue({
      template: `
        <div>
          <el-popover
            ref="popover"
            trigger="click"
            @show="handleShow"
            @hide="handleHide"
            content="content">
            <button slot="reference">trigger</button>
          </el-popover>
        </div>
      `,

      methods: {
        handleShow() {
          this.trigger = true;
        },
        handleHide() {
          this.trigger = false;
        }
      },

      data() {
        return {
          trigger: false
        };
      }
    }, true);

    vm.$el.querySelector('button').click();
    setTimeout(_ => {
      expect(vm.trigger).to.true;
      document.body.click();
      setTimeout(_ => {
        expect(vm.trigger).to.false;
        done();
      }, 50);
    }, 50);
  });

  describe('open/close delays', () => {
    it('100ms open / instant close', async() => {
      vm = createVue(`
        <div>
          <el-popover
            ref="popover"
            content="content"
            trigger="hover"
            :open-delay="100"
            :close-delay="0">
            <button slot="reference">reference</button>
          </el-popover>
        </div>
      `, true);
      const compo = vm.$refs.popover;
      const button = vm.$el.querySelector('button');

      triggerEvent(button, 'mouseenter');
      expect(compo.showPopper).to.false;
      await wait(150);
      expect(compo.showPopper).to.true;
      triggerEvent(button, 'mouseleave');
      expect(compo.showPopper).to.false;
    });

    it('instant open / 100ms close', async() => {
      vm = createVue(`
        <div>
          <el-popover
            ref="popover"
            content="content"
            trigger="hover"
            :open-delay="0"
            :close-delay="100">
            <button slot="reference">reference</button>
          </el-popover>
        </div>
      `, true);
      const compo = vm.$refs.popover;
      const button = vm.$el.querySelector('button');

      triggerEvent(button, 'mouseenter');
      expect(compo.showPopper).to.true;
      triggerEvent(button, 'mouseleave');
      expect(compo.showPopper).to.true;
      await wait(150);
      expect(compo.showPopper).to.false;
    });
  });

  it('destroy event', () => {
    vm = createTest(Popover, {
      reference: document.createElement('div'),
      popper: document.createElement('div')
    });
    expect(() => vm.$destroy(true)).not.throw();
  });
});
