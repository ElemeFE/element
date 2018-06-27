<template>
  <transition name="el-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
    <div
      v-show="visible"
      class="el-picker-panel el-date-picker el-popper"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts,
        'has-time': showTime
      }, popperClass]">
      <div class="el-picker-panel__body-wrapper">
        <slot name="sidebar" class="el-picker-panel__sidebar"></slot>
        <div class="el-picker-panel__sidebar" v-if="shortcuts">
          <button
            type="button"
            class="el-picker-panel__shortcut"
            v-for="shortcut in shortcuts"
            @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</button>
        </div>
        <div class="el-picker-panel__body">
          <div class="el-date-picker__time-header" v-if="showTime">
            <span class="el-date-picker__editor-wrap">
              <el-input
                :placeholder="t('el.datepicker.selectDate')"
                :value="visibleDate"
                size="small"
                @input="val => userInputDate = val"
                @change="handleVisibleDateChange" />
            </span>
            <span class="el-date-picker__editor-wrap" v-clickoutside="() => timePickerVisible = false">
              <el-input
                ref="input"
                @focus="timePickerVisible = true"
                :placeholder="t('el.datepicker.selectTime')"
                :value="visibleTime"
                size="small"
                @input="val => userInputTime = val"
                @change="handleVisibleTimeChange" />
              <time-picker
                ref="timepicker"
                :time-arrow-control="arrowControl"
                @pick="handleTimePick"
                :visible="timePickerVisible"
                @mounted="proxyTimePickerDataProperties">
              </time-picker>
            </span>
          </div>
          <div
            class="el-date-picker__header"
            :class="{ 'el-date-picker__header--bordered': currentView === 'year' || currentView === 'month' }"
            v-show="currentView !== 'time'">
            <button
              type="button"
              @click="prevYear"
              :aria-label="t(`el.datepicker.prevYear`)"
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left">
            </button>
            <button
              type="button"
              @click="prevMonth"
              v-show="currentView === 'date'"
              :aria-label="t(`el.datepicker.prevMonth`)"
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left">
            </button>
            <span
              @click="showYearPicker"
              role="button"
              class="el-date-picker__header-label">{{ yearLabel }}</span>
            <span
              @click="showMonthPicker"
              v-show="currentView === 'date'"
              role="button"
              class="el-date-picker__header-label"
              :class="{ active: currentView === 'month' }">{{t(`el.datepicker.month${ month + 1 }`)}}</span>
            <button
              type="button"
              @click="nextYear"
              :aria-label="t(`el.datepicker.nextYear`)"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right">
            </button>
            <button
              type="button"
              @click="nextMonth"
              v-show="currentView === 'date'"
              :aria-label="t(`el.datepicker.nextMonth`)"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right">
            </button>
          </div>

          <div class="el-picker-panel__content">
            <date-table
              v-show="currentView === 'date'"
              @pick="handleDatePick"
              @select="handleDateSelect"
              :selection-mode="selectionMode"
              :first-day-of-week="firstDayOfWeek"
              :value="new Date(value)"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate"
              :selected-date="selectedDate">
            </date-table>
            <year-table
              v-show="currentView === 'year'"
              @pick="handleYearPick"
              :value="new Date(value)"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate">
            </year-table>
            <month-table
              v-show="currentView === 'month'"
              @pick="handleMonthPick"
              :value="new Date(value)"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate">
            </month-table>
          </div>
        </div>
      </div>

      <div
        class="el-picker-panel__footer"
        v-show="footerVisible && currentView === 'date'">
        <el-button
          size="mini"
          type="text"
          class="el-picker-panel__link-btn"
          @click="changeToNow"
          v-show="selectionMode !== 'dates'">
          {{ t('el.datepicker.now') }}
        </el-button>
        <el-button
          plain
          size="mini"
          class="el-picker-panel__link-btn"
          @click="confirm">
          {{ t('el.datepicker.confirm') }}
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import {
    formatDate,
    parseDate,
    getWeekNumber,
    isDate,
    modifyDate,
    modifyTime,
    modifyWithTimeString,
    clearMilliseconds,
    clearTime,
    prevYear,
    nextYear,
    prevMonth,
    nextMonth,
    changeYearMonthAndClampDate,
    extractDateFormat,
    extractTimeFormat
  } from '../util';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Locale from 'element-ui/src/mixins/locale';
  import ElInput from 'element-ui/packages/input';
  import ElButton from 'element-ui/packages/button';
  import TimePicker from './time';
  import YearTable from '../basic/year-table';
  import MonthTable from '../basic/month-table';
  import DateTable from '../basic/date-table';

  export default {
    mixins: [Locale],

    directives: { Clickoutside },

    watch: {
      showTime(val) {
        /* istanbul ignore if */
        if (!val) return;
        this.$nextTick(_ => {
          const inputElm = this.$refs.input.$el;
          if (inputElm) {
            this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
          }
        });
      },

      value(val) {
        if (this.selectionMode === 'dates' && this.value) return;
        if (isDate(val)) {
          this.date = new Date(val);
        } else {
          this.date = this.getDefaultValue();
        }
      },

      defaultValue(val) {
        if (!isDate(this.value)) {
          this.date = val ? new Date(val) : new Date();
        }
      },

      timePickerVisible(val) {
        if (val) this.$nextTick(() => this.$refs.timepicker.adjustSpinners());
      },

      selectionMode(newVal) {
        if (newVal === 'month') {
          /* istanbul ignore next */
          if (this.currentView !== 'year' || this.currentView !== 'month') {
            this.currentView = 'month';
          }
        } else if (newVal === 'dates') {
          this.currentView = 'date';
        }
      }
    },

    methods: {
      proxyTimePickerDataProperties() {
        const format = timeFormat => {this.$refs.timepicker.format = timeFormat;};
        const value = value => {this.$refs.timepicker.value = value;};
        const date = date => {this.$refs.timepicker.date = date;};

        this.$watch('value', value);
        this.$watch('date', date);

        format(this.timeFormat);
        value(this.value);
        date(this.date);
      },

      handleClear() {
        this.date = this.getDefaultValue();
        this.$emit('pick', null);
      },

      emit(value, ...args) {
        if (!value) {
          this.$emit('pick', value, ...args);
        } else if (Array.isArray(value)) {
          const dates = value.map(date => this.showTime ? clearMilliseconds(date) : clearTime(date));
          this.$emit('pick', dates, ...args);
        } else {
          this.$emit('pick', this.showTime ? clearMilliseconds(value) : clearTime(value), ...args);
        }
        this.userInputDate = null;
        this.userInputTime = null;
      },

      // resetDate() {
      //   this.date = new Date(this.date);
      // },

      showMonthPicker() {
        this.currentView = 'month';
      },

      showYearPicker() {
        this.currentView = 'year';
      },

      // XXX: 没用到
      // handleLabelClick() {
      //   if (this.currentView === 'date') {
      //     this.showMonthPicker();
      //   } else if (this.currentView === 'month') {
      //     this.showYearPicker();
      //   }
      // },

      prevMonth() {
        this.date = prevMonth(this.date);
      },

      nextMonth() {
        this.date = nextMonth(this.date);
      },

      prevYear() {
        if (this.currentView === 'year') {
          this.date = prevYear(this.date, 10);
        } else {
          this.date = prevYear(this.date);
        }
      },

      nextYear() {
        if (this.currentView === 'year') {
          this.date = nextYear(this.date, 10);
        } else {
          this.date = nextYear(this.date);
        }
      },

      handleShortcutClick(shortcut) {
        if (shortcut.onClick) {
          shortcut.onClick(this);
        }
      },

      handleTimePick(value, visible, first) {
        if (isDate(value)) {
          const newDate = this.value
            ? modifyTime(this.value, value.getHours(), value.getMinutes(), value.getSeconds())
            : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
          this.date = newDate;
          this.emit(this.date, true);
        } else {
          this.emit(value, true);
        }
        if (!first) {
          this.timePickerVisible = visible;
        }
      },

      handleMonthPick(month) {
        if (this.selectionMode === 'month') {
          this.date = modifyDate(this.date, this.year, month, 1);
          this.emit(this.date);
        } else {
          this.date = changeYearMonthAndClampDate(this.date, this.year, month);
          // TODO: should emit intermediate value ??
          // this.emit(this.date);
          this.currentView = 'date';
        }
      },

      handleDateSelect(value) {
        if (this.selectionMode === 'dates') {
          this.selectedDate = value;
        }
      },

      handleDatePick(value) {
        if (this.selectionMode === 'day') {
          this.date = this.value
            ? modifyDate(this.value, value.getFullYear(), value.getMonth(), value.getDate())
            : modifyWithTimeString(value, this.defaultTime);
          this.emit(this.date, this.showTime);
        } else if (this.selectionMode === 'week') {
          this.emit(value.date);
        }
      },

      handleYearPick(year) {
        if (this.selectionMode === 'year') {
          this.date = modifyDate(this.date, year, 0, 1);
          this.emit(this.date);
        } else {
          this.date = changeYearMonthAndClampDate(this.date, year, this.month);
          // TODO: should emit intermediate value ??
          // this.emit(this.date, true);
          this.currentView = 'month';
        }
      },

      changeToNow() {
        // NOTE: not a permanent solution
        //       consider disable "now" button in the future
        if (!this.disabledDate || !this.disabledDate(new Date())) {
          this.date = new Date();
          this.emit(this.date);
        }
      },

      confirm() {
        if (this.selectionMode === 'dates') {
          this.emit(this.selectedDate);
        } else {
          // value were emitted in handle{Date,Time}Pick, nothing to update here
          // deal with the scenario where: user opens the picker, then confirm without doing anything
          const value = this.value
            ? this.value
            : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
          this.date = new Date(value); // refresh date
          this.emit(value);
        }
      },

      resetView() {
        if (this.selectionMode === 'month') {
          this.currentView = 'month';
        } else if (this.selectionMode === 'year') {
          this.currentView = 'year';
        } else {
          this.currentView = 'date';
        }
      },

      handleEnter() {
        document.body.addEventListener('keydown', this.handleKeydown);
      },

      handleLeave() {
        this.$emit('dodestroy');
        document.body.removeEventListener('keydown', this.handleKeydown);
      },

      handleKeydown(event) {
        const keyCode = event.keyCode;
        const list = [38, 40, 37, 39];
        if (this.visible && !this.timePickerVisible) {
          if (list.indexOf(keyCode) !== -1) {
            this.handleKeyControl(keyCode);
            event.stopPropagation();
            event.preventDefault();
          }
          if (keyCode === 13 && this.userInputDate === null && this.userInputTime === null) { // Enter
            this.emit(this.date, false);
          }
        }
      },

      handleKeyControl(keyCode) {
        const mapping = {
          'year': {
            38: -4, 40: 4, 37: -1, 39: 1, offset: (date, step) => date.setFullYear(date.getFullYear() + step)
          },
          'month': {
            38: -4, 40: 4, 37: -1, 39: 1, offset: (date, step) => date.setMonth(date.getMonth() + step)
          },
          'week': {
            38: -1, 40: 1, 37: -1, 39: 1, offset: (date, step) => date.setDate(date.getDate() + step * 7)
          },
          'day': {
            38: -7, 40: 7, 37: -1, 39: 1, offset: (date, step) => date.setDate(date.getDate() + step)
          }
        };
        const mode = this.selectionMode;
        const year = 3.1536e10;
        const now = this.date.getTime();
        const newDate = new Date(this.date.getTime());
        while (Math.abs(now - newDate.getTime()) <= year) {
          const map = mapping[mode];
          map.offset(newDate, map[keyCode]);
          if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
            continue;
          }
          this.date = newDate;
          this.$emit('pick', newDate, true);
          break;
        }
      },

      handleVisibleTimeChange(value) {
        const time = parseDate(value, this.timeFormat);
        if (time) {
          this.date = modifyDate(time, this.year, this.month, this.monthDate);
          this.userInputTime = null;
          this.$refs.timepicker.value = this.date;
          this.timePickerVisible = false;
          this.emit(this.date, true);
        }
      },

      handleVisibleDateChange(value) {
        const date = parseDate(value, this.dateFormat);
        if (date) {
          if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
            return;
          }
          this.date = modifyTime(date, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
          this.userInputDate = null;
          this.resetView();
          this.emit(this.date, true);
        }
      },

      isValidValue(value) {
        return value && !isNaN(value) && (
          typeof this.disabledDate === 'function'
            ? !this.disabledDate(value)
            : true
        );
      },

      getDefaultValue() {
        // if default-value is set, return it
        // otherwise, return now (the moment this method gets called)
        return this.defaultValue ? new Date(this.defaultValue) : new Date();
      }
    },

    components: {
      TimePicker, YearTable, MonthTable, DateTable, ElInput, ElButton
    },

    data() {
      return {
        popperClass: '',
        date: new Date(),
        value: '',
        defaultValue: null, // use getDefaultValue() for time computation
        defaultTime: null,
        showTime: false,
        selectionMode: 'day',
        shortcuts: '',
        visible: false,
        currentView: 'date',
        disabledDate: '',
        selectedDate: [],
        firstDayOfWeek: 7,
        showWeekNumber: false,
        timePickerVisible: false,
        format: '',
        arrowControl: false,
        userInputDate: null,
        userInputTime: null
      };
    },

    computed: {
      year() {
        return this.date.getFullYear();
      },

      month() {
        return this.date.getMonth();
      },

      week() {
        return getWeekNumber(this.date);
      },

      monthDate() {
        return this.date.getDate();
      },

      footerVisible() {
        return this.showTime || this.selectionMode === 'dates';
      },

      visibleTime() {
        if (this.userInputTime !== null) {
          return this.userInputTime;
        } else {
          return formatDate(this.value || this.defaultValue, this.timeFormat);
        }
      },

      visibleDate() {
        if (this.userInputDate !== null) {
          return this.userInputDate;
        } else {
          return formatDate(this.value || this.defaultValue, this.dateFormat);
        }
      },

      yearLabel() {
        const yearTranslation = this.t('el.datepicker.year');
        if (this.currentView === 'year') {
          const startYear = Math.floor(this.year / 10) * 10;
          if (yearTranslation) {
            return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
          }
          return startYear + ' - ' + (startYear + 9);
        }
        return this.year + ' ' + yearTranslation;
      },

      timeFormat() {
        if (this.format) {
          return extractTimeFormat(this.format);
        } else {
          return 'HH:mm:ss';
        }
      },

      dateFormat() {
        if (this.format) {
          return extractDateFormat(this.format);
        } else {
          return 'yyyy-MM-dd';
        }
      }
    }
  };
</script>
