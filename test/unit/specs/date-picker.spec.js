import { createTest, createVue } from '../util';
import DatePicker from 'packages/date-picker';

describe('DatePicker', () => {
  it('create', () => {
    const vm = createTest(DatePicker, {
      readonly: true,
      placeholder: '23333',
      format: 'HH-mm-ss'
    });
    const input = vm.$el.querySelector('input');

    expect(input.getAttribute('placeholder')).to.equal('23333');
    expect(input.getAttribute('readonly')).to.equal('readonly');
  });

  it('select date', done => {
    const vm = createVue({
      template: `
        <el-date-picker ref="compo" v-model="value"></el-date-picker>
      `,
      data() {
        return { value: '' };
      }
    }, true);
    const input = vm.$el.querySelector('input');
    const date = new Date();

    input.blur();
    input.focus();

    setTimeout(_ => {
      const $el = vm.$refs.compo.picker.$el;
      const spans = $el.querySelectorAll('.el-date-picker__header-label');
      const arrowLeftElm = $el.querySelector('.el-date-picker__prev-btn.el-icon-arrow-left');
      const arrowRightElm = $el.querySelector('.el-date-picker__next-btn.el-icon-arrow-right');

      expect(spans[0].textContent).to.include(date.getFullYear());
      expect(spans[1].textContent).to.include(date.getMonth() + 1);
      $el.querySelector('.el-date-picker__prev-btn.el-icon-d-arrow-left').click();
      // click 5
      arrowLeftElm.click();
      arrowLeftElm.click();
      arrowLeftElm.click();
      arrowLeftElm.click();
      arrowLeftElm.click();

      // click 3
      arrowRightElm.click();
      arrowRightElm.click();
      arrowRightElm.click();
      setTimeout(_ => {
        expect(spans[0].textContent).to.include(date.getFullYear() - 1);
        expect(spans[1].textContent).to.include(date.getMonth() - 1);
        $el.querySelector('td.available').click();
        vm.$nextTick(_ => {
          expect(vm.value).to.exist;
        });
        done();
      }, 150);
    }, 150);
  });

  it('type:month', done => {
    const vm = createTest(DatePicker, {
      type: 'month'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.el-month-table').style.display).to.be.empty;
      expect(vm.picker.$el.querySelector('.el-year-table').style.display).to.be.equal('none');
      vm.picker.$el.querySelector('.el-month-table a.cell').click();
      setTimeout(_ => {
        expect(vm.picker.$el.style.display).to.be.equal('none');
        done();
      }, 500);
    }, 150);
  });

  it('type:year', done => {
    const vm = createTest(DatePicker, {
      type: 'year'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.el-year-table').style.display).to.empty;
      expect(vm.picker.$el.querySelector('.el-month-table').style.display).to.be.equal('none');
      vm.picker.$el.querySelector('.el-icon-d-arrow-left').click();
      vm.picker.$el.querySelector('.el-icon-d-arrow-right').click();
      vm.picker.$el.querySelector('.el-year-table a.cell').click();
      setTimeout(_ => {
        expect(vm.picker.$el.style.display).to.be.equal('none');
        expect(vm.picker.date).to.exist;
        done();
      }, 500);
    }, 150);
  });

  it('type:datetime', done => {
    const vm = createTest(DatePicker, {
      type: 'datetime'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.el-time-panel')).to.ok;
      done();
    }, 150);
  });

  it('type:week', done => {
    const vm = createTest(DatePicker, {
      type: 'week'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.is-week-mode')).to.be.ok;
      done();
    }, 150);
  });

  it('type:daterange', done => {
    const vm = createTest(DatePicker, {
      type: 'daterange'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const panels = vm.picker.$el.querySelectorAll('.el-date-range-picker__content');

      expect(Array.prototype.slice.call(panels)).to.length(2);

      panels[0].querySelector('td.available').click();
      setTimeout(_ => {
        panels[1].querySelector('td.available').click();

        const { minDate, maxDate } = vm.picker;
        expect(minDate).to.exist;
        expect(maxDate).to.exist;
        expect(maxDate > minDate).to.true;
        done();
      }, 150);
    }, 150);
  });

  it('type:datetimerange', done => {
    const vm = createTest(DatePicker, {
      type: 'datetimerange'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(Array.prototype.slice.call(vm.picker.$el.querySelectorAll('.el-time-panel'))).to.length(2);
      done();
    }, 150);
  });

  it('picker-options:shortcuts', done => {
    const vm = createTest(DatePicker, {
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }
        ]
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.el-picker-panel__shortcut').textContent).to.be.equal('今天');
      expect(vm.picker.$el.querySelector('.el-picker-panel__sidebar')).to.be.ok;
      done();
    }, 150);
  });

  it('picker-options:disabledDate', done => {
    const vm = createTest(DatePicker, {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.disabled')).to.be.ok;
      done();
    }, 150);
  });
});
