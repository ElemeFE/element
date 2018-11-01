import { createTest, destroyVM } from '../util';
import AdvancedDatePicker from 'packages/advanced-date-picker';

describe('advanced-date-picker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(AdvancedDatePicker, true);
    expect(vm.$el).to.exist;
  });
});

