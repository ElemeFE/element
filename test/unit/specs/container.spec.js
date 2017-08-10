import { createTest, destroyVM } from '../util';
import Container from 'packages/container';

describe('Container', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Container, true);
    expect(vm.$el).to.exist;
  });
});

