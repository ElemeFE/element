import { createVue, destroyVM, wait } from '../util';

describe('Backtop', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createVue({
      template: `
        <div ref="scrollTarget" class="test-scroll"  style="height: 100px; overflow: auto">
          <div style="height: 10000px; width: 100%">
            <el-backtop target=".test-scroll">
              <span>test_up_text</span>
            </el-backtop>
          </div>
        </div>
      `
    }, true);
    expect(vm.$el).to.exist;
    expect(vm.$el.innerText).to.be.equal('');
    vm.$refs.scrollTarget.scrollTop = 2000;
    await wait();
    expect(vm.$el.innerText).to.be.equal('test_up_text');
  });
});

