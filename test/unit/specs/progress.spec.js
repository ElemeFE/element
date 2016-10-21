import { createVue } from '../util';

describe('Progress', () => {
  it('create', () => {
    const vm = createVue({
      template: `
        <div>
          <el-progress ref="percent0" :percentage="0"></el-progress>
          <el-progress ref="percent50" :percentage="50"></el-progress>
          <el-progress ref="percent100" :percentage="100"></el-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.percent0.$el.querySelector('.el-progress__text').innerText).to.be.equal('0%');
    expect(vm.$refs.percent0.$el.querySelector('.el-progress-bar__inner').style.width).to.be.equal('0%');

    expect(vm.$refs.percent50.$el.querySelector('.el-progress__text').innerText).to.be.equal('50%');
    expect(vm.$refs.percent50.$el.querySelector('.el-progress-bar__inner').style.width).to.be.equal('50%');

    expect(vm.$refs.percent100.$el.querySelector('.el-progress__text').innerText).to.be.equal('100%');
    expect(vm.$refs.percent100.$el.querySelector('.el-progress-bar__inner').style.width).to.be.equal('100%');
  });
  it('status', () => {
    const vm = createVue({
      template: `
        <div>
          <el-progress ref="lineSuccess" :percentage="100" status="success"></el-progress>
          <el-progress ref="lineException" :percentage="0" status="exception"></el-progress>
          <el-progress type="circle" ref="circleSuccess" :percentage="100" status="success"></el-progress>
          <el-progress type="circle" ref="circleException" :percentage="0" status="exception"></el-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.lineSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.lineSuccess.$el.querySelector('.el-progress__text .el-icon-circle-check')).to.be.exist;
    expect(vm.$refs.lineException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.lineException.$el.querySelector('.el-progress__text .el-icon-circle-cross')).to.be.exist;

    expect(vm.$refs.circleSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.circleSuccess.$el.querySelector('.el-progress__text .el-icon-check')).to.be.exist;
    expect(vm.$refs.circleException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.circleException.$el.querySelector('.el-progress__text .el-icon-close')).to.be.exist;
  });
  it('text inside', () => {
    const vm = createVue({
      template: `
        <el-progress :percentage="50" text-inside></el-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('el-progress--text-inside')).to.be.true;
  });
  it('stroke width', () => {
    const vm = createVue({
      template: `
        <el-progress :percentage="50" :stroke-width="8"></el-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.el-progress-bar__outer').style.height).to.be.equal('8px');
  });
  it('show text', () => {
    const vm = createVue({
      template: `
        <el-progress :percentage="50" :show-text="false"></el-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.el-progress__text')).to.not.exist;
  });
  it('circle', () => {
    const vm = createVue({
      template: `
        <el-progress type="circle" :percentage="50"></el-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('el-progress--circle')).to.be.true;
  });
  it('width', () => {
    const vm = createVue({
      template: `
        <el-progress type="circle" :percentage="50" :width="120"></el-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.el-progress-circle').style.height).to.be.equal('120px');
    expect(vm.$el.querySelector('.el-progress-circle').style.width).to.be.equal('120px');
  });
});
