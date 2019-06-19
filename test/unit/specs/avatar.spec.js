import { createTest, destroyVM } from '../util';
import Avatar from 'packages/avatar';

describe('Avatar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Avatar, true);
    expect(vm.$el).to.exist;
  });
});

