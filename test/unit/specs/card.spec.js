import { createVue, createTest, destroyVM } from '../util';
import Card from 'packages/card';

describe('Card', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('slot:header', () => {
    vm = createVue(`
      <el-card>
        <header slot="header">二师兄叫我埋梗 啦啦啦</header>
      </el-card>
    `);

    expect(vm.$el.querySelector('.el-card__header')).to.property('textContent').to.include('二师兄叫我埋梗 啦啦啦');
  });

  it('header', () => {
    vm = createTest(Card, {
      header: '好烦'
    });

    expect(vm.$el.querySelector('.el-card__header')).to.property('textContent').to.include('好烦');
  });

  it('bodyStyle', () => {
    vm = createTest(Card, {
      bodyStyle: { padding: '10px' }
    });

    expect(vm.$el.querySelector('.el-card__body').style.padding).to.equal('10px');
  });
});
