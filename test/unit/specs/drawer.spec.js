import { createVue, destroyVM, waitImmediate, wait } from '../util';

const title = '我是测试 title';
const content = 'content';

describe('Drawer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createVue(
      {
        template: `
        <el-drawer :title='title' :visible='visible'></el-drawer>
      `,
        data() {
          return {
            title,
            visible: true
          };
        }
      },
      true
    );
    const drawer = vm.$children[0];
    await waitImmediate();
    expect(document.querySelector('.v-modal')).to.exist;
    expect(vm.$el.querySelector('.el-drawer__header').textContent).to.equal(
      title
    );
    expect(drawer.$el.style.display).to.not.equal('none');
  });

  it('render correct content', async() => {
    vm = createVue(
      {
        template: `
          <el-drawer :title='title' :visible='visible'>
            <span>这是一段信息</span>
            <el-button @click.native='dialogVisible = false'>取消</el-button>
            <el-button type='primary' @click.native='dialogVisible = false'>确定</el-button>
          </el-drawer>
      `,

        data() {
          return {
            title: 'drawer test',
            visible: true
          };
        }
      },
      true
    );
    await waitImmediate();
    expect(vm.$el.querySelector('.el-drawer__body span').textContent).to.equal(
      '这是一段信息'
    );
    const footerBtns = vm.$el.querySelectorAll('.el-button');
    expect(footerBtns.length).to.equal(2);
    expect(footerBtns[0].querySelector('span').textContent).to.equal('取消');
    expect(footerBtns[1].querySelector('span').textContent).to.equal('确定');
  });

  it('should append to body, when append-to-body flag is true', async() => {
    vm = createVue(
      {
        template: `
        <el-drawer :title='title' :visible='visible' :append-to-body='true'>
           <span> content </span>
        </el-drawer>
      `,
        data() {
          return {
            title,
            visible: true
          };
        }
      },
      true
    );
    await waitImmediate();
    expect(vm.$el.parentNode).to.equal(document.body);
  });

  it('should open and close drawer properly', async() => {
    vm = createVue({
      template: `
        <el-drawer :title='title' :visible='visible' ref='drawer'>
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: false
        };
      }
    });
    let drawer = vm.$children[0].$el;
    expect(drawer.style.display).to.equal('none');
    vm.visible = true;
    await waitImmediate();
    expect(drawer.style.display).not.to.equal('none');
    vm.visible = false;
    await wait(400);
    expect(drawer.style.display).to.equal('none');
  });

  it('should destroy every child after drawer was closed when destroy-on-close flag is true', async() => {
    vm = createVue({
      template: `
        <el-drawer :title='title' :visible='visible' :append-to-body='true' :destroy-on-close='true' ref='drawer'>
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: true
        };
      }
    });

    await waitImmediate();
    expect(vm.$el.querySelector('.el-drawer__body span').textContent).to.equal(
      content
    );
    vm.$refs.drawer.closeDrawer();
    await wait(400);
    expect(vm.$el.querySelector('.el-drawer__body')).not.to.exist;
  });

  it('should close dialog by clicking the close button', async() => {
    vm = createVue({
      template: `
        <el-drawer :title='title' :visible.sync='visible' :append-to-body='true' :destroy-on-close='true' ref='drawer'>
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: true
        };
      }
    });

    await waitImmediate();
    vm.$children[0].$el.querySelector('.el-drawer__close-btn').click();
    expect(vm.visible).to.equal(false);
  });

  it('should invoke before-close', async() => {
    const beforeClose = sinon.spy();
    vm = createVue({
      template: `
        <el-drawer
                :before-close='beforeClose'
                :title='title'
                :visible.sync='visible'
                :append-to-body='true'
                :destroy-on-close='true'
                ref='drawer'
               >
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: true,
          beforeClose
        };
      }
    });

    await waitImmediate();
    vm.$refs.drawer.closeDrawer();
    await waitImmediate();
    expect(beforeClose.called).to.be.true;
  });

  it('should not show close button when show-close flag is false', async() => {
    vm = createVue({
      template: `
        <el-drawer :title='title' :visible='visible' ref='drawer' :show-close='false'>
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: false
        };
      }
    });
    expect(vm.$el.querySelector('.el-drawer__close-btn')).not.to.exist;
  });

  it('should have custom classes when custom classes were given', async() => {
    const classes = 'some-custom-class';
    vm = createVue({
      template: `
        <el-drawer :title='title' :visible='visible' ref='drawer' custom-class='${classes}'>
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: false
        };
      }
    });

    expect(vm.$el.querySelector(`.${classes}`)).to.exist;
  });

  it('should not render header when withHeader attribute is false', () => {
    vm = createVue({
      template: `
        <el-drawer :title='title' :visible='visible' ref='drawer' :with-header='false'>
           <span>${content}</span>
        </el-drawer>
      `,
      data() {
        return {
          title,
          visible: true
        };
      }
    });

    expect(vm.$el.querySelector('.el-drawer__header')).to.not.exist;
  });

  describe('directions', () => {
    const renderer = direction => {
      return createVue({
        template: `
         <el-drawer :title='title' :visible='visible' direction='${direction}'>
            <span>${content}</span>
         </el-drawer>
        `,
        data: {
          visible: true,
          title
        }
      });
    };
    it('should render from left to right', async() => {
      vm = renderer('ltr');
      await waitImmediate();
      expect(vm.$el.querySelector('.ltr')).to.exist;
    });

    it('should render from right to left', async() => {
      vm = renderer('rtl');
      await waitImmediate();
      expect(vm.$el.querySelector('.rtl')).to.exist;
    });

    it('should render from top to bottom', async() => {
      vm = renderer('ttb');
      await waitImmediate();
      expect(vm.$el.querySelector('.ttb')).to.exist;
    });

    it('should render from bottom to top', async() => {
      vm = renderer('btt');
      await waitImmediate();
      expect(vm.$el.querySelector('.btt')).to.exist;
    });
  });

  it('events', async() => {
    const open = sinon.spy();
    const opened = sinon.spy();
    const close = sinon.spy();
    const closed = sinon.spy();

    vm = createVue({
      template: `
        <el-drawer 
            :title='title'
            :visible='visible'
            ref="drawer"
            @open="open"
            @opened="opened"
            @close="close"
            @closed="closed">
          <span>${content}</span>
         </el-drawer>
      `,
      data() {
        return {
          content,
          visible: false,
          title
        };
      },
      methods: {
        close,
        closed,
        open,
        opened
      }
    });
    vm.visible = true;
    await wait(400);
    expect(open.called).to.be.true;
    expect(opened.called).to.be.true;
    expect(close.called).to.be.false;
    expect(closed.called).to.be.false;
    vm.visible = false;
    await wait(500);
    expect(close.called).to.be.true;
    expect(closed.called).to.be.true;
  });

  describe('size', () => {
    const renderer = (size, isVertical) =>
      createVue({
        template: `
         <el-drawer :title='title' :visible='visible' direction='${isVertical ? 'ltr' : 'ttb'}' size='${size}'>
            <span>${content}</span>
         </el-drawer>
      `,
        data: {
          visible: true,
          title
        }
      });

    it('should effect height when drawer is vertical', async() => {
      const size = '50%';
      vm = renderer(size, true);

      expect(vm.$el.querySelector('.el-drawer').style.width).to.equal('50%');
    });

    it('should effect width when drawer is horizontal', async() => {
      const size = '50%';
      vm = renderer(size, false);
      expect(vm.$el.querySelector('.el-drawer').style.height).to.equal('50%');
    });
  });
});
