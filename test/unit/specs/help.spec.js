import { createTest, destroyVM } from '../util';
import Help from 'packages/help';

describe('Help', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Help, true);
    expect(vm.$el).to.exist;
  });
});

