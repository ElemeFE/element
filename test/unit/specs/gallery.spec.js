import { createTest, destroyVM } from '../util';
import Gallery from 'packages/gallery';

describe('Gallery', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Gallery, true);
    expect(vm.$el).to.exist;
  });
});

