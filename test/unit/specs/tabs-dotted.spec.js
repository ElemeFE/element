import { createTest, destroyVM } from '../util';
import TabsDotted from 'packages/tabs-dotted';

describe('TabsDotted', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TabsDotted, true);
    expect(vm.$el).to.exist;
  });
});

