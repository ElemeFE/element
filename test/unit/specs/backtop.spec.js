import { createTest, destroyVM } from '../util';
import Backtop from 'packages/backtop';

describe('Backtop', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Backtop, true);
    expect(vm.$el).to.exist;
  });
});

