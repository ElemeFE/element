<template>
  <table @click="handleYearTableClick" class="el-year-table">
    <tbody>
    <tr>
      <td class="available" :class="getCellStyle(startYear + 0)">
        <a class="cell">{{ startYear }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 1)">
        <a class="cell">{{ startYear + 1 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 2)">
        <a class="cell">{{ startYear + 2 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 3)">
        <a class="cell">{{ startYear + 3 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available" :class="getCellStyle(startYear + 4)">
        <a class="cell">{{ startYear + 4 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 5)">
        <a class="cell">{{ startYear + 5 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 6)">
        <a class="cell">{{ startYear + 6 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 7)">
        <a class="cell">{{ startYear + 7 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available" :class="getCellStyle(startYear + 8)">
        <a class="cell">{{ startYear + 8 }}</a>
      </td>
      <td class="available" :class="getCellStyle(startYear + 9)">
        <a class="cell">{{ startYear + 9 }}</a>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import { hasClass } from 'element-ui/src/utils/dom';

  export default {
    props: {
      disabledDate: {},
      date: {},
      year: {}
    },

    computed: {
      startYear() {
        return Math.floor(this.year / 10) * 10;
      }
    },

    methods: {
      getCellStyle(year) {
        const style = {};

        var date = new Date(year, 0, 1, 0);
        var nextYear = new Date(date);
        nextYear.setFullYear(year + 1);

        var flag = false;
        if (typeof this.disabledDate === 'function') {

          while (date < nextYear) {
            if (this.disabledDate(date)) {
              date = new Date(date.getTime() + 8.64e7);
            } else {
              break;
            }
          }
          if ((date - nextYear) === 0) flag = true;

        }

        style.disabled = flag;
        style.current = Number(this.year) === year;

        return style;
      },

      nextTenYear() {
        this.$emit('pick', Number(this.year) + 10, false);
      },

      prevTenYear() {
        this.$emit('pick', Number(this.year) - 10, false);
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
