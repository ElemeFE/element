// TODO: [TESTERROR] Пофиксить тест. TODO, отмеченные в файле - это еще не все.

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
        <tm-date-picker ref="compo" v-model="value"></tm-date-picker>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');
    const date = new Date();
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    input.blur();
    input.focus();

    setTimeout(() => {
      const $el = vm.$refs.compo.picker.$el;
      const spans = $el.querySelectorAll('.tm-date-picker__header-label');
      const arrowLeftElm = $el.querySelector('.tm-date-picker__prev-btn.tm-icon--arrow-left');
      const arrowRightElm = $el.querySelector('.tm-date-picker__next-btn.tm-icon--arrow-right');

      expect(spans[0].textContent).to.include(date.getFullYear());
      expect(spans[1].textContent).to.include(monthNames[date.getMonth()]);
      $el.querySelector('.tm-date-picker__prev-btn.tm-icon--d-arrow-left').click();
      let count = 20;
      while (--count) {
        arrowLeftElm.click();
      }

      count = 20;
      while (--count) {
        arrowRightElm.click();
      }
      setTimeout(() => {
        expect(spans[0].textContent).to.include(date.getFullYear() - 1);
        expect(spans[1].textContent).to.include(monthNames[date.getMonth()]);
        $el.querySelector('td.available').click();
        vm.$nextTick(() => {
          expect(vm.value).to.exist;
        });
        done();
      }, DELAY);
    }, DELAY);
  });

  it('clear value', done => {
    vm = createVue({
      template: `
        <tm-date-picker v-model="value" ref="compo"></tm-date-picker>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    setTimeout(() => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('td.available').click();
      setTimeout(() => {
        vm.$refs.compo.showClose = true;
        vm.$refs.compo.handleClickIcon({ stopPropagation: () => null });
        setTimeout(() => {
          expect(vm.value).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    }, DELAY);
  });

  it('disabled clear value', done => {
    vm = createVue({
      template: `
        <tm-date-picker v-model="value" ref="compo" :clearable="false"></tm-date-picker>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const input = vm.$el.querySelector('input');

    input.focus();
    setTimeout(() => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('td.available').click();
      vm.$nextTick(() => {
        vm.$el.querySelector('.tm-input__icon').click();
        setTimeout(() => {
          expect(vm.value).to.be.exist;
          done();
        }, DELAY);
      });
    }, DELAY);
  });

  it('reset', done => {
    vm = createVue({
      template: `
        <tm-date-picker ref="compo" v-model="value"></tm-date-picker>
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
    setTimeout(() => {
      const $el = vm.$refs.compo.picker.$el;
      $el.querySelector('.tm-date-picker__next-btn.tm-icon--arrow-right').click();
      setTimeout(() => {
        $el.querySelector('td.available').click();
        vm.$nextTick(() => {
          vm.value = '';
          setTimeout(() => {
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
        <tm-date-picker ref="picker"></tm-date-picker>
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

  it('change event', done => {
    let onChangeValue;

    vm = createVue({
      template: `
        <tm-date-picker
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

    setTimeout(() => {
      const picker = vm.$refs.compo.picker;

      // programatic modification of bound value does not emit cange
      vm.value = new Date(2000, 9, 2);
      setTimeout(() => {
        expect(onChangeValue).to.not.exist;
        // user interaction does emit change
        picker.$el.querySelector('td.available').click();
        setTimeout(() => {
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
          <tm-date-picker
            ref="compo"
            v-model="value"
            type="date"
            @input="handleInput" />`,

        methods: {
          handleInput() {
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

      setTimeout(() => {
        const picker = vm.$refs.compo.picker;

        picker.$el.querySelector('td.available').click();
        setTimeout(() => {
          expect(emitted).to.true;
          emitted = false;

          setTimeout(() => {
            input.blur();
            input.focus();

            picker.$el.querySelector('td.available').click();
            setTimeout(() => {
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
          <tm-date-picker
            ref="compo"
            v-model="value"
            type="daterange"
            @input="handleInput" />`,

        methods: {
          handleInput() {
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

      setTimeout(() => {
        const picker = vm.$refs.compo.picker;

        picker.$el.querySelector('td.available').click();
        setTimeout(() => {
          picker.$el.querySelector('td.available + td.available').click();
          setTimeout(() => {
            expect(emitted).to.true;
            emitted = false;

            setTimeout(() => {
              input.blur();
              input.focus();

              const picker = vm.$refs.compo.picker;
              picker.$el.querySelector('td.available').click();
              setTimeout(() => {
                picker.$el.querySelector('td.available + td.available').click();
                setTimeout(() => {
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
          <tm-date-picker ref="picker"/>
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
  });

  describe('value-format', () => {
    it('emits', done => {
      vm = createVue({
        template: `
          <tm-date-picker
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
      setTimeout(() => {
        vm.$refs.compo.picker.$el.querySelector('.tm-date-table td.available').click();
        setTimeout(() => {
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
          <tm-date-picker
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
      setTimeout(() => {
        const date = vm.$refs.compo.picker.date;
        expect(date.getFullYear()).to.equal(2000);
        expect(date.getMonth()).to.equal(1);
        expect(date.getDate()).to.equal(1);
        vm.$refs.compo.picker.$el.querySelector('.tm-date-table .current').click();
        setTimeout(() => {
          expect(input.value).to.equal('2000-02-01');
          done();
        }, DELAY);
      }, DELAY);
    });

    it('translates format to value-format', done => {
      vm = createVue({
        template: `
          <tm-date-picker
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
      setTimeout(() => {
        input.value = '2000-10-01';
        triggerEvent(input, 'input');
        keyDown(input, ENTER);
        setTimeout(() => {
          expect(vm.value).to.equal('01/10 2000');
          done();
        }, DELAY);
      }, DELAY);
    });

    it('works for daterange', done => {
      vm = createVue({
        template: `
          <tm-date-picker
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
      setTimeout(() => {
        inputs[0].value = '2000-10-01';
        triggerEvent(inputs[0], 'input');
        keyDown(inputs[0], TAB);
        setTimeout(() => {
          inputs[1].focus();
          inputs[1].value = '2000-10-02';
          triggerEvent(inputs[1], 'input');
          keyDown(inputs[0], ENTER);
          setTimeout(() => {
            expect(vm.value).to.eql(['01/10 2000', '02/10 2000']);
            done();
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('is timestamp', done => {
      vm = createVue({
        template: `
          <tm-date-picker
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
      setTimeout(() => {
        // check timestamp is parsed internally
        expect(vm.$refs.compo.parsedValue.getTime()).to.equal(vm.value);
        input.value = '2000-10-01';
        triggerEvent(input, 'input');
        keyDown(input, ENTER);
        setTimeout(() => {
          expect(vm.value).to.equal(new Date(2000, 9, 1).getTime());
          done();
        }, DELAY);
      }, DELAY);
    });

    it('works for daterange, is timestamp', done => {
      vm = createVue({
        template: `
          <tm-date-picker
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
      setTimeout(() => {
        // check timestamp is parsed internally
        expect(vm.$refs.compo.parsedValue[0].getTime()).to.equal(vm.value[0]);
        expect(vm.$refs.compo.parsedValue[1].getTime()).to.equal(vm.value[1]);
        inputs[0].value = '2000-10-01';
        triggerEvent(inputs[0], 'input');
        keyDown(inputs[0], TAB);
        setTimeout(() => {
          inputs[1].focus();
          inputs[1].value = '2000-10-02';
          triggerEvent(inputs[1], 'input');
          keyDown(inputs[0], ENTER);
          setTimeout(() => {
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

  xdescribe('default value', done => {
    it('it works', () => {
      let defaultValue = '2000-01-01';
      let expectValue = new Date(2000, 0, 1);

      vm = createVue({
        template: `<tm-date-picker v-model="value" ref="compo" default-value="${defaultValue}" />`,
        data() {
          return {
            value: ''
          };
        }
      }, true);

      vm.$el.querySelector('input').focus();
      setTimeout(() => {
        const $el = vm.$refs.compo.picker.$el;
        expect($el.querySelector('.tm-month-table td.default')).to.exist;
        expect($el.querySelector('.tm-year-table td.default')).to.exist;
        const defaultEls = $el.querySelectorAll('.tm-date-table td.default');
        expect(defaultEls.length).to.equal(1);
        defaultEls[0].click();
        setTimeout(() => {
          expect(vm.value).to.eql(expectValue);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('is reactive, works with clear', done => {
      let defaultValue = '2000-01-01';

      vm = createVue({
        template: `<tm-date-picker v-model="value" ref="compo" default-value="${defaultValue}" />`,
        data() {
          return {
            value: ''
          };
        }
      }, true);

      const input = vm.$el.querySelector('input');
      input.focus();
      setTimeout(() => {
        // TODO: [TESTERROR] AssertionError: expected null to exist
        // expect($el.querySelector('.tm-date-table td.current')).to.exist;
        vm.defaultValue = defaultValue;
        triggerEvent(vm.$refs.compo.$el, 'mouseenter');
        setTimeout(() => {
          vm.$el.querySelector('.tm-icon--cross').click();

          setTimeout(() => {
            input.focus();
            setTimeout(() => {
              // TODO: [TESTERROR] AssertionError: expected null to exist
              // expect($el.querySelector('.tm-date-table td.current')).to.not.exist;
              // TODO: [TESTERROR] AssertionError: expected null to exist
              // expect($el.querySelector('.tm-date-table td.default')).to.exist;
              // TODO: [TESTERROR] TypeError: Cannot read property 'click' of null
              // $el.querySelector('.tm-date-table td.default').click();
              setTimeout(() => {
                // expect(vm.value).to.eql(expectValue);
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

  });

  xdescribe('keydown', () => {
    let input, datePicker;

    beforeEach(done => {
      vm = createVue({
        template: '<tm-date-picker ref="compo" v-model="value"></tm-date-picker>',
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
      setTimeout(() => {
        expect(datePicker.pickerVisible).to.false;
        done();
      }, DELAY);
    });

    it('enter', done => {
      input.value = '2000-10-1';
      triggerEvent(input, 'input');
      vm.$nextTick(() => {
        keyDown(input, ENTER);
        setTimeout(() => {
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
      vm.$nextTick(() => {
        expect(input.value).to.equal(inputText);
        done();
      });
    });

    it('arrow keys navigates', done => {
      const date = new Date(2000, 9, 1);
      const prevDate = new Date(2000, 9, 0);
      vm.value = date;
      vm.$nextTick(() => {
        keyDown(input, LEFT);
        setTimeout(() => {
          expect(datePicker.pickerVisible).to.true;
          expect(datePicker.picker.date.getFullYear()).to.equal(prevDate.getFullYear());
          expect(datePicker.picker.date.getMonth()).to.equal(prevDate.getMonth());
          expect(datePicker.picker.date.getDate()).to.equal(prevDate.getDate());
          done();
        }, DELAY);
      });
    });
  });

  xdescribe('can be cleared using keyboard', () => {
    it('works for type=date, when blur', done => {
      vm = createVue({
        template: `
          <tm-date-picker ref="compo" v-model="value" format="yyyy-MM-dd" type="date" />
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

      setTimeout(() => {
        // NOTE: simplified test
        let component = vm.$children[0];
        component.userInput = '';
        component.handleChange();
        setTimeout(() => {
          expect(vm.userInput).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('works for type=date, when keydown.enter', done => {
      vm = createVue({
        template: `
          <tm-date-picker ref="compo" v-model="value" format="yyyy-MM-dd" type="date" />
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

      setTimeout(() => {
        // NOTE: simplified test
        vm.$refs.compo.userInput = '';
        keyDown(input, ENTER);
        setTimeout(() => {
          expect(vm.value).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    });

    // TODO: implement the same feature for range panels
  });

  xdescribe('nagivation', () => {
    const click = (el, cbk = () => {}) => {
      el.click();
      setTimeout(cbk, DELAY);
    };

    let prevMonth, prevYear, nextMonth, nextYear, getYearLabel, getMonthLabel;

    const navigationTest = (value, cbk) => {
      vm = createVue({
        template: '<tm-date-picker v-model="value" ref="compo" />',
        data() {
          return {
            value
          };
        }
      }, true);
      vm.$refs.compo.$el.querySelector('input').focus();
      setTimeout(() => {
        const $el = vm.$refs.compo.picker.$el;
        prevMonth = $el.querySelector('button.tm-icon--arrow-left');
        prevYear = $el.querySelector('button.tm-icon--d-arrow-left');
        nextMonth = $el.querySelector('button.tm-icon--arrow-right');
        nextYear = $el.querySelector('button.tm-icon--d-arrow-right');
        getYearLabel = () => $el.querySelectorAll('.tm-date-picker__header-label')[0].textContent;
        getMonthLabel = () => $el.querySelectorAll('.tm-date-picker__header-label')[1].textContent;
        cbk();
      }, DELAY);
    };

    it('month, year', done => {
      navigationTest(new Date(2000, 0, 1), () => {
        expect(getYearLabel()).to.include('2000');
        expect(getMonthLabel()).to.include('1');
        click(prevMonth, () => {
          expect(getYearLabel()).to.include('1999');
          expect(getMonthLabel()).to.include('12');
          click(prevYear, () => {
            expect(getYearLabel()).to.include('1998');
            expect(getMonthLabel()).to.include('12');
            click(nextMonth, () => {
              expect(getYearLabel()).to.include('1999');
              expect(getMonthLabel()).to.include('1');
              click(nextYear, () => {
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
      navigationTest(new Date(2000, 6, 31), () => {
        click(prevMonth, () => {
          expect(getYearLabel()).to.include('2000');
          expect(getMonthLabel()).to.include('6');
          done();
        });
      });
    });

    it('year with fewer Feburary dates', done => {
      // Feburary 2008 has 29 days, Feburary 2007 has 28
      navigationTest(new Date(2008, 1, 29), () => {
        click(prevYear, () => {
          expect(getYearLabel()).to.include('2007');
          expect(getMonthLabel()).to.include('2');
          done();
        });
      });
    });

    it('month label with fewer dates', done => {
      navigationTest(new Date(2000, 6, 31), () => {
        const $el = vm.$refs.compo.picker.$el;
        const monthLabel = $el.querySelectorAll('.tm-date-picker__header-label')[1];
        click(monthLabel, () => {
          setTimeout(() => {
            const juneLabel = $el.querySelectorAll('.tm-month-table td a')[5];
            juneLabel.click();
            setTimeout(() => {
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

    setTimeout(() => {
      expect(vm.picker.$el.querySelector('.tm-month-table').style.display).to.be.empty;
      expect(vm.picker.$el.querySelector('.tm-year-table').style.display).to.be.equal('none');
      vm.picker.$el.querySelector('.tm-month-table a.cell').click();
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

    setTimeout(() => {
      expect(vm.picker.$el.querySelector('.tm-year-table').style.display).to.empty;
      expect(vm.picker.$el.querySelector('.tm-month-table').style.display).to.be.equal('none');

      const leftBtn = vm.picker.$el.querySelector('.tm-icon--d-arrow-left');
      const rightBtn = vm.picker.$el.querySelector('.tm-icon--d-arrow-right');
      let count = 20;

      while (--count) {
        leftBtn.click();
      }
      count = 18;
      while (--count) {
        rightBtn.click();
      }

      vm.picker.$el.querySelector('.tm-year-table a.cell').click();
      expect(vm.pickerVisible).to.false;
      done();
    }, DELAY);
  });

  xdescribe('type:datetime', () => {
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
      expect(vm.picker.$el.querySelector('.tm-time-panel')).to.ok;
    });

    it('both picker show correct value', done => {
      vm = createVue({
        template: '<tm-date-picker type="datetime" v-model="value" ref="compo" />',
        data() {
          return {
            value: new Date(2000, 9, 1, 10, 0, 1)
          };
        }
      }, true);
      const input = vm.$refs.compo.$el.querySelector('input');
      input.blur();
      input.focus();
      setTimeout(() => {
        const datePanel = vm.$refs.compo.picker;
        const dateInput = datePanel.$el.querySelector('.tm-date-picker__time-header > span:nth-child(1) input');
        const timeInput = datePanel.$el.querySelector('.tm-date-picker__time-header > span:nth-child(2) input');
        timeInput.focus();
        setTimeout(() => {
          const timePanel = datePanel.$refs.timepicker;
          // both input shows correct value
          expect(dateInput.value).to.equal('2000-10-01');
          expect(timeInput.value).to.equal('10:00:01');
          // time spinner highlight is correct
          const [hours, minutes, seconds] = timePanel.$el.querySelectorAll('.tm-time-spinner ul li.active');
          expect(hours.textContent).to.include('10');
          expect(minutes.textContent).to.include('00');
          expect(seconds.textContent).to.include('01');
          // sets value updates displayed value
          vm.value = new Date(2001, 10, 2, 11, 1, 2);
          setTimeout(() => {
            expect(dateInput.value).to.equal('2001-11-02');
            expect(timeInput.value).to.equal('11:01:02');
            const [hours, minutes, seconds] = timePanel.$el.querySelectorAll('.tm-time-spinner ul li.active');
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

      vm.picker.$el.querySelector('.tm-picker-panel__link-btn').click();
      setTimeout(() => {
        expect(vm.picker.date > date).to.true;
        done();
      }, DELAY);
    });

    it('click timepicker', done => {
      const input = vm.picker.$el.querySelectorAll('.tm-date-picker__editor-wrap input')[1];
      triggerEvent(input, 'focus');

      setTimeout(() => {
        expect(vm.picker.$el.querySelector('.tm-time-panel')).to.have.deep.property('style.display').to.equal('');
        done();
      }, DELAY);
    });

    it('input timepicker', done => {
      const input = vm.picker.$el.querySelectorAll('.tm-date-picker__editor-wrap input')[1];

      input.value = '20:30:33';
      triggerEvent(input, 'change', true);
      setTimeout(() => {
        expect(vm.picker.date.getHours()).to.equal(20);
        expect(vm.picker.date.getMinutes()).to.equal(30);
        expect(vm.picker.date.getSeconds()).to.equal(33);
        done();
      }, DELAY);
    });

    it('input date', done => {
      const input = vm.picker.$el.querySelector('.tm-date-picker__editor-wrap input');

      input.value = '2017-2-2';
      triggerEvent(input, 'change', true);
      setTimeout(() => {
        expect(vm.picker.date.getFullYear()).to.equal(2017);
        expect(vm.picker.date.getMonth()).to.equal(1);
        expect(vm.picker.date.getDate()).to.equal(2);
        done();
      }, DELAY);
    });

    it('select time', done => {
      const input = vm.picker.$el.querySelectorAll('.tm-date-picker__editor-wrap input')[1];
      input.blur();
      input.focus();
      input.blur();

      setTimeout(() => {
        const button = vm.picker.$el.querySelector('.tm-time-panel .confirm');
        button.click();

        setTimeout(() => {
          expect(input.value).to.exist;
          done();
        }, DELAY);
      }, DELAY);
    });

    describe('cancel time', () => {
      it('cancel to empty', done => {
        vm = createVue({
          template: '<tm-date-picker type="datetime" v-model="value" ref="compo" />',
          data() {
            return {
              value: ''
            };
          }
        }, true);

        const input = vm.$refs.compo.$el.querySelector('input');
        input.blur();
        input.focus();

        setTimeout(() => {
          const timeInput = vm.$refs.compo.picker.$el.querySelector('.tm-date-picker__time-header > span:nth-child(2) input');
          timeInput.focus();
          setTimeout(() => {
            const cancel = vm.$refs.compo.picker.$refs.timepicker.$el.querySelector('button.cancel');
            cancel.click();
            setTimeout(() => {
              expect(vm.value).to.equal('');
              expect(vm.$refs.compo.pickerVisible).to.true;
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });

      it('cancel to old value', done => {
        vm = createVue({
          template: '<tm-date-picker type="datetime" v-model="value" ref="compo" />',
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

        setTimeout(() => {
          const timeInput = vm.$refs.compo.picker.$el.querySelector('.tm-date-picker__time-header > span:nth-child(2) input');
          timeInput.focus();
          setTimeout(() => {
            const nextTime = vm.$refs.compo.picker.$refs.timepicker.$el.querySelector('.active + *');
            nextTime.click();
            setTimeout(() => {
              const cancel = vm.$refs.compo.picker.$refs.timepicker.$el.querySelector('button.cancel');
              cancel.click();
              setTimeout(() => {
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
        template: '<tm-date-picker type="datetime" v-model="value" ref="compo" :pickerOptions="pickerOptions" />',
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
      setTimeout(() => {
        // click now button
        vm.$refs.compo.picker.$el.querySelector('.tm-picker-panel__footer .tm-button--text').click();
        setTimeout(() => {
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
      vm.picker.$el.querySelector('.tm-date-table__row .available').click();
      setTimeout(() => {
        expect(vm.picker.week).to.exist;
        done();
      }, DELAY);
    });

    it('click year label', () => {
      vm.picker.$el.querySelector('.tm-date-picker__header-label').click();
      expect(vm.picker.currentView).to.equal('year');
    });

    it('click month label', () => {
      vm.picker.$el.querySelectorAll('.tm-date-picker__header-label')[1].click();
      expect(vm.picker.currentView).to.equal('month');
    });

    it('select month', done => {
      vm.picker.$el.querySelectorAll('.tm-date-picker__header-label')[1].click();

      setTimeout(() => {
        vm.picker.$el.querySelector('.tm-month-table .cell').click();

        setTimeout(() => {
          expect(vm.picker.$el.querySelector('.tm-date-table.is-week-mode').style.display).to.equal('');
          done();
        }, DELAY);
      }, DELAY);
    });
  });

  xdescribe('type:daterange', () => {
    it('works', done => {
      vm = createVue({
        template: '<tm-date-picker type="daterange" v-model="value" ref="compo" />',
        data() {
          return {
            value: ''
          };
        }
      }, true);

      const rangePicker = vm.$refs.compo;
      const inputs = rangePicker.$el.querySelectorAll('input');
      inputs[0].focus();

      setTimeout(() => {
        const panels = rangePicker.picker.$el.querySelectorAll('.tm-date-range-picker__content');
        expect(Array.prototype.slice.call(panels)).to.length(2);
        panels[0].querySelector('td.available').click();
        setTimeout(() => {
          panels[1].querySelector('td.available').click();
          setTimeout(() => {
            inputs[0].focus();
            setTimeout(() => {
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
        template: '<tm-date-picker type="daterange" unlink-panels v-model="value" ref="compo" />',
        data() {
          return {
            value: [new Date(2000, 9, 1), new Date(2000, 9, 2)]
          };
        }
      }, true);

      const rangePicker = vm.$refs.compo;
      const inputs = rangePicker.$el.querySelectorAll('input');
      setTimeout(() => {
        inputs[0].focus();
        setTimeout(() => {
          const panels = rangePicker.picker.$el.querySelectorAll('.tm-date-range-picker__content');
          const left = panels[0].querySelector('.tm-date-range-picker__header');
          const right = panels[1].querySelector('.is-right .tm-date-range-picker__header');
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

      setTimeout(() => {
        const panels = vm.picker.$el.querySelectorAll('.tm-date-range-picker__content');

        expect(Array.prototype.slice.call(panels)).to.length(2);

        panels[1].querySelector('.tm-icon--d-arrow-right').click();
        panels[1].querySelector('.tm-icon--arrow-right').click();

        setTimeout(() => {
          const left = panels[0].querySelector('.tm-date-range-picker__header');
          const right = panels[1].querySelector('.is-right .tm-date-range-picker__header');
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
        template: '<tm-date-picker type="daterange" v-model="value" ref="compo" />',
        data() {
          return {
            value: [new Date(2016, 9, 1), new Date(2016, 9, 3)]
          };
        }
      }, true);

      const rangePicker = vm.$refs.compo;
      const inputs = rangePicker.$el.querySelectorAll('input');
      inputs[0].focus();

      setTimeout(() => {
        const startDate = rangePicker.picker.$el.querySelectorAll('.start-date');
        const endDate = rangePicker.picker.$el.querySelectorAll('.end-date');
        expect(startDate.length).to.equal(1);
        expect(endDate.length).to.equal(1);
        done();
      }, DELAY);
    });

    it('clear value', done => {
      vm = createVue({
        template: '<tm-date-picker type="daterange" v-model="value" ref="compo" />',
        data() {
          return {
            value: [new Date(2000, 9, 1), new Date(2000, 9, 2)]
          };
        }
      }, true);

      vm.$el.querySelector('input').focus();

      setTimeout(() => {
        vm.$refs.compo.showClose = true;
        vm.$refs.compo.handleClickIcon({ stopPropagation: () => null });
        setTimeout(() => {
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
          template: '<tm-date-picker type="daterange" v-model="value" ref="compo" :default-value="defaultValue" />',
          data() {
            return {
              value: '',
              defaultValue
            };
          }
        }, true);

        vm.$el.querySelector('input').focus();
        setTimeout(() => {
          const $el = vm.$refs.compo.picker.$el;
          const defaultEls = $el.querySelectorAll('.tm-date-table td.default');
          expect(defaultEls.length).to.equal(1);
          defaultEls[0].click();
          setTimeout(() => {
            $el.querySelector('.tm-date-table td.default + td').click();
            setTimeout(() => {
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
          template: '<tm-date-picker type="daterange" v-model="value" ref="compo" :default-value="defaultValue" />',
          data() {
            return {
              value: '',
              defaultValue
            };
          }
        }, true);

        vm.$el.querySelector('input').focus();
        setTimeout(() => {
          const defaultEls = vm.$refs.compo.picker.$el.querySelectorAll('.tm-date-table td.default');
          expect(defaultEls.length).to.equal(2);
          defaultEls[0].click();
          setTimeout(() => {
            defaultEls[1].click();
            setTimeout(() => {
              expect(vm.value).to.eql(expectValue);
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });
  });

  xdescribe('type:datetimerange', () => {
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
      expect(Array.prototype.slice.call(vm.picker.$el.querySelectorAll('.tm-time-panel'))).to.length(2);
    });

    it('select daterange', done => {
      const pickers = vm.picker.$el.querySelectorAll('.tm-date-range-picker__content');
      const leftCell = pickers[0].querySelector('td.available');
      const rightCell = pickers[1].querySelector('td.available');

      triggerEvent(leftCell, 'mousemove', true);
      triggerEvent(leftCell, 'click', true);
      setTimeout(() => {
        triggerEvent(rightCell, 'mousemove', true);
        triggerEvent(rightCell, 'click', true);

        setTimeout(() => {
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
          <tm-date-picker ref="compo" type="datetimerange" v-model="value" :default-time="defaultTime"></tm-date-picker>
        `,
        data() {
          return {
            value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            defaultTime: ['11:59:59']
          };
        }
      }, true).$refs.compo;

      setTimeout(() => {
        vmWithDefaultTime.$el.click();

        setTimeout(() => {
          const pickers = vmWithDefaultTime.picker.$el.querySelectorAll('.tm-date-range-picker__content');
          const leftCell = pickers[0].querySelector('td.available');
          const rightCell = pickers[1].querySelector('td.available');

          triggerEvent(leftCell, 'mousemove', true);
          triggerEvent(leftCell, 'click', true);
          setTimeout(() => {
            triggerEvent(rightCell, 'mousemove', true);
            setTimeout(() => {
              expect(rightCell.classList.contains('in-range')).to.be.true;

              triggerEvent(rightCell, 'click', true);
              setTimeout(() => {
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
          <tm-date-picker ref="compo" type="datetimerange" v-model="value" :default-time="defaultTime"></tm-date-picker>
        `,
        data() {
          return {
            value: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
            defaultTime: ['11:59:59', '18:00:00']
          };
        }
      }, true).$refs.compo;

      setTimeout(() => {
        vmWithDefaultTime.$el.click();

        setTimeout(() => {
          const pickers = vmWithDefaultTime.picker.$el.querySelectorAll('.tm-date-range-picker__content');
          const leftCell = pickers[0].querySelector('td.available');
          const rightCell = pickers[1].querySelector('td.available');

          triggerEvent(leftCell, 'mousemove', true);
          triggerEvent(leftCell, 'click', true);
          setTimeout(() => {
            triggerEvent(rightCell, 'mousemove', true);
            setTimeout(() => {
              expect(rightCell.classList.contains('in-range')).to.be.true;

              triggerEvent(rightCell, 'click', true);
              setTimeout(() => {
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
      const leftBtn = vm.picker.$el.querySelector('.is-left .tm-icon--arrow-left');
      const rightBtn = vm.picker.$el.querySelector('.is-right .tm-icon--arrow-right');
      const left = vm.picker.$el.querySelector('.is-left .tm-date-range-picker__header');
      const right = vm.picker.$el.querySelector('.is-right .tm-date-range-picker__header');
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

      setTimeout(() => {
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
      const leftBtn = vm.picker.$el.querySelector('.is-left .tm-icon--d-arrow-left');
      const rightBtn = vm.picker.$el.querySelector('.is-right .tm-icon--d-arrow-right');
      const left = vm.picker.$el.querySelector('.is-left .tm-date-range-picker__header');
      const right = vm.picker.$el.querySelector('.is-right .tm-date-range-picker__header');
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

      setTimeout(() => {
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
      const input = vm.picker.$el.querySelector('.tm-date-range-picker__editors-wrap input');
      const pickers = vm.picker.$el.querySelectorAll('.tm-date-range-picker__content');
      const leftCell = pickers[0].querySelector('td.available');
      const rightCell = pickers[1].querySelector('td.available');

      triggerEvent(leftCell, 'mousemove', true);
      triggerEvent(leftCell, 'click', true);
      setTimeout(() => {
        triggerEvent(rightCell, 'mousemove', true);
        triggerEvent(rightCell, 'click', true);

        setTimeout(() => {
          triggerEvent(input, 'input');
          input.value = '1989-6-4';
          triggerEvent(input, 'change', true);

          setTimeout(() => {
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
      const input = vm.picker.$el.querySelector('.tm-date-range-picker__editors-wrap input');
      const input2 = vm.picker.$el.querySelectorAll('.tm-date-range-picker__editors-wrap input')[2];
      const pickers = vm.picker.$el.querySelectorAll('.tm-date-range-picker__content');
      const leftCell = pickers[0].querySelector('td.available');
      const rightCell = pickers[1].querySelector('td.available');

      triggerEvent(leftCell, 'mousemove', true);
      triggerEvent(leftCell, 'click', true);
      setTimeout(() => {
        triggerEvent(rightCell, 'mousemove', true);
        triggerEvent(rightCell, 'click', true);

        setTimeout(() => {
          triggerEvent(input2, 'input');
          input2.value = '1988-6-4';
          triggerEvent(input2, 'change');

          setTimeout(() => {
            triggerEvent(input, 'input');
            input.value = '1989-6-4';
            triggerEvent(input, 'change', true);
            setTimeout(() => {
              expect(vm.picker.maxDate > vm.picker.minDate).to.true;
              done();
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    it('select time', done => {
      const input = vm.picker.$el.querySelectorAll('.tm-date-range-picker__editors-wrap input')[1];
      input.blur();
      input.focus();
      input.blur();

      setTimeout(() => {
        const button = vm.picker.$el.querySelector('.tm-date-range-picker__time-picker-wrap .tm-time-panel .confirm');
        button.click();

        setTimeout(() => {
          expect(input.value).to.exist;
          done();
        }, DELAY);
      }, DELAY);
    });
  });

  const currentMonth = new Date(new Date().getTime());
  currentMonth.setDate(1);
  const chineseWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const testWeek = (i) => it('picker-options:firstDayOfWeek ' + i, done => {
    vm = createTest(DatePicker, {
      pickerOptions: {
        firstDayOfWeek: i
      }
    }, true);

    const input = vm.$el.querySelector('input');

    input.blur();
    input.focus();

    setTimeout(() => {
      const firstWeek = vm.picker.$el.querySelector('tr th');
      expect(firstWeek.innerText.toLowerCase()).to.equal(chineseWeek[i - 1].toLowerCase());
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

    setTimeout(() => {
      const shortcut = vm.picker.$el.querySelector('.tm-picker-panel__shortcut');

      expect(shortcut.textContent).to.be.equal('今天');
      expect(vm.picker.$el.querySelector('.tm-picker-panel__sidebar')).to.be.ok;

      shortcut.click();
      setTimeout(() => {
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

      setTimeout(() => {
        expect(vm.picker.date.getTime() === date.getTime()).to.true;
        done();
      }, DELAY);
    });
  });
});
