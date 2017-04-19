import { createTest, destroyVM } from '../util';
import Transfer from 'packages/transfer';

describe('Transfer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Transfer, true);
    expect(vm.$el).to.exist;
  });
});

