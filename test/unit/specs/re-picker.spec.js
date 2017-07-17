import { createTest, destroyVM } from '../util';
import RePicker from 'packages/re-picker';

describe('RePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(RePicker, true);
    expect(vm.$el).to.exist;
  });
});

