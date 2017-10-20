<template>
  <table @click="handleMonthTableClick" class="el-month-table">
    <tbody>
    <tr>
      <td :class="getCellStyle(0)">
        <a class="cell">{{ t('el.datepicker.months.jan') }}</a>
      </td>
      <td :class="getCellStyle(1)">
        <a class="cell">{{ t('el.datepicker.months.feb') }}</a>
      </td>
      <td :class="getCellStyle(2)">
        <a class="cell">{{ t('el.datepicker.months.mar') }}</a>
      </td>
      <td :class="getCellStyle(3)">
        <a class="cell">{{ t('el.datepicker.months.apr') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(4)">
        <a class="cell">{{ t('el.datepicker.months.may') }}</a>
      </td>
      <td :class="getCellStyle(5)">
        <a class="cell">{{ t('el.datepicker.months.jun') }}</a>
      </td>
      <td :class="getCellStyle(6)">
        <a class="cell">{{ t('el.datepicker.months.jul') }}</a>
      </td>
      <td :class="getCellStyle(7)">
        <a class="cell">{{ t('el.datepicker.months.aug') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="getCellStyle(8)">
        <a class="cell">{{ t('el.datepicker.months.sep') }}</a>
      </td>
      <td :class="getCellStyle(9)">
        <a class="cell">{{ t('el.datepicker.months.oct') }}</a>
      </td>
      <td :class="getCellStyle(10)">
        <a class="cell">{{ t('el.datepicker.months.nov') }}</a>
      </td>
      <td :class="getCellStyle(11)">
        <a class="cell">{{ t('el.datepicker.months.dec') }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import Locale from 'element-ui/src/mixins/locale';
  import { hasClass } from 'element-ui/src/utils/dom';

  export default {
    props: {
      disabledDate: {},
      date: {},
      month: {
        type: Number
      }
    },
    mixins: [Locale],
    methods: {
      getCellStyle(month) {
        const style = {};

        var year = this.date.getFullYear();
        var date = new Date(0);
        date.setFullYear(year);
        date.setMonth(month, 1);
        date.setHours(0);
        var nextMonth = new Date(date);
        nextMonth.setMonth(month + 1);

        var flag = false;
        if (typeof this.disabledDate === 'function') {

          while (date < nextMonth) {
            if (this.disabledDate(date)) {
              date = new Date(date.getTime() + 8.64e7);
              flag = true;
            } else {
              flag = false;
              break;
            }
          }
        }

        style.disabled = flag;
        style.current = this.month === month;

        return style;
      },

      handleMonthTableClick(event) {
        const target = event.target;
        if (target.tagName !== 'A') return;
        if (hasClass(target.parentNode, 'disabled')) return;
        const column = target.parentNode.cellIndex;
        const row = target.parentNode.parentNode.rowIndex;
        const month = row * 4 + column;

        this.$emit('pick', month);
      }
    }
  };
</script>
