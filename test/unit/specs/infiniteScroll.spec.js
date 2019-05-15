import { createTest, destroyVM } from '../util';
import InfiniteScroll from 'packages/infiniteScroll';

describe('InfiniteScroll', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(InfiniteScroll, true);
    expect(vm.$el).to.exist;
  });
});

