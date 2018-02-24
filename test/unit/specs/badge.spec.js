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

  it('type', () => {
    vm = createTest(Badge, {
      type: 'danger'
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('tm-badge--danger')).to.be.true;
  });

  it('plain', () => {
    vm = createTest(Badge, {
      plain: true
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('is-plain')).to.be.true;
  });

  it('plain with fill', () => {
    vm = createTest(Badge, {
      plain: true,
      fill: 'hollow'
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('is-plain-hollow')).to.be.true;
  });

  it('round', () => {
    vm = createTest(Badge, {
      round: true
    }, true);
    let badgeElm = vm.$el;
    expect(badgeElm.classList.contains('is-round')).to.be.true;
  });

});

