<template>
  <transition name="tm-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="tm-picker-panel tm-date-dynamic-picker tm-popper"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts,
        'has-time': showTime
      }, popperClass]">
      <slot name="topBlock" class="tm-picker-panel__top-block"></slot>
      <div class="tm-picker-panel__body-wrapper">
        <slot name="sidebar" class="tm-picker-panel__sidebar"></slot>
        <div class="tm-picker-panel__sidebar" v-if="shortcuts">
          <button
            type="button"
            class="tm-picker-panel__shortcut"
            v-for="shortcut in shortcuts"
            :key="shortcut.text"
            @click="handleShortcutClick(shortcut)">
            <slot name="shortcut-inner" v-bind="shortcut">{{shortcut.text}}</slot>
          </button>
        </div>
        <div class="tm-picker-panel__body">
          <div class="tm-picker-panel__switch">
            <tm-radio-group v-model="panelSwitch" @change="handlePanelChange">
              <tm-radio-button name="double" theme="primary" label="double">Туда-обратно</tm-radio-button>
              <tm-radio-button name="single" theme="primary" label="single">Только туда</tm-radio-button>
            </tm-radio-group>
          </div>
          <div class="tm-date-dynamic-picker__time-header" v-if="showTime">
            <span class="tm-date-dynamic-picker__editors-wrap">
              <span class="tm-date-dynamic-picker__time-picker-wrap">
                <tm-input
                  size="small"
                  :disabled="rangeState.selecting"
                  ref="minInput"
                  :placeholder="t('el.datepicker.startDate')"
                  class="tm-date-dynamic-picker__editor"
                  :value="minVisibleDate"
                  @input.native="handleDateInput($event, 'min')"
                  @change.native="handleDateChange($event, 'min')" />
              </span>
              <span class="tm-date-dynamic-picker__time-picker-wrap">
                <tm-input
                  size="small"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.startTime')"
                  class="tm-date-dynamic-picker__editor"
                  :value="minVisibleTime"
                  @focus="minTimePickerVisible = !minTimePickerVisible"
                  @change.native="handleTimeChange($event, 'min')" />
                <time-picker
                  ref="minTimePicker"
                  @pick="handleMinTimePick"
                  :time-arrow-control="arrowControl"
                  :visible="minTimePickerVisible"
                  @mounted="$refs.minTimePicker.format=timeFormat">
                </time-picker>
              </span>
            </span>
            <span class="tm-icon--arrow-right"></span>
            <span class="tm-date-dynamic-picker__editors-wrap is-right">
              <span class="tm-date-dynamic-picker__time-picker-wrap">
                <tm-input
                  size="small"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.endDate')"
                  class="tm-date-dynamic-picker__editor"
                  :value="maxVisibleDate"
                  :readonly="!minDate"
                  @input.native="handleDateInput($event, 'max')"
                  @change.native="handleDateChange($event, 'max')" />
              </span>
              <span class="tm-date-dynamic-picker__time-picker-wrap">
                <tm-input
                  size="small"
                  :disabled="rangeState.selecting"
                  ref="maxInput"
                  :placeholder="t('el.datepicker.endTime')"
                  class="tm-date-dynamic-picker__editor"
                  :value="maxVisibleTime"
                  @focus="minDate && (maxTimePickerVisible = !maxTimePickerVisible)"
                  :readonly="!minDate"
                  @change.native="handleTimeChange($event, 'max')" />
                <time-picker
                  ref="maxTimePicker"
                  @pick="handleMaxTimePick"
                  :time-arrow-control="arrowControl"
                  :visible="maxTimePickerVisible"
                  @mounted="$refs.maxTimePicker.format=timeFormat">
                </time-picker>
              </span>
            </span>
          </div>
          <template v-if="panelSwitch === 'double'">
            <div class="tm-picker-panel__content tm-date-dynamic-picker__content is-left">
              <div class="tm-date-dynamic-picker__header">
                <button
                  type="button"
                  @click="leftPrevMonth"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-left">
                  <tm-icon name="arrow-left" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <button
                  type="button"
                  @click="leftNextMonth"
                  v-if="unlinkPanels"
                  :disabled="!enableMonthArrow"
                  :class="{ 'is-disabled': !enableMonthArrow }"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-right">
                  <tm-icon name="arrow-right" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <div>{{ leftLabel }}</div>
              </div>
              <date-table
                selection-mode="range"
                :date="leftDate"
                :default-value="defaultValue"
                :min-date="minDate"
                :max-date="maxDate"
                :range-state="rangeState"
                :disabled-date="disabledDate"
                @changerange="handleChangeRange"
                :first-day-of-week="firstDayOfWeek"
                @pick="handleRangePick">
                <template v-for="(value, key) in $scopedSlots" slot-scope="props" :slot="key">
                  <slot v-bind="props" :name="key" />
                </template>
              </date-table>
            </div>
            <div class="tm-picker-panel__content tm-date-dynamic-picker__content is-right">
              <div class="tm-date-dynamic-picker__header">
                <button
                  type="button"
                  @click="rightPrevMonth"
                  v-if="unlinkPanels"
                  :disabled="!enableMonthArrow"
                  :class="{ 'is-disabled': !enableMonthArrow }"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-left">
                  <tm-icon name="arrow-left" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <button
                  type="button"
                  @click="rightNextMonth"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-right">
                  <tm-icon name="arrow-right" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <div>{{ rightLabel }}</div>
              </div>
              <date-table
                selection-mode="range"
                :date="rightDate"
                :default-value="defaultValue"
                :min-date="minDate"
                :max-date="maxDate"
                :range-state="rangeState"
                :disabled-date="disabledDate"
                @changerange="handleChangeRange"
                :first-day-of-week="firstDayOfWeek"
                @pick="handleRangePick">
                <template v-for="(value, key) in $scopedSlots" slot-scope="props" :slot="key">
                  <slot v-bind="props" :name="key" />
                </template>
              </date-table>
            </div>
          </template>
          <template v-else>
            <div class="tm-picker-panel__content">
              <div class="tm-date-dynamic-picker__header">
                <button
                  type="button"
                  @click="leftPrevMonth"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-left">
                  <tm-icon name="arrow-left" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <button
                  type="button"
                  @click="rightNextMonth"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-right">
                  <tm-icon name="arrow-right" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <button
                  type="button"
                  @click="leftNextMonth"
                  v-if="unlinkPanels"
                  :disabled="!enableMonthArrow"
                  :class="{ 'is-disabled': !enableMonthArrow }"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-right">
                  <tm-icon name="arrow-right" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <button
                  type="button"
                  @click="rightPrevMonth"
                  v-if="unlinkPanels"
                  :disabled="!enableMonthArrow"
                  :class="{ 'is-disabled': !enableMonthArrow }"
                  class="tm-picker-panel__icon-btn tm-icon--arrow-left">
                  <tm-icon name="arrow-left" class="tm-picker-panel__icon"></tm-icon>
                </button>
                <div>{{ leftLabel }}</div>
              </div>
              <date-table
                selection-mode="day"
                :date="leftDate"
                :value="new Date(value)"
                :default-value="defaultValue"
                :min-date="minDate"
                :max-date="maxDate"
                :disabled-date="disabledDate"
                :first-day-of-week="firstDayOfWeek"
                @pick="handleDatePick">
                <template v-for="(value, key) in $scopedSlots" slot-scope="props" :slot="key">
                  <slot v-bind="props" :name="key" />
                </template>
              </date-table>
            </div>
          </template>
        </div>
      </div>
      <slot name="bottomBlock" class="tm-picker-panel__bottom-block"></slot>
      <div class="tm-picker-panel__footer" v-if="showTime">
        <tm-button
          size="mini"
          type="text"
          class="tm-picker-panel__link-btn"
          @click="handleClear">
          {{ t('el.datepicker.clear') }}
        </tm-button>
        <tm-button
          plain
          size="mini"
          class="tm-picker-panel__link-btn"
          :disabled="btnDisabled"
          @click="handleConfirm()">
          {{ t('el.datepicker.confirm') }}
        </tm-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import {
    formatDate,
    parseDate,
    isDate,
    modifyDate,
    modifyTime,
    prevYear,
    nextYear,
    prevMonth,
    nextMonth
  } from '../util';
  import Locale from 'tmconsulting-ui/src/mixins/locale';
  import TimePicker from './time';
  import DateTable from '../basic/date-table';
  import TmInput from 'tmconsulting-ui/packages/input';
  import TmButton from 'tmconsulting-ui/packages/button';
  import TmIcon from 'tmconsulting-ui/packages/icon';
  import TmRadioGroup from 'tmconsulting-ui/packages/radio-group';
  import TmRadioButton from 'tmconsulting-ui/packages/radio-button';

  const advanceDate = (date, amount) => {
    return new Date(new Date(date).getTime() + amount);
  };

  const calcDefaultValue = (defaultValue) => {
    if (Array.isArray(defaultValue)) {
      return [new Date(defaultValue[0]), new Date(defaultValue[1])];
    } else if (defaultValue) {
      return [new Date(defaultValue), advanceDate(defaultValue, 24 * 60 * 60 * 1000)];
    } else {
      return [new Date(), advanceDate(Date.now(), 24 * 60 * 60 * 1000)];
    }
  };

  const modifyWithGivenTime = (date, time) => {
    if (date == null || time == null) {
      return date;
    }
    time = parseDate(time, 'HH:mm:ss');
    return modifyTime(
      date,
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    );
  };

  export default {
    name: 'dynamic-picker',

    mixins: [Locale],

    computed: {
      btnDisabled() {
        return !(this.minDate && this.maxDate && !this.selecting);
      },

      leftLabel() {
        return this.t(`el.datepicker.month${ this.leftDate.getMonth() + 1 }`) +
            ' ' + this.leftDate.getFullYear() +
            ' ' + this.t('el.datepicker.year');
      },

      rightLabel() {
        return this.t(`el.datepicker.month${ this.rightDate.getMonth() + 1 }`) +
            ' ' + this.rightDate.getFullYear() +
            ' ' + this.t('el.datepicker.year');
      },

      leftYear() {
        return this.leftDate.getFullYear();
      },

      leftMonth() {
        return this.leftDate.getMonth();
      },

      leftMonthDate() {
        return this.leftDate.getDate();
      },

      rightYear() {
        return this.rightDate.getFullYear();
      },

      rightMonth() {
        return this.rightDate.getMonth();
      },

      rightMonthDate() {
        return this.rightDate.getDate();
      },

      minVisibleDate() {
        return this.minDate ? formatDate(this.minDate) : '';
      },

      maxVisibleDate() {
        return (this.maxDate || this.minDate) ? formatDate(this.maxDate || this.minDate) : '';
      },

      minVisibleTime() {
        return this.minDate ? formatDate(this.minDate, 'HH:mm:ss') : '';
      },

      maxVisibleTime() {
        return (this.maxDate || this.minDate) ? formatDate(this.maxDate || this.minDate, 'HH:mm:ss') : '';
      },

      dateFormat() {
        if (this.format) {
          return this.format.replace('HH:mm', '').replace(':ss', '').trim();
        } else {
          return 'yyyy-MM-dd';
        }
      },

      timeFormat() {
        if (this.format && this.format.indexOf('ss') === -1) {
          return 'HH:mm';
        } else {
          return 'HH:mm:ss';
        }
      },

      enableMonthArrow() {
        const nextMonth = (this.leftMonth + 1) % 12;
        const yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
        return this.unlinkPanels && new Date(this.leftYear + yearOffset, nextMonth) < new Date(this.rightYear, this.rightMonth);
      },

      enableYearArrow() {
        return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
      }
    },

    data() {
      return {
        popperClass: '',
        value: null,
        defaultValue: null,
        defaultTime: null,
        minDate: '',
        maxDate: '',
        leftDate: new Date(),
        rightDate: nextMonth(new Date()),
        rangeState: {
          endDate: null,
          selecting: false,
          row: null,
          column: null
        },
        showTime: false,
        shortcuts: '',
        visible: '',
        disabledDate: '',
        firstDayOfWeek: 1,
        minTimePickerVisible: false,
        maxTimePickerVisible: false,
        format: '',
        arrowControl: false,
        unlinkPanels: false,
        date: new Date(),
        panelSwitch: 'single'
      };
    },

    watch: {
      visible() {
        this.handlePanelChange(null);
      },
      minDate(val) {
        this.$nextTick(() => {
          if (this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
            const format = 'HH:mm:ss';
            this.$refs.maxTimePicker.selectableRange = [
              [
                parseDate(formatDate(this.minDate, format), format),
                parseDate('23:59:59', format)
              ]
            ];
          }
        });
        if (val && this.$refs.minTimePicker) {
          this.$refs.minTimePicker.date = val;
          this.$refs.minTimePicker.value = val;
        }
      },

      maxDate(val) {
        if (val && this.$refs.maxTimePicker) {
          this.$refs.maxTimePicker.date = val;
          this.$refs.maxTimePicker.value = val;
        }
      },

      minTimePickerVisible(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.minTimePicker.date = this.minDate;
            this.$refs.minTimePicker.value = this.minDate;
            this.$refs.minTimePicker.adjustSpinners();
          });
        }
      },

      maxTimePickerVisible(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.maxTimePicker.date = this.maxDate;
            this.$refs.maxTimePicker.value = this.maxDate;
            this.$refs.maxTimePicker.adjustSpinners();
          });
        }
      },

      value(newVal) {
        if (Array.isArray(newVal) && this.panelSwitch !== 'double') {
          this.panelSwitch = 'double';
        }

        if (!newVal) {
          this.minDate = null;
          this.maxDate = null;
        } else if (Array.isArray(newVal)) {
          this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
          this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
          // NOTE: currently, maxDate = minDate + 1 month
          //       should allow them to be set individually in the future
          if (this.minDate) {
            this.leftDate = this.minDate;
            if (this.unlinkPanels && this.maxDate) {
              const minDateYear = this.minDate.getFullYear();
              const minDateMonth = this.minDate.getMonth();
              const maxDateYear = this.maxDate.getFullYear();
              const maxDateMonth = this.maxDate.getMonth();
              this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth
                ? nextMonth(this.maxDate)
                : this.maxDate;
            } else {
              this.rightDate = nextMonth(this.leftDate);
            }
          } else {
            this.leftDate = calcDefaultValue(this.defaultValue)[0];
            this.rightDate = nextMonth(this.leftDate);
          }
        }
      },

      defaultValue(val) {
        if (!Array.isArray(this.value)) {
          const [left, right] = calcDefaultValue(val);
          this.leftDate = left;
          this.rightDate = val && val[1] && this.unlinkPanels
            ? right
            : nextMonth(this.leftDate);
        }
      }
    },

    methods: {
      handleClear(pick = true) {
        this.minDate = null;
        this.maxDate = null;
        this.leftDate = calcDefaultValue(this.defaultValue)[0];
        this.rightDate = nextMonth(this.leftDate);
        if (pick) {
          this.$emit('pick', null);
        }
      },

      handleChangeRange(val) {
        this.minDate = val.minDate;
        this.maxDate = val.maxDate;
        this.rangeState = val.rangeState;
      },

      handleDateInput(event, type) {
        const value = event.target.value;
        if (value.length !== this.dateFormat.length) return;
        const parsedValue = parseDate(value, this.dateFormat);

        if (parsedValue) {
          if (typeof this.disabledDate === 'function' &&
            this.disabledDate(new Date(parsedValue))) {
            return;
          }
          if (type === 'min') {
            this.minDate = new Date(parsedValue);
            this.leftDate = new Date(parsedValue);
            this.rightDate = nextMonth(this.leftDate);
          } else {
            this.maxDate = new Date(parsedValue);
            this.leftDate = prevMonth(parsedValue);
            this.rightDate = new Date(parsedValue);
          }
        }
      },

      handleDateChange(event, type) {
        const value = event.target.value;
        const parsedValue = parseDate(value, this.dateFormat);
        if (parsedValue) {
          if (type === 'min') {
            this.minDate = modifyDate(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
            if (this.minDate > this.maxDate) {
              this.maxDate = this.minDate;
            }
          } else {
            this.maxDate = modifyDate(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
            if (this.maxDate < this.minDate) {
              this.minDate = this.maxDate;
            }
          }
        }
      },

      handleTimeChange(event, type) {
        const value = event.target.value;
        const parsedValue = parseDate(value, this.timeFormat);
        if (parsedValue) {
          if (type === 'min') {
            this.minDate = modifyTime(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
            if (this.minDate > this.maxDate) {
              this.maxDate = this.minDate;
            }
            this.$refs.minTimePicker.value = this.minDate;
            this.minTimePickerVisible = false;
          } else {
            this.maxDate = modifyTime(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
            if (this.maxDate < this.minDate) {
              this.minDate = this.maxDate;
            }
            this.$refs.maxTimePicker.value = this.minDate;
            this.maxTimePickerVisible = false;
          }
        }
      },

      handlePanelChange(type) {
        this.$emit('dynamicChange', this.panelSwitch);
        if (type) {
          this.handleClear(false);
        } else if (this.panelSwitch === 'single') {
          this.minDate = null;
        }
      },

      handleRangePick(val, close = true) {
        const defaultTime = this.defaultTime || [];
        const minDate = modifyWithGivenTime(val.minDate, defaultTime[0]);
        const maxDate = modifyWithGivenTime(val.maxDate, defaultTime[1]);

        if (this.maxDate === maxDate && this.minDate === minDate) {
          return;
        }
        this.onPick && this.onPick(val);
        this.maxDate = maxDate;
        this.minDate = minDate;
        this.date = new Date(minDate);

        // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
        setTimeout(() => {
          this.maxDate = maxDate;
          this.minDate = minDate;
        }, 10);
        if (!close || this.showTime) return;
        this.handleConfirm([this.minDate, this.maxDate]);
      },

      handleDatePick(val) {
        this.date = modifyDate(this.date, val.getFullYear(), val.getMonth(), val.getDate());
        this.handleConfirm(this.date);

        if (this.panelSwitch === 'single') return;

        this.minDate = new Date(this.date);
        this.leftDate = new Date(this.date);
        this.rightDate = nextMonth(this.date);
      },

      handleShortcutClick(shortcut) {
        if (shortcut.onClick) {
          shortcut.onClick(this);
        }
      },

      handleMinTimePick(value, visible, first) {
        this.minDate = this.minDate || new Date();
        if (value) {
          this.minDate = modifyTime(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
        }

        if (!first) {
          this.minTimePickerVisible = visible;
        }

        if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
          this.maxDate = new Date(this.minDate);
        }
      },

      handleMaxTimePick(value, visible, first) {
        if (this.maxDate && value) {
          this.maxDate = modifyTime(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
        }

        if (!first) {
          this.maxTimePickerVisible = visible;
        }

        if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
          this.minDate = new Date(this.maxDate);
        }
      },

      // leftPrev*, rightNext* need to take care of `unlinkPanels`
      leftPrevYear() {
        this.leftDate = prevYear(this.leftDate);
        if (!this.unlinkPanels) {
          this.rightDate = nextMonth(this.leftDate);
        }
      },

      leftPrevMonth() {
        this.leftDate = prevMonth(this.leftDate);
        if (!this.unlinkPanels) {
          this.rightDate = nextMonth(this.leftDate);
        }
      },

      rightNextYear() {
        if (!this.unlinkPanels) {
          this.leftDate = nextYear(this.leftDate);
          this.rightDate = nextMonth(this.leftDate);
        } else {
          this.rightDate = nextYear(this.rightDate);
        }
      },

      rightNextMonth() {
        if (!this.unlinkPanels) {
          this.leftDate = nextMonth(this.leftDate);
          this.rightDate = nextMonth(this.leftDate);
        } else {
          this.rightDate = nextMonth(this.rightDate);
        }
      },

      // leftNext*, rightPrev* are called when `unlinkPanels` is true
      leftNextYear() {
        this.leftDate = nextYear(this.leftDate);
      },

      leftNextMonth() {
        this.leftDate = nextMonth(this.leftDate);
      },

      rightPrevYear() {
        this.rightDate = prevYear(this.rightDate);
      },

      rightPrevMonth() {
        this.rightDate = prevMonth(this.rightDate);
      },

      handleConfirm(date, visible = false) {
        this.$emit('pick', date, visible);
      },

      isValidValue(value) {
        return Array.isArray(value) &&
          value && value[0] && value[1] &&
          isDate(value[0]) && isDate(value[1]) &&
          value[0].getTime() <= value[1].getTime() && (
          typeof this.disabledDate === 'function'
            ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
            : true
        );
      }
    },

    components: { TmIcon, TimePicker, DateTable, TmInput, TmButton, TmRadioGroup, TmRadioButton }
  };
</script>
