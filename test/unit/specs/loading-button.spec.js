import { createTest, destroyVM, createVue } from '../util';
import LoadingButton from 'packages/loading-button';

function checkClick(vm, done) {
  let result;
  vm = createVue({
    template: `
        <el-loading-button :loadingClick="handleClick"></el-loading-button>
      `,
    methods: {
      handleClick(evt) {
        result = evt;
      }
    }
  }, true);
  vm.$el.click();

  setTimeout(_ => {
    expect(result).to.exist;
    done();
  }, 20);
}

describe('LoadingButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LoadingButton, true);
    expect(vm.$el).to.exist;
  });

  it('loadingClick', done => {
    checkClick(vm, done);
  });

  it('click', done => {
    checkClick(vm, done);
  });
});
