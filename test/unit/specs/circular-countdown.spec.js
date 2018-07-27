import { createTest, destroyVM } from '../util';
import CircularCountdown from 'packages/circular-countdown';

describe('CircularCountdown', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CircularCountdown, true);
    expect(vm.$el).to.exist;
  });
});

