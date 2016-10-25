import { createVue, triggerEvent } from '../util';

describe('Menu', () => {
  it('create', done => {
    const vm = createVue({
      template: `
        <el-menu>
          <el-menu-item index="1" ref="item1">处理中心</el-menu-item>
          <el-menu-item index="2" ref="item2">订单管理</el-menu-item>
        </el-menu>
      `
    }, true);
    var item1 = vm.$refs.item1;
    var item2 = vm.$refs.item2;
    item1.$el.click();
    vm.$nextTick(_ => {
      expect(item1.$el.classList.contains('is-active')).to.be.true;
      item2.$el.click();
      vm.$nextTick(_ => {
        expect(item2.$el.classList.contains('is-active')).to.be.true;
        done();
      });
    });
  });
  it('default active', done => {
    const vm = createVue({
      template: `
        <el-menu default-active="2">
          <el-menu-item index="1" ref="item1">处理中心</el-menu-item>
          <el-menu-item index="2" ref="item2">订单管理</el-menu-item>
        </el-menu>
      `
    }, true);
    expect(vm.$refs.item2.$el.classList.contains('is-active')).to.be.true;
    vm.$refs.item1.$el.click();
    vm.$nextTick(_ => {
      expect(vm.$refs.item1.$el.classList.contains('is-active')).to.be.true;
      done();
    });
  });
  it('active watch', done => {
    const vm = createVue({
      template: `
        <el-menu :default-active="active">
          <el-menu-item index="1" ref="item1">active watch处理中心</el-menu-item>
          <el-menu-item index="2" ref="item2">active watch订单管理</el-menu-item>
        </el-menu>
      `,
      data() {
        return {
          active: '2'
        };
      }
    }, true);
    setTimeout(_ => {
      vm.active = '1';
      vm.$nextTick(_ => {
        expect(vm.$refs.item1.$el.classList.contains('is-active')).to.be.true;
        done();
      });
    }, 100);
  });
  it('default active in submenu', done => {
    const vm = createVue({
      template: `
        <el-menu default-active="2-2">
          <el-menu-item index="1" ref="item1">处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenuItem2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
      `
    }, true);
    expect(vm.$refs.submenuItem2.$el.classList.contains('is-active')).to.be.true;
    // vm.$refs.item1.$el.click();
    vm.$nextTick(_ => {
      expect(vm.$refs.submenu.$el.classList.contains('is-opened')).to.be.true;
      done();
    });
  });
  it('submenu', done => {
    const vm = createVue({
      template: `
        <el-menu>
          <el-menu-item index="1" ref="item1">处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenuItem2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    var submenuItem2 = vm.$refs.submenuItem2;
    var submenu = vm.$refs.submenu;
    submenu.$el.querySelector('.el-submenu__title').click();
    vm.$nextTick(_ => {
      expect(submenu.$el.classList.contains('is-opened')).to.be.true;
      submenuItem2.$el.click();
      vm.$nextTick(_ => {
        expect(submenuItem2.$el.classList.contains('is-active')).to.be.true;
        submenu.$el.querySelector('.el-submenu__title').click();
        vm.$nextTick(_ => {
          expect(submenu.$el.classList.contains('is-opened')).to.not.true;
          done();
        });
      });
    });
  });
  it('submenu default opened', done => {
    const vm = createVue({
      template: `
        <el-menu theme="dark" :default-openeds="defaultOpeneds">
          <el-menu-item index="1">default opened处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu1">
            <template slot="title">default opened我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenu1Item2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3" ref="submenu2">
            <template slot="title">default opened订单管理</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2" ref="submenu2Item2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      `,
      data() {
        return {
          defaultOpeneds: ['2', '3']
        };
      }
    }, true);
    expect(vm.$refs.submenu1.$el.classList.contains('is-opened')).to.be.true;
    expect(vm.$refs.submenu2.$el.classList.contains('is-opened')).to.be.true;
    vm.defaultOpeneds = ['2'];
    vm.$nextTick(_ => {
      expect(vm.$refs.submenu1.$el.classList.contains('is-opened')).to.be.true;
      expect(vm.$refs.submenu2.$el.classList.contains('is-opened')).to.not.true;
      done();
    });
  });
  it('theme', () => {
    const vm = createVue({
      template: `
        <el-menu theme="dark">
          <el-menu-item index="1" ref="item1">处理中心</el-menu-item>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    expect(vm.$el.classList.contains('el-menu--dark')).to.be.true;
  });
  it('unique-opened', done => {
    const vm = createVue({
      template: `
        <el-menu theme="dark" unique-opened default-active="2-2">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu1">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenu1Item2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3" ref="submenu2">
            <template slot="title">订单管理</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2" ref="submenu2Item2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    vm.$refs.submenu2Item2.$el.click();
    vm.$nextTick(_ => {
      expect(vm.$refs.submenu1.$el.classList.contains('is-opened')).to.not.true;
      expect(vm.$refs.submenu2Item2.$el.classList.contains('is-active')).to.be.true;
      done();
    });
  });
  it('horizontal mode', done => {
    const vm = createVue({
      template: `
        <el-menu mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenuItem2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    expect(vm.$el.classList.contains('el-menu--horizontal')).to.be.true;
    var submenu = vm.$refs.submenu;
    triggerEvent(submenu.$el, 'mouseenter');
    setTimeout(_ => {
      expect(submenu.$el.querySelector('.el-menu').style.display).to.not.ok;
      triggerEvent(submenu.$el, 'mouseleave');
      setTimeout(_ => {
        expect(submenu.$el.querySelector('.el-menu').style.display).to.be.equal('none');
        done();
      }, 1000);
    }, 500);
  });
  it('menu trigger click', done => {
    const vm = createVue({
      template: `
        <el-menu mode="horizontal" menu-trigger="click">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenuItem2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    expect(vm.$el.classList.contains('el-menu--horizontal')).to.be.true;
    var submenu = vm.$refs.submenu;
    var triggerElm = submenu.$el.querySelector('.el-submenu__title');

    triggerEvent(submenu.$el, 'mouseenter');
    triggerElm.click();

    setTimeout(_ => {
      expect(submenu.$el.querySelector('.el-menu').style.display).to.not.ok;
      triggerElm.click();
      setTimeout(_ => {
        expect(submenu.$el.querySelector('.el-menu').style.display).to.be.equal('none');
        done();
      }, 1000);
    }, 500);
  });
  it('horizontal submenu active', done => {
    const vm = createVue({
      template: `
        <el-menu mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2" ref="submenuItem2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
      `
    }, true);
    let submenuItem2 = vm.$refs.submenuItem2;
    submenuItem2.$el.click();
    vm.$nextTick(_ => {
      expect(vm.$refs.submenu.$el.classList.contains('is-active')).to.be.true;
      done();
    });
  });
  it('menu group', done => {
    const vm = createVue({
      template: `
        <el-menu mode="vertical" default-active="1">
          <el-menu-item-group title="分组一" ref="group1">
            <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="5">
            <template slot="title">导航五</template>
            <el-menu-item-group title="分组二">
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      `
    }, true);
    expect(vm.$refs.group1.$el.querySelector('.el-menu-item-group__title').innerText).to.be.equal('分组一');
    done();
  });
});
