import { createVue, destroyVM } from '../util';

describe('Drawer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <div>
          <el-drawer :title="title" :visible="visible"></el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
          visible: true
        };
      }
    }, true);
    const drawer = vm.$children[0];
    setTimeout(() => {
      expect(document.querySelector('.v-modal')).to.exist;
      expect(vm.$el.querySelector('.el-drawer__title').textContent).to.equal('drawer test');
      expect(drawer.$el.style.display).to.not.equal('none');
      done();
    }, 10);
  });

  it('render correct content', done => {
    vm = createVue({
      template: `
        <div>
          <el-drawer :title="title" :visible="visible">
            <span>这是一段信息</span>
            <span slot="footer" class="drawer-footer">
              <el-button @click.native="drawerVisible = false">取消</el-button>
              <el-button type="primary" @click.native="drawerVisible = false">确定</el-button>
            </span>
          </el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
          visible: true
        };
      }
    }, true);
    setTimeout(() => {
      const footerBtns = vm.$el.querySelectorAll('.el-drawer__footer .el-button');
      expect(vm.$el.querySelector('.el-drawer__body span').textContent).to.equal('这是一段信息');
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
          <el-drawer :title="title" append-to-body :visible="visible"></el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
          visible: true
        };
      }
    }, true);
    const drawer = vm.$children[0];
    setTimeout(() => {
      expect(drawer.$el.parentNode).to.equal(document.body);
      done();
    }, 10);
  });

  it('open and close', done => {
    vm = createVue({
      template: `
        <div>
          <el-drawer :title="title" :visible.sync="visible">
            <span>这是一段信息</span>
          </el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
          visible: false
        };
      }
    }, true);
    const drawer = vm.$children[0];
    expect(drawer.$el.style.display).to.equal('none');
    vm.visible = true;
    setTimeout(() => {
      expect(drawer.$el.style.display).to.not.equal('none');
      vm.visible = false;
      setTimeout(() => {
        expect(drawer.$el.style.display).to.equal('none');
        done();
      }, 400);
    }, 50);
  });

  describe('props', () => {
    const getDrawerVm = (props, options) => {
      return createVue(Object.assign({
        template: `
          <div>
            <el-drawer ${ props } :title="title" :visible="visible">
              <span>这是一段信息</span>
            </el-drawer>
          </div>
        `,

        data() {
          return {
            title: 'drawer test',
            visible: true
          };
        }
      }, options), true);
    };

    it('placement', () => {
      vm = getDrawerVm('placement="right"');
      expect(vm.$el.querySelector('.el-drawer').classList.contains('el-drawer__placementright')).to.true;
    });

    it('custom-class', () => {
      vm = getDrawerVm('custom-class="my-drawer"');
      expect(vm.$el.querySelector('.el-drawer').classList.contains('my-drawer')).to.true;
    });
  });

  it('events', done => {
    vm = createVue({
      template: `
        <div>
          <el-drawer
            @open="handleOpen"
            @close="handleClose"
            :title="title"
            :visible.sync="visible">
            <span>这是一段信息</span>
          </el-drawer>
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
          title: 'drawer test',
          visible: false
        };
      }
    }, true);
    vm.visible = true;
    setTimeout(() => {
      expect(vm.state).to.equal('open');
      vm.visible = false;
      setTimeout(() => {
        expect(vm.state).to.equal('closed');
        done();
      }, 50);
    }, 50);
  });
  it('click drawer to close', done => {
    vm = createVue({
      template: `
        <div>
          <el-drawer :title="title" :visible.sync="visible">
            <span>这是一段信息</span>
          </el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
          visible: true
        };
      }
    }, true);
    const drawer = vm.$children[0];
    setTimeout(() => {
      drawer.$el.click();
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
          <el-drawer :title="title" :visible.sync="visible">
            <span>这是一段信息</span>
          </el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
          visible: true
        };
      }
    }, true);
    const drawer = vm.$children[0];
    setTimeout(() => {
      drawer.$el.querySelector('.el-drawer__headerbtn').click();
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
          <el-drawer :title="title" :visible="visible" :before-close="beforeClose"></el-drawer>
        </div>
      `,

      data() {
        return {
          title: 'drawer test',
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
    const drawer = vm.$children[0];
    setTimeout(() => {
      drawer.$el.click();
      setTimeout(() => {
        expect(spy.called).to.be.true;
        done();
      }, 500);
    }, 10);
  });
});
