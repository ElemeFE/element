<template>
  <div class="el-calendar">
    <div class="el-calendar__header">
      <div class="el-calendar__title">
        {{ i18nDate }}
      </div>
      <div
        class="el-calendar__button-group"
        v-if="validatedRange.length === 0">
        <el-button-group>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('prev-month')">
            {{ t('el.datepicker.prevMonth') }}
          </el-button>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('today')">
            {{ t('el.datepicker.today') }}
          </el-button>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('next-month')">
            {{ t('el.datepicker.nextMonth') }}
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div
      class="el-calendar__body"
      v-if="validatedRange.length === 0"
      key="no-range">
      <date-table
        :date="date"
        :selected-day="realSelectedDay"
        :first-day-of-week="realFirstDayOfWeek"
        @pick="pickDay" />
    </div>
    <div
      v-else
      class="el-calendar__body"
      key="has-range">
      <date-table
        v-for="(range, index) in validatedRange"
        :key="index"
        :date="range[0]"
        :selected-day="realSelectedDay"
        :range="range"
        :hide-header="index !== 0"
        :first-day-of-week="realFirstDayOfWeek"
        @pick="pickDay" />
    </div>
  </div>
</template>

<script>
import Locale from 'element-ui/src/mixins/locale';
import fecha from 'element-ui/src/utils/date';
import DateTable from './date-table';
import { validateRangeInOneMonth } from 'element-ui/src/utils/date-util';

const validTypes = ['prev-month', 'today', 'next-month'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const oneDay = 86400000;

export default {
  name: 'ElCalendar',

  mixins: [Locale],

  components: {
    DateTable
  },

  props: {
    value: [Date, String, Number],
    range: {
      type: Array,
      validator(range) {
        if (Array.isArray(range)) {
          return range.length === 2 && range.every(
            item => typeof item === 'string' ||
            typeof item === 'number' ||
            item instanceof Date);
        } else {
          return true;
        }
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 1
    }
  },

  provide() {
    return {
      elCalendar: this
    };
  },

  methods: {
    pickDay(day) {
      this.realSelectedDay = day;
    },

    selectDate(type) {
      if (validTypes.indexOf(type) === -1) {
        throw new Error(`invalid type ${type}`);
      }
      let day = '';
      if (type === 'prev-month') {
        day = `${this.prevMonthDatePrefix}-01`;
      } else if (type === 'next-month') {
        day = `${this.nextMonthDatePrefix}-01`;
      } else {
        day = this.formatedToday;
      }

      if (day === this.formatedDate) return;
      this.pickDay(day);
    },

    toDate(val) {
      if (!val) {
        throw new Error('invalid val');
      }
      return val instanceof Date ? val : new Date(val);
    },

    rangeValidator(date, isStart) {
      const firstDayOfWeek = this.realFirstDayOfWeek;
      const expected = isStart ? firstDayOfWeek : (firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1);
      const message = `${isStart ? 'start' : 'end'} of range should be ${weekDays[expected]}.`;
      if (date.getDay() !== expected) {
        console.warn('[ElementCalendar]', message, 'Invalid range will be ignored.');
        return false;
      }
      return true;
    }
  },

  computed: {
    prevMonthDatePrefix() {
      const temp = new Date(this.date.getTime());
      temp.setDate(0);
      return fecha.format(temp, 'yyyy-MM');
    },

    curMonthDatePrefix() {
      return fecha.format(this.date, 'yyyy-MM');
    },

    nextMonthDatePrefix() {
      const temp = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
      return fecha.format(temp, 'yyyy-MM');
    },

    formatedDate() {
      return fecha.format(this.date, 'yyyy-MM-dd');
    },

    i18nDate() {
      const year = this.date.getFullYear();
      const month = this.date.getMonth() + 1;
      return `${year} ${this.t('el.datepicker.year')} ${this.t('el.datepicker.month' + month)}`;
    },

    formatedToday() {
      return fecha.format(this.now, 'yyyy-MM-dd');
    },

    realSelectedDay: {
      get() {
        if (!this.value) return this.selectedDay;
        return this.formatedDate;
      },
      set(val) {
        this.selectedDay = val;
        const date = new Date(val);
        this.$emit('input', date);
      }
    },

    date() {
      if (!this.value) {
        if (this.realSelectedDay) {
          const d = this.selectedDay.split('-');
          return new Date(d[0], d[1] - 1, d[2]);
        } else if (this.validatedRange.length) {
          return this.validatedRange[0][0];
        }
        return this.now;
      } else {
        return this.toDate(this.value);
      }
    },

    // if range is valid, we get a two-digit array
    validatedRange() {
      let range = this.range;
      if (!range) return [];
      range = range.reduce((prev, val, index) => {
        const date = this.toDate(val);
        if (this.rangeValidator(date, index === 0)) {
          prev = prev.concat(date);
        }
        return prev;
      }, []);
      if (range.length === 2) {
        const [start, end] = range;
        if (start > end) {
          console.warn('[ElementCalendar]end time should be greater than start time');
          return [];
        }
        // start time and end time in one month
        if (validateRangeInOneMonth(start, end)) {
          return [
            [start, end]
          ];
        }
        const data = [];
        let startDay = new Date(start.getFullYear(), start.getMonth() + 1, 1);
        const lastDay = this.toDate(startDay.getTime() - oneDay);
        if (!validateRangeInOneMonth(startDay, end)) {
          console.warn('[ElementCalendar]start time and end time interval must not exceed two months');
          return [];
        }
        // 第一个月的时间范围
        data.push([
          start,
          lastDay
        ]);
        // 下一月的时间范围，需要计算一下该月的第一个周起始日
        const firstDayOfWeek = this.realFirstDayOfWeek;
        const nextMontFirstDay = startDay.getDay();
        let interval = 0;
        if (nextMontFirstDay !== firstDayOfWeek) {
          if (firstDayOfWeek === 0) {
            interval = 7 - nextMontFirstDay;
          } else {
            interval = firstDayOfWeek - nextMontFirstDay;
            interval = interval > 0 ? interval : 7 + interval;
          }
        }
        startDay = this.toDate(startDay.getTime() + interval * oneDay);
        if (startDay.getDate() < end.getDate()) {
          data.push([
            startDay,
            end
          ]);
        }
        return data;
      }
      return [];
    },

    realFirstDayOfWeek() {
      if (this.firstDayOfWeek < 1 || this.firstDayOfWeek > 6) {
        return 0;
      }
      return Math.floor(this.firstDayOfWeek);
    }
  },

  data() {
    return {
      selectedDay: '',
      now: new Date()
    };
  }
};
</script>
