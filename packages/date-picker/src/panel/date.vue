<template>
  <transition name="md-fade-bottom">
    <div
      v-show="visible"
      class="el-picker-panel el-date-picker">
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
            <input
              placehoder="选择日期"
              type="text"
              v-model="visibleDate"
              class="el-date-picker__editor">
            <span style="position: relative" v-clickoutside="closeTimePicker">
              <input
                @focus="timePickerVisible = true"
                v-model="visibleTime"
                placehoder="选择时间"
                type="text"
                class="el-date-picker__editor">
              <time-picker
                ref="timepicker"
                :date="date"
                @pick="handleTimePick"
                :visible="timePickerVisible">
              </time-picker>
            </span>
          </div>
          <div class="el-date-picker__header" v-show="currentView !== 'time'">
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
              :class="{ active: currentView === 'month' }">{{ month + 1 }}月</span>
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
              :value="value"
              :week="week"
              :selection-mode="selectionMode"
              :disabled-date="disabledDate">
            </date-table>
            <year-table
              ref="yearTable"
              :year="year"
              v-show="currentView === 'year'"
              @pick="handleYearPick">
            </year-table>
            <month-table
              :month="month"
              v-show="currentView === 'month'"
              @pick="handleMonthPick">
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
          @click="changeToToday">{{ $t('datepicker.today') }}</a>
        <button
          type="button"
          class="el-picker-panel__btn"
          @click="confirm">{{ $t('datepicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { $t, formatDate, parseDate } from '../util';

  export default {
    watch: {
      value(newVal) {
        if (this.selectionMode === 'day' && newVal instanceof Date) {
          this.date = newVal;
          this.year = newVal.getFullYear();
          this.month = newVal.getMonth();
        }
      },

      timePickerVisible(val) {
        if (val) this.$nextTick(() => this.$refs.timepicker.ajustScrollTop());
      },

      selectionMode(newVal) {
        if (newVal === 'month') {
          if (this.currentView !== 'year' || this.currentView !== 'month') {
            this.currentView = 'month';
          }
        }
      },

      date(newVal) {
        if (!this.year) {
          this.year = newVal.getFullYear();
          this.month = newVal.getMonth();
        }
      }
    },

    directives: {
      Clickoutside: require('main/utils/clickoutside').default
    },

    methods: {
      $t: $t,

      resetDate() {
        this.date = new Date(this.date);
      },

      showMonthPicker() {
        this.currentView = 'month';
      },

      showYearPicker() {
        this.currentView = 'year';
      },

      handleLabelClick() {
        if (this.currentView === 'date') {
          this.showMonthPicker();
        } else if (this.currentView === 'month') {
          this.showYearPicker();
        }
      },

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
        }
      },

      prevYear() {
        if (this.currentView === 'year') {
          this.$refs.yearTable.prevTenYear();
        } else {
          this.year--;
        }
      },

      handleShortcutClick(shortcut) {
        if (shortcut.onClick) {
          shortcut.onClick(this);
        }
      },

      handleTimePick(picker, visible, first) {
        if (picker) {
          let oldDate = new Date(this.date.getTime());
          let hour = picker.getHours();
          let minute = picker.getMinutes();
          let second = picker.getSeconds();
          oldDate.setHours(hour);
          oldDate.setMinutes(minute);
          oldDate.setSeconds(second);
          this.date = new Date(oldDate.getTime());
        }

        if (!first) {
          this.timePickerVisible = visible;
        }
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
          this.resetDate();
          this.value = new Date(this.date.getFullYear(), month, 1);
          this.$emit('pick', this.value);
        }
      },

      handleDatePick(value) {
        if (this.selectionMode === 'day') {
          if (!this.showTime) {
            this.$emit('pick', new Date(value.getTime()));
          }
          this.date.setFullYear(value.getFullYear());
          this.date.setMonth(value.getMonth());
          this.date.setDate(value.getDate());
        } else if (this.selectionMode === 'week') {
          let date = formatDate(value.date, this.format || 'yyyywWW');
          const week = this.week = value.week;

          date = /WW/.test(date)
            ? date.replace(/WW/, week < 10 ? '0' + week : week)
            : date.replace(/W/, week);

          this.$emit('pick', date);
        }

        this.resetDate();
      },

      handleYearPick(year, close = true) {
        this.year = year;
        if (!close) return;

        this.date.setFullYear(year);
        if (this.selectionMode === 'year') {
          this.$emit('pick', year);
        } else {
          this.currentView = 'month';
        }

        this.resetDate();
      },

      changeToToday() {
        this.date.setTime(+new Date());
        this.$emit('pick', new Date(this.date.getTime()));
        this.resetDate();
      },

      confirm() {
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

      closeTimePicker() {
        this.timePickerVisible = false;
      }
    },

    components: {
      TimePicker: require('./time'),
      YearTable: require('../basic/year-table'),
      MonthTable: require('../basic/month-table'),
      DateTable: require('../basic/date-table')
    },

    mounted() {
      if (this.selectionMode === 'month') {
        this.currentView = 'month';
      }

      if (this.date && !this.year) {
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
      }
    },

    data() {
      return {
        date: new Date(),
        value: '',
        showTime: false,
        selectionMode: 'day',
        shortcuts: '',
        visible: false,
        currentView: 'date',
        disabledDate: '',
        year: null,
        month: null,
        week: null,
        timePickerVisible: false
      };
    },

    computed: {
      footerVisible() {
        return this.showTime;
      },

      visibleTime: {
        get() {
          return formatDate(this.date, 'HH:mm:ss');
        },

        set(val) {
          if (val) {
            const date = parseDate(val, 'HH:mm:ss');
            if (date) {
              date.setFullYear(this.date.getFullYear());
              date.setMonth(this.date.getMonth());
              date.setDate(this.date.getDate());
              this.date = date;
            }
          }
        }
      },

      visibleDate: {
        get() {
          return formatDate(this.date);
        },

        set(val) {
          const date = parseDate(val, 'yyyy-MM-dd');
          if (date) {
            date.setHours(this.date.getHours());
            date.setMinutes(this.date.getMinutes());
            date.setSeconds(this.date.getSeconds());
            this.date = date;
          }
        }
      },

      yearLabel() {
        const year = this.year;
        if (!year) return '';
        if (this.currentView === 'year') {
          const startYear = Math.floor(year / 10) * 10;
          return startYear + '年' + '-' + (startYear + 9) + '年';
        }
        return this.year + '年';
      },

      hours: {
        get() {
          return this.date.getHours();
        },
        set(hours) {
          this.date.setHours(hours);
        }
      },

      minutes: {
        get() {
          return this.date.getMinutes();
        },
        set(minutes) {
          this.date.setMinutes(minutes);
        }
      },

      seconds: {
        get() {
          return this.date.getSeconds();
        },
        set(seconds) {
          this.date.setSeconds(seconds);
        }
      },

      timeText() {
        const hours = this.hours;
        const minutes = this.minutes;
        return (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
      },

      label() {
        const year = this.year;
        const month = this.month + 1;

        if (this.currentView === 'date') {
          return year + ' / ' + month;
        }

        return year;
      }
    }
  };
</script>
