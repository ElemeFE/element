import { createTest, destroyVM } from '../util';
import TimeInfo from 'packages/time-info';

describe('TimeInfo', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('type', () => {
    vm = createTest(TimeInfo, {
      type: 'day'
    }, true);
    let timeInfoElm = vm.$el;
    expect(timeInfoElm.classList.contains('tm-time-info--day')).to.be.true;
  });
});
