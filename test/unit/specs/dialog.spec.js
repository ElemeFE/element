import { createVue, destroyVM, waitImmediate } from '../util';

describe('Dialog', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible="visible"></el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      }
    }, true);
    const dialog = vm.$children[0];
    setTimeout(() => {
      expect(document.querySelector('.v-modal')).to.exist;
      expect(vm.$el.querySelector('.el-dialog__title').textContent).to.equal('dialog test');
      expect(dialog.$el.style.display).to.not.equal('none');
      done();
    }, 10);
  });

  it('render correct content', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible="visible">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click.native="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click.native="dialogVisible = false">确定</el-button>
            </span>
          </el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      }
    }, true);
    setTimeout(() => {
      const footerBtns = vm.$el.querySelectorAll('.el-dialog__footer .el-button');
      expect(vm.$el.querySelector('.el-dialog__body span').textContent).to.equal('这是一段信息');
      expect(footerBtns.length).to.equal(2);
      expect(footerBtns[0].querySelector('span').textContent).to.equal('取消');
      expect(footerBtns[1].querySelector('span').textContent).to.equal('确定');
      done();
    }, 100);
  });

  it('append to body', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" append-to-body :visible="visible"></el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      }
    }, true);
    const dialog = vm.$children[0];
    setTimeout(() => {
      expect(dialog.$el.parentNode).to.equal(document.body);
      done();
    }, 10);
  });

  it('open and close', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible.sync="visible">
            <span>这是一段信息</span>
          </el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: false
        };
      }
    }, true);
    const dialogEl = vm.$children[0].$el;
    expect(getComputedStyle(dialogEl).display).to.equal('none');
    vm.visible = true;
    setTimeout(() => {
      expect(getComputedStyle(dialogEl).display).to.not.equal('none');
      vm.visible = false;
      setTimeout(() => {
        expect(getComputedStyle(dialogEl).display).to.equal('none');
        done();
      }, 400);
    }, 50);
  });

  describe('props', () => {
    const getDialogVm = (props, options) => {
      return createVue(Object.assign({
        template: `
          <div>
            <el-dialog ${ props } :title="title" :visible="visible">
              <span>这是一段信息</span>
            </el-dialog>
          </div>
        `,

        data() {
          return {
            title: 'dialog test',
            visible: true
          };
        }
      }, options), true);
    };

    it('fullscreen', () => {
      vm = getDialogVm('fullscreen width="40%"');
      const dialogEl = vm.$el.querySelector('.el-dialog');
      expect(dialogEl.classList.contains('is-fullscreen')).to.true;
      expect(dialogEl.style.width).to.be.empty;
    });

    it('top', () => {
      vm = getDialogVm('top="100px"');
      expect(vm.$el.querySelector('.el-dialog').style.marginTop).to.equal('100px');
    });

    it('custom-class', () => {
      vm = getDialogVm('custom-class="my-dialog"');
      expect(vm.$el.querySelector('.el-dialog').classList.contains('my-dialog')).to.true;
    });
  });

  it('events', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog
            @open="handleOpen"
            @opened="handleOpened"
            @close="handleClose"
            @closed="handleClosed"
            :title="title"
            :visible.sync="visible">
            <span>这是一段信息</span>
          </el-dialog>
        </div>
      `,

      methods: {
        handleOpen() {
          this.state = 'open';
        },

        handleOpened() {
          this.animationState = 'opened';
        },

        handleClose() {
          this.state = 'close';
        },

        handleClosed() {
          this.animationState = 'closed';
        }
      },

      data() {
        return {
          state: '',
          animationState: '',
          title: 'dialog test',
          visible: false
        };
      }
    }, true);
    vm.visible = true;
    setTimeout(() => {
      expect(vm.state).to.equal('open');
      expect(vm.animationState).to.equal('opened');
      vm.visible = false;
      setTimeout(() => {
        expect(vm.state).to.equal('close');
        expect(vm.animationState).to.equal('closed');
        done();
      }, 400);
    }, 400);
  });
  it('click dialog to close', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible.sync="visible">
            <span>这是一段信息</span>
          </el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      }
    }, true);
    const dialog = vm.$children[0];
    setTimeout(() => {
      dialog.$el.click();
      setTimeout(() => {
        expect(vm.visible).to.be.false;
        done();
      }, 400);
    }, 50);
  });
  it('click header btn', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible.sync="visible">
            <span>这是一段信息</span>
          </el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      }
    }, true);
    const dialog = vm.$children[0];
    setTimeout(() => {
      dialog.$el.querySelector('.el-dialog__headerbtn').click();
      setTimeout(() => {
        expect(vm.visible).to.be.false;
        done();
      }, 500);
    }, 50);
  });
  it('before close', done => {
    const spy = sinon.spy();
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible="visible" :before-close="beforeClose"></el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      },
      methods: {
        beforeClose(done) {
          spy();
          done();
        }
      }
    }, true);
    const dialog = vm.$children[0];
    setTimeout(() => {
      dialog.$el.click();
      setTimeout(() => {
        expect(spy.called).to.be.true;
        done();
      }, 500);
    }, 10);
  });

  it('destroyOnClose', async() => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" :visible.sync="visible" destroy-on-close>
            <input />
          </el-dialog>
        </div>
      `,

      data() {
        return {
          title: 'dialog test',
          visible: true
        };
      }
    }, true);
    const dialog = vm.$children[0];
    await waitImmediate();
    dialog.$el.querySelector('input').value = '123';
    dialog.$el.click();
    await waitImmediate();
    vm.visible = true;
    await waitImmediate();
    expect(dialog.$el.querySelector('input').value).to.be.equal('');
  });
});
