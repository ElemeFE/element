import { getStyle } from '../../../src/utils/dom';
import { createVue, destroyVM } from '../util';
import Vue from 'vue';
import LoadingRaw from 'packages/loading';
const Loading = LoadingRaw.service;

describe('Loading', () => {
  let vm, loadingInstance, loadingInstance2;
  afterEach(() => {
    destroyVM(vm);
    if (loadingInstance) {
      loadingInstance.close();
      loadingInstance.$el &&
      loadingInstance.$el.parentNode &&
      loadingInstance.$el.parentNode.removeChild(loadingInstance.$el);
    }
    if (loadingInstance2) {
      loadingInstance2.close();
      loadingInstance2.$el &&
      loadingInstance2.$el.parentNode &&
      loadingInstance2.$el.parentNode.removeChild(loadingInstance2.$el);
    }
  });

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
        setTimeout(() => {
          expect(mask.style.display).to.equal('none');
          done();
        }, 100);
      });
    });

    it('unbind', done => {
      const vm1 = createVue({
        template: `
        <div v-if="show" v-loading="loading"></div>
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
        <div v-if="show" v-loading.body="loading"></div>
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

    it('body', done => {
      vm = createVue({
        template: `
        <div v-loading.body="loading"></div>
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
        vm.loading = false;
        document.body.removeChild(mask);
        document.body.removeChild(vm.$el);
        done();
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
        vm.loading = false;
        document.body.removeChild(mask);
        document.body.removeChild(vm.$el);
        done();
      });
    });

    it('lock', done => {
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
        expect(getStyle(document.body, 'overflow')).to.equal('hidden');
        vm.loading = false;
        document.body.removeChild(document.querySelector('.el-loading-mask'));
        document.body.removeChild(vm.$el);
        done();
      });
    });

    it('text', done => {
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
        const mask = document.querySelector('.el-loading-mask');
        const text = mask.querySelector('.el-loading-text');
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
        const mask = document.querySelector('.el-loading-mask');
        expect(mask.classList.contains('loading-custom-class')).to.true;
        done();
      });
    });
  });

  describe('as a service', () => {
    it('create', () => {
      loadingInstance = Loading();
      expect(document.querySelector('.el-loading-mask')).to.exist;
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
      loadingInstance = Loading({ target: '.loading-container' });
      let mask = document.querySelector('.el-loading-mask');
      let container = document.querySelector('.loading-container');
      expect(mask).to.exist;
      expect(mask.parentNode).to.equal(container);
      loadingInstance.close();
      setTimeout(() => {
        expect(getStyle(container, 'position')).to.equal('relative');
        done();
      }, 200);
    });

    it('body', () => {
      vm = createVue({
        template: `
        <div class="loading-container"></div>
      `
      }, true);
      loadingInstance = Loading({
        target: '.loading-container',
        body: true
      });
      let mask = document.querySelector('.el-loading-mask');
      expect(mask).to.exist;
      expect(mask.parentNode).to.equal(document.body);
    });

    it('fullscreen', () => {
      loadingInstance = Loading({ fullScreen: true });
      const mask = document.querySelector('.el-loading-mask');
      expect(mask.parentNode).to.equal(document.body);
      expect(mask.classList.contains('is-fullscreen')).to.true;
    });

    it('fullscreen singleton', done => {
      loadingInstance = Loading({ fullScreen: true });
      setTimeout(() => {
        loadingInstance2 = Loading({ fullScreen: true });
        setTimeout(() => {
          let masks = document.querySelectorAll('.el-loading-mask');
          expect(masks.length).to.equal(1);
          loadingInstance2.close();
          setTimeout(() => {
            masks = document.querySelectorAll('.el-loading-mask');
            expect(masks.length).to.equal(0);
            done();
          }, 350);
        }, 50);
      }, 50);
    });

    it('lock', () => {
      loadingInstance = Loading({ lock: true });
      expect(getStyle(document.body, 'overflow')).to.equal('hidden');
    });

    it('text', () => {
      loadingInstance = Loading({ text: 'Loading...' });
      const text = document.querySelector('.el-loading-text');
      expect(text).to.exist;
      expect(text.textContent).to.equal('Loading...');
    });

    it('customClass', () => {
      loadingInstance = Loading({ customClass: 'el-loading-custom-class' });
      const customClass = document.querySelector('.el-loading-custom-class');
      expect(customClass).to.exist;
    });
  });
});
