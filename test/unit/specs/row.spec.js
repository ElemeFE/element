import { createTest } from '../util';
import Row from 'packages/row';

describe('Row', () => {
  it('create', () => {
    const vm = createTest(Row, true);
    let rowElm = vm.$el;
    expect(rowElm.classList.contains('el-row')).to.be.true;
  });
  it('gutter', () => {
    const vm = createTest(Row, {
      gutter: 20
    }, true);
    let rowElm = vm.$el;
    expect(rowElm.style.marginLeft).to.be.equal('-10px');
    expect(rowElm.style.marginRight).to.be.equal('-10px');
  });
  it('type', () => {
    const vm = createTest(Row, {
      type: 'flex'
    }, true);
    let rowElm = vm.$el;
    expect(rowElm.classList.contains('el-row--flex')).to.be.true;
  });
  it('justify', () => {
    const vm = createTest(Row, {
      justify: 'end'
    }, true);
    let rowElm = vm.$el;
    expect(rowElm.classList.contains('is-justify-end')).to.be.true;
  });
  it('align', () => {
    const vm = createTest(Row, {
      align: 'bottom'
    }, true);
    let rowElm = vm.$el;
    expect(rowElm.classList.contains('is-align-bottom')).to.be.true;
  });
});
