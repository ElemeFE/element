import { createTest, destroyVM } from '../util';
import Affix from 'packages/affix';

describe('Affix', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Affix, true);
    expect(vm.$el).to.exist;
  });
});

