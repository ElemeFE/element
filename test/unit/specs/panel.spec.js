import { createTest, destroyVM } from '../util';
import Panel from 'packages/panel';

describe('Panel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Panel, true);
    let panelElm = vm.$el;
    expect(panelElm.classList.contains('el-panel')).to.be.true;
  });

  it('type', () => {
    vm = createTest(Panel, {
      type: 'view'
    }, true);
    let panelElm = vm.$el.children[0];
    expect(panelElm.classList.contains('el-panel-view__header')).to.be.true;
  });

  it('title', () => {
    vm = createTest(Panel, {
      title: '标题哈哈哈哈'
    }, true);
    let panelElm = vm.$el.children[0].children[0].children[0];
    expect(panelElm.classList.contains('title')).to.be.true;
  });

  it('subtitle', () => {
    vm = createTest(Panel, {
      subtitle: '小标题'
    }, true);
    let panelElm = vm.$el.children[0].children[0].children[1];
    expect(panelElm.classList.contains('subtitle')).to.be.true;
  });

  it('operation', () => {
    vm = createTest(Panel, {
      type: 'view',
      slot: 'operation'
    }, true);
    let panelElm = vm.$el.children[0].children[1];
    expect(panelElm.classList.contains('el-panel-view__operation')).to.be.true;
  });

});
