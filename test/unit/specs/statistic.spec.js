import { createTest, destroyVM } from '../util';
import Statistic from 'packages/statistic';

describe('Statistic', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Statistic, true);
    expect(vm.$el).to.exist;
  });
});

