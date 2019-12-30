import { createTest, destroyVM } from '../util';
import InputEmail from 'packages/input-email';

describe('InputEmail', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(InputEmail, true);
    expect(vm.$el).to.exist;
  });
});

