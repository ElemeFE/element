import { createTest, destroyVM } from '../util';
import Link from 'packages/link';

describe('Link', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Link, true);
    expect(vm.$el).to.exist;
  });
});

