import { createTest, destroyVM } from '../util';
import CascaderPanel from 'packages/cascader-panel';

describe('CascaderPanel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CascaderPanel, true);
    expect(vm.$el).to.exist;
  });
});

