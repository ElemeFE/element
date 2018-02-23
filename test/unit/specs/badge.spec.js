import { createTest, destroyVM } from '../util';
import Badge from 'packages/badge';

describe('Badge', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Badge, true);
    expect(vm.$el).to.exist;
  });

  it('hollow', () => {
    vm = createTest(Badge, {
      hollow: true
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('is-hollow')).to.be.true;
  });

  it('round', () => {
    vm = createTest(Badge, {
      round: true
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('is-round')).to.be.true;
  });

  it('no-hover', () => {
    vm = createTest(Badge, {
      noHover: true
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('is-no-hover')).to.be.true;
  });

  it('color', () => {
    vm = createTest(Badge, {
      color: 'green'
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('tm-badge--green')).to.be.true;
  });
});

