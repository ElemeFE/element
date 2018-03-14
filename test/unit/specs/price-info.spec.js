import { createTest, destroyVM } from '../util';
import PriceInfo from 'packages/price-info';

describe('PriceInfo', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('type', () => {
    vm = createTest(PriceInfo, {
      type: 'paid',
      sum: '12560.10'
    }, true);
    let priceInfoElm = vm.$el;
    expect(priceInfoElm.classList.contains('tm-price-info--paid')).to.be.true;
  });

  it('size', () => {
    vm = createTest(PriceInfo, {
      size: 'small',
      sum: '12560.10'
    }, true);
    let priceInfoElm = vm.$el;
    expect(priceInfoElm.classList.contains('tm-price-info--small')).to.be.true;
  });

  it('taxesInfo', () => {
    vm = createTest(PriceInfo, {
      taxesInfo: true,
      sum: '12560.10'
    }, true);
    let priceInfoElm = vm.$el;
    expect(priceInfoElm.querySelector('.tm-price-info__taxes')).to.be.ok;
  });

  it('currency', () => {
    vm = createTest(PriceInfo, {
      currency: 'rub',
      sum: '12560.10'
    }, true);
    let priceInfoElm = vm.$el;
    expect(priceInfoElm.querySelector('.tm-price-info__currency').innerText).to.equal('\u20BD');
  });
});
