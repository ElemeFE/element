import {
  createTest,
  createVue,
  destroyVM,
  triggerEvent
} from '../util';
import DatePicker from 'packages/date-picker';

const DELAY = 10;

describe('DatePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DatePicker, {
      readonly: true,
      placeholder: '23333',
      format: 'HH-mm-ss'
    });
    const input = vm.$el.querySelector('input');

    expect(input.getAttribute('placeholder')).to.equal('23333');
    expect(input.getAttribute('readonly')).to.equal('readonly');
  });

  it('select date', done => {
    vm = createVue({
      template: `
        <el-date-picker ref="compo" v-model="value"></el-date-picker>
      `,
      data() {
        return {
          value: ''
        };
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
      let count = 20;
      while (--count) {
        arrowLeftElm.click();
      }

      count = 20;
      while (--count) {
        arrowRightElm.click();
      }
      setTimeout(_ => {
        expect(spans[0].textContent).to.include(date.getFullYear() - 1);
        expect(spans[1].textContent).to.include(date.getMonth() + 1);
        $el.querySelector('td.available').click();
        vm.$nextTick(_ => {
          expect(vm.value).to.exist;
        });
        done();
      }, DELAY);
    }, DELAY);
  });

  it('clear value', done => {
    vm = createVue({
      template: `
        <el-date-picker v-model="value" ref="compo"></el-date-picker>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    setTimeout(_ => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('td.available').click();
      vm.$nextTick(_ => {
        vm.$el.querySelector('.el-input__icon').click();
        setTimeout(_ => {
          expect(vm.value).to.empty;
          done();
        }, DELAY);
      });
    }, DELAY);
  });

  it('disabled clear value', done => {
    vm = createVue({
      template: `
        <el-date-picker v-model="value" ref="compo" :clearable="false"></el-date-picker>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    setTimeout(_ => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('td.available').click();
      vm.$nextTick(_ => {
        vm.$el.querySelector('.el-input__icon').click();
        setTimeout(_ => {
          expect(vm.value).to.be.exist;
          done();
        }, DELAY);
      });
    }, DELAY);
  });

  it('reset', done => {
    vm = createVue({
      template: `
        <el-date-picker ref="compo" v-model="value"></el-date-picker>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();
    setTimeout(_ => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('.el-date-picker__next-btn.el-icon-arrow-right').click();
      setTimeout(_ => {
        $el.querySelector('td.available').click();
        vm.$nextTick(_ => {
          vm.value = '';
          setTimeout(_ => {
            expect(vm.$refs.compo.picker.date.getDate()).to.equal(new Date().getDate());
            done();
          }, DELAY);
        });
      }, DELAY);
    }, DELAY);
  });

  it('change event', done => {
    let inputValue;

    vm = createVue({
      template: `
        <el-date-picker
          ref="compo"
          v-model="value"
          format="yyyy-MM"
          @change="handleChange" />`,

      methods: {
        handleChange(val) {
          inputValue = val;
        }
      },

      data() {
        return {
          value: ''
        };
      }
    }, true);

    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const picker = vm.$refs.compo.picker;

      picker.$el.querySelector('td.available').click();
      vm.$nextTick(_ => {
        const date = picker.date;
        let month = date.getMonth() + 1;
        if (month < 10) month = '0' + month;

        expect(inputValue).to.equal(`${date.getFullYear()}-${ month }`);
        done();
      });
    }, DELAY);
  });

  describe('input event', () => {
    // mimic standard <select>'s behavior
    // emit input if and only if value changes
    afterEach(() => {
      destroyVM(vm);
    });

    it('works for type=date', done => {
      let emitted = false;
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="date"
            @input="handleInput" />`,

        methods: {
          handleInput(val) {
            emitted = true;
          }
        },

        data() {
          return {
            value: ''
          };
        }
      }, true);

      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(_ => {
        const picker = vm.$refs.compo.picker;

        picker.$el.querySelector('td.available').click();
        setTimeout(_ => {
          expect(emitted).to.true;
          emitted = false;

          setTimeout(_ => {
            input.blur();
            input.focus();

            picker.$el.querySelector('td.available').click();
            setTimeout(_ => {
              expect(emitted).to.false;
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('works for type=daterange', done => {
      let emitted = false;
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="daterange"
            @input="handleInput" />`,

        methods: {
          handleInput(val) {
            emitted = true;
          }
        },

        data() {
          return {
            value: ''
          };
        }
      }, true);

      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(_ => {
        const picker = vm.$refs.compo.picker;

        picker.$el.querySelector('td.available').click();
        setTimeout(_ => {
          picker.$el.querySelector('td.available + td.available').click();
          setTimeout(_ => {
            expect(emitted).to.true;
            emitted = false;

            setTimeout(_ => {
              input.blur();
              input.focus();

              const picker = vm.$refs.compo.picker;
              picker.$el.querySelector('td.available').click();
              setTimeout(_ => {
                picker.$el.querySelector('td.available + td.available').click();
                setTimeout(_ => {
                  expect(emitted).to.false;
                  done();
                });
              }, DELAY);
            }, DELAY);
          });
        }, DELAY);
      }, DELAY);
    });

  });

  it('default value', done => {
    const toDateStr = date => {
      let d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    };
    let today = new Date();
    let nextMonth = new Date(today);
    nextMonth.setDate(1);
    if (nextMonth.getMonth() === 12) {
      nextMonth.setFullYear(today.getFullYear + 1);
      nextMonth.setMonth(1);
    } else {
      nextMonth.setMonth(today.getMonth() + 1);
    }
    let nextMonthStr = toDateStr(nextMonth);

    vm = createVue({
      template: `<el-date-picker v-model="value" ref="compo" default-value="${nextMonthStr}" />`,
      data() {
        return {
          value: ''
        };
      }
    }, true);

    const input = vm.$el.querySelector('input');

    input.focus();
    setTimeout(_ => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('td.current').click();
      setTimeout(_ => {
        expect(vm.value).to.equal(nextMonthStr);
      });
      done();
    });
  });

  describe('keydown', () => {
    let input;
    let keyDown = function(el, keyCode) {
      const evt = document.createEvent('Events');

      evt.initEvent('keydown', true, true);
      evt.keyCode = keyCode;
      el.dispatchEvent(evt);
    };

    beforeEach(done => {
      vm = createTest(DatePicker, true);
      input = vm.$el.querySelector('input');
      input.blur();
      input.focus();
      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('tab', () => {
      keyDown(input, 9);
      expect(vm.pickerVisible).to.false;
    });

    it('enter', done => {
      input.value = '2000-10-1';
      triggerEvent(input, 'change', true);
      setTimeout(_ => {
        expect(vm.pickerVisible).to.false;
        expect(vm.picker.date.getFullYear()).to.equal(2000);
        expect(vm.picker.date.getMonth()).to.equal(9);
        expect(vm.picker.date.getDate()).to.equal(1);
        done();
      }, DELAY);
    });

    it('left', () => {
      input.value = '2000-10-1';
      keyDown(input, 13);
      input.focus();
      keyDown(input, 37);
      expect(input.selectionStart > 0).to.true;
    });

    it('right', () => {
      input.value = '2000-10-1';
      keyDown(input, 13);
      input.focus();
      keyDown(input, 39);
      expect(input.selectionStart > 0).to.true;
    });
  });

  it('type:month', done => {
    vm = createTest(DatePicker, {
      type: 'month'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.el-month-table').style.display).to.be.empty;
      expect(vm.picker.$el.querySelector('.el-year-table').style.display).to.be.equal('none');
      vm.picker.$el.querySelector('.el-month-table a.cell').click();
      expect(vm.pickerVisible).to.false;
      done();
    }, DELAY);
  });

  it('type:year', done => {
    vm = createTest(DatePicker, {
      type: 'year'
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      expect(vm.picker.$el.querySelector('.el-year-table').style.display).to.empty;
      expect(vm.picker.$el.querySelector('.el-month-table').style.display).to.be.equal('none');

      const leftBtn = vm.picker.$el.querySelector('.el-icon-d-arrow-left');
      const rightBtn = vm.picker.$el.querySelector('.el-icon-d-arrow-right');
      let count = 20;

      while (--count) {
        leftBtn.click();
      }
      count = 18;
      while (--count) {
        rightBtn.click();
      }

      vm.picker.$el.querySelector('.el-year-table a.cell').click();
      expect(vm.pickerVisible).to.false;
      done();
    }, DELAY);
  });

  describe('type:datetime', () => {
    let vm;
    beforeEach(done => {
      vm = createTest(DatePicker, {
        type: 'datetime'
      }, true);
      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('create', () => {
      expect(vm.picker.$el.querySelector('.el-time-panel')).to.ok;
    });

    it('click now button', done => {
      const date = new Date(1999, 10, 10, 10, 10);

      vm.picker.$el.querySelector('.el-picker-panel__link-btn').click();
      setTimeout(_ => {
        expect(vm.picker.date > date).to.true;
        done();
      }, DELAY);
    });

    it('click timepicker', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-picker__editor-wrap input')[1];
      triggerEvent(input, 'focus');

      setTimeout(_ => {
        expect(vm.picker.$el.querySelector('.el-time-panel')).to.have.deep.property('style.display').to.equal('');
        done();
      }, DELAY);
    });

    it('input timepicker', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-picker__editor-wrap input')[1];

      input.value = '20:30:33';
      triggerEvent(input, 'change', true);
      setTimeout(_ => {
        expect(vm.picker.date.getHours()).to.equal(20);
        expect(vm.picker.date.getMinutes()).to.equal(30);
        expect(vm.picker.date.getSeconds()).to.equal(33);
        done();
      }, DELAY);
    });

    it('input date', done => {
      const input = vm.picker.$el.querySelector('.el-date-picker__editor-wrap input');

      input.value = '2017-2-2';
      triggerEvent(input, 'change', true);
      setTimeout(_ => {
        expect(vm.picker.date.getFullYear()).to.equal(2017);
        expect(vm.picker.date.getMonth()).to.equal(1);
        expect(vm.picker.date.getDate()).to.equal(2);
        done();
      }, DELAY);
    });

    it('select time', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-picker__editor-wrap input')[1];
      input.blur();
      input.focus();
      input.blur();

      setTimeout(_ => {
        const button = vm.picker.$el.querySelector('.el-time-panel .confirm');
        button.click();

        setTimeout(_ => {
          expect(input.value).to.exist;
          done();
        }, DELAY);
      }, DELAY);
    });
  });

  describe('type:week', () => {
    let vm;

    beforeEach(done => {
      vm = createTest(DatePicker, {
        type: 'week'
      }, true);
      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();
      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('create', () => {
      expect(vm.picker.$el.querySelector('.is-week-mode')).to.be.ok;
    });

    it('click cell', done => {
      vm.picker.$el.querySelector('.el-date-table__row .available').click();
      setTimeout(_ => {
        expect(vm.picker.week).to.exist;
        done();
      }, DELAY);
    });

    it('click year label', () => {
      vm.picker.$el.querySelector('.el-date-picker__header-label').click();
      expect(vm.picker.currentView).to.equal('year');
    });

    it('click month label', () => {
      vm.picker.$el.querySelectorAll('.el-date-picker__header-label')[1].click();
      expect(vm.picker.currentView).to.equal('month');
    });

    it('select month', done => {
      vm.picker.$el.querySelectorAll('.el-date-picker__header-label')[1].click();

      setTimeout(_ => {
        vm.picker.$el.querySelector('.el-month-table .cell').click();

        setTimeout(_ => {
          expect(vm.picker.$el.querySelector('.el-date-table.is-week-mode').style.display).to.equal('');
          done();
        }, DELAY);
      }, DELAY);
    });
  });

  it('type:daterange', done => {
    vm = createTest(DatePicker, {
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

        const {
          minDate,
          maxDate
        } = vm.picker;
        expect(minDate).to.exist;
        expect(maxDate).to.exist;
        expect(maxDate > minDate).to.true;
        done();
      }, DELAY);
    }, DELAY);
  });

  describe('type:datetimerange', () => {
    let vm;
    beforeEach(done => {
      vm = createTest(DatePicker, {
        type: 'datetimerange',
        value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
      }, true);
      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('create', () => {
      expect(Array.prototype.slice.call(vm.picker.$el.querySelectorAll('.el-time-panel'))).to.length(2);
    });

    it('click timepicker', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-range-picker__editors-wrap input')[1];
      input.blur();
      input.focus();
      input.blur();

      setTimeout(_ => {
        expect(vm.picker.$el.querySelector('.el-date-range-picker__time-picker-wrap .el-time-panel')).to.have.deep.property('style.display').to.equal('');
        done();
      }, DELAY);
    });

    it('click timepicker in right', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-range-picker__editors-wrap input')[3];
      input.blur();
      input.focus();
      input.blur();

      setTimeout(_ => {
        expect(vm.picker.$el.querySelectorAll('.el-date-range-picker__time-picker-wrap .el-time-panel')[1]).to.have.deep.property('style.display').to.equal('');
        done();
      }, DELAY);
    });

    it('input timepicker', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-range-picker__editors-wrap input')[1];

      input.value = '10:22:14';
      triggerEvent(input, 'change', true);
      setTimeout(_ => {
        expect(vm.picker.minDate.getHours()).to.equal(10);
        expect(vm.picker.minDate.getMinutes()).to.equal(22);
        expect(vm.picker.minDate.getSeconds()).to.equal(14);
        done();
      }, DELAY);
    });

    it('input timepicker in right', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-range-picker__editors-wrap input')[3];

      input.value = '10:22:14';
      triggerEvent(input, 'change', true);
      setTimeout(_ => {
        expect(vm.picker.maxDate.getHours()).to.equal(10);
        expect(vm.picker.maxDate.getMinutes()).to.equal(22);
        expect(vm.picker.maxDate.getSeconds()).to.equal(14);
        done();
      }, DELAY);
    });

    it('select daterange', done => {
      const pickers = vm.picker.$el.querySelectorAll('.el-date-range-picker__content');
      const leftCell = pickers[0].querySelector('td.available');
      const rightCell = pickers[1].querySelector('td.available');

      triggerEvent(leftCell, 'mousemove', true);
      triggerEvent(leftCell, 'click', true);
      setTimeout(_ => {
        triggerEvent(rightCell, 'mousemove', true);
        triggerEvent(rightCell, 'click', true);

        setTimeout(_ => {
          const {
            minDate,
            maxDate
          } = vm.picker;
          const minMonth = minDate.getMonth();
          const maxMonth = maxDate.getMonth();

          expect([1, -11]).to.include(maxMonth - minMonth); // one month
          done();
        }, DELAY);
      }, DELAY);
    });

    it('prev/next month button', done => {
      const leftBtn = vm.picker.$el.querySelector('.is-left .el-icon-arrow-left');
      const rightBtn = vm.picker.$el.querySelector('.is-right .el-icon-arrow-right');
      const left = vm.picker.$el.querySelector('.is-left .el-date-range-picker__header');
      const right = vm.picker.$el.querySelector('.is-right .el-date-range-picker__header');
      const leftText = left.textContent.match(/\d+/g);
      const rightText = right.textContent.match(/\d+/g);
      let count = 20;
      while (--count) {
        leftBtn.click();
      }
      count = 18;
      while (--count) {
        rightBtn.click();
      }

      setTimeout(_ => {
        const newLeft = left.textContent.match(/\d+/g);
        const newRight = right.textContent.match(/\d+/g);
        expect(leftText[1] - newLeft[1]).to.equal(2);
        expect(leftText[0] - newLeft[0]).to.equal(0);
        expect([-10, 2]).to.include(rightText[1] - newRight[1]);
        expect([0, 1]).to.include(rightText[0] - newRight[0]);
        done();
      }, DELAY);
    });

    it('prev/next year button', done => {
      const leftBtn = vm.picker.$el.querySelector('.is-left .el-icon-d-arrow-left');
      const rightBtn = vm.picker.$el.querySelector('.is-right .el-icon-d-arrow-right');
      const left = vm.picker.$el.querySelector('.is-left .el-date-range-picker__header');
      const right = vm.picker.$el.querySelector('.is-right .el-date-range-picker__header');
      const leftText = left.textContent.match(/\d+/g);
      const rightText = right.textContent.match(/\d+/g);

      let count = 20;
      while (--count) {
        leftBtn.click();
      }
      count = 18;
      while (--count) {
        rightBtn.click();
      }

      setTimeout(_ => {
        const newLeft = left.textContent.match(/\d+/g);
        const newRight = right.textContent.match(/\d+/g);

        expect(leftText[1] - newLeft[1]).to.equal(0);
        expect(leftText[0] - newLeft[0]).to.equal(2);
        expect(rightText[1] - newRight[1]).to.equal(0);
        expect(rightText[0] - newRight[0]).to.equal(2);
        done();
      }, DELAY);
    });

    it('input date', done => {
      const input = vm.picker.$el.querySelector('.el-date-range-picker__editors-wrap input');
      const pickers = vm.picker.$el.querySelectorAll('.el-date-range-picker__content');
      const leftCell = pickers[0].querySelector('td.available');
      const rightCell = pickers[1].querySelector('td.available');

      triggerEvent(leftCell, 'mousemove', true);
      triggerEvent(leftCell, 'click', true);
      setTimeout(_ => {
        triggerEvent(rightCell, 'mousemove', true);
        triggerEvent(rightCell, 'click', true);

        setTimeout(_ => {
          triggerEvent(input, 'input');
          input.value = '1989-6-4';
          triggerEvent(input, 'change', true);

          setTimeout(_ => {
            const minDate = vm.picker.minDate;
            expect(minDate.getFullYear()).to.equal(1989);
            expect(minDate.getMonth()).to.equal(5);
            expect(minDate.getDate()).to.equal(4);
            done();
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('input date when minDate > maxDate', done => {
      const input = vm.picker.$el.querySelector('.el-date-range-picker__editors-wrap input');
      const input2 = vm.picker.$el.querySelectorAll('.el-date-range-picker__editors-wrap input')[2];
      const pickers = vm.picker.$el.querySelectorAll('.el-date-range-picker__content');
      const leftCell = pickers[0].querySelector('td.available');
      const rightCell = pickers[1].querySelector('td.available');

      triggerEvent(leftCell, 'mousemove', true);
      triggerEvent(leftCell, 'click', true);
      setTimeout(_ => {
        triggerEvent(rightCell, 'mousemove', true);
        triggerEvent(rightCell, 'click', true);

        setTimeout(_ => {
          triggerEvent(input2, 'input');
          input2.value = '1988-6-4';
          triggerEvent(input2, 'change');

          setTimeout(_ => {
            triggerEvent(input, 'input');
            input.value = '1989-6-4';
            triggerEvent(input, 'change', true);
            setTimeout(_ => {
              expect(vm.picker.maxDate > vm.picker.minDate).to.true;
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('select time', done => {
      const input = vm.picker.$el.querySelectorAll('.el-date-range-picker__editors-wrap input')[1];
      input.blur();
      input.focus();
      input.blur();

      setTimeout(_ => {
        const button = vm.picker.$el.querySelector('.el-date-range-picker__time-picker-wrap .el-time-panel .confirm');
        button.click();

        setTimeout(_ => {
          expect(input.value).to.exist;
          done();
        }, DELAY);
      }, DELAY);
    });
  });

  const currentMonth = new Date(new Date().getTime());
  currentMonth.setDate(1);
  const chineseWeek = ['一', '二', '三', '四', '五', '六', '日'];

  const testWeek = (i) => it('picker-options:firstDayOfWeek ' + i, done => {
    vm = createTest(DatePicker, {
      pickerOptions: {
        firstDayOfWeek: i
      }
    }, true);

    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const firstWeek = vm.picker.$el.querySelector('tr th');
      expect(firstWeek.innerText).to.equal(chineseWeek[i - 1]);
      done();
    });
  });
  for (var i = 1; i <= 7; i++) {
    testWeek(i);
  }

  it('picker-options:shortcuts', done => {
    let test;
    vm = createTest(DatePicker, {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            test = true;
            picker.$emit('pick', new Date());
          }
        }]
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(_ => {
      const shortcut = vm.picker.$el.querySelector('.el-picker-panel__shortcut');

      expect(shortcut.textContent).to.be.equal('今天');
      expect(vm.picker.$el.querySelector('.el-picker-panel__sidebar')).to.be.ok;

      shortcut.click();
      setTimeout(_ => {
        expect(test).to.true;
        done();
      }, DELAY);
    }, DELAY);
  });

  describe('picker-options:disabledDate', () => {
    let vm;
    beforeEach(done => {
      vm = createTest(DatePicker, {
        value: new Date(),
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        }
      }, true);
      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(done, DELAY);
    });
    afterEach(() => destroyVM(vm));

    it('create', () => {
      expect(vm.picker.$el.querySelector('.disabled')).to.be.ok;
    });

    it('set disabled value', done => {
      const date = new Date(1999, 10, 10, 10, 10, 10);
      vm.picker.value = date;

      setTimeout(_ => {
        expect(vm.picker.date > date).to.true;
        done();
      }, DELAY);
    });

    it('set value', done => {
      const date = new Date(3000, 10, 10, 10, 10, 10);
      vm.picker.value = date;

      setTimeout(_ => {
        expect(vm.picker.date.getTime() === date.getTime()).to.true;
        done();
      }, DELAY);
    });
  });
});
