import { createTest, destroyVM } from '../util';
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
    destroyVM(vm);
  });

  it('format', () => {
    const vm = createTest(TimePicker, {
      format: 'HH-mm-ss',
      value: new Date(2016, 9, 10, 18, 40)
    });
    expect(vm.$el.querySelector('input').value).to.equal('18-40-00');
    destroyVM(vm);
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
      destroyVM(vm);
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
        destroyVM(vm);
        done();
      });
    });
  });

  it('click cancel button', done => {
    const vm = createTest(TimePicker, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    Vue.nextTick(_ => {
      vm.picker.$el.querySelector('.el-time-panel__btn.cancel').click();

      Vue.nextTick(_ => {
        expect(vm.picker.currentDate).to.empty;
        done();
      });
    });
  });

  it('click confirm button', done => {
    const vm = createTest(TimePicker, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    Vue.nextTick(_ => {
      vm.picker.$el.querySelector('.el-time-panel__btn.confirm').click();

      Vue.nextTick(_ => {
        expect(vm.picker.currentDate).to.exist;
        done();
      });
    });
  });

  it('set format', done => {
    const vm = createTest(TimePicker, {
      pickerOptions: {
        format: 'HH:mm'
      }
    }, true);
    const input = vm.$el.querySelector('input');
    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelectorAll('.el-time-spinner__wrapper')[2].style.display).to.equal('none');
      destroyVM(vm);
      done();
    }, 20);
  });

  it('set format to empty', done => {
    const vm = createTest(TimePicker, {
      pickerOptions: {
        format: ''
      }
    }, true);
    const input = vm.$el.querySelector('input');
    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelectorAll('.el-time-spinner__wrapper')[2].style.display).to.equal('none');
      destroyVM(vm);
      done();
    }, 20);
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
      destroyVM(vm);
      done();
    }, 20);
  });
});

describe('TimePicker(range)', () => {
  let vm;
  beforeEach(done => {
    vm = createTest(TimePicker, {
      isRange: true,
      value: [new Date(2016, 9, 10, 18, 40), new Date(2016, 9, 10, 19, 40)]
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();
    input.blur();
    setTimeout(done, 20);
  });

  afterEach(() => destroyVM(vm));

  it('create', () => {
    expect(vm.picker.$el.querySelectorAll('.el-time-range-picker__cell')).to.length(2);
  });

  it('default value', () => {
    expect(vm.picker.minTime.getTime()).to.equal(new Date(2016, 9, 10, 18, 40).getTime());
    expect(vm.picker.maxTime.getTime()).to.equal(new Date(2016, 9, 10, 19, 40).getTime());
  });

  it('minTime < maxTime', done => {
    const vm2 = createTest(TimePicker, {
      isRange: true,
      value: [new Date(2016, 9, 10, 23, 40), new Date(2016, 9, 10, 10, 40)]
    }, true);
    const input = vm2.$el.querySelector('input');

    input.blur();
    input.focus();
    input.blur();
    setTimeout(() => {
      expect(vm2.picker.maxTime >= vm2.picker.minTime).to.true;
      destroyVM(vm2);
      done();
    }, 100);
  });

  it('click cancel button', done => {
    vm.picker.$el.querySelector('.el-time-panel__btn.cancel').click();
    Vue.nextTick(_ => {
      expect(vm.picker.currentDate).to.empty;
      done();
    });
  });
});
