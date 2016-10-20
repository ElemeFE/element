import { createTest, createVue } from '../util';
import Alert from 'packages/alert';

describe('Alert', () => {
  it('create', () => {
    const vm = createTest(Alert, {
      title: 'test',
      showIcon: true
    }, true);
    expect(vm.$el.classList.contains('el-alert--info')).to.true;
  });

  it('type', () => {
    const vm = createTest(Alert, {
      title: 'test',
      type: 'success',
      showIcon: true
    }, true);
    expect(vm.$el.classList.contains('el-alert--success')).to.true;
    expect(vm.$el.querySelector('.el-icon-circle-check')).to.exist;
  });

  it('description', () => {
    const vm = createTest(Alert, {
      title: 'Dorne',
      description: 'Unbowed, Unbent, Unbroken',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.el-alert__description')).to.exist;
  });

  it('close', done => {
    const vm = createVue({
      template: `
        <div>
          <el-alert
            title="test"
            close-text="close"></el-alert>
        </div>
      `
    }, true);
    vm.$el.querySelector('.el-alert__closebtn').click();
    setTimeout(() => {
      expect(vm.$children[0].$el.style.display).to.equal('none');
      done();
    }, 300);
  });
});
