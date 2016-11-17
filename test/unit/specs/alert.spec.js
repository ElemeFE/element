import { createTest, createVue, destroyVM } from '../util';
import Alert from 'packages/alert';

describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Alert, {
      title: 'test',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.el-alert__title').textContent).to.equal('test');
    expect(vm.$el.classList.contains('el-alert--info')).to.true;
  });

  it('type', () => {
    vm = createTest(Alert, {
      title: 'test',
      type: 'success',
      showIcon: true
    }, true);
    expect(vm.$el.classList.contains('el-alert--success')).to.true;
    expect(vm.$el.querySelector('.el-icon-circle-check')).to.exist;
  });

  it('description', () => {
    vm = createTest(Alert, {
      title: 'Dorne',
      description: 'Unbowed, Unbent, Unbroken',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.el-alert__description').textContent)
      .to.equal('Unbowed, Unbent, Unbroken');
  });

  it('render-content', () => {
    vm = createVue({
      data() {
        return {
          text: 'test'
        };
      },
      template: `
        <div>
          <el-alert
            title="test"
            :render-content="customContent"></el-alert>
        </div>
      `,
      methods: {
        customContent(h) {
          return (
            <p>
              <el-button class="custom-button">{ this.text }</el-button>
            </p>
          );
        }
      }
    }, true);
    let button = vm.$el.querySelector('.custom-button');
    expect(button).to.exist;
    expect(button.textContent).to.equal('test');
  });

  it('close', () => {
    vm = createVue({
      template: `
        <div>
          <el-alert
            title="test"
            close-text="close"></el-alert>
        </div>
      `
    }, true);
    vm.$el.querySelector('.el-alert__closebtn').click();
    expect(vm.$children[0].visible).to.false;
  });
});
