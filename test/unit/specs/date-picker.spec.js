import {
  createTest,
  createVue,
  destroyVM,
  triggerEvent
} from '../util';
import DatePicker from 'packages/date-picker';

const DELAY = 50;

const LEFT = 37;
const ENTER = 13;
const TAB = 9;

const keyDown = (el, keyCode) => {
  const evt = document.createEvent('Events');
  evt.initEvent('keydown', true, true);
  evt.keyCode = keyCode;
  el.dispatchEvent(evt);
};

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
      setTimeout(_ => {
        vm.$refs.compo.showClose = true;
        vm.$refs.compo.handleClickIcon({ stopPropagation: () => null });
        setTimeout(_ => {
          expect(vm.value).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
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

  it('focus', done => {
    vm = createVue({
      template: `
        <el-date-picker ref="picker"></el-date-picker>
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

  it('change event', done => {
    let onChangeValue;

    vm = createVue({
      template: `
        <el-date-picker
          ref="compo"
          v-model="value"
          @change="handleChange" />`,

      methods: {
        handleChange(val) {
          onChangeValue = val;
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

      // programatic modification of bound value does not emit cange
      vm.value = new Date(2000, 9, 2);
      setTimeout(_ => {
        expect(onChangeValue).to.not.exist;
        // user interaction does emit change
        picker.$el.querySelector('td.available').click();
        setTimeout(_ => {
          expect(onChangeValue.getTime()).to.equal(vm.value.getTime());
          done();
        }, DELAY);
      }, DELAY);
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

      input.click();

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

    it('work for event focus and blur', done => {
      vm = createVue({
        template: `
          <el-date-picker ref="picker"/>
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
  });

  describe('value-format', () => {
    it('emits', done => {
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="date"
            value-format="dd/MM yyyy" />`,
        data() {
          return {
            value: ''
          };
        }
      }, true);

      const spy = sinon.spy();
      vm.$refs.compo.$on('change', spy);

      vm.$refs.compo.$el.querySelector('input').focus();
      setTimeout(_ => {
        vm.$refs.compo.picker.$el.querySelector('.el-date-table td.available').click();
        setTimeout(_ => {
          const today = new Date();
          const yyyy = today.getFullYear();
          const MM = ('0' + (today.getMonth() + 1)).slice(-2);
          const dd = '01'; // first available one should be first day of month
          const expectValue = `${dd}/${MM} ${yyyy}`;
          expect(vm.value).to.equal(expectValue);
          expect(spy.calledOnce).to.be.true;
          expect(spy.calledWith(expectValue)).to.be.true;
          done();
        }, DELAY);
      }, DELAY);
    });

    it('accepts', done => {
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="date"
            format="yyyy-MM-dd"
            value-format="dd/MM yyyy" />`,
        data() {
          return {
            value: '01/02 2000'
          };
        }
      }, true);
      const input = vm.$refs.compo.$el.querySelector('input');
      expect(input.value).to.equal('2000-02-01');
      expect(vm.$refs.compo.parsedValue).to.be.an.instanceof(Date);
      input.focus();
      setTimeout(_ => {
        const date = vm.$refs.compo.picker.date;
        expect(date.getFullYear()).to.equal(2000);
        expect(date.getMonth()).to.equal(1);
        expect(date.getDate()).to.equal(1);
        vm.$refs.compo.picker.$el.querySelector('.el-date-table .current').click();
        setTimeout(_ => {
          expect(input.value).to.equal('2000-02-01');
          done();
        }, DELAY);
      }, DELAY);
    });

    it('translates format to value-format', done => {
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="date"
            format="yyyy-MM-dd"
            value-format="dd/MM yyyy" />`,
        data() {
          return {
            value: ''
          };
        }
      }, true);
      const input = vm.$refs.compo.$el.querySelector('input');
      input.focus();
      setTimeout(_ => {
        input.value = '2000-10-01';
        triggerEvent(input, 'input');
        keyDown(input, ENTER);
        setTimeout(_ => {
          expect(vm.value).to.equal('01/10 2000');
          done();
        }, DELAY);
      }, DELAY);
    });

    it('works for daterange', done => {
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="dd/MM yyyy" />`,
        data() {
          return {
            value: ''
          };
        }
      }, true);
      const inputs = vm.$refs.compo.$el.querySelectorAll('input');
      inputs[0].focus();
      setTimeout(_ => {
        inputs[0].value = '2000-10-01';
        triggerEvent(inputs[0], 'input');
        keyDown(inputs[0], TAB);
        setTimeout(_ => {
          inputs[1].focus();
          inputs[1].value = '2000-10-02';
          triggerEvent(inputs[1], 'input');
          keyDown(inputs[0], ENTER);
          setTimeout(_ => {
            expect(vm.value).to.eql(['01/10 2000', '02/10 2000']);
            done();
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('is timestamp', done => {
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="date"
            format="yyyy-MM-dd"
            value-format="timestamp" />`,
        data() {
          return {
            value: Date.now()
          };
        }
      }, true);
      const input = vm.$refs.compo.$el.querySelector('input');
      input.focus();
      setTimeout(_ => {
        // check timestamp is parsed internally
        expect(vm.$refs.compo.parsedValue.getTime()).to.equal(vm.value);
        input.value = '2000-10-01';
        triggerEvent(input, 'input');
        keyDown(input, ENTER);
        setTimeout(_ => {
          expect(vm.value).to.equal(new Date(2000, 9, 1).getTime());
          done();
        }, DELAY);
      }, DELAY);
    });

    it('works for daterange, is timestamp', done => {
      vm = createVue({
        template: `
          <el-date-picker
            ref="compo"
            v-model="value"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="timestamp" />`,
        data() {
          return {
            value: [Date.now(), Date.now() + 86400 * 1000]
          };
        }
      }, true);
      const inputs = vm.$refs.compo.$el.querySelectorAll('input');
      inputs[0].focus();
      setTimeout(_ => {
        // check timestamp is parsed internally
        expect(vm.$refs.compo.parsedValue[0].getTime()).to.equal(vm.value[0]);
        expect(vm.$refs.compo.parsedValue[1].getTime()).to.equal(vm.value[1]);
        inputs[0].value = '2000-10-01';
        triggerEvent(inputs[0], 'input');
        keyDown(inputs[0], TAB);
        setTimeout(_ => {
          inputs[1].focus();
          inputs[1].value = '2000-10-02';
          triggerEvent(inputs[1], 'input');
          keyDown(inputs[0], ENTER);
          setTimeout(_ => {
            expect(vm.value).to.eql([
              new Date(2000, 9, 1).getTime(),
              new Date(2000, 9, 2).getTime()
            ]);
            done();
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });
  });

  describe('default value', done => {
    it('it works', done => {
      let defaultValue = '2000-01-01';
      let expectValue = new Date(2000, 0, 1);

      vm = createVue({
        template: `<el-date-picker v-model="value" ref="compo" default-value="${defaultValue}" />`,
        data() {
          return {
            value: ''
          };
        }
      }, true);

      vm.$el.querySelector('input').focus();
      setTimeout(_ => {
        const $el = vm.$refs.compo.picker.$el;
        expect($el.querySelector('.el-month-table td.default')).to.exist;
        expect($el.querySelector('.el-year-table td.default')).to.exist;
        const defaultEls = $el.querySelectorAll('.el-date-table td.default');
        expect(defaultEls.length).to.equal(1);
        defaultEls[0].click();
        setTimeout(_ => {
          expect(vm.value).to.eql(expectValue);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('is reactive, works with clear', done => {
      let defaultValue = '2000-01-01';
      let expectValue = new Date(2000, 0, 1);

      vm = createVue({
        template: '<el-date-picker v-model="value" ref="compo" :default-value="defaultValue" />',
        data() {
          return {
            value: new Date(),
            defaultValue: null
          };
        }
      }, true);

      const input = vm.$el.querySelector('input');
      input.focus();
      setTimeout(_ => {
        let $el = vm.$refs.compo.picker.$el;
        expect($el.querySelector('.el-date-table td.current')).to.exist;
        vm.defaultValue = defaultValue;
        triggerEvent(vm.$refs.compo.$el, 'mouseenter');
        setTimeout(_ => {
          vm.$el.querySelector('.el-icon-circle-close').click();
          setTimeout(_ => {
            input.focus();
            setTimeout(() => {
              $el = vm.$refs.compo.picker.$el;
              expect($el.querySelector('.el-date-table td.current')).to.not.exist;
              expect($el.querySelector('.el-date-table td.default')).to.exist;
              $el.querySelector('.el-date-table td.default').click();
              setTimeout(() => {
                expect(vm.value).to.eql(expectValue);
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

  });

  describe('keydown', () => {
    let input, datePicker;

    beforeEach(done => {
      vm = createVue({
        template: '<el-date-picker ref="compo" v-model="value"></el-date-picker>',
        data() {
          return {
            value: ''
          };
        }
      }, true);
      datePicker = vm.$refs.compo;
      input = vm.$el.querySelector('input');
      input.blur();
      input.focus();
      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('tab', done => {
      keyDown(input, TAB);
      setTimeout(_ => {
        expect(datePicker.pickerVisible).to.false;
        done();
      }, DELAY);
    });

    it('enter', done => {
      input.value = '2000-10-1';
      triggerEvent(input, 'input');
      vm.$nextTick(_ => {
        keyDown(input, ENTER);
        setTimeout(_ => {
          expect(datePicker.pickerVisible).to.false;
          expect(datePicker.picker.date.getFullYear()).to.equal(2000);
          expect(datePicker.picker.date.getMonth()).to.equal(9);
          expect(datePicker.picker.date.getDate()).to.equal(1);
          done();
        }, DELAY);
      });
    });

    it('arrow keys during typing does not navigate', done => {
      const inputText = '2000-10-1';
      input.value = inputText;
      triggerEvent(input, 'input');
      keyDown(input, LEFT);
      vm.$nextTick(_ => {
        expect(input.value).to.equal(inputText);
        done();
      });
    });

    it('arrow keys navigates', done => {
      const date = new Date(2000, 9, 1);
      const prevDate = new Date(2000, 9, 0);
      vm.value = date;
      vm.$nextTick(_ => {
        keyDown(input, LEFT);
        setTimeout(_ => {
          expect(datePicker.pickerVisible).to.true;
          expect(datePicker.picker.date.getFullYear()).to.equal(prevDate.getFullYear());
          expect(datePicker.picker.date.getMonth()).to.equal(prevDate.getMonth());
          expect(datePicker.picker.date.getDate()).to.equal(prevDate.getDate());
          done();
        }, DELAY);
      });
    });
  });

  describe('can be cleared using keyboard', () => {
    it('works for type=date, when blur', done => {
      vm = createVue({
        template: `
          <el-date-picker ref="compo" v-model="value" format="yyyy-MM-dd" type="date" />
        `,
        data() {
          return {
            value: new Date()
          };
        }
      }, true);

      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(_ => {
        // NOTE: simplified test
        vm.$refs.compo.userInput = '';
        vm.$refs.compo.handleChange();
        setTimeout(_ => {
          expect(vm.value).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('works for type=date, when keydown.enter', done => {
      vm = createVue({
        template: `
          <el-date-picker ref="compo" v-model="value" format="yyyy-MM-dd" type="date" />
        `,
        data() {
          return {
            value: new Date()
          };
        }
      }, true);

      const input = vm.$el.querySelector('input');

      input.blur();
      input.focus();

      setTimeout(_ => {
        // NOTE: simplified test
        vm.$refs.compo.userInput = '';
        keyDown(input, ENTER);
        setTimeout(_ => {
          expect(vm.value).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    });

    // TODO: implement the same feature for range panels
  });

  describe('nagivation', _ => {
    const click = (el, cbk = () => {}) => {
      el.click();
      setTimeout(cbk, DELAY);
    };

    let prevMonth, prevYear, nextMonth, nextYear, getYearLabel, getMonthLabel;

    const navigationTest = (value, cbk) => {
      vm = createVue({
        template: '<el-date-picker v-model="value" ref="compo" />',
        data() {
          return {
            value
          };
        }
      }, true);
      vm.$refs.compo.$el.querySelector('input').focus();
      setTimeout(_ => {
        const $el = vm.$refs.compo.picker.$el;
        prevMonth = $el.querySelector('button.el-icon-arrow-left');
        prevYear = $el.querySelector('button.el-icon-d-arrow-left');
        nextMonth = $el.querySelector('button.el-icon-arrow-right');
        nextYear = $el.querySelector('button.el-icon-d-arrow-right');
        getYearLabel = () => $el.querySelectorAll('.el-date-picker__header-label')[0].textContent;
        getMonthLabel = () => $el.querySelectorAll('.el-date-picker__header-label')[1].textContent;
        cbk();
      }, DELAY);
    };

    it('month, year', done => {
      navigationTest(new Date(2000, 0, 1), _ => {
        expect(getYearLabel()).to.include('2000');
        expect(getMonthLabel()).to.include('1');
        click(prevMonth, _ => {
          expect(getYearLabel()).to.include('1999');
          expect(getMonthLabel()).to.include('12');
          click(prevYear, _ => {
            expect(getYearLabel()).to.include('1998');
            expect(getMonthLabel()).to.include('12');
            click(nextMonth, _ => {
              expect(getYearLabel()).to.include('1999');
              expect(getMonthLabel()).to.include('1');
              click(nextYear, _ => {
                expect(getYearLabel()).to.include('2000');
                expect(getMonthLabel()).to.include('1');
                done();
              });
            });
          });
        });
      });
    });

    it('month with fewer dates', done => {
      // July has 31 days, June has 30
      navigationTest(new Date(2000, 6, 31), _ => {
        click(prevMonth, _ => {
          expect(getYearLabel()).to.include('2000');
          expect(getMonthLabel()).to.include('6');
          done();
        });
      });
    });

    it('year with fewer Feburary dates', done => {
      // Feburary 2008 has 29 days, Feburary 2007 has 28
      navigationTest(new Date(2008, 1, 29), _ => {
        click(prevYear, _ => {
          expect(getYearLabel()).to.include('2007');
          expect(getMonthLabel()).to.include('2');
          done();
        });
      });
    });

    it('month label with fewer dates', done => {
      navigationTest(new Date(2000, 6, 31), _ => {
        const $el = vm.$refs.compo.picker.$el;
        const monthLabel = $el.querySelectorAll('.el-date-picker__header-label')[1];
        click(monthLabel, _ => {
          setTimeout(_ => {
            const juneLabel = $el.querySelectorAll('.el-month-table td a')[5];
            juneLabel.click();
            setTimeout(_ => {
              expect(getYearLabel()).to.include('2000');
              expect(getMonthLabel()).to.include('6');
              done();
            }, DELAY);
          }, DELAY);
        });
      });
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

    it('both picker show correct value', done => {
      vm = createVue({
        template: '<el-date-picker type="datetime" v-model="value" ref="compo" />',
        data() {
          return {
            value: new Date(2000, 9, 1, 10, 0, 1)
          };
        }
      }, true);

      const input = vm.$refs.compo.$el.querySelector('input');
      input.blur();
      input.focus();
      setTimeout(_ => {
        const datePanel = vm.$refs.compo.picker;
        const dateInput = datePanel.$el.querySelector('.el-date-picker__time-header > span:nth-child(1) input');
        const timeInput = datePanel.$el.querySelector('.el-date-picker__time-header > span:nth-child(2) input');
        timeInput.focus();
        setTimeout(_ => {
          const timePanel = datePanel.$refs.timepicker;
          // both input shows correct value
          expect(dateInput.value).to.equal('2000-10-01');
          expect(timeInput.value).to.equal('10:00:01');
          // time spinner highlight is correct
          const [hours, minutes, seconds] = timePanel.$el.querySelectorAll('.el-time-spinner ul li.active');
          expect(hours.textContent).to.include('10');
          expect(minutes.textContent).to.include('00');
          expect(seconds.textContent).to.include('01');
          // sets value updates displayed value
          vm.value = new Date(2001, 10, 2, 11, 1, 2);
          setTimeout(_ => {
            expect(dateInput.value).to.equal('2001-11-02');
            expect(timeInput.value).to.equal('11:01:02');
            const [hours, minutes, seconds] = timePanel.$el.querySelectorAll('.el-time-spinner ul li.active');
            expect(hours.textContent).to.include('11');
            expect(minutes.textContent).to.include('01');
            expect(seconds.textContent).to.include('02');
            expect(datePanel.visible).to.true;
            expect(timePanel.visible).to.true;
            done();
          }, DELAY);
        }, DELAY);
      }, DELAY);
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

    describe('cancel time', () => {
      it('cancel to empty', done => {
        vm = createVue({
          template: '<el-date-picker type="datetime" v-model="value" ref="compo" />',
          data() {
            return {
              value: ''
            };
          }
        }, true);

        const input = vm.$refs.compo.$el.querySelector('input');
        input.blur();
        input.focus();

        setTimeout(_ => {
          const timeInput = vm.$refs.compo.picker.$el.querySelector('.el-date-picker__time-header > span:nth-child(2) input');
          timeInput.focus();
          setTimeout(_ => {
            const cancel = vm.$refs.compo.picker.$refs.timepicker.$el.querySelector('button.cancel');
            cancel.click();
            setTimeout(_ => {
              expect(vm.value).to.equal('');
              expect(vm.$refs.compo.pickerVisible).to.true;
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });

      it('cancel to old value', done => {
        vm = createVue({
          template: '<el-date-picker type="datetime" v-model="value" ref="compo" />',
          data() {
            return {
              value: new Date(2000, 9, 1, 10, 0, 0)
            };
          }
        }, true);

        const input = vm.$refs.compo.$el.querySelector('input');
        input.blur();
        input.focus();

        const oldValue = vm.value.toISOString();

        setTimeout(_ => {
          const timeInput = vm.$refs.compo.picker.$el.querySelector('.el-date-picker__time-header > span:nth-child(2) input');
          timeInput.focus();
          setTimeout(_ => {
            const nextTime = vm.$refs.compo.picker.$refs.timepicker.$el.querySelector('.active + *');
            nextTime.click();
            setTimeout(_ => {
              const cancel = vm.$refs.compo.picker.$refs.timepicker.$el.querySelector('button.cancel');
              cancel.click();
              setTimeout(_ => {
                expect(vm.value.toISOString()).to.equal(oldValue);
                expect(vm.$refs.compo.pickerVisible).to.true;
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });

    it('now button: can not choose disabled date', done => {
      vm = createVue({
        template: '<el-date-picker type="datetime" v-model="value" ref="compo" :pickerOptions="pickerOptions" />',
        data() {
          return {
            value: '',
            pickerOptions: {
              disabledDate() { return true; }
            }
          };
        }
      }, true);
      vm.$refs.compo.$el.querySelector('input').focus();
      setTimeout(_ => {
        // click now button
        vm.$refs.compo.picker.$el.querySelector('.el-picker-panel__footer .el-button--text').click();
        setTimeout(_ => {
          expect(vm.value).to.equal('');
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

  describe('type:daterange', () => {
    it('works', done => {
      vm = createVue({
        template: '<el-date-picker type="daterange" v-model="value" ref="compo" />',
        data() {
          return {
            value: ''
          };
        }
      }, true);

      const rangePicker = vm.$refs.compo;
      const inputs = rangePicker.$el.querySelectorAll('input');
      inputs[0].focus();

      setTimeout(_ => {
        const panels = rangePicker.picker.$el.querySelectorAll('.el-date-range-picker__content');
        expect(Array.prototype.slice.call(panels)).to.length(2);
        panels[0].querySelector('td.available').click();
        setTimeout(_ => {
          panels[1].querySelector('td.available').click();
          setTimeout(_ => {
            inputs[0].focus();
            setTimeout(_ => {
              // correct highlight
              const startDate = rangePicker.picker.$el.querySelectorAll('.start-date');
              const endDate = rangePicker.picker.$el.querySelectorAll('.end-date');
              const inRangeDate = rangePicker.picker.$el.querySelectorAll('.in-range');
              expect(startDate.length).to.equal(1);
              expect(endDate.length).to.equal(1);
              expect(inRangeDate.length).to.above(0);
              // value is array
              expect(vm.value).to.be.an.instanceof(Array);
              // input text is something like date string
              expect(inputs[0].value.length).to.equal(10);
              expect(inputs[1].value.length).to.equal(10);
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('type:daterange unlink:true', done => {
      vm = createVue({
        template: '<el-date-picker type="daterange" unlink-panels v-model="value" ref="compo" />',
        data() {
          return {
            value: [new Date(2000, 9, 1), new Date(2000, 9, 2)]
          };
        }
      }, true);

      const rangePicker = vm.$refs.compo;
      const inputs = rangePicker.$el.querySelectorAll('input');
      setTimeout(_ => {
        inputs[0].focus();
        setTimeout(_ => {
          const panels = rangePicker.picker.$el.querySelectorAll('.el-date-range-picker__content');
          const left = panels[0].querySelector('.el-date-range-picker__header');
          const right = panels[1].querySelector('.is-right .el-date-range-picker__header');
          const leftText = left.textContent.match(/\d+/g).map(i => Number(i));
          const rightText = right.textContent.match(/\d+/g).map(i => Number(i));
          expect(rightText[1] - leftText[1]).to.equal(1); // one month
          done();
        }, DELAY);
      }, DELAY);
    });

    it('unlink panels', done => {
      vm = createTest(DatePicker, {
        type: 'daterange',
        unlinkPanels: true
      }, true);
      const input = vm.$el.querySelector('input');

      input.click();

      setTimeout(_ => {
        const panels = vm.picker.$el.querySelectorAll('.el-date-range-picker__content');

        expect(Array.prototype.slice.call(panels)).to.length(2);

        panels[1].querySelector('.el-icon-d-arrow-right').click();
        panels[1].querySelector('.el-icon-arrow-right').click();

        setTimeout(_ => {
          const left = panels[0].querySelector('.el-date-range-picker__header');
          const right = panels[1].querySelector('.is-right .el-date-range-picker__header');
          const leftText = left.textContent.match(/\d+/g).map(i => Number(i));
          const rightText = right.textContent.match(/\d+/g).map(i => Number(i));

          expect((rightText[1] <= 2 ? rightText[0] - 1 : rightText[0]) - leftText[0]).to.equal(1);
          expect((rightText[1] <= 2 ? rightText[1] + 12 : rightText[1]) - leftText[1]).to.equal(2);

          done();
        }, DELAY);
      }, DELAY);
    });

    it('daylight saving time highlight', done => {
      // Run test with environment variable TZ=Australia/Sydney
      // The following test uses Australian Eastern Daylight Time (AEDT)
      // AEST -> AEDT shift happened on 2016-10-02 02:00:00
      vm = createVue({
        template: '<el-date-picker type="daterange" v-model="value" ref="compo" />',
        data() {
          return {
            value: [new Date(2016, 9, 1), new Date(2016, 9, 3)]
          };
        }
      }, true);

      const rangePicker = vm.$refs.compo;
      const inputs = rangePicker.$el.querySelectorAll('input');
      inputs[0].focus();

      setTimeout(_ => {
        const startDate = rangePicker.picker.$el.querySelectorAll('.start-date');
        const endDate = rangePicker.picker.$el.querySelectorAll('.end-date');
        expect(startDate.length).to.equal(1);
        expect(endDate.length).to.equal(1);
        done();
      }, DELAY);
    });

    it('clear value', done => {
      vm = createVue({
        template: '<el-date-picker type="daterange" v-model="value" ref="compo" />',
        data() {
          return {
            value: [new Date(2000, 9, 1), new Date(2000, 9, 2)]
          };
        }
      }, true);

      vm.$el.querySelector('input').focus();

      setTimeout(_ => {
        vm.$refs.compo.showClose = true;
        vm.$refs.compo.handleClickIcon({ stopPropagation: () => null });
        setTimeout(_ => {
          expect(vm.value).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    });

    describe('default value', () => {
      it('single', done => {
        let defaultValue = '2000-10-01';
        let expectValue = [new Date(2000, 9, 1), new Date(2000, 9, 2)];

        vm = createVue({
          template: '<el-date-picker type="daterange" v-model="value" ref="compo" :default-value="defaultValue" />',
          data() {
            return {
              value: '',
              defaultValue
            };
          }
        }, true);

        vm.$el.querySelector('input').focus();
        setTimeout(_ => {
          const $el = vm.$refs.compo.picker.$el;
          const defaultEls = $el.querySelectorAll('.el-date-table td.default');
          expect(defaultEls.length).to.equal(1);
          defaultEls[0].click();
          setTimeout(_ => {
            $el.querySelector('.el-date-table td.default + td').click();
            setTimeout(_ => {
              expect(vm.value).to.eql(expectValue);
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });

      it('array', done => {
        let defaultValue = ['2000-01-01', '2000-02-01'];
        let expectValue = [new Date(2000, 0, 1), new Date(2000, 1, 1)];

        vm = createVue({
          template: '<el-date-picker type="daterange" v-model="value" ref="compo" :default-value="defaultValue" />',
          data() {
            return {
              value: '',
              defaultValue
            };
          }
        }, true);

        vm.$el.querySelector('input').focus();
        setTimeout(_ => {
          const defaultEls = vm.$refs.compo.picker.$el.querySelectorAll('.el-date-table td.default');
          expect(defaultEls.length).to.equal(2);
          defaultEls[0].click();
          setTimeout(_ => {
            defaultEls[1].click();
            setTimeout(_ => {
              expect(vm.value).to.eql(expectValue);
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });
  });

  describe('type:datetimerange', () => {
    let vm;
    beforeEach(done => {
      vm = createTest(DatePicker, {
        type: 'datetimerange',
        value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
      }, true);

      vm.$el.click();

      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('create', () => {
      expect(Array.prototype.slice.call(vm.picker.$el.querySelectorAll('.el-time-panel'))).to.length(2);
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

    it('select daterange with defaultTime min', done => {

      const vmWithDefaultTime = createVue({
        template: `
          <el-date-picker ref="compo" type="datetimerange" v-model="value" :default-time="defaultTime"></el-date-picker>
        `,
        data() {
          return {
            value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            defaultTime: ['11:59:59']
          };
        }
      }, true).$refs.compo;

      setTimeout(_ => {
        vmWithDefaultTime.$el.click();

        setTimeout(_ => {
          const pickers = vmWithDefaultTime.picker.$el.querySelectorAll('.el-date-range-picker__content');
          const leftCell = pickers[0].querySelector('td.available');
          const rightCell = pickers[1].querySelector('td.available');

          triggerEvent(leftCell, 'mousemove', true);
          triggerEvent(leftCell, 'click', true);
          setTimeout(_ => {
            triggerEvent(rightCell, 'mousemove', true);
            setTimeout(_ => {
              expect(rightCell.classList.contains('in-range')).to.be.true;

              triggerEvent(rightCell, 'click', true);
              setTimeout(_ => {
                const {
                  minDate,
                  maxDate
                } = vmWithDefaultTime.picker;
                expect(minDate.getHours()).to.be.equal(11);
                expect(minDate.getMinutes()).to.be.equal(59);
                expect(minDate.getSeconds()).to.be.equal(59);
                expect(maxDate.getHours()).to.be.equal(0);
                expect(maxDate.getMinutes()).to.be.equal(0);
                expect(maxDate.getSeconds()).to.be.equal(0);
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY * 2); // `DELAY * 2` to ensure this case passes in travis CI
    });

    it('select daterange with defaultTime min & max', done => {
      const vmWithDefaultTime = createVue({
        template: `
          <el-date-picker ref="compo" type="datetimerange" v-model="value" :default-time="defaultTime"></el-date-picker>
        `,
        data() {
          return {
            value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            defaultTime: ['11:59:59', '18:00:00']
          };
        }
      }, true).$refs.compo;

      setTimeout(_ => {
        vmWithDefaultTime.$el.click();

        setTimeout(_ => {
          const pickers = vmWithDefaultTime.picker.$el.querySelectorAll('.el-date-range-picker__content');
          const leftCell = pickers[0].querySelector('td.available');
          const rightCell = pickers[1].querySelector('td.available');

          triggerEvent(leftCell, 'mousemove', true);
          triggerEvent(leftCell, 'click', true);
          setTimeout(_ => {
            triggerEvent(rightCell, 'mousemove', true);
            setTimeout(_ => {
              expect(rightCell.classList.contains('in-range')).to.be.true;

              triggerEvent(rightCell, 'click', true);
              setTimeout(_ => {
                const {
                  minDate,
                  maxDate
                } = vmWithDefaultTime.picker;
                expect(minDate.getHours()).to.be.equal(11);
                expect(minDate.getMinutes()).to.be.equal(59);
                expect(minDate.getSeconds()).to.be.equal(59);
                expect(maxDate.getHours()).to.be.equal(18);
                expect(maxDate.getMinutes()).to.be.equal(0);
                expect(maxDate.getSeconds()).to.be.equal(0);
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY * 2); // `DELAY * 2` to ensure this case passes in travis CI
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
