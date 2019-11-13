import { createTest, destroyVM, createVue, wait } from '../util';
import Affix from 'packages/affix';

describe('Affix', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Affix, true);
    expect(vm.$el).to.exist;
  });

  it('offsetTop', async() => {
    vm = createVue({
      template: `
        <div ref="container" class="test-scroll"  style="height: 100px; overflow: auto; position: relative">
          <div style="height: 10000px; width: 100%">
            <el-affix ref="scrollTarget" :target="fn" :offsetTop="100">
              <el-button type="primary">Affix top</el-button>
            </el-affix>
          </div>
        </div>
      `,
      data() {
        return {
          fn: () => this.$refs.container
        };
      }
    }, true);
    vm.$refs.scrollTarget.scrollTop = 100000;
    await wait();
    expect(vm.$el.querySelector('.el-affix').style.top).not.be.equal('');
  });

  it('offsetBottom', async() => {
    vm = createVue({
      template: `
        <div ref="container" class="test-scroll"  style="height: 100px; overflow: auto; position: relative">
          <div style="height: 10000px; width: 100%">
            <el-affix ref="scrollTarget" :target="fn" :offsetBottom="100">
              <el-button type="primary">Affix top</el-button>
            </el-affix>
          </div>
        </div>
      `,
      data() {
        return {
          fn: () => this.$refs.container
        };
      }
    }, true);
    vm.$refs.scrollTarget.scrollBottom = 10000;
    await wait();
    expect(vm.$el.querySelector('.el-affix').style.bottom).not.to.be.equal('');
  });
});
