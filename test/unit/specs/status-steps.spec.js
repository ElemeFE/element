import { createVue, destroyVM, waitImmediate } from '../util';

describe('StatusSteps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <el-steps>
        <el-status-steps title="step1"></el-status-steps>
        <el-status-steps title="step2"></el-status-steps>
        <el-status-steps title="step3"></el-status-steps>
      </el-steps>
    `);

    expect(vm.$el.querySelectorAll('.el-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <el-steps>
        <el-status-steps title="step1"></el-status-steps>
        <el-status-steps title="step2"></el-status-steps>
        <el-status-steps title="step3"></el-status-steps>
      </el-steps>
    `, true);

    const vm2 = createVue(`
      <el-steps :space="100">
        <el-status-steps title="step1"></el-status-steps>
        <el-status-steps title="step2"></el-status-steps>
        <el-status-steps title="step3"></el-status-steps>
        <el-status-steps title="step4"></el-status-steps>
      </el-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.el-step');
    const stepElm2 = vm2.$el.querySelector('.el-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <el-steps :active="1" process-status="error">
        <el-status-steps title="step1"></el-status-steps>
        <el-status-steps title="step2"></el-status-steps>
        <el-status-steps title="step3"></el-status-steps>
      </el-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.el-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <el-steps :active="1" :process-status="processStatus">
          <el-status-steps title="abc"></el-status-steps>
          <el-status-steps title="abc2"></el-status-steps>
        </el-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.el-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.el-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <el-steps :active="1" finish-status="error">
        <el-status-steps title="abc"></el-status-steps>
        <el-status-steps title="abc2"></el-status-steps>
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
          <el-status-steps title="abc"></el-status-steps>
          <el-status-steps title="abc2"></el-status-steps>
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
        <el-status-steps title="aaa"></el-status-steps>
        <el-status-steps title="bbb"></el-status-steps>
      </el-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <el-steps direction="vertical" :space="200">
        <el-status-steps title="aaa"></el-status-steps>
        <el-status-steps title="bbb"></el-status-steps>
      </el-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.el-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <el-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <el-status-steps title="step1"></el-status-steps>
        <el-status-steps title="step2" status="error"></el-status-steps>
        <el-status-steps title="step3"></el-status-steps>
      </el-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.el-step:nth-child(2) .el-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.el-step:nth-child(3) .el-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
