import { createTest, destroyVM, createVue } from '../util';
import TimePicker from 'packages/time-picker';

const DELAY = 100;

describe('TimePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TimePicker, {
      placeholder: 'test',
      readonly: true
    });
    expect(vm.$el.querySelector('input').getAttribute('placeholder')).to.equal('test');
    expect(vm.$el.querySelector('input').getAttribute('readonly')).to.ok;
  });

  it('format', () => {
    vm = createTest(TimePicker, {
      format: 'HH-mm-ss',
      value: new Date(2016, 9, 10, 18, 40)
    });
    expect(vm.$el.querySelector('input').value).to.equal('18-40-00');
  });

  it('set AM/PM format', done => {
    vm = createTest(TimePicker, {
      format: 'hh:mm:ss A',
      value: new Date(2016, 9, 10, 18, 40)
    }, true);

    const input = vm.$el.querySelector('input');

    expect(vm.$el.querySelector('input').value).to.equal('06:40:00 PM');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const list = vm.picker.$el.querySelectorAll('.el-time-spinner__list');
      const hoursEl = list[0];
      expect(hoursEl.querySelectorAll('.el-time-spinner__item')[0].textContent).to.equal('12 AM');
      expect(hoursEl.querySelectorAll('.el-time-spinner__item')[1].textContent).to.equal('01 AM');
      expect(hoursEl.querySelectorAll('.el-time-spinner__item')[12].textContent).to.equal('12 PM');
      expect(hoursEl.querySelectorAll('.el-time-spinner__item')[15].textContent).to.equal('03 PM');
      done();
    }, DELAY);
  });

  it('default value', done => {
    vm = createTest(TimePicker, {
      value: new Date(2016, 9, 10, 18, 40)
    }, true);

    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();
    input.blur();

    setTimeout(_ => {
      const times = vm.picker.$el.querySelectorAll('.active');

      expect(times[0].textContent).to.equal('18');
      expect(times[1].textContent).to.equal('40');
      expect(times[2].textContent).to.equal('00');
      done();
    }, DELAY);
  });

  it('select time', done => {
    vm = createVue({
      template: '<el-time-picker ref="compo" v-model="value"></el-time-picker>',
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const timePicker = vm.$refs.compo;
    const input = timePicker.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const list = timePicker.picker.$el.querySelectorAll('.el-time-spinner__list');

      const hoursEl = list[0];
      const minutesEl = list[1];
      const secondsEl = list[2];
      const hourEl = hoursEl.querySelectorAll('.el-time-spinner__item')[4];
      const minuteEl = minutesEl.querySelectorAll('.el-time-spinner__item')[36];
      const secondEl = secondsEl.querySelectorAll('.el-time-spinner__item')[20];

      // click hour, minute, second one at a time.
      hourEl.click();
      vm.$nextTick(_ => {
        minuteEl.click();
        vm.$nextTick(_ => {
          secondEl.click();
          setTimeout(_ => {
            const date = timePicker.picker.date;
            expect(hourEl.classList.contains('active')).to.true;
            expect(minuteEl.classList.contains('active')).to.true;
            expect(secondEl.classList.contains('active')).to.true;
            expect(date.getHours()).to.equal(4);
            expect(date.getMinutes()).to.equal(36);
            expect(date.getSeconds()).to.equal(20);
            done();
          }, DELAY);
        });
      });
    }, DELAY);
  });

  it('click cancel button', done => {
    vm = createVue({
      template: '<el-time-picker ref="compo" v-model="value"></el-time-picker>',
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const timePicker = vm.$refs.compo;
    const input = timePicker.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      timePicker.picker.$el.querySelector('.el-time-panel__btn.cancel').click();

      setTimeout(_ => {
        expect(vm.value).to.equal('');
        done();
      }, DELAY);
    }, DELAY);
  });

  it('click confirm button', done => {
    vm = createVue({
      template: '<el-time-picker ref="compo" v-model="value"></el-time-picker>',
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const timePicker = vm.$refs.compo;
    const input = timePicker.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      timePicker.picker.$el.querySelector('.el-time-panel__btn.confirm').click();

      setTimeout(_ => {
        expect(vm.value.toISOString()).to.exist;
        done();
      }, DELAY);
    }, DELAY);
  });

  it('set format', done => {
    vm = createTest(TimePicker, {
      pickerOptions: {
        format: 'HH:mm'
      }
    }, true);
    const input = vm.$el.querySelector('input');
    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelectorAll('.el-time-spinner__wrapper')[2].style.display).to.equal('none');
      done();
    }, 20);
  });

  it('set format to empty', done => {
    vm = createTest(TimePicker, {
      pickerOptions: {
        format: ''
      }
    }, true);
    const input = vm.$el.querySelector('input');
    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelectorAll('.el-time-spinner__wrapper')[2].style.display).to.equal('none');
      done();
    }, DELAY);
  });

  it('selectableRange', done => {
    vm = createTest(TimePicker, {
      pickerOptions: {
        selectableRange: ['17:30:00 - 18:30:00', '18:50:00 - 20:30:00', '21:00:00 - 22:00:00']
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const list = vm.picker.$el.querySelectorAll('.el-time-spinner__list');
      const hoursEl = list[0];
      const disabledHours = [].slice
        .call(hoursEl.querySelectorAll('.disabled'))
        .map(node => Number(node.textContent));

      hoursEl.querySelectorAll('.disabled')[0].click();
      expect(disabledHours).to.not.include.members([17, 18, 19, 20, 21, 22]);

      const minutesEl = list[1];
      hoursEl.querySelectorAll('.el-time-spinner__item')[18].click();
      setTimeout(_ => {
        const disabledMinutes = [].slice
          .call(minutesEl.querySelectorAll('.disabled'))
          .map(node => Number(node.textContent));
        expect(disabledMinutes.every(t => t > 30 && t < 50)).to.equal(true);
        expect(disabledMinutes.length).to.equal(19);
        done();
      }, DELAY);
    }, DELAY);
  });

  it('event focus and blur', done => {
    vm = createVue({
      template: `
        <el-date-picker
          type="date"
          placeholder="选择日期"
          ref="picker">
        </el-date-picker>
      `
    }, true);

    const spyFocus = sinon.spy();
    const spyBlur = sinon.spy();

    vm.$refs.picker.$on('focus', spyFocus);
    vm.$refs.picker.$on('blur', spyBlur);
    vm.$el.querySelector('input').focus();

    vm.$nextTick(_ => {
      expect(spyFocus.calledOnce).to.be.true;
      vm.$refs.picker.pickerVisible = false;
      vm.$nextTick(_ => {
        expect(spyBlur.calledOnce).to.be.true;
        done();
      });
    });
  });

  it('focus', done => {
    vm = createVue({
      template: `
        <el-date-picker
          type="date"
          placeholder="选择日期"
          ref="picker">
        </el-date-picker>
      `
    }, true);

    const spy = sinon.spy();

    vm.$refs.picker.$on('focus', spy);
    vm.$refs.picker.focus();

    vm.$nextTick(_ => {
      expect(spy.calledOnce).to.be.true;
      done();
    });
  });

});

describe('TimePicker(range)', () => {
  let vm;

  afterEach(() => destroyVM(vm));

  it('create', done => {
    vm = createTest(TimePicker, {
      isRange: true,
      value: [new Date(2016, 9, 10, 18, 40), new Date(2016, 9, 10, 19, 40)]
    }, true);

    vm.$el.querySelector('input').click();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelectorAll('.el-time-range-picker__cell')).to.length(2);
      expect(vm.picker.minDate.getTime()).to.equal(new Date(2016, 9, 10, 18, 40).getTime());
      expect(vm.picker.maxDate.getTime()).to.equal(new Date(2016, 9, 10, 19, 40).getTime());
      done();
    }, DELAY);
  });

  it('default value', done => {
    const defaultValue = [new Date(2000, 9, 1, 10, 0, 0), new Date(2000, 9, 1, 11, 0, 0)];
    vm = createVue({
      template: '<el-time-picker ref="compo" is-range v-model="value" :default-value="defaultValue"></el-time-picker>',
      data() {
        return {
          value: '',
          defaultValue
        };
      }
    }, true);

    const timePicker = vm.$refs.compo;
    timePicker.$el.querySelector('input').click();

    setTimeout(_ => {
      expect(timePicker.picker.minDate.getTime()).to.equal(defaultValue[0].getTime());
      expect(timePicker.picker.maxDate.getTime()).to.equal(defaultValue[1].getTime());
      done();
    }, DELAY);
  });

  it('cancel button', done => {
    vm = createVue({
      template: '<el-time-picker ref="compo" is-range v-model="value"></el-time-picker>',
      data() {
        return {
          value: ''
        };
      }
    }, true);

    const timePicker = vm.$refs.compo;
    timePicker.$el.querySelector('input').click();
    setTimeout(_ => {
      timePicker.picker.$el.querySelector('.cancel').click();
      setTimeout(_ => {
        expect(timePicker.picker.visible).to.false;
        expect(vm.value).to.equal('');
        done();
      }, DELAY);
    }, DELAY);
  });
});
