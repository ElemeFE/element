import { createVue } from '../util';
import Vue from 'vue';

describe('Loading', () => {
  it('create', done => {
    const vm = createVue({
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
    const vm = createVue({
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
    const vm = createVue({
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
      expect(mask.style.left).to.equal('0px');
      expect(mask.style.right).to.equal('0px');
      expect(mask.style.position).to.equal('fixed');
      vm.loading = false;
      document.body.removeChild(mask);
      document.body.removeChild(vm.$el);
      done();
    });
  });

  it('lock', done => {
    const vm = createVue({
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
      expect(document.body.style.overflow).to.equal('hidden');
      vm.loading = false;
      document.body.removeChild(document.querySelector('.el-loading-mask'));
      document.body.removeChild(vm.$el);
      done();
    });
  });
});
