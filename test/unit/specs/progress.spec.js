import { createVue, destroyVM } from '../util';

describe('Progress', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <div>
          <tm-progress ref="percent0" :percentage="0"></tm-progress>
          <tm-progress ref="percent50" :percentage="50"></tm-progress>
          <tm-progress ref="percent100" :percentage="100"></tm-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.percent0.$el.querySelector('.tm-progress__text').innerText).to.be.equal('0%');
    expect(vm.$refs.percent0.$el.querySelector('.tm-progress-bar__inner').style.width).to.be.equal('0%');

    expect(vm.$refs.percent50.$el.querySelector('.tm-progress__text').innerText).to.be.equal('50%');
    expect(vm.$refs.percent50.$el.querySelector('.tm-progress-bar__inner').style.width).to.be.equal('50%');

    expect(vm.$refs.percent100.$el.querySelector('.tm-progress__text').innerText).to.be.equal('100%');
    expect(vm.$refs.percent100.$el.querySelector('.tm-progress-bar__inner').style.width).to.be.equal('100%');
  });
  it('status', () => {
    vm = createVue({
      template: `
        <div>
          <tm-progress ref="lineSuccess" :percentage="100" status="success"></tm-progress>
          <tm-progress ref="lineException" :percentage="0" status="exception"></tm-progress>
          <tm-progress type="circle" ref="circleSuccess" :percentage="100" status="success"></tm-progress>
          <tm-progress type="circle" ref="circleException" :percentage="0" status="exception"></tm-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.lineSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.lineSuccess.$el.querySelector('.tm-progress__text .tm-icon--circle-check')).to.be.exist;
    expect(vm.$refs.lineException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.lineException.$el.querySelector('.tm-progress__text .tm-icon--circle-cross')).to.be.exist;

    expect(vm.$refs.circleSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.circleSuccess.$el.querySelector('.tm-progress__text .tm-icon--check')).to.be.exist;
    expect(vm.$refs.circleException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.circleException.$el.querySelector('.tm-progress__text .tm-icon--close')).to.be.exist;
  });
  it('text inside', () => {
    vm = createVue({
      template: `
        <tm-progress :percentage="50" text-inside></tm-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('tm-progress--text-inside')).to.be.true;
  });
  it('stroke width', () => {
    vm = createVue({
      template: `
        <tm-progress :percentage="50" :stroke-width="8"></tm-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-progress-bar__outer').style.height).to.be.equal('8px');
  });
  it('show text', () => {
    vm = createVue({
      template: `
        <tm-progress :percentage="50" :show-text="false"></tm-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-progress__text')).to.not.exist;
  });
  it('circle', () => {
    vm = createVue({
      template: `
        <tm-progress type="circle" :percentage="50"></tm-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('tm-progress--circle')).to.be.true;
  });
  it('width', () => {
    vm = createVue({
      template: `
        <tm-progress type="circle" :percentage="50" :width="120"></tm-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-progress-circle').style.height).to.be.equal('120px');
    expect(vm.$el.querySelector('.tm-progress-circle').style.width).to.be.equal('120px');
  });
  it('should work with stroke-width', () => {
    vm = createVue({
      template: `
        <tm-progress :text-inside="true" :stroke-width="36" :percentage="0"></tm-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.tm-progress-bar__innerText').offsetTop).to.be.equal(12);
  });
});
