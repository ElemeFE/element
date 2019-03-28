import { createTest, destroyVM } from '../util';
import Calendar from 'packages/calendar';

describe('Calendar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Calendar, true);
    expect(vm.$el).to.exist;
  });
});

