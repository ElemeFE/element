import { createTest, createVue } from '../util';
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
    vm.$el.querySelector('input').blur();
    vm.$el.querySelector('input').focus();
    vm.$el.querySelector('input').blur();

    Vue.nextTick(_ => {
      expect(vm.picker.start).to.equal('08:30');
      expect(vm.picker.end).to.equal('18:30');
      expect(vm.picker.step).to.equal('00:15');
      expect(vm.$el.querySelector('input').getAttribute('placeholder')).to.equal('test');
      done();
    });
  });

  it('click time', done => {
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

    vm.$el.querySelector('input').blur();
    vm.$el.querySelector('input').focus();
    vm.$el.querySelector('input').blur();

    Vue.nextTick(_ => {
      const items = vm.$refs.compo.picker.$el.querySelectorAll('.time-select-item');
      const target = items[4];
      const time = target.textContent.trim();

      target.click();
      Vue.nextTick(_ => {
        expect(vm.value).to.equal(time);
        done();
      });
    });
  });
});
