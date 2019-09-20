<template>
  <table @click="handleMonthTableClick" class="el-quarter-table">
    <tbody>
    <tr>
      <td :class="getCellStyle(1)">
        <a class="cell">{{ t('el.datepicker.quarter1') }}</a>
      </td>
      <td :class="getCellStyle(2)">
        <a class="cell">{{ t('el.datepicker.quarter2') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(3)">
        <a class="cell">{{ t('el.datepicker.quarter3') }}</a>
      </td>
      <td :class="getCellStyle(4)">
        <a class="cell">{{ t('el.datepicker.quarter4') }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import Locale from 'element-ui/src/mixins/locale';
  import {
    isDate,
    range,
    getDayCountOfMonth,
    nextDate,
    getMonthNumberInQuarter
  } from 'element-ui/src/utils/date-util';
  import { hasClass } from 'element-ui/src/utils/dom';
  const datesInQuarter = (year, quarter) => {
    const monthList = getMonthNumberInQuarter(quarter);
    const numOfDays = monthList
      .map(m => getDayCountOfMonth(year, m))
      .reduce((prev, cur) => prev + cur, 0);
    const firstDay = new Date(year, monthList[0], 1);
    return range(numOfDays).map(n => nextDate(firstDay, n));
  };
  export default {
    props: {
      disabledDate: {},
      value: {},
      defaultValue: {
        validator(val) {
          // null or valid Date Object
          return val === null || (val instanceof Date && isDate(val));
        }
      },
      date: {}
    },
    mixins: [Locale],
    methods: {
      getCellStyle(quarter) {
        const style = {};
        const year = this.date.getFullYear();
        const today = new Date();
        style.disabled = typeof this.disabledDate === 'function'
          ? datesInQuarter(year, quarter).every(this.disabledDate)
          : false;
        const monthList = getMonthNumberInQuarter(quarter);
        const monthMatch = month => monthList[0] === month ||
          monthList[1] === month ||
          monthList[2] === month;
        style.current = this.value.getFullYear() === year && monthMatch(this.value.getMonth());
        style.today = today.getFullYear() === year && monthMatch(today.getMonth());
        style.default = this.defaultValue &&
          this.defaultValue.getFullYear() === year &&
          monthMatch(this.defaultValue.getMonth());
        return style;
      },
      handleMonthTableClick(event) {
        const target = event.target;
        if (target.tagName !== 'A') return;
        if (hasClass(target.parentNode, 'disabled')) return;
        const row = target.parentNode.parentNode.rowIndex;
        const column = target.parentNode.cellIndex;
        const quarter = row * 2 + column + 1;
        this.$emit('pick', quarter);
      }
    }
  };
</script>