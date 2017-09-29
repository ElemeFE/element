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
                @change.native="visibleDate = $event.target.value" />
            </span>
            <span class="el-date-picker__editor-wrap">
              <el-input
                ref="input"
                @focus="timePickerVisible = !timePickerVisible"
                :placeholder="t('el.datepicker.selectTime')"
                :value="visibleTime"
                size="small"
                @change.native="visibleTime = $event.target.value" />
              <time-picker
                ref="timepicker"
                :date="date"
                @pick="handleTimePick"
                :visible="timePickerVisible"
                @mounted="$refs.timepicker.format=timeFormat">
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
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left">
            </button>
            <button
              type="button"
              @click="prevMonth"
              v-show="currentView === 'date'"
              class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left">
            </button>
            <span
              @click="showYearPicker"
              class="el-date-picker__header-label">{{ yearLabel }}</span>
            <span
              @click="showMonthPicker"
              v-show="currentView === 'date'"
              class="el-date-picker__header-label"
              :class="{ active: currentView === 'month' }">{{t(`el.datepicker.month${ month + 1 }`)}}</span>
            <button
              type="button"
              @click="nextYear"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right">
            </button>
            <button
              type="button"
              @click="nextMonth"
              v-show="currentView === 'date'"
              class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right">
            </button>
          </div>

          <div class="el-picker-panel__content">
            <date-table
              v-show="currentView === 'date'"
              @pick="handleDatePick"
              :year="year"
              :month="month"
              :date="date"
              :week="week"
              :selection-mode="selectionMode"
              :first-day-of-week="firstDayOfWeek"
              :disabled-date="disabledDate">
            </date-table>
            <year-table
              ref="yearTable"
              :year="year"
              :date="date"
              v-show="currentView === 'year'"
              @pick="handleYearPick"
              :disabled-date="disabledDate">
            </year-table>
            <month-table
              :month="month"
              :date="date"
              v-show="currentView === 'month'"
              @pick="handleMonthPick"
              :disabled-date="disabledDate">
            </month-table>
          </div>
        </div>
      </div>

      <div
        class="el-picker-panel__footer"
        v-show="footerVisible && currentView === 'date'">
        <a
          href="JavaScript:"
          class="el-picker-panel__link-btn"
          @click="changeToNow">{{ t('el.datepicker.now') }}</a>
        <button
          type="button"
          class="el-picker-panel__btn"
          @click="confirm">{{ t('el.datepicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import { formatDate, parseDate, getWeekNumber } from '../util';
  import Locale from 'element-ui/src/mixins/locale';
  import ElInput from 'element-ui/packages/input';
  import TimePicker from './time';
  import YearTable from '../basic/year-table';
  import MonthTable from '../basic/month-table';
  import DateTable from '../basic/date-table';

  export default {
    mixins: [Locale],

    watch: {
      value(newVal) {
        if (!newVal) return;
        newVal = new Date(newVal);
        if (!isNaN(newVal)) {
          if (typeof this.disabledDate === 'function' &&
            this.disabledDate(new Date(newVal))) {
            return;
          }
          this.date = newVal;
          this.year = newVal.getFullYear();
          this.month = newVal.getMonth();
          this.$emit('pick', newVal, false, false);
        }
      },

      timePickerVisible(val) {
        if (val) this.$nextTick(() => this.$refs.timepicker.adjustScrollTop());
      },

      selectionMode(newVal) {
        if (newVal === 'month') {
          /* istanbul ignore next */
          if (this.currentView !== 'year' || this.currentView !== 'month') {
            this.currentView = 'month';
          }
        } else if (newVal === 'week') {
          this.week = getWeekNumber(this.date);
        }
      },

      date(newVal) {
        this.year = newVal.getFullYear();
        this.month = newVal.getMonth();
        if (this.selectionMode === 'week') this.week = getWeekNumber(newVal);
      }
    },

    methods: {
      handleClear() {
        this.date = this.$options.defaultValue ? new Date(this.$options.defaultValue) : new Date();
        this.$emit('pick');
      },

      resetDate() {
        this.date = new Date(this.date);
      },

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
        this.month--;
        if (this.month < 0) {
          this.month = 11;
          this.year--;
        }
      },

      nextMonth() {
        this.month++;
        if (this.month > 11) {
          this.month = 0;
          this.year++;
        }
      },

      nextYear() {
        if (this.currentView === 'year') {
          this.$refs.yearTable.nextTenYear();
        } else {
          this.year++;
          this.date.setFullYear(this.year);
          this.resetDate();
        }
      },

      prevYear() {
        if (this.currentView === 'year') {
          this.$refs.yearTable.prevTenYear();
        } else {
          this.year--;
          this.date.setFullYear(this.year);
          this.resetDate();
        }
      },

      handleShortcutClick(shortcut) {
        if (shortcut.onClick) {
          shortcut.onClick(this);
        }
      },

      handleTimePick(picker, visible) {
        if (picker) {
          let oldDate = new Date(this.date.getTime());
          let hour = picker.getHours();
          let minute = picker.getMinutes();
          let second = picker.getSeconds();
          oldDate.setHours(hour);
          oldDate.setMinutes(minute);
          oldDate.setSeconds(second);
          if (typeof this.disabledDate === 'function' && this.disabledDate(oldDate)) {
            this.$refs.timepicker.disabled = true;
            return;
          }
          this.$refs.timepicker.disabled = false;
          this.date = new Date(oldDate.getTime());
        }

        this.timePickerVisible = visible;
      },

      handleMonthPick(month) {
        this.month = month;
        const selectionMode = this.selectionMode;
        if (selectionMode !== 'month') {
          this.date.setMonth(month);
          this.currentView = 'date';
          this.resetDate();
        } else {
          this.date.setMonth(month);
          this.year && this.date.setFullYear(this.year);
          this.resetDate();
          const value = new Date(this.date.getFullYear(), month, 1);
          this.$emit('pick', value);
        }
      },

      handleDatePick(value, close, user = true) {
        if (this.selectionMode === 'day') {
          if (!this.showTime) {
            this.$emit('pick', new Date(value.getTime()), false, user);
          }
          this.date.setFullYear(value.getFullYear());
          this.date.setMonth(value.getMonth(), value.getDate());
        } else if (this.selectionMode === 'week') {
          this.week = value.week;
          this.$emit('pick', value.date, false, user);
        }

        this.resetDate();
      },

      handleYearPick(year, close = true, user) {
        this.year = year;
        if (!close) return;

        this.date.setFullYear(year);
        if (this.selectionMode === 'year') {
          this.$emit('pick', new Date(year, 0, 1), false, user);
        } else {
          this.currentView = 'month';
        }

        this.resetDate();
      },

      changeToNow() {
        this.date.setTime(+new Date());
        this.$emit('pick', new Date(this.date.getTime()));
        this.resetDate();
      },

      confirm() {
        this.date.setMilliseconds(0);
        this.$emit('pick', this.date);
      },

      resetView() {
        if (this.selectionMode === 'month') {
          this.currentView = 'month';
        } else if (this.selectionMode === 'year') {
          this.currentView = 'year';
        } else {
          this.currentView = 'date';
        }

        if (this.selectionMode !== 'week') {
          this.year = this.date.getFullYear();
          this.month = this.date.getMonth();
        }
      },

      handleEnter() {
        document.body.addEventListener('keydown', this.handleKeyDown);
      },

      handleLeave() {
        this.$refs.timepicker && this.$refs.timepicker.$emit('pick');
        this.$emit('dodestory');
        document.body.removeEventListener('keydown', this.handleKeyDown);
      },

      handleKeyDown(e) {
        const keyCode = e.keyCode;
        const list = [38, 40, 37, 39];
        if (this.visible && !this.timePickerVisible) {
          if (list.indexOf(keyCode) !== -1) {
            this.handleKeyControl(keyCode);
            event.stopPropagation();
            event.preventDefault();
          }

          if (keyCode === 13) {
            this.confirm();
            event.stopPropagation();
            event.preventDefault();
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
          break;
        }
      }
    },

    components: {
      TimePicker, YearTable, MonthTable, DateTable, ElInput
    },

    mounted() {
      if (this.date && !this.year) {
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
      }
    },

    data() {
      return {
        popperClass: '',
        date: this.$options.defaultValue ? new Date(this.$options.defaultValue) : new Date(),
        value: '',
        showTime: false,
        selectionMode: 'day',
        shortcuts: '',
        visible: false,
        currentView: 'date',
        disabledDate: '',
        firstDayOfWeek: 7,
        year: null,
        month: null,
        week: null,
        showWeekNumber: false,
        timePickerVisible: false,
        format: ''
      };
    },

    computed: {
      footerVisible() {
        return this.showTime;
      },

      visibleTime: {
        get() {
          return formatDate(this.date, this.timeFormat);
        },

        set(val) {
          if (val) {
            const date = parseDate(val, this.timeFormat);
            if (date) {
              date.setFullYear(this.date.getFullYear());
              date.setMonth(this.date.getMonth());
              date.setDate(this.date.getDate());
              this.date = date;
              this.$refs.timepicker.value = date;
              this.timePickerVisible = false;
            }
          }
        }
      },

      visibleDate: {
        get() {
          return formatDate(this.date, this.dateFormat);
        },

        set(val) {
          const date = parseDate(val, this.dateFormat);
          if (!date) {
            return;
          }
          if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
            return;
          }
          date.setHours(this.date.getHours());
          date.setMinutes(this.date.getMinutes());
          date.setSeconds(this.date.getSeconds());
          this.date = date;
          this.resetView();
        }
      },

      yearLabel() {
        const year = this.year;
        if (!year) return '';
        const yearTranslation = this.t('el.datepicker.year');
        if (this.currentView === 'year') {
          const startYear = Math.floor(year / 10) * 10;
          if (yearTranslation) {
            return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
          }
          return startYear + ' - ' + (startYear + 9);
        }
        return this.year + ' ' + yearTranslation;
      },

      timeFormat() {
        if (this.format && this.format.indexOf('ss') === -1) {
          return 'HH:mm';
        } else {
          return 'HH:mm:ss';
        }
      },

      dateFormat() {
        if (this.format) {
          return this.format.replace('HH', '').replace(':mm', '').replace(':ss', '').trim();
        } else {
          return 'yyyy-MM-dd';
        }
      }
    }
  };
</script>
