import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <tm-col :span="12">
        </tm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('tm-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <tm-col :span="12">
        </tm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('tm-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <tm-col :span="12" :pull="3">
        </tm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('tm-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <tm-col :span="12" :push="3">
        </tm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('tm-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <tm-row :gutter="20">
          <tm-col :span="12" ref="col">
          </tm-col>
        </tm-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <tm-row :gutter="20">
          <tm-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </tm-col>
        </tm-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('tm-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('tm-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('tm-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('tm-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('tm-col-md-8')).to.be.true;
  });
});
