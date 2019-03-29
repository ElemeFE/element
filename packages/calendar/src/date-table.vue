<template>
  <table
    class="el-calendar-table"
    cellspacing="0"
    cellpadding="0">
      <thead>
        <th v-for="day in DAYS" :key="day">{{ day }}</th>
      </thead>
      <tbody>
        <tr
          class="el-calendar-table__row"
          v-for="(row, index) in rows"
          :key="index">
          <td
            v-for="(cell, key) in row"
            :key="key"
            :class="getCellClass(cell)"
            @click="pickDay(cell, $event)">
              <div class="el-calendar-day">
                <span>{{ cell.text }}</span>
              </div>
          </td>
        </tr>
      </tbody>
  </table>
</template>

<script>
import { range, getFirstDayOfMonth, getPrevMonthLastDays, getMonthDays, getI18nSettings } from 'element-ui/src/utils/date-util';
export default {

  props: {
    highlightDay: String, // formated date yyyy-MM-dd
    date: Date
  },

  inject: ['elCalendar'],

  methods: {
    getFormateDate(day, type) {
      if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
        throw new Error('invalid day or type');
      }
      let prefix = this.curMonthDatePrefix;
      if (type === 'prev') {
        prefix = this.prevMonthDatePrefix;
      } else if (type === 'next') {
        prefix = this.nextMonthDatePrefix;
      }
      day = `00${day}`.slice(-2);
      return `${prefix}-${day}`;
    },

    getCellClass({ text, type}) {
      const classes = [type];
      if (type === 'current') {
        const date = this.getFormateDate(text, type);
        if (date === this.highlightDay) {
          classes.push('is-selected');
        }
        if (date === this.formatedToday) {
          classes.push('is-today');
        }
      }
      return classes;
    },

    pickDay({ text, type }, event) {
      const date = this.getFormateDate(text, type);
      this.$emit('pick', date);
    }
  },

  computed: {
    prevMonthDatePrefix() {
      return this.elCalendar.prevMonthDatePrefix;
    },

    curMonthDatePrefix() {
      return this.elCalendar.curMonthDatePrefix;
    },

    nextMonthDatePrefix() {
      return this.elCalendar.nextMonthDatePrefix;
    },

    formatedToday() {
      return this.elCalendar.formatedToday;
    },

    rows() {
      const date = this.date;
      let days = [];
      const firstDay = getFirstDayOfMonth(date);
      const prevMonthDays = getPrevMonthLastDays(date, firstDay - 1).map(day => ({
        text: day,
        type: 'prev'
      }));
      const currentMonthDays = getMonthDays(date).map(day => ({
        text: day,
        type: 'current'
      }));;
      days = [...prevMonthDays, ...currentMonthDays];
      const nextMonthDays = range(42 - days.length).map((_, index) => ({
        text: index + 1,
        type: 'next'
      }));
      days = days.concat(nextMonthDays);
      return range(days.length / 7).map((_, index) => {
        const start = index * 7;
        return days.slice(start, start + 7);
      });
    }
  },

  data() {
    const dayNames = getI18nSettings().dayNames;
    return {
      DAYS: dayNames.slice(1).concat(dayNames[0])
    };
  }
};
</script>
