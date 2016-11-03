import { createVue, triggerEvent } from '../util';
import Sync from 'element-ui/src/utils/sync';

const Test = {
  template: `<div class="sync-test" v-show="visible">
    <button @click="visible = false">Hide</button>
    A test component.
  </div>`,
  data() {
    return {
      visible: true
    };
  }
};

describe('Sync', () => {
  it('should not throw when use incorrectly', () => {
    sinon.stub(window.console, 'warn');

    createVue({
      template: `
        <test v-sync>
        </test>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true
        };
      }
    });

    expect(window.console.warn.callCount).to.equal(1);

    createVue({
      template: `
        <test v-sync:visible>
        </test>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true
        };
      }
    });

    expect(window.console.warn.callCount).to.equal(2);

    createVue({
      template: `
        <test v-sync.visible>
        </test>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true
        };
      }
    });

    expect(window.console.warn.callCount).to.equal(3);

    createVue({
      template: `
        <div v-sync:visible="myVisible">
        </div>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true
        };
      }
    });

    expect(window.console.warn.callCount).to.equal(4);

    window.console.warn.restore();
  });

  it('context variable should change when inner component variable change', (done) => {
    const vm = createVue({
      template: `
        <test v-sync:visible="myVisible">
        </test>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true
        };
      }
    }, true);

    triggerEvent(vm.$el.querySelector('.sync-test button'), 'click', {});
    setTimeout(() => {
      expect(vm.myVisible).to.be.false;
      done();
    }, 10);
  });

  it('inner component variable should change when context variable change', (done) => {
    const vm = createVue({
      template: `
        <test ref="test" v-sync:visible="myVisible">
        </test>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true
        };
      }
    }, true);

    vm.myVisible = false;

    setTimeout(() => {
      expect(vm.$refs.test.visible).to.be.false;
      expect(vm.$refs.test.$el.style.display).to.equal('none');
      done();
    }, 10);
  });

  it('should unwatch expression after destroy', () => {
    const vm = createVue({
      template: `
        <test ref="test" v-sync:visible="myVisible" v-if="createTest">
        </test>
      `,
      components: { Test },
      directives: { Sync },
      data() {
        return {
          myVisible: true,
          createTest: false
        };
      }
    });

    const beforeBindCount = vm._watchers.length;
    vm.createTest = true;
    const delay = 50;
    setTimeout(() => {
      const afterBindCount = vm._watchers.length;
      expect(afterBindCount).to.be.equal(beforeBindCount + 1);

      vm.createTest = false;
      setTimeout(() => {
        const afterDestroyCount = vm._watchers.length;
        expect(afterDestroyCount).to.be.equal(beforeBindCount);
      }, delay);
    }, delay);
  });
});
