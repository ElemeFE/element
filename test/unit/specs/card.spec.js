import { createVue, createTest } from '../util';
import Card from 'packages/card';

describe('Card', () => {
  it('slot:header', () => {
    const vm = createVue(`
      <el-card>
        <header slot="header">二师兄叫我埋梗 啦啦啦</header>
      </el-card>
    `);

    expect(vm.$el.querySelector('.el-card__header')).to.property('textContent').to.include('二师兄叫我埋梗 啦啦啦');
  });

  it('header', () => {
    const vm = createTest(Card, {
      header: '好烦'
    });

    expect(vm.$el.querySelector('.el-card__header')).to.property('textContent').to.include('好烦');
  });

  it('bodyStyle', () => {
    const vm = createTest(Card, {
      bodyStyle: { padding: '10px' }
    });

    expect(vm.$el.querySelector('.el-card__body').style.padding).to.equal('10px');
  });
});
