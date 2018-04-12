import { createTest, destroyVM } from '../util';
import DatePickerJoined from 'packages/date-picker-joined';

describe('DatePickerJoined', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DatePickerJoined, true);
    expect(vm.$el).to.exist;
  });
});

