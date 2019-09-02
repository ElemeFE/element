import { createVue, wait, destroyVM, waitImmediate } from '../util';

describe('InfiniteScroll', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createVue({
      template: `
      <ul ref="scrollTarget" v-infinite-scroll="load" style="height: 300px;overflow: auto;">
        <li v-for="i in count" style="display: flex;height: 50px;">{{ i }}</li>
      </ul>
      `,
      data() {
        return {
          count: 0
        };
      },
      methods: {
        load() {
          this.count += 2;
        }
      }
    }, true);
    vm.$refs.scrollTarget.scrollTop = 2000;
    await wait();
    expect(vm.$el.innerText.indexOf('2') > -1).to.be.true;
  });

  it('visible change', async() => {
    vm = createVue({
      template: `
      <div v-show="visible">
        <ul ref="scrollTarget" v-infinite-scroll="load" style="height: 300px;overflow: auto;">
          <li v-for="i in count" style="display: flex;height: 50px;">{{ i }}</li>
        </ul>
      </div>
      `,
      data() {
        return {
          count: 0,
          visible: false
        };
      },
      methods: {
        load() {
          this.count += 2;
        }
      }
    }, true);
    await waitImmediate();// wait for render
    vm.visible = true;
    await wait(200);
    vm.$refs.scrollTarget.scrollTop = 2000;
    await waitImmediate();
    expect(vm.$el.innerText.indexOf('2') > -1).to.be.true;
  });
});

