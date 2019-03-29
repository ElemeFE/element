<template>
  <div class="el-calendar">
    <div class="el-calendar__header">
      <div class="el-calendar__title">
        {{ formatedDate }}
      </div>
      <div
        class="el-calendar__button-group"
        v-if="validatedRange.length === 0">
        <el-button-group>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('prev-month')">
            上月
          </el-button>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('today')">
            今天
          </el-button>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('next-month')">
            下月
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div class="el-calendar__body">
      <date-table
        :date="date"
        :selected-day="realSelectedDay"
        :range="validatedRange"
        @pick="pickDay" />
    </div>
  </div>
</template>

<script>
// import { t } from 'element-ui/src/locale';
import fecha from 'element-ui/src/utils/date';
import DateTable from './date-table';

const validTypes = ['prev-month', 'today', 'next-month'];

export default {
  name: 'ElCalendar',

  components: {
    DateTable
  },

  props: {
    value: [Date, String],
    range: {
      type: Array,
      validator(range) {
        if (Array.isArray(range)) {
          return range.length === 2 && range.every(item => typeof item === 'string' || item instanceof Date);
        } else {
          return true;
        }
      }
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
          return new Date(this.selectedDay);
        } else if (this.validatedRange.length) {
          return this.validatedRange[0];
        }
        return this.now;
      } else {
        return this.toDate(this.value);
      }
    },

    validatedRange() {
      let range = this.range;
      if (!range) return [];
      const expetedMap = {
        0: {
          value: 1,
          message: 'start of range should be Monday.'
        },
        1: {
          value: 0,
          message: 'end of range should be Sunday.'
        }
      };
      range = range.reduce((prev, val, index) => {
        const date = this.toDate(val);
        if (date.getDay() !== expetedMap[index].value) {
          console.warn('[ElementCalendar]', expetedMap[index].message, ' validRange will be ignored');
        } else {
          prev = prev.concat(date);
        }
        return prev;
      }, []);
      if (range.length === 2) {
        if (range[0].getMonth() === range[1].getMonth() && range[0].getFullYear() === range[1].getFullYear()) {
          return range;
        } else {
          console.warn('[ElementCalendar] range must be within one month');
          return [];
        }
      } else {
        return [];
      }
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
