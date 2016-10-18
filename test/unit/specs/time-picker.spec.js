import { createTest } from '../util';
import TimePicker from 'packages/time-picker';
import Vue from 'vue';

describe('TimePicker', () => {
  it('create', () => {
    const vm = createTest(TimePicker, {
      placeholder: 'test',
      readonly: true
    });
    expect(vm.$el.querySelector('input').getAttribute('placeholder')).to.equal('test');
    expect(vm.$el.querySelector('input').getAttribute('readonly')).to.ok;
  });

  it('format', () => {
    const vm = createTest(TimePicker, {
      format: 'HH-mm-ss',
      value: new Date(2016, 9, 10, 18, 40)
    });
    expect(vm.$el.querySelector('input').value).to.equal('18-40-00');
  });

  it('default value', done => {
    const vm = createTest(TimePicker, {
      value: new Date(2016, 9, 10, 18, 40)
    }, true);

    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();
    input.blur();

    Vue.nextTick(_ => {
      const times = vm.picker.$el.querySelectorAll('.active');

      expect(times[0].textContent).to.equal('18');
      expect(times[1].textContent).to.equal('40');
      expect(times[2].textContent).to.equal('0');
      done();
    });
  });

  it('select time', done => {
    const vm = createTest(TimePicker, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    Vue.nextTick(_ => {
      const list = vm.picker.$el.querySelectorAll('.el-time-spinner__list');
      const hoursElm = list[0];
      const minutesElm = list[1];
      const secondsElm = list[2];
      const hourElm = hoursElm.querySelectorAll('.el-time-spinner__item')[4];
      const minuteElm = minutesElm.querySelectorAll('.el-time-spinner__item')[36];
      const secondElm = secondsElm.querySelectorAll('.el-time-spinner__item')[20];

      hourElm.click();
      minuteElm.click();
      secondElm.click();

      Vue.nextTick(_ => {
        const date = vm.picker.currentDate;

        expect(hourElm.classList.contains('active')).to.true;
        expect(minuteElm.classList.contains('active')).to.true;
        expect(secondElm.classList.contains('active')).to.true;
        expect(date.getHours()).to.equal(4);
        expect(date.getMinutes()).to.equal(36);
        expect(date.getSeconds()).to.equal(20);
        done();
      });
    });
  });

  it('selectableRange', done => {
    const vm = createTest(TimePicker, {
      pickerOptions: {
        selectableRange: '18:30:00 - 20:30:00'
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const list = vm.picker.$el.querySelectorAll('.el-time-spinner__list');
      const hoursElm = list[0];
      const disabledHours = [].slice
        .call(hoursElm.querySelectorAll('.disabled'))
        .map(node => Number(node.textContent));

      hoursElm.querySelectorAll('.disabled')[0].click();
      expect(disabledHours).to.not.include.members([18, 19, 20]);
      done();
    }, 150);
  });
});
