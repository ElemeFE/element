<template>
  <table @click="handleMonthTableClick" @mousemove="handleMouseMove" class="el-month-table">
    <tbody>
    <tr v-for="(row, key) in rows" :key="key">
      <td :class="getCellStyle(cell)" v-for="(cell, key) in row" :key="key">
        <div>
          <a class="cell">{{ t('el.datepicker.months.' + months[cell.text]) }}</a>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import Locale from 'element-ui/src/mixins/locale';
  import { isDate, range, getDayCountOfMonth, nextDate, getFullYear, getMonth, newDate } from 'element-ui/src/utils/date-util';
  import { hasClass } from 'element-ui/src/utils/dom';
  import { arrayFindIndex, coerceTruthyValueToArray, arrayFind } from 'element-ui/src/utils/util';

  const datesInMonth = (year, month, timezone) => {
    const numOfDays = getDayCountOfMonth(year, month);
    const firstDay = newDate([year, month, 1], timezone);
    return range(numOfDays).map(n => nextDate(firstDay, timezone, n));
  };

  const clearDate = (date, timezone) => {
    return newDate([getFullYear(date, timezone), getMonth(date, timezone)], timezone);
  };

  const getMonthTimestamp = function(time, timezone) {
    if (typeof time === 'number' || typeof time === 'string') {
      return clearDate(new Date(time), timezone).getTime();
    } else if (time instanceof Date) {
      return clearDate(time, timezone).getTime();
    } else {
      return NaN;
    }
  };
  export default {
    props: {
      disabledDate: {},
      value: {},
      selectionMode: {
        default: 'month'
      },
      minDate: {},

      maxDate: {},
      defaultValue: {
        validator(val) {
          // null or valid Date Object
          return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
        }
      },
      date: {},
      rangeState: {
        default() {
          return {
            endDate: null,
            selecting: false
          };
        }
      },
      timezone: {
        default: 'local'
      }
    },

    mixins: [Locale],

    watch: {
      'rangeState.endDate'(newVal) {
        this.markRange(this.minDate, newVal);
      },

      minDate(newVal, oldVal) {
        if (getMonthTimestamp(newVal, this.timezone) !== getMonthTimestamp(oldVal, this.timezone)) {
          this.markRange(this.minDate, this.maxDate);
        }
      },

      maxDate(newVal, oldVal) {
        if (getMonthTimestamp(newVal, this.timezone) !== getMonthTimestamp(oldVal, this.timezone)) {
          this.markRange(this.minDate, this.maxDate);
        }
      }
    },

    data() {
      return {
        months: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        tableRows: [ [], [], [] ],
        lastRow: null,
        lastColumn: null
      };
    },

    methods: {
      cellMatchesDate(cell, date) {
        const value = new Date(date);
        return getFullYear(this.date, this.timezone) === getFullYear(value, this.timezone) && Number(cell.text) === getMonth(value, this.timezone);
      },
      getCellStyle(cell) {
        const style = {};
        const year = getFullYear(this.date, this.timezone);
        const today = new Date();
        const month = cell.text;
        const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
        style.disabled = typeof this.disabledDate === 'function'
          ? datesInMonth(year, month, this.timezone).every(this.disabledDate)
          : false;
        style.current = arrayFindIndex(coerceTruthyValueToArray(this.value), date => getFullYear(date, this.timezone) === year && getMonth(date, this.timezone) === month) >= 0;
        style.today = getFullYear(today, this.timezone) === year && getMonth(today, this.timezone) === month;
        style.default = defaultValue.some(date => this.cellMatchesDate(cell, date));

        if (cell.inRange) {
          style['in-range'] = true;

          if (cell.start) {
            style['start-date'] = true;
          }

          if (cell.end) {
            style['end-date'] = true;
          }
        }
        return style;
      },
      getMonthOfCell(month) {
        const year = getFullYear(this.date, this.timezone);
        return newDate([year, month, 1], this.timezone);
      },
      markRange(minDate, maxDate) {
        minDate = getMonthTimestamp(minDate, this.timezone);
        maxDate = getMonthTimestamp(maxDate, this.timezone) || minDate;
        [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
        const rows = this.rows;
        for (let i = 0, k = rows.length; i < k; i++) {
          const row = rows[i];
          for (let j = 0, l = row.length; j < l; j++) {

            const cell = row[j];
            const index = i * 4 + j;
            const time = newDate([getFullYear(this.date, this.timezone), index], this.timezone).getTime();

            cell.inRange = minDate && time >= minDate && time <= maxDate;
            cell.start = minDate && time === minDate;
            cell.end = maxDate && time === maxDate;
          }
        }
      },
      handleMouseMove(event) {
        if (!this.rangeState.selecting) return;

        let target = event.target;
        if (target.tagName === 'A') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }
        if (target.tagName !== 'TD') return;

        const row = target.parentNode.rowIndex;
        const column = target.cellIndex;
        // can not select disabled date
        if (this.rows[row][column].disabled) return;

        // only update rangeState when mouse moves to a new cell
        // this avoids frequent Date object creation and improves performance
        if (row !== this.lastRow || column !== this.lastColumn) {
          this.lastRow = row;
          this.lastColumn = column;
          this.$emit('changerange', {
            minDate: this.minDate,
            maxDate: this.maxDate,
            rangeState: {
              selecting: true,
              endDate: this.getMonthOfCell(row * 4 + column)
            }
          });
        }
      },
      handleMonthTableClick(event) {
        let target = event.target;
        if (target.tagName === 'A') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }
        if (target.tagName !== 'TD') return;
        if (hasClass(target, 'disabled')) return;
        const column = target.cellIndex;
        const row = target.parentNode.rowIndex;
        const month = row * 4 + column;
        const newDate = this.getMonthOfCell(month);
        if (this.selectionMode === 'range') {
          if (!this.rangeState.selecting) {
            this.$emit('pick', {minDate: newDate, maxDate: null});
            this.rangeState.selecting = true;
          } else {
            if (newDate >= this.minDate) {
              this.$emit('pick', {minDate: this.minDate, maxDate: newDate});
            } else {
              this.$emit('pick', {minDate: newDate, maxDate: this.minDate});
            }
            this.rangeState.selecting = false;
          }
        } else {
          this.$emit('pick', month);
        }
      }
    },

    computed: {
      rows() {
        // TODO: refactory rows / getCellClasses
        const rows = this.tableRows;
        const disabledDate = this.disabledDate;
        const selectedDate = [];
        const now = getMonthTimestamp(new Date(), this.timezone);

        for (let i = 0; i < 3; i++) {
          const row = rows[i];
          for (let j = 0; j < 4; j++) {
            let cell = row[j];
            if (!cell) {
              cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
            }

            cell.type = 'normal';

            const index = i * 4 + j;
            const time = newDate([getFullYear(this.date, this.timezone), index], this.timezone).getTime();
            cell.inRange = time >= getMonthTimestamp(this.minDate, this.timezone) && time <= getMonthTimestamp(this.maxDate, this.timezone);
            cell.start = this.minDate && time === getMonthTimestamp(this.minDate, this.timezone);
            cell.end = this.maxDate && time === getMonthTimestamp(this.maxDate, this.timezone);
            const isToday = time === now;

            if (isToday) {
              cell.type = 'today';
            }
            cell.text = index;
            let cellDate = new Date(time);
            cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
            cell.selected = arrayFind(selectedDate, date => date.getTime() === cellDate.getTime());

            this.$set(row, j, cell);
          }
        }
        return rows;
      }
    }
  };
</script>
