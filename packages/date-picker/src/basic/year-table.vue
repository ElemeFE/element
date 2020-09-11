<template>
  <table @click="handleYearTableClick" class="el-year-table">
    <tbody>
    <tr>
      <td class="is-selectable" :class="getCellStyle(startYear + 0)">
        <a class="el-date-picker__cell">{{ startYear }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 1)">
        <a class="el-date-picker__cell">{{ startYear + 1 }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 2)">
        <a class="el-date-picker__cell">{{ startYear + 2 }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 3)">
        <a class="el-date-picker__cell">{{ startYear + 3 }}</a>
      </td>
    </tr>
    <tr>
      <td class="is-selectable" :class="getCellStyle(startYear + 4)">
        <a class="el-date-picker__cell">{{ startYear + 4 }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 5)">
        <a class="el-date-picker__cell">{{ startYear + 5 }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 6)">
        <a class="el-date-picker__cell">{{ startYear + 6 }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 7)">
        <a class="el-date-picker__cell">{{ startYear + 7 }}</a>
      </td>
    </tr>
    <tr>
      <td class="is-selectable" :class="getCellStyle(startYear + 8)">
        <a class="el-date-picker__cell">{{ startYear + 8 }}</a>
      </td>
      <td class="is-selectable" :class="getCellStyle(startYear + 9)">
        <a class="el-date-picker__cell">{{ startYear + 9 }}</a>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import { hasClass } from 'element-ui/src/utils/dom';
  import { isDate, range, nextDate, getDayCountOfYear } from 'element-ui/src/utils/date-util';
  import { arrayFindIndex, coerceTruthyValueToArray } from 'element-ui/src/utils/util';

  const datesInYear = year => {
    const numOfDays = getDayCountOfYear(year);
    const firstDay = new Date(year, 0, 1);
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

    computed: {
      startYear() {
        return Math.floor(this.date.getFullYear() / 10) * 10;
      }
    },

    methods: {
      getCellStyle(year) {
        const style = {};
        const today = new Date();

        style.disabled = typeof this.disabledDate === 'function'
          ? datesInYear(year).every(this.disabledDate)
          : false;
        style['is-selected'] = arrayFindIndex(coerceTruthyValueToArray(this.value), date => date.getFullYear() === year) >= 0;
        style['is-current'] = today.getFullYear() === year;
        style.default = this.defaultValue && this.defaultValue.getFullYear() === year;

        return style;
      },

      handleYearTableClick(event) {
        const target = event.target;
        if (target.tagName === 'A') {
          if (hasClass(target.parentNode, 'disabled')) return;
          const year = target.textContent || target.innerText;
          this.$emit('pick', Number(year));
        }
      }
    }
  };
</script>
