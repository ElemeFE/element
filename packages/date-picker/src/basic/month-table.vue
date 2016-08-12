<template>
  <table @click="handleMonthTableClick" class="el-month-table">
    <tbody>
    <tr>
      <td :class="{ current: month === 0 }">
        <a class="cell">{{ $t('datepicker.months.jan') }}</a>
      </td>
      <td :class="{ current: month === 1 }">
        <a class="cell">{{ $t('datepicker.months.feb') }}</a>
      </td>
      <td :class="{ current: month === 2 }">
        <a class="cell">{{ $t('datepicker.months.mar') }}</a>
      </td>
      <td :class="{ current: month === 3 }">
        <a class="cell">{{ $t('datepicker.months.apr') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="{ current: month === 4 }">
        <a class="cell">{{ $t('datepicker.months.may') }}</a>
      </td>
      <td :class="{ current: month === 5 }">
        <a class="cell">{{ $t('datepicker.months.jun') }}</a>
      </td>
      <td :class="{ current: month === 6 }">
        <a class="cell">{{ $t('datepicker.months.jul') }}</a>
      </td>
      <td :class="{ current: month === 7 }">
        <a class="cell">{{ $t('datepicker.months.aug') }}</a>
      </td>
    </tr>
    <tr>
      <td :class="{ current: month === 8 }">
        <a class="cell">{{ $t('datepicker.months.sep') }}</a>
      </td>
      <td :class="{ current: month === 9 }">
        <a class="cell">{{ $t('datepicker.months.oct') }}</a>
      </td>
      <td :class="{ current: month === 10 }">
        <a class="cell">{{ $t('datepicker.months.nov') }}</a>
      </td>
      <td :class="{ current: month === 11 }">
        <a class="cell">{{ $t('datepicker.months.dec') }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/ecmascript-6">
  import { $t } from '../util';

  export default {
    props: {
      month: {
        type: Number
      }
    },

    methods: {
      $t: $t,

      handleMonthTableClick(event) {
        const target = event.target;
        if (target.tagName !== 'A') return;
        const column = target.parentNode.cellIndex;
        const row = target.parentNode.parentNode.rowIndex;
        const month = row * 4 + column;

        this.$emit('pick', month);
      }
    }
  };
</script>
