import { createVue, destroyVM } from '../util';

describe('Dialog', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" v-model="visible"></el-dialog>
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
  }).timeout(3000);

  it('render correct content', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" v-model="visible">
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

  it('open and close', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog :title="title" v-model="visible">
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
    const dialog = vm.$children[0];
    expect(dialog.$el.style.display).to.equal('none');
    vm.visible = true;
    setTimeout(() => {
      expect(dialog.$el.style.display).to.not.equal('none');
      document.querySelector('.v-modal').click();
      setTimeout(() => {
        expect(vm.visible).to.equal(false);
        done();
      }, 50);
    }, 50);
  });

  describe('props', () => {
    const getDialogVm = (props, options) => {
      return createVue(Object.assign({
        template: `
          <div>
            <el-dialog ${ props } :title="title" v-model="visible">
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

    it('size', () => {
      vm = getDialogVm('size="full"');
      expect(vm.$el.querySelector('.el-dialog').classList.contains('el-dialog--full')).to.true;
    });

    it('top', () => {
      vm = getDialogVm('top="100px"');
      expect(vm.$el.querySelector('.el-dialog').style.top).to.equal('100px');
    });

    it('custom-class', () => {
      vm = getDialogVm('custom-class="my-dialog"');
      expect(vm.$el.querySelector('.el-dialog').classList.contains('my-dialog')).to.true;
    });
  });

  it('callbacks', done => {
    vm = createVue({
      template: `
        <div>
          <el-dialog
            @open="handleOpen"
            @close="handleClose"
            :title="title"
            v-model="visible">
            <span>这是一段信息</span>
          </el-dialog>
        </div>
      `,

      methods: {
        handleOpen() {
          this.state = 'open';
        },

        handleClose() {
          this.state = 'closed';
        }
      },

      data() {
        return {
          state: '',
          title: 'dialog test',
          visible: false
        };
      }
    }, true);
    const dialog = vm.$children[0];
    dialog.open();
    setTimeout(() => {
      expect(vm.state).to.equal('open');
      dialog.close();
      setTimeout(() => {
        expect(vm.state).to.equal('closed');
        done();
      }, 50);
    }, 50);
  });
});
