import { createVue, destroyVM, waitImmediate } from '../util';
import PageHeader from 'packages/page-header';

describe('PageHeader', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('render well and trigger back event', async() => {
    vm = createVue(PageHeader, {
      content: 'content'
    });
    expect(vm.$el).to.exist;
    const spy = sinon.spy();
    vm.$on('back', spy);
    vm.$el.querySelector('.el-page-header__left').click();

    await waitImmediate();

    expect(spy.calledOnce).to.be.true;
  });
});

