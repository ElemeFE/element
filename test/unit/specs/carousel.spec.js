import { createTest, destroyVM } from '../util';
import Carousel from 'packages/carousel';

describe('Carousel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Carousel, true);
    expect(vm.$el).to.exist;
  });
});

