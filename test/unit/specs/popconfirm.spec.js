import { createTest, destroyVM } from '../util';
import Popconfirm from 'packages/popconfirm';

describe('Popconfirm', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Popconfirm, true);
    expect(vm.$el).to.exist;
  });
});

