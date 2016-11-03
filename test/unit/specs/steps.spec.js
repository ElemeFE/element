import { createVue, destroyVM } from '../util';
import Vue from 'vue';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <el-steps>
        <el-step title="step1"></el-step>
        <el-step title="step2"></el-step>
        <el-step title="step3"></el-step>
      </el-steps>
    `);

    expect(vm.$el.querySelectorAll('.el-step')).to.length(3);
  });

  it('space', done => {
    vm = createVue(`
      <el-steps>
        <el-step title="step1"></el-step>
        <el-step title="step2"></el-step>
        <el-step title="step3"></el-step>
        <el-step title="step4"></el-step>
      </el-steps>
    `);

    const vm2 = createVue(`
      <el-steps :space="100">
        <el-step title="step1"></el-step>
        <el-step title="step2"></el-step>
        <el-step title="step3"></el-step>
        <el-step title="step4"></el-step>
      </el-steps>
    `);

    Vue.nextTick(_ => {
      expect(vm.$el.querySelector('.el-step')).have.deep.property('style.width').equal('25%');
      expect(vm2.$el.querySelector('.el-step')).have.deep.property('style.width').equal('100px');
      done();
    });
  });

  it('processStatus', done => {
    vm = createVue(`
      <el-steps :active="1" process-status="error">
        <el-step title="step1"></el-step>
        <el-step title="step2"></el-step>
        <el-step title="step3"></el-step>
      </el-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.el-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <el-steps :active="1" finish-status="error">
        <el-step title="abc"></el-step>
        <el-step title="abc2"></el-step>
      </el-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.el-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <el-steps :active="active" finish-status="error">
          <el-step title="abc"></el-step>
          <el-step title="abc2"></el-step>
        </el-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.el-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.el-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <el-steps direction="vertical">
        <el-step title="aaa"></el-step>
        <el-step title="bbb"></el-step>
      </el-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', done => {
    vm = createVue(`
      <el-steps direction="vertical" :space="200">
        <el-step title="aaa"></el-step>
        <el-step title="bbb"></el-step>
      </el-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.el-step')).have.deep.property('style.height').equal('200px');
      done();
    });
  });
});
