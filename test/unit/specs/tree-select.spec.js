import { createTest, destroyVM } from '../util';
import TreeSelect from 'packages/tree-select';

describe('TreeSelect', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TreeSelect, true);
    expect(vm.$el).to.exist;
  });
});

