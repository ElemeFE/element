import { createTest, destroyVM, createVue } from '../util';
import TimePicker from 'packages/time-picker';

const DELAY = 1000;

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

    setTimeout(() => {
      const list = vm.picker.$el.querySelectorAll('.tm-time-spinner__list');
      const hoursEl = list[0];
      expect(hoursEl.querySelectorAll('.tm-time-spinner__item')[0].textContent).to.equal('12 AM');
      expect(hoursEl.querySelectorAll('.tm-time-spinner__item')[1].textContent).to.equal('01 AM');
      expect(hoursEl.querySelectorAll('.tm-time-spinner__item')[12].textContent).to.equal('12 PM');
      expect(hoursEl.querySelectorAll('.tm-time-spinner__item')[15].textContent).to.equal('03 PM');
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

    setTimeout(() => {
      const times = vm.picker.$el.querySelectorAll('.active');

      expect(times[0].textContent).to.equal('18');
      expect(times[1].textContent).to.equal('40');
      expect(times[2].textContent).to.equal('00');
      done();
    }, DELAY);
  });

  it('select time', done => {
    vm = createVue({
      template: '<tm-time-picker ref="compo" v-model="value"></tm-time-picker>',
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

    setTimeout(() => {
      const list = timePicker.picker.$el.querySelectorAll('.tm-time-spinner__list');

      const hoursEl = list[0];
      const minutesEl = list[1];
      const secondsEl = list[2];
      const hourEl = hoursEl.querySelectorAll('.tm-time-spinner__item')[4];
      const minuteEl = minutesEl.querySelectorAll('.tm-time-spinner__item')[36];
      const secondEl = secondsEl.querySelectorAll('.tm-time-spinner__item')[20];

      // click hour, minute, second one at a time.
      hourEl.click();
      vm.$nextTick(() => {
        minuteEl.click();
        vm.$nextTick(() => {
          secondEl.click();
          setTimeout(() => {
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
      template: '<tm-time-picker ref="compo" v-model="value"></tm-time-picker>',
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

    setTimeout(() => {
      timePicker.picker.$el.querySelector('.tm-time-panel__btn.cancel').click();

      setTimeout(() => {
        expect(vm.value).to.equal('');
        done();
      }, DELAY);
    }, DELAY);
  });

  it('click confirm button', done => {
    vm = createVue({
      template: '<tm-time-picker ref="compo" v-model="value"></tm-time-picker>',
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

    setTimeout(() => {
      timePicker.picker.$el.querySelector('.tm-time-panel__btn.confirm').click();

      setTimeout(() => {
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

    setTimeout(() => {
      expect(vm.picker.$el.querySelectorAll('.tm-time-spinner__wrapper')[2].style.display).to.equal('none');
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

    setTimeout(() => {
      expect(vm.picker.$el.querySelectorAll('.tm-time-spinner__wrapper')[2].style.display).to.equal('none');
      done();
    }, DELAY);
  });

  it('selectableRange', done => {
    vm = createTest(TimePicker, {
      pickerOptions: {
        selectableRange: '18:30:00 - 20:30:00'
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(() => {
      const list = vm.picker.$el.querySelectorAll('.tm-time-spinner__list');
      const hoursEl = list[0];
      const disabledHours = [].slice
        .call(hoursEl.querySelectorAll('.disabled'))
        .map(node => Number(node.textContent));

      hoursEl.querySelectorAll('.disabled')[0].click();
      expect(disabledHours).to.not.include.members([18, 19, 20]);
      done();
    }, DELAY);
  });

  it('event focus and blur', done => {
    vm = createVue({
      template: `
        <tm-date-picker
          type="date"
          placeholder="选择日期"
          ref="picker">
        </tm-date-picker>
      `
    }, true);

    const spyFocus = sinon.spy();
    const spyBlur = sinon.spy();

    vm.$refs.picker.$on('focus', spyFocus);
    vm.$refs.picker.$on('blur', spyBlur);
    vm.$el.querySelector('input').focus();

    vm.$nextTick(() => {
      expect(spyFocus.calledOnce).to.be.true;
      vm.$refs.picker.pickerVisible = false;
      vm.$nextTick(() => {
        expect(spyBlur.calledOnce).to.be.true;
        done();
      });
    });
  });

  it('focus', done => {
    vm = createVue({
      template: `
        <tm-date-picker
          type="date"
          placeholder="选择日期"
          ref="picker">
        </tm-date-picker>
      `
    }, true);

    const spy = sinon.spy();

    vm.$refs.picker.$on('focus', spy);
    vm.$refs.picker.focus();

    vm.$nextTick(() => {
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

    setTimeout(() => {
      expect(vm.picker.$el.querySelectorAll('.tm-time-range-picker__cell')).to.length(2);
      expect(vm.picker.minDate.getTime()).to.equal(new Date(2016, 9, 10, 18, 40).getTime());
      expect(vm.picker.maxDate.getTime()).to.equal(new Date(2016, 9, 10, 19, 40).getTime());
      done();
    }, DELAY);
  });

  it('default value', done => {
    const defaultValue = [new Date(2000, 9, 1, 10, 0, 0), new Date(2000, 9, 1, 11, 0, 0)];
    vm = createVue({
      template: '<tm-time-picker ref="compo" is-range v-model="value" :default-value="defaultValue"></tm-time-picker>',
      data() {
        return {
          value: '',
          defaultValue
        };
      }
    }, true);

    const timePicker = vm.$refs.compo;
    timePicker.$el.querySelector('input').click();

    setTimeout(() => {
      expect(timePicker.picker.minDate.getTime()).to.equal(defaultValue[0].getTime());
      expect(timePicker.picker.maxDate.getTime()).to.equal(defaultValue[1].getTime());
      done();
    }, DELAY);
  });

  it('cancel button', done => {
    vm = createVue({
      template: '<tm-time-picker ref="compo" is-range v-model="value"></tm-time-picker>',
      data() {
        return {
          value: ''
        };
      }
    }, true);

    const timePicker = vm.$refs.compo;
    timePicker.$el.querySelector('input').click();
    setTimeout(() => {
      timePicker.picker.$el.querySelector('.cancel').click();
      setTimeout(() => {
        expect(timePicker.picker.visible).to.false;
        expect(vm.value).to.equal('');
        done();
      }, DELAY);
    }, DELAY);
  });
});
