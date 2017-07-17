import { createTest, destroyVM } from '../util';
import Craw from 'packages/craw';

describe('Craw', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Craw, true);
    expect(vm.$el).to.exist;
  });
});

