import { createTest, createVue, destroyVM } from '../util';
import TimeSelect from 'packages/time-select';
import Vue from 'vue';

describe('TimeSelect', () => {
  it('should render correct contents', done => {
    const vm = createTest(TimeSelect, {
      pickerOptions: {
        start: '08:30',
        step: '00:15',
        end: '18:30'
      },
      placeholder: 'test'
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    input.blur();

    Vue.nextTick(_ => {
      expect(vm.picker.start).to.equal('08:30');
      expect(vm.picker.end).to.equal('18:30');
      expect(vm.picker.step).to.equal('00:15');
      expect(vm.$el.querySelector('input').getAttribute('placeholder')).to.equal('test');
      destroyVM(vm);
      done();
    });
  });

  it('select time', done => {
    const vm = createVue({
      template: `
        <div>
          <el-time-select ref="compo" v-model="value">
          </el-time-select>
        </div>
      `,

      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    input.blur();

    Vue.nextTick(_ => {
      const items = vm.$refs.compo.picker.$el.querySelectorAll('.time-select-item');
      const target = items[4];
      const time = target.textContent;

      target.click();
      Vue.nextTick(_ => {
        expect(vm.value).to.equal(time);
        destroyVM(vm);
        done();
      });
    });
  });

  it('set default value', done => {
    const vm = createTest(TimeSelect, {
      value: '14:30'
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    input.blur();

    setTimeout(_ => {
      expect(input.value).to.equal('14:30');
      expect(vm.picker.$el.querySelector('.selected')).to.be.ok;
      expect(vm.picker.$el.querySelector('.selected').textContent).to.equal('14:30');
      destroyVM(vm);
      done();
    }, 50);
  });

  it('set minTime', done => {
    const vm = createVue(`
      <el-time-select
        ref="picker"
        :picker-options="{
          minTime: '14:30'
        }">
      </el-time-select>
    `, true);
    const input = vm.$el.querySelector('input');
    const picker = vm.$refs.picker;

    input.focus();
    input.blur();

    setTimeout(_ => {
      const elms = picker.picker.$el.querySelectorAll('.disabled');
      const elm = elms[elms.length - 1];

      expect(elm.textContent).to.equal('14:30');
      destroyVM(vm);
      done();
    }, 50);
  });

  it('minTime < value', done => {
    const vm = createVue({
      template: `
        <el-time-select
          ref="picker"
          v-model="value"
          :picker-options="{
            minTime: '14:30'
          }">
        </el-time-select>
      `,
      data() {
        return { value: '09:30' };
      }
    }, true);
    const input = vm.$el.querySelector('input');
    const picker = vm.$refs.picker;

    input.focus();
    input.blur();

    setTimeout(_ => {
      vm.value = '10:30';

      setTimeout(_ => {
        expect(picker.picker.value).to.equal('09:30');
        destroyVM(vm);
        done();
      }, 50);
    }, 50);
  });
});
