import { getStyle } from '../../../src/utils/dom';
import { createVue, destroyVM } from '../util';
import Vue from 'vue';
import LoadingRaw from 'packages/loading';
import loading from '../../../packages/loading';
const Loading = LoadingRaw.service;

describe('Loading', () => {
  let vm, loadingInstance, loadingInstance2;
  /* afterEach(() => {
    if(vm){
      vm.close && vm.close();
      vm.$destroy && vm.$destroy();
    }
    if (loadingInstance) {
      loadingInstance.close();
      loadingInstance.$destroy();
    }
    if (loadingInstance2) {
      loadingInstance2.close();
      loadingInstance2.$destroy();
    }
  }); */

  describe('as a directive', () => {
    it('create', done => {
      vm = createVue({
        template: `
        <div v-loading="loading"></div>
      `,

        data() {
          return {
            loading: true
          };
        }
      });
      Vue.nextTick(() => {
        const mask = vm.$el.querySelector('.el-loading-mask');
        expect(mask).to.exist;
        vm.loading = false;
        Vue.nextTick(() => {
          const mask = vm.$el.querySelector('.el-loading-mask');
          expect(mask).to.not.exist;
          done();
        });
      });
    });

    it('unbind', done => {
      const vm1 = createVue({
        template: `
        <div v-if="show" v-loading.fullscreen="loading"></div>
      `,

        data() {
          return {
            show: true,
            loading: true
          };
        }
      });
      const vm2 = createVue({
        template: `
        <div v-if="show" v-loading.fullscreen="loading"></div>
      `,

        data() {
          return {
            show: true,
            loading: true
          };
        }
      });
      Vue.nextTick(() => {
        vm1.loading = false;
        vm2.loading = false;
        Vue.nextTick(() => {
          vm1.show = false;
          vm2.show = false;
          Vue.nextTick(() => {
            expect(document.querySelector('.el-loading-mask')).to.not.exist;
            done();
          });
        });
      });
    });

    it('fullscreen', done => {
      vm = createVue({
        template: `
        <div v-loading.fullscreen="loading"></div>
      `,

        data() {
          return {
            loading: true
          };
        }
      }, true);
      Vue.nextTick(() => {
        const mask = document.querySelector('.el-loading-mask');
        expect(mask.parentNode === document.body).to.true;
        expect(mask.classList.contains('is-fullscreen')).to.true;
        done();
      });
    });

    it('lock',done => {
      vm = createVue({
        template: `
        <div v-loading.fullscreen.lock="loading"></div>
      `,

        data() {
          return {
            loading: true
          };
        }
      }, true);

      Vue.nextTick(() => {
        expect(document.body.classList.contains('el-loading-parent--hidden')).to.true;
        done();
      });
    });

    it('text',done => {
      vm = createVue({
        template: `
        <div v-loading="loading" element-loading-text="拼命加载中"></div>
      `,

        data() {
          return {
            loading: true
          };
        }
      }, true);

      Vue.nextTick(() => {
        const text = vm.$el.querySelector('.el-loading-text');
        expect(text).to.exist;
        expect(text.textContent).to.equal('拼命加载中');
        done();
      });
    });

    it('customClass', done => {
      vm = createVue({
        template: `
        <div v-loading="loading" element-loading-custom-class="loading-custom-class"></div>
      `,

        data() {
          return {
            loading: true
          };
        }
      }, true);
      Vue.nextTick(() => {
        const mask = vm.$el.querySelector('.el-loading-mask');
        expect(mask.classList.contains('loading-custom-class')).to.true;
        done();
      });
    });
  });

  describe('as a service', () => {
    it('create', () => {
      loadingInstance = Loading();
      expect(loadingInstance.$el.classList.contains('el-loading-mask')).to.exist;
    });

    it('close', () => {
      loadingInstance = Loading();
      loadingInstance.close();
      expect(loadingInstance.visible).to.false;
    });

    it('target', done => {
      vm = createVue({
        template: `
        <div class="loading-container"></div>
      `
      }, true);
      Vue.nextTick(() => {
        loadingInstance = Loading({ target: '.loading-container' });
        let mask = loadingInstance.$el;
        let container = document.querySelector('.loading-container');
        expect(mask.parentNode).to.equal(container);
        expect(getStyle(container, 'position')).to.equal('relative');
        done();
      });
    });

    it('fullscreen', () => {
      loadingInstance = Loading({ fullScreen: true });
      Vue.nextTick(() => {
        const mask = loadingInstance.$el;
        expect(mask.parentNode).to.equal(document.body);
        expect(mask.classList.contains('is-fullscreen')).to.true;
        done();
      });
    });

    if('fullscreen singleton', done => {
      loadingInstance = Loading({
        fullscreen: true
      });
      loadingInstance2 = Loading({
        fullscreen: true
      });

      expect(loadingInstance).to.equal(loadingInstance2);
      loadingInstance2.close();
      Vue.nextTick(() => {
        const masks = document.querySelectorAll('.el-loading-mask');
        expect(masks.length).to.equal(0);
        done();
      });
    });

    it('lock', () => {
      loadingInstance = Loading({ lock: true });
      expect(getStyle(document.body, 'overflow')).to.equal('hidden');
    });

    it('text', () => {
      loadingInstance = Loading({
        text: 'Loading...'
      });
      const text = loadingInstance.$el.querySelector('.el-loading-text');
      expect(text).to.exist;
      expect(text.textContent).to.equal('Loading...');
    });

    it('customClass', () => {
      loadingInstance = Loading({ customClass: 'el-loading-custom-class' });
      expect(loadingInstance.$el.classList.contains('el-loading-custom-class')).to.true;
    });
  });
});
