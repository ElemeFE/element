import { createTest, createVue } from '../util';
import Badge from 'packages/badge';

describe('Badge', () => {
  it('value', () => {
    expect(createTest(Badge, { value: 80 }).content).to.equal(80);
  });

  it('is fixed', () => {
    const vm = createVue(`
      <el-badge>
        <button>click</button>
      </el-badge>
    `);

    expect(vm.$el.querySelector('.el-badge__content.is-fixed')).to.exist;
  });

  it('is dot', () => {
    const vm = createVue(`
      <el-badge is-dot>
        <button>click</button>
      </el-badge>
    `);

    expect(vm.$el.querySelector('.el-badge__content.is-dot')).to.exist;
  });

  it('max', () => {
    expect(createTest(Badge, { max: 100, value: 200 }).content).to.equal('100+');
    expect(createTest(Badge, { max: 100, value: 80 }).content).to.equal(80);
  });
});
